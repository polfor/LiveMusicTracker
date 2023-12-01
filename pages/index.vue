<template>
    <div class="welcome-banner"></div>
    <div class="welcome-title">
        Welcome to Live Music Tracker
    </div>
    <div class="button-aligner">
        <nuxt-link to="/barSearch" class="button-anim register-button" style="--color: #5f17a7;" id="registerbutton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Join Us
        </nuxt-link>
        <nuxt-link to="/barSearch" class="button-anim login-button" style="--color: #280b41;" id="loginbutton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
        </nuxt-link>
        <!-- <nuxt-link to="/barSearch" class="register-button">Join Us</nuxt-link>
        <nuxt-link to="/barSearch" class="login-button">Already have an account?</nuxt-link> -->
    </div>
    <div class="welcome-text">
        <div class="welcome-text-title">About Us</div>
        <div class="welcome-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel viverra dui. Cras luctus luctus accumsan. In ultrices justo a nunc fermentum, ac vulputate augue porttitor. Vivamus porttitor libero sed velit tempor imperdiet. Morbi congue interdum ante, nec euismod nisl placerat eget. Maecenas volutpat porttitor enim, in blandit risus tristique a. Cras fringilla nisl a dolor condimentum, quis malesuada nisl tempor. Cras cursus metus eget felis interdum ullamcorper. Pellentesque diam ex, fermentum in aliquam sit amet, facilisis vel enim.<br/>
Fusce vel feugiat turpis, at mattis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sollicitudin neque vitae elit ornare, quis pharetra ante hendrerit. Morbi non metus tempus, consequat sem eget, ullamcorper ante. Mauris hendrerit leo id lectus dapibus iaculis. Praesent tempor ornare erat, vitae gravida neque fermentum varius. Ut pellentesque diam arcu, ac finibus massa aliquet id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam interdum lacinia enim sed volutpat. Curabitur nulla diam, lobortis eu eros at, dignissim ultricies lorem. Mauris pulvinar magna felis, eu laoreet odio convallis ac.<br/>
Integer feugiat sagittis mauris, quis condimentum ex pellentesque sit amet. In pulvinar sagittis massa, lacinia vulputate dui pharetra ut. Etiam mollis elementum ornare. Etiam tempus lectus in blandit vehicula. Pellentesque dictum, velit auctor malesuada ultrices, sapien lectus ultrices massa, in sollicitudin mi dui non mauris. Sed rutrum placerat justo, in posuere eros porta quis. Duis commodo arcu sem, at tristique dolor pharetra posuere. In vitae est ut metus sagittis facilisis. Donec sed velit a justo ullamcorper accumsan non a nulla. Aenean odio velit, ullamcorper nec varius quis, aliquet eget purus. Quisque hendrerit mattis mi. Nullam consectetur lectus non dolor hendrerit luctus.</div>
    </div>
</template>

<style scoped>
.welcome-banner{
    height: 90vh;
    background-image: url("/temp_hero.jpg");
    background-size: cover;
    z-index: 0;
}
.welcome-title {
    font-size: 5rem;
    color: #FFFFFF;
    background-color: rgba(160, 160, 160, 0.2);
    margin-top: -45vh;
    width: fit-content;
    display: flex;
    box-shadow: 0px 0px 15px 10px rgba(160, 160, 160, 0.2);
    margin-left: 5vw;
    z-index: 1;
}
.welcome-text {
    margin-top: 20vh;
    color: #2D0C2D;
    margin-left: 5vw;
}
.welcome-text-title {
    font-size: 4rem;
}
.welcome-text-content {
    font-size: 2rem;
    margin-top: 2rem;
    margin-right: 5vw;
}

.button-aligner {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: start;
    margin-top: 5rem;
}

.register-button{
    margin-left: 5vw;
}

.login-button {
    margin-left: 15vw;
}
.button-anim {
  position: relative;
  padding: 16px 30px;
  font-size: 1.5rem;
  color: var(--color);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  text-shadow: 0 0 15px var(--color);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  z-index: 1;
  background-color: #FFFFFF;
}

.button-anim:hover {
  color: #fff;
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 0 0 0px var(--color);
}

.button-anim::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color);
  z-index: -1;
  transform: scale(0);
  transition: 0.5s;
}

.button-anim:hover::before {
  transform: scale(1);
  transition-delay: 0.5s;
  box-shadow: 0 0 10px var(--color),
    0 0 30px var(--color),
    0 0 60px var(--color);
  border-radius: 20px;
}

.button-anim span {
  position: absolute;
  background: var(--color);
  pointer-events: none;
  border-radius: 2px;
  box-shadow: 0 0 10px var(--color),
    0 0 20px var(--color),
    0 0 30px var(--color),
    0 0 50px var(--color),
    0 0 100px var(--color);
  transition: 0.5s ease-in-out;
  transition-delay: 0.25s;
}

.button-anim:hover span {
  opacity: 0;
  transition-delay: 0s;
}

.button-anim span:nth-child(1),
.button-anim span:nth-child(3) {
  width: 40px;
  height: 4px;
}

.button-anim:hover span:nth-child(1),
.button-anim:hover span:nth-child(3) {
  transform: translateX(0);
}

.button-anim span:nth-child(2),
.button-anim span:nth-child(4) {
  width: 4px;
  height: 40px;
}

.button-anim:hover span:nth-child(1),
.button-anim:hover span:nth-child(3) {
  transform: translateY(0);
}

.button-anim span:nth-child(1) {
  top: calc(50% - 2px);
  left: -50px;
  transform-origin: left;
}

.button-anim:hover span:nth-child(1) {
  left: 50%;
}

.button-anim span:nth-child(3) {
  top: calc(50% - 2px);
  right: -50px;
  transform-origin: right;
}

.button-anim:hover span:nth-child(3) {
  right: 50%;
}

.button-anim span:nth-child(2) {
  left: calc(50% - 2px);
  top: -50px;
  transform-origin: top;
}

.button-anim:hover span:nth-child(2) {
  top: 50%;
}

.button-anim span:nth-child(4) {
  left: calc(50% - 2px);
  bottom: -50px;
  transform-origin: bottom;
}

.button-anim:hover span:nth-child(4 ) {
  bottom: 50%;
}
</style>