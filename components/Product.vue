<template>
  <li class="product">
    <a href="#">
      <img :src="require(`~/assets/img/${image}`)" alt="Фото товара">
      <div class="product__information">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      image: 'product-image.jpg',
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.'
    }
  }
}
</script>

<!--
<style scoped>
</style>
-->

<!--
<template>
  <li class="product">
    <img src="../assets/img/product-image.jpg" alt="Фото товара" />
    <div class="product__information">
      <h3>Наименование товара</h3>
      <p>
        Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
        несколько строк
      </p>
      <p>10 000 руб.</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Product'
}
</script>

&lt;!&ndash;
<style scoped>
</style>
&ndash;&gt;-->
