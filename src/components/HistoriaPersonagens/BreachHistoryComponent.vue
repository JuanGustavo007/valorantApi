<template>
	<body>
		<router-link to="/" class="voltar btn btn-primary mt-2 ms-2"
			>Voltar</router-link
		>
		<div class="segurar pb-0">
			<div class="fundo-breach p-4">
				<div class="container d-flex justify-content-center mb-3">
					<img
						:src="breachHistory.bustPortrait"
						alt=""
						class="img-fluid imagem-breach"
					/>
				</div>
				<div class="container-fluid">
					<div class="row gap-2">
						<div
							v-for="(habilidade, index) in breachHistory.abilities"
							:key="index"
							class="col d-flex flex-column align-items-center"
						>
							<div class="d-flex flex-column align-items-center itens">
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
	background-color: #44412eff;
	height: 100vh;
}
h3 {
	color: white;
	text-shadow: 1px 2px 2px black;
	font-weight: bold;
	border-bottom: 2px solid white;
}
h4 {
	color: rgb(204, 204, 204);
	text-shadow: 1px 1px 1px black;
}
.segurar {
	background-color: #44412eff;

	max-height: 100%;
	margin: 0;
	padding: 0;
}
.fundo-breach {
	background-color: #44412eff;
	height: 100%;
	max-height: 100%;
}
img {
	max-width: 100%;
	width: 500px;
}
p {
	font-size: 1rem;
	color: black;
	font-family: monospace;
}
.imagem-breach {
	animation: animarBreach 5s infinite alternate ease-in forwards;
}
.imagem-habilidade {
	background-color: rgb(41, 48, 41);
	border-radius: 50%;
	width: 80px;
	justify-self: center;
	border: 3px solid #ff9c33ff;
}
@keyframes animarBreach {
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
	name: "BreachHistoryComponent",
	data() {
		return {
			breachHistory: "",
			breachIdHistory: "5f8d3a7f-467b-97f3-062c-13acf203c006",
		};
	},
	methods: {
		historiaDados() {
			fetch(`https://valorant-api.com/v1/agents/${this.breachIdHistory}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.breachHistory = dados.data));
		},
	},
	mounted() {
		this.historiaDados();
	},
};
</script>
