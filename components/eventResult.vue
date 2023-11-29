<template>
  <div class="hello">
    <div class="object-card">
      <div>
        <img class="event-pic" src="https://i1.sndcdn.com/avatars-La3ky1myLT7T7kJV-PG47lQ-t500x500.jpg" />
      </div>
      <div class="middle-column">
        <div>{{ name }}</div>
        <div class="participants">
          <div class="pics-list">
            <img class="profile-pic first-pic" src="https://i1.sndcdn.com/avatars-8a5on6KT4DnzS73V-6WtuFg-t500x500.jpg" />
            <img class="profile-pic not-first-pic"
              src="https://i1.sndcdn.com/avatars-ZpQngRRwFrkMHaEm-SfmAUg-t500x500.jpg" />
            <img class="profile-pic last-pic" src="https://i1.sndcdn.com/avatars-o2ptSOh2wRNIYro9-DSiPQg-t500x500.jpg" />
          </div>
          <div>participent</div>
        </div>
      </div>
      <div class="artists">
        <div class="artist">
          <div>
            <img class="profile-pic" src="https://i1.sndcdn.com/avatars-uXT0sChedP5YaSQI-Rbn6QQ-t500x500.jpg" />
          </div>
          <div>Jason Mraz</div>
        </div>
        <div class="artist">
          <div>
            <img class="profile-pic" src="https://i1.sndcdn.com/avatars-N0JOjw6GE8G9T7Bp-hZK5MQ-t500x500.jpg" />
          </div>
          <div>Bruno Mars</div>
        </div>
        <div class="artist">
          <div>
            <img class="profile-pic" src="https://i1.sndcdn.com/avatars-000213750393-gr6zuz-t500x500.jpg" />
          </div>
          <div>Queen</div>
        </div>
      </div>
    </div>
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
.event-pic {
  width: 7rem;
}

.last-pic {
  margin-left: -1rem;
  z-index: 1;
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
}

.artists {}

.artist {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile-pic {
  width: 2rem;
  border-radius: 50%;
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
  height: fit-content;
}

</style>
  