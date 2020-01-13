<template>
  <div class="mt-8">

<b-button variant="success" @click="animation()">1</b-button>
<b-button variant="success" @click="animation2()">2</b-button>
<b-button variant="success" @click="animation3()">3</b-button>

<b-button variant="danger" @click="resetAnimation()">rest</b-button>

<span class="locator" id="firstLocator">PRIMEIRO</span>

<div class="container-service container">
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

<div class="container-service container mt-5" id="secondLocator">
fdsfdfd
{{positions.second}}

<span class="locator" id="secondLocator">SEGUNDO</span>

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

<span class="locator" id="thirdLocator">TERCEIRO</span>

<div class="container-service container mt-5">
{{positions.third}}
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
    positions: { 
      first:{positon:0, checked: false},
      second:{positon:0, checked: false},
      third:{positon:0, checked: false}
      },
  }),
  mounted() {
    this.getPositions();
    // this.animation()
  },
  methods: {

    getPositions(){
       var firstLocator = document.querySelector("#firstLocator");
       console.log("1) first= "+firstLocator.offsetTop)
       this.positions.first = firstLocator.offsetTop;

       var secondLocator = document.querySelector("#secondLocator");
       console.log("2) second= "+secondLocator.offsetTop)
       this.positions.second = secondLocator.offsetTop;


       var thirdLocator = document.querySelector("#thirdLocator");
       console.log("3) third= "+thirdLocator.offsetTop)
       this.positions.third = thirdLocator.offsetTop;

       window.addEventListener("scroll", this.checkScroll);
    },


    checkScroll(){
      // console.log(window.pageYOffset)
      if(window.pageYOffset > (this.positions.first - 1000)){
        this.animation()
      }

      // window.pageYOffset > this.positions.first
      
      if(window.pageYOffset > (this.positions.second - 800)){
        this.animation2()
      } 
      
      if(window.pageYOffset > (this.positions.third -800)){
        console.log("3")
        this.animation3()
      }
    },

      
      
      
      
      
      
      
      animation(){
        var first = document.querySelector('#first-card')
        first.classList.add('slide-animation-1')
  
        // var second = document.querySelector('#second-card')
        // second.classList.add('slide-animation-2')
  
        // var first = document.querySelector('#third-card')
        // first.classList.add('slide-animation-3')
  
        // setTimeout( () => {this.animation2()}, 1000);
        // setTimeout( () => {this.animation3()}, 2000);

        // if(window.pageYOffset > (this.positions.sencond)){
          // console.log("2")
          // this.animation2()
        // }
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
        
        var second = document.querySelector('#second-card')
        second.classList.remove('slide-animation-2')

        var third = document.querySelector('#third-card')
        third.classList.remove('slide-animation-3')
      },

  },
  computed: {},
  watch: {}
}
</script>