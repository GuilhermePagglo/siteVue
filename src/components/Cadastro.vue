<template>
  <div id="app">
    <p>{{ mensagem }}</p>

    <p>Nome:</p>
    <input type="text" v-model="novoUsuario.nome"> <br>
    <p>Telefone:</p>
    <input type="number" v-model="novoUsuario.telefone"> <br>
    <p>Email:</p>
    <input type="text" v-model="novoUsuario.email"> <br>
    <button @click="cadastrarusuario">enviar</button>

    <div v-for="usuario in usuarios" :key="usuario.id" class="usuario">
      <h3>{{ usuario.nome }}</h3>
      <p>{{ usuario.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'app',
  data () {
    return {
      mensagem: 'Bem-vindo!',
      novoUsuario: {
        nome: '',
        telefone: '',
        email: ''
      },
      usuarios: []
    }
  },
  created () {
    axios.get('/usuarios')
      .then((response) => {
        this.usuarios = response.data
      })
      .catch((error) => {
        console.error('Erro ao buscar os usuarios:', error)
      })
  },
  methods: {
    cadastrarusuario () {
      axios.post('/usuarios', this.novoUsuario)
        .then((response) => {
          this.usuarios.push(response.data)
          this.novoUsuario = {
            nome: '',
            telefone: '',
            email: ''
          }
        })
        .catch((error) => {
          console.error('Erro ao cadastrar o usuario:', error)
        })
    }
  }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

#app {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="text"],
input[type="number"],
button {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #329632;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #267826;
}

span {
    font-weight: bold;
}
</style>
