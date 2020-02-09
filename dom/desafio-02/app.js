new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Botao clickado')
        }
        ,
        armazenarValor(event){
            this.valor = event.target.value
        }
    }
})