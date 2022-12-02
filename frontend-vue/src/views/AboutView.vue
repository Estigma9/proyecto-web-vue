<template>
  <div class="about">
    <h1>This is an about page</h1>
    <the-footer></the-footer>
  </div>
</template>


<script>
// @ is an alias to /src
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'AboutView',
  components: {
    TheFooter,
  }
}
</script>