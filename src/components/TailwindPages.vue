<script setup lang="ts">
import SiteHeader from '@/html/SiteHeader.vue'
import PageHome from '@/html/PageHome.vue'
import PageDownloads from '@/html/PageDownloads.vue'
import PageSandbox from '@/html/PageSandbox.vue'
import SiteFooter from '@/html/SiteFooter.vue'
</script>

<template>
  <SiteHeader v-if="false" />
  <PageHome v-if="false" />
  <PageDownloads v-if="true" />
  <PageSandbox v-if="false" />
  <SiteFooter v-if="false" />
</template>
