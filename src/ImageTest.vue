<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios' // Or your preferred HTTP client

// const selectedFile = ref<null | HTMLInputElement>()

// const onFileSelected = (event: { target: { files: Iterable<never> | ArrayLike<never> } }) => {
// selectedFiles.value = Array.from(event.target.files)
// }

// const fileInput = ref(null);
// let selectedFile = null

const fileInput = ref<null | HTMLInputElement>()
let selectedFiles = null

const handleFileChange = (event: { target: { files: any[] } }) => {
  selectedFiles = Array.from(event.target.files)
}

const uploadImage = async () => {
  // if (!selectedFiles.value.length) return

  // const file = selectedFiles.value.files![0]

  // Append the file to the FormData object
  // The first argument is the field name (e.g., 'uploadedFile')
  // The second argument is the File object itself
  // The third (optional) argument is the filename, which can be useful for server-side processing

  // formData.append('uploadedFile', file, file.name)

  // console.log(selectedFile)

  //
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

  // formData.append('file', selectedFile)
  //

  // }
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
      <input ref="fileInput" type="file" multiple accept="image/*" @change="handleFileChange" />
      <button @click="uploadImage">Upload</button>
    </div>
  </div>
</template>
