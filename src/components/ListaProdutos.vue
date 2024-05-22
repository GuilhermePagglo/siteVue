<template>
  <div class="product-catalog">
    <div v-for="product in products" :key="product.id" class="product">
      <div class="product-image">
        <img :src="product.image" alt="imagem">
      </div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <button @click="buyProduct(product.id)">Comprar</button>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'ProductCatalog',
  data () {
    return {
      products: []
    }
  },
  created () {
    axios.get('/produtos')
      .then((response) => {
        this.products = response.data.map(product => ({
          ...product,
          image: require(`../assets/${product.image}`)
        }))
      })
      .catch((error) => {
        console.error('Erro ao buscar os produtos:', error)
      })
  },
  methods: {
    buyProduct (productId) {
      this.$router.push({ name: 'compra', params: { productId } })
    }
  }
}
</script>

<style scoped>
.product-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product {
  width: calc(25% - 10px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product h3 {
  margin-top: 10px;
}

.product p {
  font-weight: bold;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #329632;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #267826;
}
</style>
