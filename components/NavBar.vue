<template>
  <div class="hello">
    <div class="nav-bar">
      <div>
        <img
          class="logo"
          src="https://avatars.githubusercontent.com/u/40902127?v=4"
        />
      </div>
      <div v-if="!logged" class="connection-buttons">
        <div class="login-button">login</div>
        <div class="register-button">create account</div>
      </div>
      <div v-if="logged" class="connection-buttons">
        
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
.connection-buttons {
  display: flex;
  margin-left: auto;
}
.login-button {
  background-color: #CE149A;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
}
.register-button {
  background-color: #751554;
  padding: 0.4rem;
  border-radius: 30px 30px;
  color: white;
  margin-left: 1rem;
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