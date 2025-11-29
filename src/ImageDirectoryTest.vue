<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios' // Or your preferred HTTP client

// const selectedFile = ref<null | HTMLInputElement>()

// const onFileSelected = (event: { target: { files: Iterable<never> | ArrayLike<never> } }) => {
// selectedFiles.value = Array.from(event.target.files)
// }

// const fileInput = ref(null);
// let selectedFile = null

const selectedFiles = []

const uploadImage = async () => {
  // if (!selectedFiles.value.length) return

  // const file = selectedFiles.value.files![0]

  // Append the file to the FormData object
  // The first argument is the field name (e.g., 'uploadedFile')
  // The second argument is the File object itself
  // The third (optional) argument is the filename, which can be useful for server-side processing

  // formData.append('uploadedFile', file, file.name)

  // console.log(selectedFile)

  function getFileName(pathString) {
    const lastSlashIndex = pathString.lastIndexOf('/')
    if (lastSlashIndex === -1) {
      // No slash found, the entire string is the filename
      return pathString
    } else {
      // Extract the substring after the last slash
      return pathString.substring(lastSlashIndex + 1)
    }
  }

  function getMimeTypeFromFileExtension(filename) {
    const parts = filename.split('.')

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
    }

    return mimeType
  }

  const imageModules = import.meta.glob('@/assets/videos/*.{png,jpg,svg,mp4}', {
    eager: true,
    as: 'url',
  })

  const imageFiles = Object.values(imageModules)

  const imageObjects = Object.keys(imageModules).map((path) => ({
    path: path,
    url: imageModules[path],
  }))

  imageObjects.forEach((element) => {
    getFileFromUrl(
      element.url,
      getFileName(element.path),
      getMimeTypeFromFileExtension(element.path),
    )
  })

  async function getFileFromUrl(url, filename, mimeType) {
    const response = await fetch(url)
    const blob = await response.blob()
    const file = new File([blob], filename, { type: 'image/png' })
    console.log(file)
    selectedFiles.push(file)

    return file
  }

  //

  // formData.append('file', selectedFile)
  //

  // }
}

const syncToWP = () => {
  selectedFiles.forEach(async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const response = await axios.post(
        'https://csstune.com/wp-json/my-vue-app/v1/save_asset',

        formData,

        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 'Content-Disposition': 'attachment; filename=your-image-name.jpg',
            // Include authentication headers if required (e.g., JWT, nonce)
          },
        },
      )
      console.log('Image saved successfully:', response.data)
    } catch (error) {
      console.error('Error saving File:', error)
    }
  })
}

// ]

const uploadImages = async () => {
  // if (!selectedFiles.value.length) return
  // const formData = new FormData()
  // selectedFiles.value.forEach((file) => {
  //   formData.append('file', file, 'test.jpg')
  // })
  // const response = await axios.post(
  //     'https://csstune.com/wp-json/my-vue-app/v1/save_css',
  //     {
  //       css_content: selectedFiles.value[0],
  //       file_name: 'test.jpg', // Desired file name
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'image/jpeg',
  //         // Include authentication headers if required (e.g., JWT, nonce)
  //       },
  //     },
  //   )
  //   console.log('Image saved successfully:', response.data)
  // } catch (error) {
  //   console.error('Error saving CSS:', error)
  // }
  // try {
  //   console.log()
  //   const credentials = btoa('csstune:sshE IHEF AdJN q4fd eDjE Zvnp')
  //   console.log(credentials)
  //   axios.defaults.headers.common['Authorization'] = `Basic ${credentials}`
  //   const response = await axios.post('https://csstune.com/wp-json/wp/v2/media', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       // Authorization: ,
  //       // Add authentication headers if your WordPress API requires it (e.g., Basic Auth, JWT)
  //       // Authorization: 'Basic ' + btoa('csstune:^evOXdl)yXDJ(G)0'),
  //     },
  //   })
  //   console.log('Images uploaded successfully:', response.data)
  //   selectedFiles.value = [] // Clear selected files after upload
  // } catch (error) {
  //   console.error('Error uploading images:', error)
  // }
}
</script>

<template>
  <div class="text-white">
    <div>
      <button @click="uploadImage">Grab from assets</button>
      <br />
      <button @click="syncToWP">Sync to WP</button>
    </div>
  </div>
</template>
