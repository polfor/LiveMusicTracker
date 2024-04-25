<template>
  <NuxtLayout>
    <v-app>
      <div class="template">
        <LMTHeader></LMTHeader>
        <NuxtPage />
        <LMTFooter></LMTFooter>
      </div>
    </v-app>
  </NuxtLayout>
</template>
<style scoped>
.template {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
