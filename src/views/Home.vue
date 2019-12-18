<template>
  <div class="home">

    <div class="bg-full-screen bv-example-row container-header">
    <div class="bg-mask">


    <b-col><cpmLogo></cpmLogo></b-col>
    <b-col><sideMenu></sideMenu></b-col>
      
      <div class="container text-container-home">
        <h1 class="tile-home">A portfolio created <br> by <br> Pedro Lopes</h1>
      </div>

    </div>
    </div>

    <div class="container">
      <h1 class="title-1">Titulo Bonito</h1>
      <p class="content-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem saepe repudiandae commodi quas recusandae sint? Deleniti quod in voluptatem facilis? Odio expedita voluptate, inventore fuga reprehenderit cupiditate consectetur, ipsa totam iure atque quam officiis rerum, excepturi magnam cum itaque nisi iste veritatis dicta eaque. Cupiditate, deserunt? Sint, itaque commodi?</p>
    </div>

  <div class="container">
      <h1 class="title-1">Projetos</h1>
  </div>

      <carousel></carousel>

      <contact></contact>

      <foot></foot>

  </div>
</template>

<script>
// @ is an alias to /src
import sideMenu from '../components/cpmMenu.vue'
import carousel from '../components/cpmCarousel.vue'
import contact from '../components/cpmContact.vue'
import foot from '../components/cpmFoot.vue'
import cpmLogo from '../components/cpmLogo.vue'
// import axios from 'axios'


export default {
  name: 'Home',

  components: {
    contact,
    carousel,
    cpmLogo,
    foot,
    sideMenu
  },
  created() {},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
