<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
// import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import HitokotoBlogHero from "./HitokotoBlogHero.js";
import { computed } from "vue";

const filteredProps = computed(() => {
  return (params) => {
    // 使用计算属性来过滤不需要传递的属性
    const { tagline, isFullScreen, ...props } = params;
    return props;
  };
});
</script>

<template>
  <BlogHero>
    <template #heroBg>
      <BingHeroBackground />
    </template>
    <template #heroInfo="heroInfo">
      <!-- <HitokotoBlogHero v-bind="heroInfo" /> -->
      <HitokotoBlogHero v-bind="filteredProps(heroInfo)" />
    </template>
  </BlogHero>
</template>
