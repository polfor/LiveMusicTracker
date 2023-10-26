<template>
  <div class="hello">
    <div class="nav-bar">
      <nuxt-link to="/">
        <img
          class="logo"
          src="https://avatars.githubusercontent.com/u/40902127?v=4"
        />
      </nuxt-link>
      <div class="nav-aligner">
        <nuxt-link to="/barSearch" class="nav-button">Venues</nuxt-link>
        <nuxt-link to="/artistSearch" class="nav-button">Artists</nuxt-link>
        <nuxt-link to="/eventSearch" class="nav-button">Events</nuxt-link>
      </div>
      <div class="connection-buttons">
        <div class="login-button">login</div>
        <div class="register-button">create account</div>
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
}
.connection-buttons {
  display: flex;
  margin-left: auto;
  font-size: 1.6rem;
}
.login-button {
  background-color: #CE149A;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  cursor: pointer;
}
.nav-button {
  background-color: #CE149A;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
}
.register-button {
  background-color: #751554;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
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
  width: 98.5vw;
  position: absolute;
  top: 0;
  align-items: center;
}
</style>