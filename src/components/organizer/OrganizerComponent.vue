<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Organizadores en Sea Explorers </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(organizer, index) in organizers"
          :key="index"
          @click="setActiveOrganizer(organizer, index)"
        >
          {{ organizer.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentOrganizer">
        <h4>Organizador</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentOrganizer.name}}
          <br><label><strong>Username:</strong></label> {{ currentOrganizer.username}}
          <br><label><strong>Email:</strong></label> {{ currentOrganizer.email}}
        </div>
        <router-link :to="'/organizer/' + currentOrganizer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un organizador.</p>
      </div>
    </div>
  </div>
</template>
<script>

import OrganizerService from "../../../src/services/OrganizerService";

export default {
  name: "organizer-list",
  data() {
    return {
      tutorials: [],
      organizers: [],
      currentTutorial: null,
      currentOrganizer: null,
      currentIndex: -1,
      title: "",
      organizerId: ""
    };
  },
  methods: {
    getAllorganizers(){
      OrganizerService.getAll()
        .then(response => {
          this.organizers = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveOrganizer(organizer, index) {
      this.currentOrganizer= organizer;
      this.currentIndex = organizer? index : -1;
    }
  },
  mounted() {
    this.getAllorganizers();
  }
};
</script>
