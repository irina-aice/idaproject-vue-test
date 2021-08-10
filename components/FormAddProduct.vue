<template>
  <form action="" class="form" @submit.prevent="onSubmit">
    <ul class="form__list">
      <li>
        <label for="title">Наименование товара</label>
        <input id="title" v-model="title" placeholder="Введите наименование товара" required>
      </li>
      <li>
        <label for="description">Описание товара</label>
        <textarea id="description" v-model="description" placeholder="Введите описание товара"></textarea>
      </li>
      <li>
        <label for="image">Ссылка на изображение товара</label>
        <input id="image" v-model="image" placeholder="Введите ссылку" required>
      </li>
      <li>
        <label for="price">Цена товара</label>
        <input id="price" v-model="price" placeholder="Введите цену" required>
      </li>
    </ul>
    <button type="submit">
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormAddProduct',
  data () {
    return {
      title: '',
      description: '',
      image: '',
      price: ''
    }
  },
  methods: {
    onSubmit () {
      const newProduct = {
        title: this.title,
        description: this.description,
        image: this.image,
        price: this.price
      }
      this.$emit('button-submitted', newProduct)

      this.title = ''
      this.description = ''
      this.image = ''
      this.price = ''
    }
  }
}
</script>

<!--<style scoped>
</style>-->
