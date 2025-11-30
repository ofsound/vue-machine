<script setup lang="ts">
import axios from 'axios'

const selectedFiles: File[] = []

const startSync = async () => {
  syncAssets()
  // syncAssetsToWP()
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
    } catch (error) {
      console.error('Error saving File:', error)
    }
  })
}
</script>

<template>
  <div class="text-white">
    <div>
      <button @click="startSync">Grab from assets</button>
      <br />
      <button @click="syncAssetsToWP">Sync to WP</button>
    </div>
  </div>
</template>
