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
        name: "Danse Machine",
        cover:
          "https://assets-global.website-files.com/6377ec31bb12397f50163e70/63be8b853f5b75b853605915_Mask%20group-2-min.jpg",
        chips: ["Outdoor Seating", "Happy hour", "Bustling"]
      },
      {
        name: "L'Éclypse Discothèque",
        cover:
          "https://scontent-cdg4-3.xx.fbcdn.net/v/t1.6435-9/32894083_447305235698941_6818112749625671680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=caV5Mf29GtUQ7kNvgFo41Yu&_nc_ht=scontent-cdg4-3.xx&oh=00_AYDSM2v3QCDUhfX6upTy9ZYhszRzmjj3IgULpJXiUDkMgw&oe=6688E480",
        chips: ["Live Music", "Dance Floor", "Bustling"]
      },
      {
        name: "El Rincón Del Jamón",
        cover:
          "https://bodega-bordeaux.com/wp-content/uploads/2024/01/CorrectColor_6_20240108.png",
        chips: ["Live Music", "Outdoor Seating", "Bustling"]
      },
      {
        name: "Bar l'Avant-scène",
        cover:
          "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/414450485_902622595196548_8556306737688185012_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kdwkKtidci8Q7kNvgEcTI6r&_nc_ht=scontent-cdg4-3.xx&oh=00_AYCRRMzut6SoS5lgjnjq4Xp6uuVp7J1QQpnD3KJhHvHV1Q&oe=66673E6F",
        chips: ["Live Music", "No Reservation", "Bustling"]
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
    title: "Upcoming Concerts",
    chip: "Music",
    content: [
      {
        name: "Rock Night",
        date: "2024-05-15",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Rock", "Live Band", "Tickets required"]
      },
      {
        name: "Jazz Evening",
        date: "2024-05-20",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Jazz", "Live Music", "Food & Drinks"]
      },
      {
        name: "Folk Music Festival",
        date: "2024-05-25",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Folk", "Family Friendly", "Free Entry"]
      }
    ]
  },
  {
    title: "This Weekend",
    chip: "Weekend",
    content: [
      {
        name: "Blues Night",
        date: "2024-05-14",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Blues", "Live Music", "Cocktails"]
      },
      {
        name: "Pop Concert",
        date: "2024-05-16",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Pop", "Tickets required", "Merch available"]
      }
    ]
  },
  {
    title: "Special Events",
    chip: "Special",
    content: [
      {
        name: "Classical Music Night",
        date: "2024-06-01",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Classical", "Elegant", "Dress Code"]
      },
      {
        name: "Rock Legends",
        date: "2024-06-05",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Rock", "Legendary Bands", "Tickets required"]
      },
      {
        name: "Indie Bands Showcase ",
        date: "2024-06-10",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Indie", "New Talent", "Free Entry"]
      },
      {
        name: "Hip-Hop Beats Night",
        date: "2024-06-15",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Hip-Hop", "Live DJ", "Dance Floor"]
      }
    ]
  }
];

const artists = [
  {
    title: "Live Performances",
    chip: "Live",
    content: [
      {
        name: "Emma Léo",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Soul", "Pop", "R&B"]
      },
      {
        name: "David Garett",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Rock", "Acoustic", "Cover Songs"]
      },
      {
        name: "Sophia Marquez",
        cover:
          "https://sherlockholmesbordeaux.azurewebsites.net/wp-content/uploads/2024/01/1591348284IMG_20170130_173453_resized_20170831_034628196-scaled.webp",
        chips: ["Jazz", "Blues", "Live"]
      },
      {
        name: "Lucas Ren",
        cover:
          "https://hmsvictory.fr/wp-content/uploads/2024/01/HMS-Victory-Bar-2.webp",
        chips: ["Pop", "Electronic", "Dance"]
      }
    ]
  },
  {
    title: "Acoustic Evenings",
    chip: "Acoustic",
    content: [
      {
        name: "Nora Elm",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Folk", "Indie", "Acoustic"]
      },
      {
        name: "Ian Smith",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["Country", "Soft Rock", "Singer-Songwriter"]
      }
    ]
  },
  {
    title: "Metal Evenings",
    chip: "Acoustic",
    content: [
      {
        name: "Power wold",
        cover:
          "https://www.koifaire.com/upload/15/fiches/37064/album-1/2617.jpg",
        chips: ["Metal", "bouboum", "tete"]
      },
      {
        name: "Amaranth",
        cover:
          "https://www.arkeaarena.com/app/uploads/2022/12/AA-SITE-4IMG-BARS-0.jpg",
        chips: ["classic", "dance", "Singer-Songwriter"]
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
              <div v-for="(item, index) in venues" :key="index">
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
                      :key="entryIndex"
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
              <div v-for="(item, index) in events" :key="index">
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
                      :key="entryIndex"
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
              <div v-for="(item, index) in artists" :key="index">
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
                      :key="entryIndex"
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
