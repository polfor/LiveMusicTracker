<template>
    <NavBar></NavBar>
    <div class="filters">
        <div class="searchbar">
            <input type="text" placeholder="Search artist by name"/>
            <div class="search-button">Search</div>
        </div>
    </div>
    <div class="promo Bars">
        <carousel :items-to-show="3.5" :wrap-around="true">
            <Slide :key="slide">
                <div class="carousel__item"><artistResult name="Johny Hallyday"></artistResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><artistResult name="Bruno Mars"></artistResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><artistResult name="Slayer"></artistResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><artistResult name="Queen"></artistResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><artistResult name="M. Pokora"></artistResult></div>
            </Slide>
        </carousel>
    </div>
    <div class="search-contents">
        <div class="search-results">
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
            <artistResult name="Johny Hallyday"></artistResult>
        </div>
    </div>
</template>
<script>
</script>

<style scoped>
.search-contents{
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    background-color: #EB569D;
}
.search-results{
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: space-around;
    width: 100%;
    row-gap: 1rem;
}
.filters{
    margin-top: 10rem;
    height: 5rem;
    background-color: cornflowerblue;
    display: flex;
    padding: 1rem;
    align-items: center;
}
.searchbar {
 display: flex;
 padding: 1rem;
}
.search-button{
    border-radius: 20px 20px;
    background-color: brown;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
}
.carousel__item {
  min-height: 200px;
  width: fit-content;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>