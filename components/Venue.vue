<script setup>
const props = defineProps({
  venueCover: String,
  venueName: String,
  venueChips: Array
});
</script>
<template>
  <NuxtLink to="/profile" class="venue-link">
    <div class="venue-sizer ma-4">
      <v-card max-width="200" theme="Dark">
        <v-img :aspect-ratio="1" width="200" :src="props.venueCover" cover>
        </v-img>
        <div class="venue-name-background text-h6">
          <span class="venue-name-color-highlight"></span>
          <div class="venue-name-text">
            {{ props.venueName }}
          </div>
        </div>
      </v-card>
      <v-chip-group class="venue-chip-group">
        <v-chip
          v-for="(item, index) in venueChips"
          class="venue-chip"
          :key="index"
          >{{ item }}</v-chip
        >
      </v-chip-group>
    </div>
  </NuxtLink>
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

.venue-link {
  text-decoration: none;
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
