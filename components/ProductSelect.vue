<template>
  <div class="product-sorting">
    <label for="product-select" class="visually-hidden">Сортировать продукт</label>
    <select id="product-select" name="products" class="product-sorting__select">
      <option value="">
        по умолчанию
      </option>
      <option value="min-price">
        по цене min (от меньшего к большему)
      </option>
      <option value="max-price">
        по цене max (от большего к меньшему)
      </option>
      <option value="product-name">
        по наименованию
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ProductSelect'
}
</script>

<!--<style scoped>

</style>-->
