<template>
  <div class="navbar">
    <div class="navbar-items">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <router-link to="/" class="tab" :class="{ active: currentTab === 0 }" @click="currentTab = 0">Home</router-link>
      <router-link to="/ListaProdutos" class="tab" :class="{ active: currentTab === 1 }" @click="currentTab = 1">Produtos</router-link>
      <router-link to="/cadastro" class="tab" :class="{ active: currentTab === 2 }" @click="currentTab = 2">Cadastro</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 0
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  /* Cor de fundo da barra de navegação */
  height: 50px;
  /* Altura da barra de navegação */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; /* Certifique-se de que a navbar esteja acima de outros elementos */
}

.navbar-items {
  display: flex;
  align-items: center;
  padding: 0 20px; /* Adicione preenchimento interno para os itens da navbar */
}

.logo {
  width: 50px; /* Ajuste o tamanho da logo conforme necessário */
  height: auto; /* Garante que a altura seja ajustada automaticamente */
  margin-right: 10px; /* Espaçamento entre a logo e os itens da navbar */
}

.tab {
  padding: 10px 20px;
  color: #fff;
  /* Cor do texto das abas */
  cursor: pointer;
  text-decoration: none; /* Remove o sublinhado */
}

.tab.active {
  background-color: #329632;
  /* Cor de fundo da aba ativa */
}

/* Ajustes para remover margens e preenchimentos */
html,
body {
  margin: 0;
  padding: 0;
}
</style>
