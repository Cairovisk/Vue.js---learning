new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		tamanho: true,
		aplicaClass: '',
		classe2: '',
		perigo: true,
		userColor: '',
		estilo3: {
			height: '100px',
			width: '100px'
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' 
				? 'encolher' : 'destaque'
			}, 1000);
			
		},
		iniciarProgresso() {
			setInterval(() => {
				
			});

		},
		setClass(event) {
			if(event.target.value == "true") {
				this.perigo = true
			} else if(event.target.value == "false") {
				this.perigo = false
			}
		}
	}
})
