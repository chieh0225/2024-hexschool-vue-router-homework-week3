<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/week3">Week3</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
