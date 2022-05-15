<template>
<div style= "margin-left: 10%; margin-top: 5%; margin-right: 10%;" >
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-title>
          Registrar evento
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Nombre"
            placeholder="Escriba su nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="activity"
            v-model="activity"
            :rules="[() => !!activity || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Actividad"
            placeholder="Escriba la actividad"
            required
          ></v-text-field>
          <v-text-field
            ref="location"
            v-model="location"
            :rules="[() => !!location || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Locazión"
            placeholder="Escriba la locazión"
            required
          ></v-text-field>
          <v-text-field
            ref="type"
            v-model="type"
            :rules="[() => !!type || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Tipo"
            placeholder="Escriba el tipo de evento"
            required
          ></v-text-field>
          <v-text-field
            ref="personQuota"
            v-model="personQuota"
            :rules="[() => !!personQuota || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Cupo de personas"
            placeholder="Escriba el cupo de personas"
            required
          ></v-text-field>
          <v-text-field
            ref="organizer"
            v-model="organizer"
            :rules="[() => !!organizer || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Organizador"
            placeholder="Escriba el nombre del organizador"
            required
          ></v-text-field>
          <v-text-field
            ref="onlyMembers"
            v-model="onlyMembers"
            :rules="[() => !!onlyMembers || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            label="Solo miembros"
            placeholder="Escriba solo los  miembros"
            required
          ></v-text-field>

        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Registrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
  export default {
    data: () => ({
      errorMessages: '',
      name: null,
      activity: null,
      location: null,
      type: null,
      personQuota: null,
      organizer: null,
      address: null
    }),

    computed: {
      form () {
        return {
          name: this.name,
          activity: this.activity,
          location: this.location,
          type: this.type,
          personQuota: this.personQuota,
          organizer: this.organizer,
          address: this.address
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>