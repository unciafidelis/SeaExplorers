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
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'No deje el campo vacío']"
            :error-messages="errorMessages"
            label="Nombre"
            placeholder="Escriba su nombre"
            required
          ></v-text-field>
          <v-text-field
            ref="username"
            v-model="username"
            :rules="[() => !!username || 'No deje el campo vacío']"
            :error-messages="errorMessages"
            label="Usuario"
            placeholder="Escriba su usuario"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!username || 'No deje el campo vacío']"
            label="Email"
            placeholder="Escriba su email"
            required
          ></v-text-field>
          
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, () => !!password || 'No deje vacío el campo']"
            :error-messages="errorMessages"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Contraseña"
            placeholder="Escriba la contraseña"
            hint="Al menos 8 carácteres"
            counter
            required
            @click:append="show1 = !show1"
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
      username: null,
      email: null,
      address: null,
      formHasErrors: false,
    },
    {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Contraseña requerido.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    ),

    computed: {
      form () {
        return {
          name: this.name,
          username: this.username,
          email: this.email,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
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