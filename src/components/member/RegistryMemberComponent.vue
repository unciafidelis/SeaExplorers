<template>
  <div class="submit-form" style= "margin-left: 10%; margin-top: 5%; margin-right: 10%;">
    <div v-if="!submitted">
    <h3>Nuevo Member</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="member.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="member.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input
          type="text"
          class="form-control"
          id="mission"
          required
          v-model="member.email"
          name="mission"
        />
      </div>
      <button @click="saveMember" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Member creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMember">Add</button>
    </div>
  </div>
</template>

<script>
import MemberService from "../../../src/services/MemberService";
export default {
  name: "add-member",
  data() {
    return {
      member: {
        id: null,
        name: "",
        username: "",
        email:"",
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMember() {
      var data = {
        name: this.member.name,
        username: this.member.username,
        email: this.member.email,
        password: this.member.mission,
      };
      MemberService.create(data)
        .then(response => {
          this.member.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMember() {
      this.submitted = false;
      this.member = {};
    }
  }
};
</script>