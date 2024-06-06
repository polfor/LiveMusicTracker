<template>
  <div>
    <!-- Profile Banner -->
    <v-img
      class="profile-banner"
      aspect-ratio="16/9"
      width="100%"
      height="40%"
      src="https://wpplayground01.azurewebsites.net/wp-content/uploads/2023/09/1585646398IMG_0286.jpg"
      cover
    >
    </v-img>

    <!-- Profile Title -->
    <v-row>
      <v-col class="text-h6 profile-title"> Bar Sherlock Holmes </v-col>
    </v-row>

    <!-- Address and Info -->
    <v-row class="profile-details">
      <v-col cols="12">
        <v-card>
          <v-card-title>Address</v-card-title>
          <v-card-text>
            10 Rue des Capucins, 33000 Bordeaux, France
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>About</v-card-title>
          <v-card-text>
            A cozy pub with a wide selection of beers and a great atmosphere.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Upcoming Events -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Upcoming Events</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="event in events" :key="event.id">
                <v-list-item-content>
                  <v-list-item-title>{{ event.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ event.date }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{
                    event.description
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const events = [
  {
    id: 1,
    name: "Live Music Night",
    date: "2024-06-15",
    description: "Enjoy live music from local bands."
  },
  {
    id: 2,
    name: "Trivia Night",
    date: "2024-06-22",
    description: "Join us for a fun night of trivia and win prizes!"
  },
  {
    id: 3,
    name: "Karaoke Night",
    date: "2024-06-29",
    description: "Show off your singing skills at our karaoke night."
  }
];
</script>

<style scoped>
.profile-title {
  color: white;
  margin-top: -100px;
  margin-bottom: 20px;
  margin-left: 20px;
  z-index: 2;
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
}
.profile-banner {
  z-index: 1;
}
.profile-details {
  margin-top: 20px;
}
</style>
