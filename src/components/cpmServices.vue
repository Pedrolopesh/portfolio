<template>
  <div class="mt-8">

<div class="container-service container">
<b-button variant="success" @click="animation()">Button</b-button>
<b-button variant="danger" @click="resetAnimation()">Button</b-button>
    <b-row class="fixed-row" id="first-card">
      <b-col align-self="start">
        <div class="container-card">
            <div class="bg-image-card">
                <div class="bg-mask">
                    <h1 class="content-card">
                        Criação e elaboração de artes gráficas para marketing e brandings
                    </h1>
                </div>
            </div>
        </div>
      </b-col>
      
    </b-row>
</div>

<div class="container-service container mt-5" id="teucuderola">
fdsfdfd
{{positions.first}}
    <b-row class="fixed-row-midle" id="second-card">
      <b-col align-self="center">
        <div class="container-card ac">
            <div class="bg-image-card ac">
                <div class="bg-mask">
                    <h1 class="content-card">
                        Desenvolvimento de web sites para visualização e interação com usuário
                    </h1>
                </div>
            </div>
        </div>
      </b-col>
      
    </b-row>
</div>

<div class="container-service container mt-5" id="teucuderola2">
{{positions.second}}
    <b-row class="fixed-row-end" id="third-card">
      <b-col align-self="end">
        <div class="container-card ml-a">
            <div class="bg-image-card ml-a">
                <div class="bg-mask">
                    <h1 class="content-card">
                        Desenvolvimento de conteúdos para web
                    </h1>
                </div>
            </div>
        </div>
      </b-col>
      
    </b-row>
</div>

<button @click="animation()">click</button>
  </div>
</template>

<script>
export default {
  name: 'Services',

  components: {},
  created() {
     
  },
  data: () => ({
    card:'',
    positions: { first:{positon:0, checked: false}},
  }),
  mounted() {
    this.getPositions();
    // this.animation()
  },
  methods: {

    getPositions(){
       var testDiv = document.querySelector("#teucuderola");
       console.log('sas')
       this.positions.first = testDiv.offsetTop;

       var testDiv2 = document.querySelector("#teucuderola2");
       console.log('sas')
       this.positions.second = testDiv2.offsetTop;
      // alert( testDiv.offsetTop);


       window.addEventListener("scroll", this.checkScroll);
    },
    checkScroll(){
      console.log(window.pageYOffset)
      if(window.pageYOffset > (this.positions.first - 1500)){
        this.animation()
      }
    },

    alertTeuCu(){
      
      alert("teu cu")
    },

      
      
      
      
      
      
      
      animation(){
        var first = document.querySelector('#first-card')
        first.classList.add('slide-animation-1')
  
        // var second = document.querySelector('#second-card')
        // second.classList.add('slide-animation-2')
  
        // var first = document.querySelector('#third-card')
        // first.classList.add('slide-animation-3')
  
        setTimeout( () => {this.animation2()}, 1000);
        setTimeout( () => {this.animation3()}, 2000);
      },

    animation2(){
      var second = document.querySelector('#second-card')
      second.classList.add('slide-animation-2')
    },

    animation3(){
      var third = document.querySelector('#third-card')
      third.classList.add('slide-animation-3')
    },

      resetAnimation(){
        var first = document.querySelector('#first-card')
        first.classList.remove('slide-animation-1')
        
        var first = document.querySelector('#second-card')
        first.classList.remove('slide-animation-2')

        var first = document.querySelector('#third-card')
        first.classList.remove('slide-animation-3')
      },

  },
  computed: {},
  watch: {}
}
</script>