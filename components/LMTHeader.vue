<script></script>
<template>
  <div>
    <v-footer class="bg-grey-lighten-1">
      <v-row align="center" justify="center" no-gutters>
        <v-col>
          <NuxtLink to="/" class="header-button">
            <v-img :height="60" :width="150" src="/images/LMT-1.png"></v-img>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink to="/browse" class="header-button">
            <v-btn class="mx-2" color="white" rounded="xl" variant="text">
              Browse
            </v-btn>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink to="/search" class="header-button">
            <v-btn class="mx-2" color="white" rounded="xl" variant="text">
              Find
            </v-btn>
          </NuxtLink>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <NuxtLink to="/user" class="header-button">
                <v-row align="center" justify="center">
                  <v-avatar>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    ></v-img>
                  </v-avatar>
                  <div class="header-username">John User</div>
                </v-row>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<style scoped>
.header-button {
  text-decoration: none;
  color: inherit;
}

.header-username {
  color: #fdfdfd;
  margin-left: 10px;
}
</style>
