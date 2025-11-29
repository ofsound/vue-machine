<script setup lang="ts">
import SiteHeader from './SiteHeader.vue'
import PageHome from './PageHome.vue'
import PageDownloads from './PageDownloads.vue'
import SiteFooter from './SiteFooter.vue'
import ImageTest from './ImageTest.vue'
import ImageDirectoryTest from './ImageDirectoryTest.vue'
import RemoteSync from './RemoteSync.vue'
import PageSandbox from './PageSandbox.vue'
</script>

<template>
  <SiteHeader v-if="true" />
  <PageDownloads v-if="false" />
  <PageHome v-if="true" />
  <SiteFooter v-if="true" />
  <ImageTest v-if="false" />
  <ImageDirectoryTest v-if="false" />
  <RemoteSync v-if="true" />
  <PageSandbox v-if="false" />
</template>
