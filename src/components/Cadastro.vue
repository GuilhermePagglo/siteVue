<template>
  <div id="app">
        <p> {{ mensagem }} </p>

        <p>Nome:</p>
            <input type="text" v-on:input="setNome"> <br>
        <p>Idade:</p>
            <input type="number" v-on:input="setIdade"> <br>
        <p>Cidade:</p>
            <input type="text" v-model="cidade"> <br>

        <button v-on:click="setValor">Incrementar</button>

        <p> meu nome é <span v-text="nome"></span>, tenho {{idade}} anos e moro em {{ inverteCidade }}</p>
        <p>Quantidade de cliques: <span v-text="valor"></span></p>
      </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mensagem: 'Formulario em Vue',
      nome: 'Guilherme',
      idade: '21',
      valor: 0,
      cidade: 'Brasília'
    }
  },
  methods: {
    setNome: function (event) {
      this.nome = event.target.value
    },
    setIdade: function (event) {
      this.idade = event.target.value
    },
    setValor: function (event) {
      console.log(event)
      this.valor++
      this.inverterCidade()
    },
    inverterCidade: function () {
      this.cidade = this.cidade.split('').reverse().join('')
    }
  },
  computed: {
    inverteCidade: function () {
      return this.cidade.split('').reverse().join('')
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
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

span {
    font-weight: bold;
}

</style>
