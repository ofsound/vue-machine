<script setup lang="ts">
import axios from 'axios'
import { ref, toRaw, type Component } from 'vue'

import SiteHeader from '@/html/SiteHeader.vue'
import SiteFooter from '@/html/SiteFooter.vue'
import PageHome from '@/html/PageHome.vue'
import PageDownloads from '@/html/PageDownloads.vue'
import PageSandbox from '@/html/PageSandbox.vue'

import myCssContent from '@/main.css?inline'

const selectedFiles: File[] = []

interface ComponentObject {
  label: string
  component: Component
  postID: number
}

interface ComponentObjectForTemplateParts {
  label: string
  component: Component
  templateID: string
}

const componentObjects: ComponentObject[] = [
  { label: 'Home', component: PageHome, postID: 2866 },
  { label: 'Downloads', component: PageDownloads, postID: 6381 },
  { label: 'Sandbox', component: PageSandbox, postID: 6504 },
]

const componentObjectsForTemplateParts: ComponentObjectForTemplateParts[] = [
  { label: 'Header', component: SiteHeader, templateID: 'header' },
  { label: 'Footer', component: SiteFooter, templateID: 'footer' },
]

const componentRefs = ref<HTMLElement[]>([])
const componentForTemplatePartRefs = ref<HTMLElement[]>([])

const sendHtmlToWordPressTemplatePart = async (
  templateID: string,
  componentForTemplatePartRef: HTMLElement,
) => {
  const componentHtmlRaw = componentForTemplatePartRef.outerHTML

  function removeDataVInspector(htmlString: string) {
    // 1. Create a temporary container element
    const container = document.createElement('div')
    container.innerHTML = htmlString

    // 2. Find all elements with the 'data-v-inspector' attribute
    const elementsWithInspector = container.querySelectorAll('[data-v-inspector]')

    // 3. Loop and remove the attribute
    elementsWithInspector.forEach((element) => {
      element.removeAttribute('data-v-inspector')
    })

    // 4. Return the cleaned HTML string
    return container.innerHTML
  }

  const cleanHtml = removeDataVInspector(componentHtmlRaw)

  const componentHtml = cleanHtml.replace(
    /\/src\/assets\//g,
    '/wp-content/uploads/dot-dev-tailwind/',
  )

  const username = 'csstune'
  const password = 'HUlc HStM UgNJ 9vkK HSev 6ePD'

  const credentials = `${username}:${password}`
  const encodedCredentials = btoa(credentials)

  const templateData = {
    content: componentHtml,
  }

  try {
    const response = await axios.post(
      'https://csstune.com/wp-json/wp/v2/template-parts/lean-and-mean/' + templateID,
      templateData,
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      },
    )
    console.log('Template created successfully:', response.data)

    appendToLog(response.data.id)
  } catch (error) {
    console.error('Error sending HTML:', error)
    console.error('Error creating template:')
    appendToLog('Error sending HTML')
  }
}

