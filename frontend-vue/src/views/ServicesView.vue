<template>
    <div>
        <h1>Services</h1>
        <mi-intro></mi-intro>
        <the-footer></the-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import MiIntro from '@/components/MiIntro.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'ServicesView',
  components: {
    MiIntro,
    TheFooter,
  }
}
</script>

