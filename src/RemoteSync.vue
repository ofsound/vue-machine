<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

import PageSandbox from './PageSandbox.vue'
import PageDownloads from './PageDownloads.vue'

import myCssContent from './main.css?inline'

const sendHtmlToWordPress = async () => {
  // const componentHtmlRaw = sandBoxRoot.value!.root.outerHTML
  const componentHtmlRaw = downloadsRoot.value!.outerHTML

  const componentHtml = componentHtmlRaw.replace(
    /\/src\/assets\/images\//g,
    '/wp-content/uploads/custom-css/',
  )

  try {
    const response = await axios.post(
      'https://csstune.com/wp-json/my-vue-app/v1/save-component-html',
      { html_content: componentHtml, page_id: downloadsID.value },
    )
    console.log(response.data)
    appendToLog(response.data)
  } catch (error) {
    console.error('Error sending HTML:', error)
    appendToLog('Error sending HTML')
  }

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

const headerID = ref(130)
const footerID = ref(130)
const homeID = ref(130)
const downloadsID = ref(6381)
const sandboxID = ref(6504)

const sandBoxRoot = ref<HTMLElement | null>(null)
const downloadsRoot = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="text-white">
    <div class="text-3xl text-white">Sync to Melatonin.dev</div>

    <div class="h-50 overflow-y-scroll rounded bg-gray-800 p-2 font-mono text-sm text-green-500">
      <ul id="log-output"></ul>
    </div>

    <div>Sync Page Content</div>
    <div>
      <button class="mr-4 underline">Header</button>
      <input type="text" v-model="headerID" />
    </div>
    <div>
      <button class="mr-4 underline">Footer</button>
      <input type="text" v-model="footerID" />
    </div>
    <div>
      <button class="mr-4 underline">Home</button>
      <input type="text" v-model="homeID" />
    </div>
    <div>
      <button @click="sendHtmlToWordPress" class="mr-4 underline">Downloads</button>
      <input type="text" v-model="downloadsID" />
    </div>
    <div>
      <button @click="sendHtmlToWordPress" class="mr-4 underline">Sandbox</button>
      <input type="text" v-model="sandboxID" />
    </div>
  </div>

  <div class="hidden">
    <div ref="sandBoxRoot">
      <PageSandbox />
    </div>
    <div ref="downloadsRoot">
      <PageDownloads />
    </div>
  </div>
</template>
