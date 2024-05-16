<template>
    <div class="product-catalog">
        <div v-for="product in products" :key="product.id" class="product">
            <div class="product-image">
                <img :src="product.image" alt="imagem" >
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCatalog',
  data () {
    return {
      products: [
        { id: 1, name: 'Playstation 5', price: '$400', image: require('../assets/produtoPs5.png') },
        { id: 2, name: 'Notebook', price: '$300', image: require('../assets/produtoNotebook.png') },
        { id: 3, name: 'Iphone', price: '$700', image: require('../assets/produtoIphone.jpg') },
        { id: 4, name: 'Câmera', price: '$700', image: require('../assets/produtoCamera.png') },
        { id: 5, name: 'Carregador', price: '$50', image: require('../assets/produtoCarregador.jpg') },
        { id: 6, name: 'Fone', price: '$100', image: require('../assets/produtoFone.png') },
        { id: 7, name: 'Televisão', price: '$450', image: require('../assets/produtoTv.png') },
        { id: 8, name: 'produtoEchodot', price: '$70', image: require('../assets/produtoEchodot.png') }
      ]
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
