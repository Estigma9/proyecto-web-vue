<template>
  <div class="home">
    <div id="logout" class="m-0 pt-0 d-flex justify-content-end pr-6">
        <button
            class="btn my-2 my-sm-0"
            type="submit"
            @click.prevent="logOut"
        >LogOut</button>
    </div>

    <mi-intro></mi-intro>
    <my-services></my-services>
    <the-footer></the-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MiIntro from '@/components/MiIntro.vue'
import MyServices from '@/components/MyServices.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'CheckedView',
  components: {
    MiIntro,
    MyServices,
    TheFooter,
  },

  data(){
    return{

    }
  },

  methods: {
    logOut(){
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        this.$router.push("/");
    },
  },

}
</script>

<style scoped>

#logout{
    background: #a0b3b038;
    width: 100%;
    padding-bottom: 15px;

}

button {
    background: #1ab188;
    color: #fff;
    border: #1ab188;
    height: 50px;
    width: 100px;
    font-size: 20px;
    
}



</style>


