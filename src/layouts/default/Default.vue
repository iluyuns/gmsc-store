<template>
  <v-app>
    <default-bar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
</script>
