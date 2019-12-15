<template>
  <div class="home">

    <div class="bg-full-screen bv-example-row container-header">
    
    <b-col><cpmLogo></cpmLogo></b-col>
    <b-col><sideMenu></sideMenu></b-col>
      
    </div>


  
  </div>
</template>

<script>
// @ is an alias to /src
import sideMenu from '../components/cpmMenu.vue'
import cpmLogo from '../components/cpmLogo.vue'
// import axios from 'axios'


export default {
  name: 'Home',

  components: {
    cpmLogo,
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
