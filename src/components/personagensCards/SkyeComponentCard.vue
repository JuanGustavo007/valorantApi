<template>
	<div class="card p-0" style="width: 18rem">
		<img :src="skye.displayIcon" class="card-img-top" alt="..." />
		<div class="card-body d-flex flex-column justify-content-around">
			<h5 class="card-title text-center">{{ skye.displayName }}</h5>
			<p class="card-text">
				{{ skye.description }}
			</p>
			<router-link to="/SkyeHistoryComponent" class="rota"
				><span>View more</span></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "skyeComponentCard",
	data() {
		return {
			skye: "",
			skyeId: "6f2a04ca-43e0-be17-7f36-b3908627744d",
		};
	},
	methods: {
		recuperarApi() {
			fetch(`https://valorant-api.com/v1/agents/${this.skyeId}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.skye = dados.data));
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
