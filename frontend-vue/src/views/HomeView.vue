<template>
  <div class="home">
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
  name: 'HomeView',
  components: {
    MiIntro,
    MyServices,
    TheFooter,
  }
}
</script>
