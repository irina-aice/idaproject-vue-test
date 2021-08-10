<template>
  <li class="product">
    <img :src="image" alt="Фото товара">
    <div class="product__information">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>{{ price }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NewProduct'
}
</script>

<!--<style scoped>

</style>-->
