<template>
  <div class="list row" style= "margin-left: 10%; margin-top: 5%; margin-right: 10%;">
    <div class="col-md-6">
      <h4> Lista de eventos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(event, index) in events"
          :key="index"
          @click="setActiveExplorer(event, index)"
        >
          {{ event.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>Eventos</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Actividad:</strong></label> {{ currentExplorer.activity}}
          <br><label><strong>Locazión:</strong></label> {{ currentExplorer.location}}
          <br><label><strong>Tipo:</strong></label> {{ currentExplorer.type}}
          <br><label><strong>Cupo de persona:</strong></label> {{ currentExplorer.personQuota}}
          <br><label><strong>Organizador:</strong></label> {{ currentExplorer.organizer}}
          <br><label><strong>Solo miembros:</strong></label> {{ currentExplorer.onlyMembers}}

        </div>
        <router-link :to="'/event/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un evento.</p>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "../../../src/services/EventService";
export default {
  name: "event-list",
  data() {
    return {
      tutorials: [],
      events: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllEvents(){
      EventService.getAll()
        .then(response => {
          this.events = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(event, index) {
      this.currentExplorer= event;
      this.currentIndex = event? index : -1;
    }
  },
  mounted() {
    this.getAllEvents();
  }
};
</script>
