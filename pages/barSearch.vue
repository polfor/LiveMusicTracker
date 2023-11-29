<template>
    <NavBar></NavBar>
    <div class="filters">
        <div class="searchbar">
            <input type="text" placeholder="Search bar by name"/>
            <div class="search-button">Search</div>
            <div class="filter-buttons">
                <div class="filter-header">Sort By:</div>
                <select>
                    <option>Distance</option>
                    <option>Rating</option>
                    <option>A/Z</option>
                    <option>Z/A</option>
                </select>
                <div class="filter-header">Filter:</div>
                <div><input type="checkbox" /> Bar</div>
                <div><input type="checkbox" />Concert Hall</div>
                <div><input type="checkbox" />Outdoor Venue</div>
            </div>
        </div>
    </div>
    <div class="promoted-bars">
        <div class="promoted-title">
            Featured:
        </div>
        <carousel :items-to-show="3.5" :wrap-around="true">
            <Slide :key="slide">
                <div class="carousel__item"><barResult name="Hard Rock Cafe"></barResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><barResult name="L'apollo bar"></barResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><barResult name="Lucifer"></barResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><barResult name="Chez Les Filles"></barResult></div>
            </Slide>
            <Slide :key="slide">
                <div class="carousel__item"><barResult name="Edwood Cafe"></barResult></div>
            </Slide>
        </carousel>
    </div>
    <div class="search-contents">
        <div class="search-results">
            <div class="content-title">Results</div>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
            <barResult name="Hard Rock Cafe"></barResult>
        </div>
    </div>
</template>
<script>
</script>

<style scoped>

.content-title {
    font-size: 2rem;
    color: #FFFFFF;
    width: 100%;
}
.promoted-title{
    font-size:  4rem;
    color: #FFFFFF;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
}
.promoted-bars{    
    padding-top: 1rem;
    margin-bottom: 2rem;
    z-index: 3;
}
.filter-header {
    font-size: large;
    font-weight: bold;
}
.filter-buttons{
    display: flex;
    width: 50vw;
    justify-content: space-around;
}
.search-contents{
    width: 80vw;
    margin-top: -30rem;
    padding-top: 30rem;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
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
    height: 5rem;
    background-color: cornflowerblue;
    display: flex;
    padding: 1rem;
    align-items: center;
    z-index: 2;
    position: relative;
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