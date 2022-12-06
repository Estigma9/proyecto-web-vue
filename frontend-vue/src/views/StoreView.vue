<template>
    <div>
        <h1>Store</h1>
        <store-carousel></store-carousel>
        <the-footer></the-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import StoreCarousel from '../components/StoreCarousel.vue'
import TheFooter from '@/components/TheFooter.vue'


export default {
  name: 'StoreView',
  components: {
    StoreCarousel,
    TheFooter,
    
  }
}
</script>