<template>
	<body>
		<router-link to="/" class="voltar btn btn-primary mt-2 ms-2"
			>Voltar</router-link
		>
		<div class="segurar pb-0">
			<div class="fundo-raze p-4">
				<div class="container d-flex justify-content-center mb-3">
					<img
						:src="razeHistory.bustPortrait"
						alt=""
						class="img-fluid imagem-raze"
					/>
				</div>
				<div class="container-fluid">
					<div class="row gap-2">
						<div
							v-for="(habilidade, index) in razeHistory.abilities"
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
	background-color: rgb(20, 20, 20);
	height: 100vh;
}
h3 {
	color: black;

	font-weight: bold;
	border-bottom: 2px solid rgb(0, 0, 0);
}
h4 {
	color: rgb(204, 204, 204);
	text-shadow: 1px 1px 1px black;
}
.segurar {
	background-color: rgb(20, 20, 20);

	max-height: 100%;
	margin: 0;
	padding: 0;
}
.fundo-raze {
	background-color: rgb(20, 20, 20);
	height: 100%;
	max-height: 100%;
	padding-bottom: 0 !important;
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
.imagem-raze {
	animation: animarRaze 5s infinite alternate ease-in forwards;
}
.imagem-habilidade {
	background-color: rgb(224, 161, 52);
	border-radius: 50%;
	width: 80px;
	justify-self: center;
	border: 3px solid black;
}
@keyframes animarRaze {
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
	name: "RazeHistoryComponent",
	data() {
		return {
			razeHistory: "",
			razeIdHistory: "f94c3b30-42be-e959-889c-5aa313dba261",
		};
	},
	methods: {
		historiaDados() {
			fetch(`https://valorant-api.com/v1/agents/${this.razeIdHistory}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.razeHistory = dados.data));
		},
	},
	mounted() {
		this.historiaDados();
	},
};
</script>
