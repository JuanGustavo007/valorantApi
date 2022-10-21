<template>
	<div class="card p-0" style="width: 18rem">
		<img :src="kayo.displayIcon" class="card-img-top" alt="..." />
		<div class="card-body d-flex flex-column justify-content-around">
			<h5 class="card-title text-center">{{ kayo.displayName }}</h5>
			<p class="card-text">
				{{ kayo.description }}
			</p>
			<router-link to="/KayoHistoryComponent" class="rota"
				><span>View more</span></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "kayoComponentCard",
	data() {
		return {
			kayo: "",
			kayoId: "601dbbe7-43ce-be57-2a40-4abd24953621",
		};
	},
	methods: {
		recuperarApi() {
			fetch(`https://valorant-api.com/v1/agents/${this.kayoId}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.kayo = dados.data));
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
