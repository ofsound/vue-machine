<script setup lang="ts">
import SiteHeader from '@/html/SiteHeader.vue'
import PageHome from '@/html/PageHome.vue'
import PageDownloads from '@/html/PageDownloads.vue'
import PageSandbox from '@/html/PageSandbox.vue'
import SiteFooter from '@/html/SiteFooter.vue'
</script>

<template>
  <SiteHeader v-if="0" />
  <PageHome v-if="0" />
  <PageDownloads v-if="1" />
  <PageSandbox v-if="0" />
  <SiteFooter v-if="0" />
</template>
