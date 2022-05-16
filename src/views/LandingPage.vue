<template>
<v-sheet class="stackSheet" color="black" style="position:absolute; width:100%;">
  <v-parallax
    height="200"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  <v-sparkline
      :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
    loop
    ></v-sparkline>
    </v-parallax>
    <div class="container">
      <video class="bg-video" autoplay loop muted>
        <source src="../assets/3152739485.mp4" type="video/mp4" />
      </video>
      <p class="text"> Sea Explorers</p>
    </div>
     <img src="../assets/img/3.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/4.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/5.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/6.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/7.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/8.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/9.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/10.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/11.png" style="position: relative; width: 100%; height: auto;">
     <img src="../assets/img/12.png" style="position: relative; width: 100%; height: auto;">

</v-sheet>
  
</template>
<script>
  const gradients = [
    ['#fff'],
    ['#fff'],
    ['blue', 'green', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 5, 5, 10, 3, 5, 0, 0, 1, 5, 4, 3, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* Container should be full height and full width */
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.container > .bg-video {
  width: 100%;
  height: 100%;
}

/* background-color and color should be the same as the below otherwise it won't work */
.container > .text {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: #000;
  color: #fff;
  font-weight: 900;
  font-size: 200px;
  font-family: sans-serif;
  /* Mix Blend Mode does the all magic */
  mix-blend-mode: multiply;
  user-select: none;
}

</style>