<template>
  <div class="hello">
    <div class="object-card">
      <div class="bar-aligner">
        <div class="bar-name">{{ name }}</div>
        <div>
          <img
            class="bar-pic"
            src="https://i1.sndcdn.com/avatars-La3ky1myLT7T7kJV-PG47lQ-t500x500.jpg"
          />
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div class="location-div">
        <div>env. 5km</div>
        <div>
          <img class="location-pic" src="https://i.stack.imgur.com/uBnTY.png" />
        </div>
        <div>1 Rue du Président Carnot</div>
        <div>Lyon</div>
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
.location-div {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-between;
}
.checked {
  color: orange;
}
.location-pic {
  width: 9rem;
}
.bar-pic {
  width: 10rem;
}
.object-card {
  background-color: #CACACA;
  border-radius: 20px 20px;
  display: flex;
  padding: 1rem;
  width: fit-content;
}
</style>
