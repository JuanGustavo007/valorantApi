<template>
	<div class="card p-0" style="width: 18rem">
		<img :src="viper.displayIcon" class="card-img-top" alt="..." />
		<div class="card-body d-flex flex-column justify-content-around">
			<h5 class="card-title text-center">{{ viper.displayName }}</h5>
			<p class="card-text">
				{{ viper.description }}
			</p>
			<router-link to="/ViperHistoryComponent" class="rota"
				><span>View more</span></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "ViperComponentCard",
	data() {
		return {
			viper: "",
			viperId: "707eab51-4836-f488-046a-cda6bf494859",
		};
	},
	methods: {
		recuperarApi() {
			fetch(`https://valorant-api.com/v1/agents/${this.viperId}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.viper = dados.data));
		},
	},
	mounted() {
		this.recuperarApi();
	},
};
</script>

<style scoped>
* {
	font-family: "Roboto", sans-serif;
}
h5 {
	border-bottom: 2px solid black;
}
img {
	border-bottom: 3px solid red;
}
.card:hover {
	transform: scale(1.02);
}

.card {
	border: 1px solid black;
}
.rota {
	text-decoration: none;
	color: black;
}
span {
	padding: 5px 10px;
	border: 1px solid;
	color: rgb(255, 255, 255);
	background: rgb(212, 13, 13);
}
</style>
