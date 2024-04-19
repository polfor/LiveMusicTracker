<template>
  <div>
    <v-card class="position" elevation="16">
      <form class="form" @submit.prevent="login">
        <v-text-field
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />
        <v-text-field
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <v-btn class="my-blue" type="submit" prepend-icon="mdi-login">
          Login
        </v-btn>
        <router-link to="/register">
          <v-btn color="primary">Register</v-btn>
        </router-link>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      // Ici, vous pouvez gérer la connexion de l'utilisateur
      // Par exemple, envoyer les données à un serveur pour vérification
      console.log(this.email, this.password);
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
  height: 100%;
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
