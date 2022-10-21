<template>
	<div class="guardar">
		<div class="container-fluid formulario-estilo">
			<div class="container d-flex justify-content-center flex-column conteudo">
				<h1 class="text-center mt-4" id="vava">Valorant</h1>
				<form action="" class="d-flex justify-content-center">
					<input type="text" v-model="mostrar" placeholder="Search" />
				</form>
			</div>
		</div>
		<div class="fundo p-5">
			<div class="container d-block">
				<div
					class="row row-cols-1 row-cols-md-3 gap-5"
					v-show="mostrar.length === 0"
				>
					<fade></fade>
					<breach></breach>
					<raze></raze>
					<chamber></chamber>
					<kayo></kayo>
					<skye></skye>
					<cypher></cypher>
					<sova></sova>
					<killjoy></killjoy>
					<viper></viper>
					<phoenix></phoenix>
					<astra></astra>
					<brimstone></brimstone>
					<neon></neon>
					<yoru></yoru>
					<sage></sage>
					<reyna></reyna>
					<omen></omen>
					<jett></jett>
				</div>
			</div>
		</div>
		<div class="estilo-component" v-show="mostrar.length >= 1 ? true : false">
			<component
				:is="mostrar.toLowerCase()"
				class="container estilo-component"
			></component>
		</div>

		<div class="subir"><a href="#vava">Subir</a></div>
	</div>
</template>

<style scoped>
.subir {
	background-color: red;
	max-width: 300px;
	width: 80px;
	position: fixed;
	right: 10px;
	bottom: 0;
	z-index: 1;
	padding: 5px;
	text-align: center;
	color: white;
	visibility: hidden;
}
.mostrar {
	visibility: visible;
}
.estilo-component {
	background-color: #ece8e1;
	height: 100vh;
	max-height: 730px;
}
.formulario-estilo {
	background-color: #ece8e1;
}
h1 {
	color: red;
	font-family: "Roboto", sans-serif;
	text-transform: uppercase;
	text-shadow: 1px 2px 2px black;
}
input {
	width: 500px;
	border-radius: 5px;
	border: 1px solid black;
	padding: 5px;
	text-align: center;
}
input:focus {
	outline: none;
}
.fundo {
	background-color: #ece8e1;
	height: 100%;
}
.linha {
	background-color: #292929;
}
@media screen and (max-width: 767px) {
	.linha {
		justify-content: center;
	}
}
</style>

<script>
import FadeComponentCard from "@/components/personagensCards/FadeComponentCard.vue";
import BreachComponentCard from "../personagensCards/BreachComponentCard.vue";
import RazeComponentCard from "../personagensCards/RazeComponentCard.vue";
import ChamberComponentCard from "../personagensCards/ChamberComponentCard.vue";
import KayoComponentCard from "../personagensCards/KayoComponentCard.vue";
import SkyeComponentCard from "../personagensCards/SkyeComponentCard.vue";
import CypherComponentCard from "../personagensCards/CypherComponentCard.vue";
import SovaComponentCard from "../personagensCards/SovaComponentCard.vue";
import KilljoyComponentCard from "../personagensCards/KilljoyComponentCard.vue";
import ViperComponentCard from "../personagensCards/ViperComponentCard.vue";
import PhoenixComponentCard from "../personagensCards/PhoenixComponentCard.vue";
import AstraComponentCard from "../personagensCards/AstraComponentCard.vue";
import BrimstoneComponentCard from "../personagensCards/BrimstoneComponentCard.vue";
import NeonComponentCard from "../personagensCards/NeonComponentCard.vue";
import YoruComponentCard from "../personagensCards/YoruComponentCard.vue";
import SageComponentCard from "../personagensCards/SageComponentCard.vue";
import ReynaComponentCard from "../personagensCards/ReynaComponentCard.vue";
import OmenComponentCard from "../personagensCards/OmenComponentCard.vue";
import JettComponentCard from "../personagensCards/JettComponentCard.vue";

export default {
	name: "AgentesComponent",
	data() {
		return {
			agente: {},
			agentes: {},
			mostrar: "",
			estilo: {
				backgroundColor: "rgb(36, 36, 36)",
			},
		};
	},

	components: {
		fade: FadeComponentCard,
		breach: BreachComponentCard,
		raze: RazeComponentCard,
		chamber: ChamberComponentCard,
		kayo: KayoComponentCard,
		skye: SkyeComponentCard,
		cypher: CypherComponentCard,
		sova: SovaComponentCard,
		killjoy: KilljoyComponentCard,
		viper: ViperComponentCard,
		phoenix: PhoenixComponentCard,
		astra: AstraComponentCard,
		brimstone: BrimstoneComponentCard,
		neon: NeonComponentCard,
		yoru: YoruComponentCard,
		sage: SageComponentCard,
		reyna: ReynaComponentCard,
		omen: OmenComponentCard,
		jett: JettComponentCard,
	},
};
</script>
