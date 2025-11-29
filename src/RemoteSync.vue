<script setup lang="ts">
import axios from 'axios'
import { ref, toRaw, type Component } from 'vue'

import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import PageHome from './PageHome.vue'
import PageDownloads from './PageDownloads.vue'
import PageSandbox from './PageSandbox.vue'

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

// const headerID = ref(130)
// const footerID = ref(130)
// const homeID = ref(130)
// const downloadsID = ref(6381)
// const sandboxID = ref(6504)

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

import myCssContent from './main.css?inline'

const sendHtmlToWordPressTemplatePart = async (
  templateID: string,
  componentForTemplatePartRef: HTMLElement,
) => {
  const componentHtmlRaw = componentForTemplatePartRef.outerHTML

  const componentHtml = componentHtmlRaw.replace(
    /\/src\/assets\/images\//g,
    '/wp-content/uploads/custom-css/',
  )

  const username = 'csstune'
  const password = 'HUlc HStM UgNJ 9vkK HSev 6ePD'

  const credentials = `${username}:${password}`
  const encodedCredentials = btoa(credentials)

  const templateData = {
    content: componentHtml,
    // Add other template properties as needed, e.g., 'status', 'type'
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
  // const componentHtmlRaw = sandBoxRoot.value!.root.outerHTML

  const componentHtmlRaw = componentRef.outerHTML

  const componentHtml = componentHtmlRaw.replace(
    /\/src\/assets\/images\//g,
    '/wp-content/uploads/custom-css/',
  )

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
        file_name: 'dot-dev-tailwind-styles.css', // Desired file name
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log('CSS saved successfully:', response.data)
    appendToLog('CSS saved successfully:')
  } catch (error) {
    console.error('Error saving CSS:', error)
    appendToLog('Error saving CSS')
  }
}

const appendToLog = (message: string) => {
  const logOutput = document.getElementById('log-output')
  const listItem = document.createElement('li')
  listItem.textContent = message
  logOutput!.appendChild(listItem)

  logOutput!.scrollTop = logOutput!.scrollHeight
}
</script>

<template>
  <div class="text-white">
    <div class="text-3xl text-white">Sync to Melatonin.dev</div>

    <div class="h-50 overflow-y-scroll rounded bg-gray-800 p-2 font-mono text-sm text-green-500">
      <ul id="log-output"></ul>
    </div>

    <div>Sync Page Content</div>

    <div v-for="(item, index) in componentObjects" :key="item.postID">
      <button
        @click="
          (sendHtmlToWordPressPage(item.postID, componentRefs[index] as HTMLElement),
          updateCSSOnServer())
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
          updateCSSOnServer())
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
