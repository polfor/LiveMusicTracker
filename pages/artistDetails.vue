<template>
    <NavBar></NavBar>
    <div class="artist-details">
        <div class="row">
            <div class="artist-profile-pic"></div>
            <div class="col">
                <div class="artist-name">Bruno Mars</div>
                <div class="artist-followers">10.5M Following</div>
            </div>
        </div>
        <div class="row button-aligner">
            <div class="sample-button"> <font-awesome-icon class="sample-icon" icon="fa-solid fa-music" /> Sample</div>
            <div class="follow-button"><font-awesome-icon class="sample-icon" icon="fa-solid fa-heart" /> Follow</div>
        </div>
        <v-card>
            <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                <v-tab :value="1">Events</v-tab>
                <v-tab :value="2">Activity</v-tab>
                <v-tab :value="3">Reviews</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item :key="1" :value="1">
                    <v-container fluid>
                        <v-row>
                            <v-col>
                               <EventResult class="event-tab"></EventResult>
                               <EventResult class="event-tab"></EventResult>
                            </v-col>    
                        </v-row>
                    </v-container>
                </v-window-item>
                <v-window-item :key="2" :value="2">
                    <v-container fluid>
                        <v-row>
                            <v-col>
                                <div class="activity">
                                    <font-awesome-icon class="activity-icon" icon="fa-solid fa-heart" />
                                    <div class="activity-image"/>
                                    <div>
                                        Fête de Village de parempuyre
                                    </div>
                                </div>
                                <div class="activity">
                                    <font-awesome-icon class="activity-icon" icon="fa-solid fa-heart" />
                                    <div class="activity-image"/>
                                    <div>
                                        Fête de Village de parempuyre
                                    </div>
                                </div>
                                <div class="activity">
                                    <font-awesome-icon class="activity-icon" icon="fa-solid fa-heart" />
                                    <div class="activity-image"/>
                                    <div>
                                        Fête de Village de parempuyre
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
                <v-window-item :key="3" :value="3">
                    <v-container fluid>
                        <v-row>
                            <v-col >
                                
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
            </v-window>
        </v-card>
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    data: () => ({
      tab: null,
    }),
  }
</script>

<style scoped>
.activity-icon {
    margin-left: 5rem;
    margin-right: 2rem;
    color: #a7177e  ;
}
.activity-image {
    width: 5rem;
    height: 5rem;
    background-image: url("https://www.parempuyre.fr/fileadmin/user_upload/fichiers/Affiche_cirque_2.jpg");
    background-size: cover;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
}
.activity {
    border: solid #a7177e 0.1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5rem;
}
.event-tab {
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
}
.button-aligner {
    margin-top: 3rem;
    margin-left: 3rem;
}

.follow-button {
    border-radius: 45px;
    background-color: #a7177e;
    padding: 1rem;
    font-size: 2.5rem;
    color: #ffffff;
    margin-left: 1rem;
    cursor: pointer;
}

.follow-button:hover {
    background-color: #cf249f;
}

.sample-button {
    border-radius: 45px;
    background-color: #a7177e;
    padding: 1rem;
    font-size: 2.5rem;
    color: #ffffff;
    cursor: pointer;
}

.sample-button:hover {
    background-color: #cf249f;
}

.artist-followers {
    font-size: 2rem;
    color: #4c4c4cc8;
    margin-left: 2rem;
}

.col {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}

.artist-name {
    font-size: 5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
}

.artist-details {
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
}

.artist-profile-pic {
    background-image: url("https://e-cdn-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500-000000-80-0-0.jpg");
    background-size: cover;
    height: 30rem;
    width: 30rem;
    margin-left: 5rem;
    border-radius: 100%;
    margin-top: 3rem;
}
</style>