<template>
	<div class="card p-0" style="width: 18rem">
		<img :src="omen.displayIcon" class="card-img-top" alt="..." />
		<div class="card-body d-flex flex-column justify-content-around">
			<h5 class="card-title text-center">{{ omen.displayName }}</h5>
			<p class="card-text">
				{{ omen.description }}
			</p>
			<router-link to="/OmenHistoryComponent" class="rota">
				<span>View more</span></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "OmenComponentCard",
	data() {
		return {
			omen: "",
			omenId: "8e253930-4c05-31dd-1b6c-968525494517",
		};
	},
	methods: {
		recuperarApi() {
			fetch(`https://valorant-api.com/v1/agents/${this.omenId}`)
				.then((resposta) => resposta.json())
				.then((dados) => (this.omen = dados.data));
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
