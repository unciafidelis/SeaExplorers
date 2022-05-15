<template>
  <div id="app">
    <nav>
      <v-toolbar>
  <!-- Adjust the height to your needs, mine is 40 -->
  <router-link style="text-decoration: none; color: inherit;" to="/"><img class="mr-3" :src="require('../src/assets/logo.png')" height="40"/></router-link>
  <v-toolbar-title></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <router-link style="text-decoration: none; color: inherit;" to="/event"><v-btn text>Eventos</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/member"><v-btn text>Miembros</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/blog"><v-btn text>Blog</v-btn></router-link>
  </v-toolbar-items>
</v-toolbar>
    </nav>
    <router-view/>
  </div>
</template>