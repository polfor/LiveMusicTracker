import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((app: any) => {
  const vuetify = createVuetify({
    defaults: {
      VBtn: {
        color: "primary",
        backgroundColor: "secondary",
        variant: "outlined",
        rounded: true
      }
    }
  });
  app.vueApp.use(vuetify);
});
