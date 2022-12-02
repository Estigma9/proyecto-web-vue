<template>
    <div>
        <h1>Store</h1>
        <the-footer></the-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'StoreView',
  components: {
    TheFooter,
  }
}
</script>