<template>
  <div class="hello">
    <div class="nav-bar">
      <nuxt-link to="/">
        <img
          class="logo"
          src="https://cdn.discordapp.com/attachments/1080429253750964237/1128262869402792027/LMT-1.png?ex=654a092e&is=6537942e&hm=598fbec5afdbb95ec83043700f50453bfd1ee489bc668b71680c1eebe6d0ebfd&"
        />
      </nuxt-link>
      <div class="nav-aligner">
        <nuxt-link to="/barSearch" class="nav-button">Venues <font-awesome-icon class="rotate-down" icon="fa-solid fa-angle-up" /></nuxt-link>
        <nuxt-link to="/artistSearch" class="nav-button">Artists <font-awesome-icon class="rotate-down" icon="fa-solid fa-angle-up" /></nuxt-link>
        <nuxt-link to="/eventSearch" class="nav-button">Events <font-awesome-icon class="rotate-down" icon="fa-solid fa-angle-up" /></nuxt-link>
      </div>
      <div class="connection-buttons">
        <nuxt-link to="/" class="logout-button">logout</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['logged'],
    setup(props) {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-aligner{
  display: flex;
  justify-content: space-around;
  width: 50vw;
  height: 100%;
}
.connection-buttons {
  display: flex;
  margin-left: auto;
  font-size: 1.6rem;
}
.logout-button {
  background-color: #a7177e;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  cursor: pointer;
  margin-right: 5vw;
  padding: 0.7rem;
  font-weight: 300;
  text-decoration: none;
  transition: 500ms;
}
.logout-button:hover {
  background-color: #cf249f;
  transition: 500ms;
}
.nav-button {
  background-color: #2D0C2D;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  height: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 3.2rem;
}

.rotate-down {
  font-size: 2.5rem;
  transition: all 0.4s ease;
  margin-left: 0.5rem;
  margin-top: 0.9rem;
}

.nav-button .rotate-down:hover {
  transform: rotateZ(-180deg);
}
.logo {
  height: 5rem;
}
.nav-bar {
  background-color: #2D0C2D;
  height: 8rem;
  display: flex;
  padding: 1rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
  width: 99%;
  position: sticky;
  top: 0;
  align-items: center;
}
</style>