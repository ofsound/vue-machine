<script setup lang="ts">
import axios from 'axios'
import { ref, toRaw, type Component } from 'vue'

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

import myCssContent from '@/main.css?inline'

import SiteHeader from '@/html/SiteHeader.vue'
import SiteFooter from '@/html/SiteFooter.vue'

import PageHome from '@/html/PageHome.vue'
import PageDownloads from '@/html/PageDownloads.vue'
import PageSandbox from '@/html/PageSandbox.vue'

const componentObjectsForTemplateParts: ComponentObjectForTemplateParts[] = [
  { label: 'Header', component: SiteHeader, templateID: 'header' },
  { label: 'Footer', component: SiteFooter, templateID: 'footer' },
]

const componentObjects: ComponentObject[] = [
  { label: 'Home', component: PageHome, postID: 2866 },
  { label: 'Downloads', component: PageDownloads, postID: 6381 },
  { label: 'Sandbox', component: PageSandbox, postID: 6476 },
]

const selectedFiles: File[] = []

const componentRefs = ref<HTMLElement[]>([])
const componentForTemplatePartRefs = ref<HTMLElement[]>([])

// const username = 'csstune'

// const password = import.meta.env.VITE_WP_REST_API_PASSWORD
// const secret = import.meta.env.VITE_WP_REST_API_SECRET

const staging_user = 'admin'
const staging_password = 'hwgletsgohwgletsgo'

// const credentials = `${username}:${password}`
// const encodedCredentials = btoa(credentials)

const sendHtmlToWordPressTemplatePart = async (
  templateID: string,
  componentForTemplatePartRef: HTMLElement,
) => {
  const componentHtmlRaw = componentForTemplatePartRef.innerHTML

  function removeDataVInspector(htmlString: string) {
    const container = document.createElement('div')
    container.innerHTML = htmlString

    const elementsWithInspector = container.querySelectorAll('[data-v-inspector]')

    elementsWithInspector.forEach((element) => {
      element.removeAttribute('data-v-inspector')
    })

    return container.innerHTML
  }

  const cleanHtml = removeDataVInspector(componentHtmlRaw)

  const componentHtml = cleanHtml.replace(
    /\/src\/assets\//g,
    '/wp-content/uploads/dot-dev-tailwind/',
  )

  // const templateData = {
  //   content: componentHtml,
  // }

  try {
    // const response = await axios.post(
    //   'https://staging.melatonin.dev/wp-json/wp/v2/template-parts/lean-and-mean/' + templateID,
    //   templateData,
    //   {
    //     headers: {
    //       Authorization: `Basic ${encodedCredentials}`,
    //     },
    //   },
    // )
    const response = await axios.post(
      'https://staging.melatonin.dev/wp-json/my-vue-app/v1/save-component-html-to-template-part',
      { html_content: componentHtml, page_id: templateID },
      {
        auth: {
          username: staging_user,
          password: staging_password,
        },
      },
    )

    console.log('Template created successfully:', response.data)

    appendToLog('HTML saved successfully!')
  } catch (error) {
    console.error('Error sending HTML:', error)
    console.error('Error creating template:')
    appendToLog('Error sending HTML')
  }
}

const sendHtmlToWordPressPage = async (postID: number, componentRef: HTMLElement) => {
  const componentHtmlRaw = componentRef.innerHTML

  function removeDataVInspector(htmlString: string) {
    const container = document.createElement('div')
    container.innerHTML = htmlString

    const elementsWithInspector = container.querySelectorAll('[data-v-inspector]')

    elementsWithInspector.forEach((element) => {
      element.removeAttribute('data-v-inspector')
    })

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
      'https://staging.melatonin.dev/wp-json/my-vue-app/v1/save-component-html',
      { html_content: componentHtml, page_id: postID },
      {
        auth: {
          username: staging_user,
          password: staging_password,
        },
      },
    )
    console.log(response.data)
    appendToLog('HTML saved successfully!')
  } catch (error) {
    console.error('Error sending HTML!', error)
    appendToLog('Error sending HTML')
  }
}

const updateCSSOnServer = async () => {
  try {
    const response = await axios.post(
      'https://staging.melatonin.dev/wp-json/my-vue-app/v1/save_css',
      {
        css_content: myCssContent,
        file_name: 'tailwind.css',
      },
      {
        auth: {
          username: staging_user,
          password: staging_password,
        },

        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log('CSS saved successfully:', response.data.file_url)
    appendToLog('CSS saved successfully!')
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

    const mimeTypes = {
      png: 'image/png',
      jpg: 'image/jpeg',
      svg: 'image/svg+xml',
      mp4: 'video/mp4',
      js: 'text/javascript',
    }
    const mimeType = mimeTypes[extension as keyof typeof mimeTypes]

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
    switch (file.type) {
      case 'image/png':
      case 'image/jpeg':
      case 'image/svg+xml':
        directory = 'images'
        break
      case 'video/mp4':
        directory = 'videos'
        break
      case 'text/javascript':
        directory = 'js'
        break
    }
    formData.append('directory', directory)
    try {
      const response = await axios.post(
        'https://staging.melatonin.dev/wp-json/my-vue-app/v1/save_asset',
        formData,
        {
          headers: {
            // 'X-WP-Nonce': secret,
            Authorization: 'Basic YWRtaW46aHdnbGV0c2dvaHdnbGV0c2dv',
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
  <div class="flex h-full flex-col px-8 py-4 text-white">
    <div class="mt-4 mb-2 text-xl">Sync Page & All Assets</div>

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
        class="mr-4 min-w-22 cursor-pointer text-left hover:underline"
      >
        {{ item.label }}
      </button>
      => &nbsp;&nbsp;&nbsp;<span>{{ item.templateID }}</span>
    </div>

    <div v-for="(item, index) in componentObjects" :key="item.postID">
      <button
        @click="
          (sendHtmlToWordPressPage(item.postID, componentRefs[index] as HTMLElement),
          updateCSSOnServer(),
          syncAssets())
        "
        class="mr-4 min-w-22 cursor-pointer text-left hover:underline"
      >
        {{ item.label }}
      </button>
      => &nbsp;&nbsp;&nbsp;<a
        :href="'https://staging.melatonin.dev/?page_id=' + item.postID"
        class="cursor-pointer hover:underline"
        >staging.melatonin.dev?page_id={{ item.postID }}</a
      >
    </div>

    <div
      id="log-container"
      class="mt-4 flex-1 overflow-y-scroll rounded bg-gray-800 p-2 font-mono text-xs text-green-500"
    >
      <ul id="log-output"></ul>
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
