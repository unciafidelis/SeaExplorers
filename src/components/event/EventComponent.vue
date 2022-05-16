<template>
  <div class="list row" style= "margin-left: 10%; margin-top: 5%; margin-right: 10%;">
    <div class="col-md-6">
      <h4> Lista de eventos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(event, index) in events"
          :key="index"
          @click="setActiveEvent(event, index)"
        >
          {{ event.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentEvent">
        <h4>Eventos</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentEvent.name}}
          <br><label><strong>Actividad:</strong></label> {{ currentEvent.activity}}
          <br><label><strong>Locazión:</strong></label> {{ currentEvent.location}}
          <br><label><strong>Tipo:</strong></label> {{ currentEvent.type}}
          <br><label><strong>Cupo de persona:</strong></label> {{ currentEvent.personQuota}}
          <br><label><strong>Organizador:</strong></label> {{ currentEvent.organizer}}
          <br><label><strong>Solo miembros:</strong></label> {{ currentEvent.onlyMembers}}

        </div>
        <router-link :to="'/event/' + currentEvent.id" class="btn btn-info"> Editar</router-link>
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
      currentEvent: null,
      currentIndex: -1,
      title: "",
      eventId: ""
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
    setActiveEvent(event, index) {
      this.currentEvent= event;
      this.currentIndex = event? index : -1;
    }
  },
  mounted() {
    this.getAllEvents();
  }
};
</script>
