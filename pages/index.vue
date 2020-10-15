<template>
  <div class="container">
    <banner/>
    <div class="content-wrapper">
      <br>
      <h1 class="title">PÁGINA AMP</h1>
      <input type="text" class="input" placeholder="Ingrese Filtro"/>
      <button>Buscar</button>
      <br>
      <br>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero animi exercitationem aliquam voluptatum officia, dicta labore! Optio, corrupti. Praesentium labore sit officiis quaerat enim eveniet velit similique fugiat beatae minima?</p>
      <amp-carousel type="slides" width="400" height="300" layout="responsive">
        <amp-img
          src="https://wallpaperaccess.com/full/1409299.jpg"
          width="400"
          height="300"
          layout="responsive"
          alt="a sample image"
        />
        <amp-img
          src="https://www.xtrafondos.com/wallpapers/counter-strike-global-offensive-csgo-3200.jpg"
          width="400"
          height="300"
          layout="responsive"
          alt="a sample image"
        />
        <amp-img
          src="https://www.xtrafondos.com/wallpapers/counter-strike-global-offensive-csgo-3199.jpg"
          width="400"
          height="300"
          layout="responsive"
          alt="a sample image"
        />
        <amp-img
          src="https://besthqwallpapers.com/Uploads/18-1-2018/37714/thumb2-counter-strike-global-offensive-4k-valve-cs-go-counter-strike.jpg"
          width="400"
          height="300"
          layout="responsive"
          alt="a sample image"
        />
      </amp-carousel>
    </div>
  </div>
</template>

<script>

import Banner from '@/components/Banner.vue'

export default {
  components: 
  {
    Banner
  }
}
</script>

<style lang="scss">
  .parrafo
{
  border-left: 6px solid #4da6ff;
  text-align: center;
}
amp-carousel {
  margin: 0;
}
amp-img
{
    margin: 5px;
}
.input {
  text-align: left;
}
.content-wrapper {
  padding: 60px 60px;
  .title {
    margin-bottom: 30px;
    text-align: center;
  }
}
@media screen and (max-width: 430px) {
  .content-wrapper {
    padding: 10px 0;
  }
}
</style>