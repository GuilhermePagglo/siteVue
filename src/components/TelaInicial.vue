<template>
    <div class="home">
        <div class="container">
            <h1>Bem-vindo à nossa loja!</h1>
            <p>Encontre os melhores produtos aqui.</p>
            <router-link to="/ListaProdutos" class="btn">Ver Produtos</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TelaInicial'
}
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
    margin-bottom: 30px;
}

.btn {
    padding: 10px 20px;
    background-color: #329632;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #2c7e2c;
}
</style>
