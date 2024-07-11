<template>
  <div class="register-margins">
    <v-card class="position" elevation="16">
      <form class="form" @submit.prevent="register">
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
        <v-text-field
          v-model="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <v-btn class="my-blue" type="submit" prepend-icon="mdi-send">
          Register
        </v-btn>
        <router-link to="/login">
          <v-btn color="primary">Login</v-btn>
        </router-link>
      </form>
    </v-card>
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
.register-margins {
  margin-top: auto;
  margin-bottom: auto;
}

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
