<script setup>
const props = defineProps({
  venueImage: String,
  venueName: String,
  venueChips: Array
});
</script>
<template>
  <div class="venue-sizer ma-4">
    <v-card max-width="200" theme="Dark">
      <v-img
        :aspect-ratio="1"
        width="200"
        src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/433919363_903597688442713_8838195653126129367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ezsHi77PIFEAb6rvRA_&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAru1djtFoU5LAkQa6jZOLPaEGXIio5z0NmkGUS7JAzJQ&oe=66143CBC"
        cover
      >
      </v-img>
      <div class="venue-name-background text-h6">
        <span class="venue-name-color-highlight"></span>
        <div class="venue-name-text">
          {{ venueName }}
        </div>
      </div>
    </v-card>
    <v-chip-group class="venue-chip-group">
      <v-chip class="venue-chip">Live music</v-chip>
      <v-chip class="venue-chip">Happy hour</v-chip>
      <v-chip class="venue-chip">Bustling</v-chip>
    </v-chip-group>
  </div>
</template>
<style scoped>
.venue-name-background {
  margin-top: -50px;
  display: flex;
  align-items: center;
  z-index: 3;
  position: relative;
  color: white;
  background-color: rgba(12, 12, 12, 0.4);
}

.venue-sizer {
  max-width: 250px;
  overflow: hidden;
}

.venue-chip-group {
  overflow: hidden;
  flex-wrap: nowrap;
  width: 200px;
}

.venue-chip {
  min-width: fit-content;
}

.venue-name-text {
  overflow-x: hidden;
  white-space: nowrap;
}

.venue-name-color-highlight {
  background-color: rgb(114, 119, 158);
  height: 25px;
  width: 5px;
  position: relative;
  left: 0px;
  margin-right: 15px;
}
</style>
