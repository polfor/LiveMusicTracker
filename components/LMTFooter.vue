<script></script>
<template>
  <div>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">
          Home
        </v-btn>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">
          About Us
        </v-btn>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">
          Team
        </v-btn>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">
          Services
        </v-btn>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">
          Contact Us
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Live Music Tracker</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
