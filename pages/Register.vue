<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>
              <h1>Register</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn color="primary" @click="register">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  data() {
    return {
      password: "",
      passwordConfirm: "",
      email: ""
    };
  },
  methods: {
    register() {
      // Ici, vous pouvez gérer l'inscription de l'utilisateur
      // Par exemple, vous pouvez envoyer les données à un serveur
      console.log(this.email, this.password, this.passwordConfirm);
    }
  }
});
</script>

<style scoped>
.position {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 50%;
  width: 50%;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
}
</style>
