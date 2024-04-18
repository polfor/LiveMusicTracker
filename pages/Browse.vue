<script>
export default {
  data: () => ({
    tab: null
  })
};
</script>

<script setup>
const venues = [
  {
    title: "Check out these hot Venues",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Because you like ",
    chip: "Dancing",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Looking for something tonight?",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Venues like ",
    chip: "Le Lucifer",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  }
];

const events = [
  {
    title: "Check out these hot Events",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Because you like ",
    chip: "Dancing",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Looking for something tonight?",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Events like ",
    chip: "Le Lucifer",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  }
];

const artists = [
  {
    title: "Check out these hot Artists",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Because you like ",
    chip: "Rock",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Looking for something tonight?",
    chip: "",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  },
  {
    title: "Artists like ",
    chip: "Johny Hallyday",
    content: [
      {
        name: "Le Lucifer",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "Arkea Arena",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Live Music", "Tickets required", "Bustling"]
      },
      {
        name: "Le Sherlock Holmes",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      },
      {
        name: "HMS Victory",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Live Music", "Happy hour", "Bustling"]
      }
    ]
  }
];
</script>

<template>
  <div>
    <v-card>
      <v-tabs v-model="tab" class="browse-tabs">
        <v-spacer></v-spacer>
        <v-tab value="one" class="browse-tab">Venues</v-tab>
        <v-spacer></v-spacer>
        <v-tab value="two" class="browse-tab">Events</v-tab>
        <v-spacer></v-spacer>
        <v-tab value="three" class="browse-tab">Artists</v-tab>
        <v-spacer></v-spacer>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <v-container fluid>
              <div v-for="(item, index) in venues">
                <v-row>
                  <v-col class="text-h6">
                    {{ item.title }}
                    <v-chip v-if="item.chip">{{ item.chip }}</v-chip>
                    <span class="section-emphasis"></span>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-slide-group class="pa-4">
                    <v-slide-group-item
                      v-for="(entry, entryIndex) in item.content"
                    >
                      <Venue
                        :venue-name="entry.name"
                        :venue-cover="entry.cover"
                        :venue-chips="entry.chips"
                      ></Venue>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-row>
              </div>
            </v-container>
          </v-window-item>

          <v-window-item value="two">
            <v-container fluid>
              <div v-for="(item, index) in events">
                <v-row>
                  <v-col class="text-h6">
                    {{ item.title }}
                    <v-chip v-if="item.chip">{{ item.chip }}</v-chip>
                    <span class="section-emphasis"></span>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-slide-group class="pa-4">
                    <v-slide-group-item
                      v-for="(entry, entryIndex) in item.content"
                    >
                      <Venue
                        :venue-name="entry.name"
                        :venue-cover="entry.cover"
                        :venue-chips="entry.chips"
                      ></Venue>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-row>
              </div>
            </v-container>
          </v-window-item>

          <v-window-item value="three">
            <v-container fluid>
              <div v-for="(item, index) in artists">
                <v-row>
                  <v-col class="text-h6">
                    {{ item.title }}
                    <v-chip v-if="item.chip">{{ item.chip }}</v-chip>
                    <span class="section-emphasis"></span>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
                <v-row>
                  <v-slide-group class="pa-4">
                    <v-slide-group-item
                      v-for="(entry, entryIndex) in item.content"
                    >
                      <Venue
                        :venue-name="entry.name"
                        :venue-cover="entry.cover"
                        :venue-chips="entry.chips"
                      ></Venue>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-row>
              </div>
            </v-container>
          </v-window-item>
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

.browse-tabs {
  width: auto;
}

.browse-tab {
}
</style>
