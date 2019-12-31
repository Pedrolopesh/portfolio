<template>
  <div>

    <div class="bg-full-screen-1 bv-example-row container-header">
    <div class="bg-mask">


    <b-col><cpmLogo></cpmLogo></b-col>
    <b-col><sideMenu></sideMenu></b-col>
      
      <div class="container text-container-home">
        <h1 class="tile-home">A portfolio created <br> by <br> Pedro Lopes</h1>
      </div>

    </div>
    </div>

    <div class="container">
      <h1 class="title-1">+ informações sobre o site</h1>
      <p class="content-1">Nessa Parte do site você poderá conhecer um pouco mais sobre o criador dos projetos e desse site, também poderá observar mais informações e habilidades sobre Pedro Lopes</p>
    </div>

  <div class="container">
      <h1 class="title-1">Pedro Lopes</h1>
  </div>

  <div class="container-personal">
    <personal></personal>
    <skills></skills>
  </div>

<div class="mt-contact">
      <contact></contact>
</div>

      <foot></foot>

  </div>
</template>

<script>
// @ is an alias to /src
import sideMenu from '../components/cpmMenu.vue'
import cpmLogo from '../components/cpmLogo.vue'
import personal from '../components/cpmPersonal.vue'
import skills from '../components/cpmSkills.vue'
import contact from '../components/cpmContact.vue'
import foot from '../components/cpmFoot.vue'
// import axios from 'axios'


export default {
  name: 'About',

  components: {
    sideMenu,
    cpmLogo,
    personal,
    skills,
    contact,
    foot,
  },
  created() {},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
