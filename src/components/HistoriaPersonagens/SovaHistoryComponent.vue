<template>
	<body>
		<router-link to="/" class="voltar btn btn-primary mt-2 ms-2"
			>Voltar</router-link
		>
		<div class="segurar pb-0">
			<div class="fundo-sova p-4">
				<div class="container d-flex justify-content-center mb-3">
					<img
						:src="sovaHistory.bustPortrait"
						alt=""
						class="img-fluid imagem-sova"
					/>
				</div>
				<div class="container-fluid">
					<div class="row gap-2">
						<div
							v-for="(habilidade, index) in sovaHistory.abilities"
							:key="index"
							class="col d-flex flex-column align-items-center"
						>
							<div
								class="d-flex flex-column align-items-center itens card h-100 w-100"
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
	background-image: linear-gradient(
		to right,
		rgb(83, 83, 83),
		rgb(153, 153, 153)
	);
	height: 100vh;
}
h3 {
	color: rgb(0, 0, 0);

	border-bottom: 2px solid white;
}
h4 {
	color: rgb(5, 5, 5);
}
.segurar {
	background-image: linear-gradient(
		to right,
		rgb(83, 83, 83),
		rgb(153, 153, 153)
	);

	max-height: 100%;
	margin: 0;
	padding: 0;
}
.fundo-sova {
	background-image: linear-gradient(
		to right,
		rgb(83, 83, 83),
		rgb(153, 153, 153)
	);
	height: 100%;
	max-height: 100%;
	padding-bottom: 0 !important;
	padding-top: 0 !important;
}
img {
	max-width: 100%;
	width: 500px;
}
p {
	font-size: 0.8rem;
	color: rgb(3, 3, 3);

	font-family: monospace;
}
.imagem-sova {
	animation: animarSova 5s infinite alternate ease-in forwards;
}
.imagem-habilidade {
	background-color: rgb(46, 46, 148);
	border-radius: 50%;
	width: 80px;
	justify-self: center;
	border: 3px solid black;
}
@keyframes animarSova {
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
	name: "SovaHistoryComponent",
	data() {
		return {
			sovaHistory: "",
			sovaIdHistory: "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
		};
	},
	methods: {
		historiaDados() {
			fetch(`https://valorant-api.com/v1/agents/${this.sovaIdHistory}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.sovaHistory = dados.data));
		},
	},
	mounted() {
		this.historiaDados();
	},
};
</script>
