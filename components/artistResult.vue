<template>
  <div class="hello">
    <nuxt-link to="/artistDetails" class="object-card">
      <div>
        <img
          class="artist-pic"
          src="https://i1.sndcdn.com/avatars-La3ky1myLT7T7kJV-PG47lQ-t500x500.jpg"
        />
      </div>
      <div class="middle-column">
        <div>{{ name }}</div>
        <div class="participants">
          <div class="pics-list">
            <img
              class="profile-pic first-pic"
              src="https://i1.sndcdn.com/avatars-8a5on6KT4DnzS73V-6WtuFg-t500x500.jpg"
            />
            <img
              class="profile-pic not-first-pic"
              src="https://i1.sndcdn.com/avatars-ZpQngRRwFrkMHaEm-SfmAUg-t500x500.jpg"
            />
            <img
              class="profile-pic last-pic"
              src="https://i1.sndcdn.com/avatars-o2ptSOh2wRNIYro9-DSiPQg-t500x500.jpg"
            />
          </div>
          <div>suivent cet artiste</div>
        </div>
      </div>
      <div class="genres">
        <div class="genre">
          <div>
            <img
              class="profile-pic"
              src="https://e-cdn-images.dzcdn.net/images/artist/a8739ba74c88a584cd6cbcd556f40b63/264x264-000000-80-0-0.jpg"
            />
          </div>
          <div>Jazz</div>
        </div>
        <div class="genre">
          <div>
            <img
              class="profile-pic"
              src="https://olliboca.fau.edu/wordpress/wp-content/uploads/2021/08/sabatella-rsb.jpg"
            />
          </div>
          <div>Folk</div>
        </div>
        <div class="genre">
          <div>
            <img
              class="profile-pic"
              src="https://i.ebayimg.com/images/g/fVAAAOSwnlBjZe8z/s-l500.jpg"
            />
          </div>
          <div>Bluegrass</div>
        </div>
      </div>
      <div class="next-event">
        <div>Hoedown Showdown</div>
        <div>
          <img
            class="event-preview-pic"
            src="https://i1.sndcdn.com/artworks-jbrpZd8sDOGb1DtD-HcAqoA-t500x500.jpg"
          />
        </div>
        <div>in 2 wks</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['name'],
    setup(props) {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-preview-pic {
  width: 4rem;
}
.next-event {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
}
.artist-pic {
  width: 7rem;
}
.last-pic {
  margin-left: -1rem;
  z-index: 1;
  margin-right: 1rem;
}
.not-first-pic {
  margin-left: -1rem;
  z-index: 2;
}
.first-pic {
  z-index: 3;
}
.pics-list {
  display: flex;
}
.middle-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-left: 1rem;
  margin-right: 5rem;
}
.genres {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.genre {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-pic {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: contain;
}
.participants {
  display: flex;
  align-items: center;
}
.object-card {
  background-color: #CACACA;
  border-radius: 20px 20px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-decoration: none;
  color: #FFFFFF;
}
</style>
