new Vue({
  el: "#desafio",
  data: {
    valor: 0
  },
  computed: {
    resultado: function() {
      return this.valor == 37 ? "Valor igual" : "Valor diferente";
    }
  },
  watch: {
    // resultado() {
    //     const instanciaVue = this
    //     setTimeout(function() {
    //         instanciaVue.valor = 0
    //     }, 5000)
    // }
    // ,
    valor() {
      if (this.valor == 37) {
        setTimeout(() => {
          this.valor = 0;
        }, 5000);
      }
    }
  }
});
