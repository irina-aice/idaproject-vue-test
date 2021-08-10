<template>
  <div class="container">
    <div class="grid">
      <div class="grid__form">
        <h2>Добавление товара</h2>
        <FormAddProduct />
      </div>
      <div class="grid__product">
        <ProductSelect />
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import FormAddProduct from '../components/FormAddProduct'
import ProductSelect from '../components/ProductSelect'
import ProductList from '../components/ProductList'

export default {
  components: { ProductList, ProductSelect, FormAddProduct }
}
</script>
