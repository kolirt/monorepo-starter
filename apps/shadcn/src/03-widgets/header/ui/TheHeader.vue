<script lang="ts" setup>
import { RouteNames } from '@/02-pages'
</script>

<template>
  <header class="border-b-2">
    <ul>
      <li>
        <RouterLink :to="{ name: RouteNames.Home }">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: RouteNames.Login }">Login</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped></style>
