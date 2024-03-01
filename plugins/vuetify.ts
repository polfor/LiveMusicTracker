import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((app: any) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light"
    },
    components: [
      {
        path: "~/components"
      }
    ]
  });
  app.vueApp.use(vuetify);
});
