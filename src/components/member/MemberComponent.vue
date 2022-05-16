<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Miembros Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(member, index) in members"
          :key="index"
          @click="setActiveExplorer(member, index)"
        >
          {{ member.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>Explorer</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Username:</strong></label> {{ currentExplorer.username}}
          <br><label><strong>Mission:</strong></label> {{ currentExplorer.mission}}
        </div>
        <router-link :to="'/member/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un member.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MemberService from "../../../src/services/MemberService";

export default {
  name: "member-list",
  data() {
    return {
      tutorials: [],
      members: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      memberId: ""
    };
  },
  methods: {
    getAllMembers(){
      MemberService.getAll()
        .then(response => {
          this.members = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(member, index) {
      this.currentExplorer= member;
      this.currentIndex = member? index : -1;
    }
  },
  mounted() {
    this.getAllMembers();
  }
};
</script>
