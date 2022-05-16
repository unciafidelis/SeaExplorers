<template>
  <div id="app">
    <nav>
      <v-toolbar>
  <!-- Adjust the height to your needs, mine is 40 -->
  <router-link style="text-decoration: none; color: inherit;" to="/"><img class="mr-3" :src="require('../src/assets/logo.png')" height="150"/></router-link>
  <v-toolbar-title></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <router-link style="text-decoration: none; color: inherit;" to="/event"><v-btn text style="margin-top: 10%;">Eventos</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/members"><v-btn text style="margin-top: 8%;">Miembros</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/blog"><v-btn text style="margin-top: 12%;">Blog</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/donate"><v-btn text style="background:#006ff9; margin-top: 10%;" class="primary">Donar</v-btn></router-link>
    <router-link style="text-decoration: none; color: inherit;" to="/registry"><v-app-bar-nav-icon></v-app-bar-nav-icon></router-link>
  </v-toolbar-items>
</v-toolbar>
    </nav>
  <section>
    <div>
      <router-view/> 
    </div>
   
    </section>


  

  </div>
</template>
