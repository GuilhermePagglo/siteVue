<template>
    <div class="product-catalog">
        <div v-for="product in products" :key="product.id" class="product">
            <div class="product-image">
                <img :src="product.image" alt="imagem">
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import config from '../config/config'
import axios from 'axios'

export default {
  name: 'ProductCatalog',
  data () {
    return {
      products: []
    }
  },
  created () {
    axios.get(`${config.apiURL}/produtos`)
      .then((response) => {
        this.products = response.data.map(product => ({
          ...product,
          image: require(`../assets/${product.image}`)
        }))
      })
      .catch((error) => {
        console.error('Erro ao buscar os produtos:', error)
      })
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
}

.product-image {
    width: 100%;
    height: 200px; /* Defina a altura desejada para as imagens */
    overflow: hidden; /* Evita que a imagem ultrapasse a altura especificada */
}

.product img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Garante que a imagem se ajuste dentro do contêiner, mantendo sua proporção original */
}

.product h3 {
    margin-top: 10px;
}

.product p {
    font-weight: bold;
}
</style>
