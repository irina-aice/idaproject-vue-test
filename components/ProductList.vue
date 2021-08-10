<template>
  <ul class="product-list" @button-submitted="addNewProduct">
    <Product />
    <Product />
    <Product />
    <Product />
  </ul>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      products: []
    }
  },
  methods: {
    addNewProduct (product) {
      console.log(product)
      this.products.push(product)
    }
  }
}
</script>

<!--<style scoped>

</style>-->
