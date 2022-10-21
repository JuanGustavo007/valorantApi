<template>
	<body>
		<router-link to="/" class="voltar btn btn-primary mt-2 ms-2"
			>Voltar</router-link
		>
		<div class="segurar pb-0">
			<div class="fundo-fade p-4">
				<div class="container d-flex justify-content-center mb-3">
					<img
						:src="fadeHistory.bustPortrait"
						alt=""
						class="img-fluid imagem-fade"
					/>
				</div>
				<div class="container-fluid">
					<div class="row gap-2">
						<div
							v-for="(habilidade, index) in fadeHistory.abilities"
							:key="index"
							class="col d-flex flex-column align-items-center"
						>
							<div
								class="d-flex flex-column align-items-center itens card h-100"
							>
								<h3>
									{{ habilidade.slot }}
								</h3>
								<h4>{{ habilidade.displayName }}</h4>
								<p>
									{{ habilidade.description }}
								</p>
								<img
									:src="habilidade.displayIcon"
									alt=""
									class="imagem-habilidade"
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- <button>
			<router-link to="/">Voltar</router-link>
		</button> -->
			</div>
		</div>
	</body>
</template>

<style scoped>
* {
	box-sizing: border-box;
}
body {
	background-color: rgb(20, 20, 20);
	height: 100vh;
}
h3 {
	color: black;
	font-weight: bold;
	border-bottom: 2px solid white;
}
h4 {
	color: black;
}
.segurar {
	background-color: rgb(20, 20, 20);

	max-height: 100%;
	margin: 0;
	padding: 0;
}
.fundo-fade {
	background-color: rgb(20, 20, 20);
	height: 100%;
	max-height: 100%;
}
img {
	max-width: 100%;
	width: 500px;
}
p {
	font-size: 0.8rem;
	color: black;
	font-family: monospace;
}
.imagem-fade {
	animation: animarFade 5s infinite alternate ease-in forwards;
}
.imagem-habilidade {
	background-color: #66376cff;
	border-radius: 50%;
	width: 80px;
	justify-self: center;
	border: 3px solid rgb(211, 211, 211);
}
@keyframes animarFade {
	from {
		transform: translateY(-10px);
	}
	to {
		transform: translateY(10px);
	}
}

.itens {
	padding: 20px;
	background-color: antiquewhite;
	border: 1px solid antiquewhite;
	border-radius: 5px;
}

/* Responsividade*/

@media screen and (min-width: 993px) and (max-width: 1200px) {
	p {
		font-size: 1rem;
		text-align: justify;
	}
	.row {
		display: flex;
		flex-direction: column;
	}
}
@media screen and (max-width: 1200px) {
	.row,
	p {
		font-size: 0.9rem;
	}
}
@media screen and (max-width: 992px) {
	.row {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	.itens {
		margin-bottom: 40px;
		border: 3px solid black;
		padding: 20px;
		background-color: white;
	}
	h3 {
		font-size: 1rem;
		border-bottom: 1px solid black;
	}
}
</style>

<script>
export default {
	name: "FadeHistoryComponent",
	data() {
		return {
			fadeHistory: "",
			fadeIdHistory: "dade69b4-4f5a-8528-247b-219e5a1facd6",
		};
	},
	methods: {
		historiaDados() {
			fetch(`https://valorant-api.com/v1/agents/${this.fadeIdHistory}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.fadeHistory = dados.data));
		},
	},
	mounted() {
		this.historiaDados();
	},
};
</script>
