<template>
  <div>
    <v-app>
      <v-main>
        <v-parallax
          class="mb-6"
          height="600"
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        >
          <v-container class="fill-height">
            <v-row align="center">
              <v-col>
                <div class="text-lg-h1 text-md-h2 text-sm-h4">
                  Welcome to Live Music Tracker
                </div>
                <div class="text-lg-h4 text-md-h4 text-sm-h6">
                  Where will you jam tonight?
                </div>
                <v-row align="left">
                  <v-col>
                    <v-btn class="ma-2" variant="outlined">Login</v-btn>
                    <NuxtLink to="/register" class="text-black">
                      <v-btn class="ma-2" variant="tonal"
                        >Create an account</v-btn
                      >
                    </NuxtLink>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
        <v-container
          class="mb-6 text-lg-body-1 text-md-body-1 text-sm-body-1 pa-6"
        >
          <v-row class="ma-1">
            Welcome to LiveMusicTracker, your ultimate destination for
            discovering the heartbeat of your local music scene! We're thrilled
            to provide a platform that connects music enthusiasts, talented
            artists, and vibrant venues in a seamless and exhilarating
            experience.
          </v-row>
          <v-row class="ma-1">
            At LiveMusicTracker, we believe that music is more than just
            sound—it's a shared passion that brings communities together,
            fosters creativity, and creates unforgettable moments. Our mission
            is simple yet profound: to empower users to explore the rich
            tapestry of live music events happening right in their
            neighborhoods, while also offering artists and venues a spotlight to
            showcase their talents and spaces.
          </v-row>
          <v-row class="ma-1">
            Whether you're a seasoned music aficionado searching for the next
            hidden gem or a budding artist looking to share your melodies with
            the world, LiveMusicTracker is your go-to hub. Discover intimate
            acoustic performances in cozy cafes, electrifying sets in lively
            bars, or experimental jams in underground venues—all at your
            fingertips.
          </v-row>
          <v-row class="ma-1">
            For artists and venues, LiveMusicTracker provides a platform to
            amplify your presence and reach a broader audience. Showcase your
            unique style, connect with fans old and new, and create memorable
            experiences that resonate long after the last chord fades.
          </v-row>
          <v-row class="ma-1">
            Join us on this musical journey, where every beat tells a story and
            every note ignites a passion. Let LiveMusicTracker be your guide to
            unlocking the magic of live music in your community. Start
            exploring, start connecting, and let the rhythm of life lead the
            way. Welcome to the heartbeat of your local music scene—welcome to
            LiveMusicTracker.
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script></script>

<style scoped>
/* Styles spécifiques à cette page */
h1 {
  color: #1976d2;
  /* Exemple de couleur */
}
</style>
