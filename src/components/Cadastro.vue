<template>
  <div id="app">
    <p>{{ mensagem }}</p>

    <div class="form-container">
      <h2>Cadastro de Usuário</h2>
      <p>Nome:</p>
      <input type="text" v-model="novoUsuario.nome" required> <br>
      <p>Telefone:</p>
      <input type="number" v-model="novoUsuario.telefone" required> <br>
      <p>Email:</p>
      <input type="text" v-model="novoUsuario.email"> <br>
      <button @click="cadastrarusuario">Enviar</button>
    </div>

    <div class="user-list-container">
      <h2>Usuários Cadastrados</h2>
      <div v-for="usuario in usuarios" :key="usuario.id" class="usuario">
        <div class="user-details">
          <h3 v-if="usuarioEditando !== usuario.id">{{ usuario.nome }}</h3>
          <input type="text" v-else v-model="usuarioEditandoData.nome" placeholder="{{ usuario.nome }}"> <br>
          <p v-if="usuarioEditando !== usuario.id">{{ usuario.telefone }}</p>
          <input type="number" v-else v-model="usuarioEditandoData.telefone" placeholder="{{ usuario.telefone }}"> <br>
          <p v-if="usuarioEditando !== usuario.id">{{ usuario.email }}</p>
          <input type="text" v-else v-model="usuarioEditandoData.email" placeholder="{{ usuario.email }}"> <br>
        </div>
        <div class="user-actions">
          <button v-if="usuarioEditando !== usuario.id" class="edit-button" @click="editarUsuario(usuario)">Editar</button>
          <button v-else class="save-button" @click="salvarEdicao(usuario)">Salvar</button>
          <button class="delete-button" @click="deletarUsuario(usuario.id)">Excluir</button>
        </div>
      </div>
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
      usuarios: [],
      usuarioEditando: null,
      usuarioEditandoData: {
        nome: '',
        telefone: '',
        email: ''
      }
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
    },
    deletarUsuario (id) {
      axios.delete(`/usuarios/${id}`)
        .then(() => {
          const index = this.usuarios.findIndex(usuario => usuario.id === id)
          if (index !== -1) {
            this.usuarios.splice(index, 1)
          }
        })
        .catch((error) => {
          console.error('Erro ao deletar o usuario:', error)
        })
    },
    editarUsuario (usuario) {
      this.usuarioEditando = usuario.id
      this.usuarioEditandoData = {
        nome: usuario.nome,
        telefone: usuario.telefone,
        email: usuario.email
      }
    },
    salvarEdicao (usuario) {
      axios.put(`/usuarios/${usuario.id}`, this.usuarioEditandoData)
        .then(() => {
          usuario.nome = this.usuarioEditandoData.nome
          usuario.telefone = this.usuarioEditandoData.telefone
          usuario.email = this.usuarioEditandoData.email
          this.usuarioEditando = null
        })
        .catch((error) => {
          console.error('Erro ao salvar a edição do usuário:', error)
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

.form-container,
.user-list-container {
  margin-bottom: 20px;
}

h2 {
  color: #329632;
  margin-bottom: 10px;
}

input[type="text"],
input[type="number"],
button {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  background-color: #329632;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #267826;
}

.usuario {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fafafa;
}

.user-details {
  flex: 1;
}

.user-actions {
  display: flex;
  gap: 10px;
}

.edit-button,
.delete-button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #ffcc00;
  color: #fff;
}

.edit-button:hover {
  background-color: #e6b800;
}

.delete-button {
  background-color: #e60000;
  color: #fff;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
