<template>
	<body>
		<router-link to="/" class="voltar btn btn-primary mt-2 ms-2"
			>Voltar</router-link
		>
		<div class="segurar pb-0">
			<div class="fundo-jett p-4">
				<div class="container d-flex justify-content-center mb-3">
					<img
						:src="jettHistory.bustPortrait"
						alt=""
						class="img-fluid imagem-jett"
					/>
				</div>
				<div class="container-fluid">
					<div class="row gap-2">
						<div
							v-for="(habilidade, index) in jettHistory.abilities"
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
	border-bottom: 2px solid rgb(83, 83, 83);
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
.fundo-jett {
	background-color: rgb(20, 20, 20);
	height: 100%;
	max-height: 100%;
	padding-bottom: 0 !important ;
	padding-top: 0 !important ;
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
.imagem-jett {
	animation: animarJett 5s infinite alternate ease-in forwards;
}
.imagem-habilidade {
	background-color: #90e3fdff;
	border-radius: 50%;
	width: 80px;
	justify-self: center;
	border: 3px solid black;
}
@keyframes animarJett {
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
	name: "JettHistoryComponent",
	data() {
		return {
			jettHistory: "",
			jettIdHistory: "add6443a-41bd-e414-f6ad-e58d267f4e95",
		};
	},
	methods: {
		historiaDados() {
			fetch(`https://valorant-api.com/v1/agents/${this.jettIdHistory}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.jettHistory = dados.data));
		},
	},
	mounted() {
		this.historiaDados();
	},
};
</script>
