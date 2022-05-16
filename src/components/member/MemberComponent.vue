<template>
  <div class="list row" style= "margin-left: 10%; margin-top: 5%; margin-right: 10%;">
    <div class="col-md-6">
      <h4> Miembros Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(member, index) in members"
          :key="index"
          @click="setActiveMember(member, index)"
        >
          {{ member.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMember">
        <h4>Member</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMember.name}}
          <br><label><strong>Username:</strong></label> {{ currentMember.username}}
          <br><label><strong>Mission:</strong></label> {{ currentMember.mission}}
        </div>
        <router-link :to="'/member/' + currentMember.id" class="btn btn-info"> Editar</router-link>
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
      currentMember: null,
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
    setActiveMember(member, index) {
      this.currentMember= member;
      this.currentIndex = member? index : -1;
    }
  },
  mounted() {
    this.getAllMembers();
  }
};
</script>