<script>
export default {
  data: () => ({
    tab: null
  })
};
</script>

<template>
  <div>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="one">Venues</v-tab>
        <v-tab value="two">Events</v-tab>
        <v-tab value="three">Artists</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <v-container fluid>
              <v-row>
                <v-col class="text-h6">
                  Check out these hot Venues
                  <span class="section-emphasis"></span>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-slide-group class="pa-4">
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Lucifer"
                      venue-image="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/433919363_903597688442713_8838195653126129367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ezsHi77PIFEAb6rvRA_&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAru1djtFoU5LAkQa6jZOLPaEGXIio5z0NmkGUS7JAzJQ&oe=66143CBC"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Arkea Arena"
                      venue-image="https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Sherlock Holmes"
                      venue-image="https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="HMS Victory"
                      venue-image="https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp"
                    ></Venue>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col class="text-h6">
                  Because you like <v-chip>Dancing</v-chip>
                  <span class="section-emphasis"></span>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-slide-group class="pa-4">
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Lucifer"
                      venue-image="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/433919363_903597688442713_8838195653126129367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ezsHi77PIFEAb6rvRA_&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAru1djtFoU5LAkQa6jZOLPaEGXIio5z0NmkGUS7JAzJQ&oe=66143CBC"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Arkea Arena"
                      venue-image="https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Sherlock Holmes"
                      venue-image="https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="HMS Victory"
                      venue-image="https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp"
                    ></Venue>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col class="text-h6">
                  Looking for something tonight?
                  <span class="section-emphasis"></span>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-slide-group class="pa-4">
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Lucifer"
                      venue-image="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/433919363_903597688442713_8838195653126129367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ezsHi77PIFEAb6rvRA_&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAru1djtFoU5LAkQa6jZOLPaEGXIio5z0NmkGUS7JAzJQ&oe=66143CBC"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Arkea Arena"
                      venue-image="https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Sherlock Holmes"
                      venue-image="https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="HMS Victory"
                      venue-image="https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp"
                    ></Venue>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
              <v-row>
                <v-col class="text-h6">
                  Venues like <v-chip>Lucifer</v-chip>
                  <span class="section-emphasis"></span>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-slide-group class="pa-4">
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Lucifer"
                      venue-image="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/433919363_903597688442713_8838195653126129367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ezsHi77PIFEAb6rvRA_&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAru1djtFoU5LAkQa6jZOLPaEGXIio5z0NmkGUS7JAzJQ&oe=66143CBC"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Arkea Arena"
                      venue-image="https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="Le Sherlock Holmes"
                      venue-image="https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp"
                    ></Venue>
                  </v-slide-group-item>
                  <v-slide-group-item>
                    <Venue
                      venue-name="HMS Victory"
                      venue-image="https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp"
                    ></Venue>
                  </v-slide-group-item>
                </v-slide-group>
              </v-row>
            </v-container>
          </v-window-item>

          <v-window-item value="two"> Two </v-window-item>

          <v-window-item value="three"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.section-emphasis {
  display: flex;
  background-color: rgb(114, 119, 158);
  height: 5px;
  width: 50px;
  position: relative;
  left: 0px;
  bottom: 0px;
}

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
