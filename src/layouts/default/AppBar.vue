<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-img
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      ></v-img>
    </template>

    <v-app-bar-title>{{ store.name }}</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menu_items"
          :key="index"
          :value="index"
          @click="menu(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const store =ref({
    name: 'ss',
  });
  const menu_items = ref([
    { title: 'Home' },
    { title: 'About' },
    { title: 'Contact' },
  ]);

  const menu = (item: any) => {
    console.log('menu', item);
  };

</script>
