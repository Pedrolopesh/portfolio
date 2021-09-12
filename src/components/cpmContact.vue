<template>
    <div>
        <div class="bg-full-screen-contact bv-example-row container-header mt-10">
          <div class="bg-mask">

            <b-container class="bv-example-row container-contact">
              <h1 class="title-2 cw">Entre em contanto</h1>
              <b-row>

                <b-col>
                  <div class="container-left"> 
                    <h4 class="form-input mt-10">Name</h4>
                    <b-form-input v-model="name" placeholder="Name"></b-form-input>
                    <!-- <div class="mt-2">Value: {{ text }}</div> -->


                    <h4 class="form-input mt-10">E-mail</h4>
                    <b-form-input v-model="data.email" id="input-invalid" :state="checkEmailValid()" placeholder="email"></b-form-input>
                      <!-- @keyup="callValidation()" -->




                    <!-- <b-form-input
                      id="input-live"
                      v-model="name"
                      :state="nameState"
                      aria-describedby="input-live-help input-live-feedback"
                      placeholder="E-mail"
                      trim
                    ></b-form-input> -->

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <!-- <b-form-invalid-feedback id="input-live-feedback">
                      Preencha um email válido
                    </b-form-invalid-feedback> -->



                    <h4 class="form-input mt-10">Mensagem</h4>
                    <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>

                  <div class="ac">
                    <b-button variant="info" class="ac sendform-button mt-3" @click="callValidation()">Enviar</b-button>
                  </div>
                  <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
                  </div>
                </b-col>


                <b-col>
                  <div class="mt-10 ml-10">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884.0684262759233!2d-48.525227770736585!3d-27.58504271027366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527385c3e0b55a5%3A0xc317eb275fc4aac!2sR.%20Lauro%20Linhares%2C%20628-638%20-%20Trindade%2C%20Florian%C3%B3polis%20-%20SC%2C%2088036-001!5e0!3m2!1spt-BR!2sbr!4v1576707322602!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            
          </div>
        </div>
    </div>
</template>

<script>
export default {

  components: {},
  created() {
    console.log(this.data.email)
  },
  data: () => ({
    data: {
      email:''
    },
    name: '',
    text: '',
    formValid: false,
  }),
  mounted() {
    
  },
  methods: {
    callValidation(){
      this.formValid = true;

      if(this.formValid){
          this.formValid = this.checkEmailValid();
      }
    },

    checkEmailValid(){
      var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailInput = re.test(this.data.email);
      // console.log('duhsdushdu' + bah)


      if(emailInput==""){
        return null
      }
      if(!emailInput){
        // this.warning = "Email Inválido";
        // this.warningShow = true;
        
        // console.log(this.warningShow)
        // console.log('Email está incorreto!')
        return false
      } 
      if(emailInput){
        return true
      }


      else{
        return true
      }

    }
  },
  computed: {
    nameState() {

        // return this.name.length > 2 ? true : false
      }
  },
  watch: {}
}
</script>
