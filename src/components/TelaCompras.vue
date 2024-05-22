<template>
    <div class="purchase-page">
        <div class="product-details" v-if="product">
            <div class="product-image">
                <img :src="product.image" alt="imagem do produto">
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <p>{{ product.description }}</p>
            <button @click="finalizePurchase">Finalizar Compra</button>
        </div>
        <div v-else>
            <p>Carregando produto...</p>
        </div>
    </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'TelaCompras',
  data () {
    return {
      product: null
    }
  },
  created () {
    const productId = this.$route.params.productId
    axios.get(`/produtos/${productId}`)
      .then((response) => {
        const product = response.data
        product.image = require(`../assets/${product.image}`)
        this.product = product
      })
      .catch((error) => {
        console.error('Erro ao buscar o produto:', error)
      })
  },
  methods: {
    finalizePurchase () {
      alert('Compra finalizada!')
    }
  }
}
</script>

<style scoped>
.purchase-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
}

.product-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

button {
    margin-top: 20px;
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