const sendHtmlToWordPressPage = async (postID: number, componentRef: HTMLElement) => {
  const componentHtmlRaw = componentRef.outerHTML

  console.log(componentHtmlRaw)

  function removeDataVInspector(htmlString: string) {
    // 1. Create a temporary container element
    const container = document.createElement('div')
    container.innerHTML = htmlString

    // 2. Find all elements with the 'data-v-inspector' attribute
    const elementsWithInspector = container.querySelectorAll('[data-v-inspector]')

    // 3. Loop and remove the attribute
    elementsWithInspector.forEach((element) => {
      element.removeAttribute('data-v-inspector')
    })

    // 4. Return the cleaned HTML string
    return container.innerHTML
  }

  const cleanHtml = removeDataVInspector(componentHtmlRaw)

  const componentHtml = cleanHtml
    .replace(/\/src\/assets\//g, '/wp-content/uploads/dot-dev-tailwind/')
    .replace(/autoplay=""/g, 'autoplay')
    .replace(/loop=""/g, 'loop')
    .replace(/playsinline=""/g, 'playsinline muted')

  try {
    const response = await axios.post(
      'https://csstune.com/wp-json/my-vue-app/v1/save-component-html',
      { html_content: componentHtml, page_id: postID },
    )
    console.log(response.data)
    appendToLog(response.data)
  } catch (error) {
    console.error('Error sending HTML:', error)
    appendToLog('Error sending HTML')
  }
}

const updateCSSOnServer = async () => {
  try {
    const response = await axios.post(
      'https://csstune.com/wp-json/my-vue-app/v1/save_css',
      {
        css_content: myCssContent,
        file_name: 'tailwind.css',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log('CSS saved successfully:', response.data.file_url)
    appendToLog('CSS saved successfully:')
  } catch (error) {
    console.error('Error saving CSS:', error)
    appendToLog('Error saving CSS')
  }
}

const syncAssets = async () => {
  function getFileNameFromPath(pathString: string) {
    const lastSlashIndex = pathString.lastIndexOf('/')
    if (lastSlashIndex === -1) {
      return pathString
    } else {
      return pathString.substring(lastSlashIndex + 1)
    }
  }

  function getMimeTypeFromPath(pathString: string) {
    const parts = pathString.split('.')
    const extension = parts.pop()

    let mimeType = ''

    if (extension === 'png') {
      mimeType = 'image/png'
    } else if (extension === 'jpg') {
      mimeType = 'image/jpeg'
    } else if (extension === 'svg') {
      mimeType = 'image/svg+xml'
    } else if (extension === 'mp4') {
      mimeType = 'video/mp4'
    } else if (extension === 'js') {
      mimeType = 'text/javascript'
    }

    return mimeType
  }

  const assetGlobs = import.meta.glob(
    ['@/assets/images/*.{png,jpg,svg}', '@/assets/videos/*.mp4', '@/assets/js/*.js'],
    {
      eager: true,
      query: '?url',
      import: 'default',
    },
  )

  const assetObjects = Object.keys(assetGlobs).map((path) => ({
    path: path,
    url: assetGlobs[path],
  }))

  const promises = assetObjects.map(async (element) => {
    const response = await fetch(element.url as string)
    console.log(response)

    const blob = await response.blob()
    const file = new File([blob], getFileNameFromPath(element.path), {
      type: getMimeTypeFromPath(element.path),
    })
    selectedFiles.push(file)
  })

  await Promise.all(promises)

  selectedFiles.forEach(async (file) => {
    const formData = new FormData()

    formData.append('file', file)

    let directory = ''

    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/svg+xml') {
      directory = 'images'
    }

    if (file.type === 'video/mp4') {
      directory = 'videos'
    }

    if (file.type === 'text/javascript') {
      directory = 'js'

      console.log(formData.get('file'))
    }

    formData.append('directory', directory)
    try {
      const response = await axios.post(
        'https://csstune.com/wp-json/my-vue-app/v1/save_asset',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log('Asset saved successfully:', response.data)
      appendToLog('Asset saved successfully:' + response.data.file_url)
    } catch (error) {
      console.error('Error saving File:', error)
      appendToLog('Error saving File:')
    }
  })
}

const appendToLog = (message: string) => {
  const logContainer = document.getElementById('log-container')
  const logOutput = document.getElementById('log-output')
  const listItem = document.createElement('li')
  listItem.textContent = message
  logOutput!.appendChild(listItem)

  logContainer!.scrollTop = logContainer!.scrollHeight
}
</script>

<template>
  <div class="text-white">
    <div class="text-3xl text-white">Sync to Melatonin.dev</div>

    <div
      id="log-container"
      class="h-50 overflow-y-scroll rounded bg-gray-800 p-2 font-mono text-sm text-green-500"
    >
      <ul id="log-output"></ul>
    </div>

    <div class="mt-4 mb-2 text-lg">Sync Page & All Assets</div>

    <div v-for="(item, index) in componentObjects" :key="item.postID">
      <button
        @click="
          (sendHtmlToWordPressPage(item.postID, componentRefs[index] as HTMLElement),
          updateCSSOnServer(),
          syncAssets())
        "
        class="mr-4 underline"
      >
        {{ item.label }}
      </button>
      => &nbsp;&nbsp;&nbsp;<span>{{ item.postID }}</span>
    </div>

    <div v-for="(item, index) in componentObjectsForTemplateParts" :key="item.templateID">
      <button
        @click="
          (sendHtmlToWordPressTemplatePart(
            item.templateID,
            componentForTemplatePartRefs[index] as HTMLElement,
          ),
          updateCSSOnServer(),
          syncAssets())
        "
        class="mr-4 underline"
      >
        {{ item.label }}
      </button>
      => &nbsp;&nbsp;&nbsp;<span>{{ item.templateID }}</span>
    </div>
  </div>

  <div class="hidden">
    <div
      v-for="(item, index) in componentObjects"
      :key="item.postID"
      :ref="
        (el) => {
          if (el && componentRefs) componentRefs[index] = el as HTMLElement
        }
      "
    >
      <component :key="item.postID" :is="toRaw(item.component)"></component>
    </div>

    <div
      v-for="(item, index) in componentObjectsForTemplateParts"
      :key="item.templateID"
      :ref="
        (el) => {
          if (el && componentForTemplatePartRefs)
            componentForTemplatePartRefs[index] = el as HTMLElement
        }
      "
    >
      <component :key="item.templateID" :is="toRaw(item.component)"></component>
    </div>
  </div>
</template>
