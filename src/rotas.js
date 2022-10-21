import { createRouter, createWebHistory } from "vue-router";
import PrincipalComponent from "@/components/areasSite/PrincipalComponent.vue";
import AstraHistoryComponent from "@/components/HistoriaPersonagens/AstraHistoryComponent.vue";
import BreachHistoryComponent from "@/components/HistoriaPersonagens/BreachHistoryComponent.vue";
import BrimstoneHistoryComponent from "@/components/HistoriaPersonagens/BrimstoneHistoryComponent.vue";
import ChamberHistoryComponent from "@/components/HistoriaPersonagens/ChamberHistoryComponent.vue";
import CypherHistoryComponent from "@/components/HistoriaPersonagens/CypherHistoryComponent.vue";
import FadeHistoryComponent from "@/components/HistoriaPersonagens/FadeHistoryComponent.vue";
import JettHistoryComponent from "@/components/HistoriaPersonagens/JettHistoryComponent.vue";
import KayoHistoryComponent from "@/components/HistoriaPersonagens/KayoHistoryComponent.vue";
import KilljoyHistoryComponent from "@/components/HistoriaPersonagens/KilljoyHistoryComponent.vue";
import NeonHistoryComponent from "@/components/HistoriaPersonagens/NeonHistoryComponent.vue";
import OmenHistoryComponent from "@/components/HistoriaPersonagens/OmenHistoryComponent.vue";
import PhoenixHistoryComponent from "@/components/HistoriaPersonagens/PhoenixHistoryComponent.vue";
import RazeHistoryComponent from "@/components/HistoriaPersonagens/RazeHistoryComponent.vue";
import ReynaHistoryComponent from "@/components/HistoriaPersonagens/ReynaHistoryComponent.vue";
import SageHistoryComponent from "@/components/HistoriaPersonagens/SageHistoryComponent.vue";
import SkyeHistoryComponent from "@/components/HistoriaPersonagens/SkyeHistoryComponent.vue";
import SovaHistoryComponent from "@/components/HistoriaPersonagens/SovaHistoryComponent.vue";
import ViperHistoryComponent from "@/components/HistoriaPersonagens/ViperHistoryComponent.vue";
import YoruHistoryComponent from "@/components/HistoriaPersonagens/YoruHistoryComponent.vue";

const routes = [
	{
		path: "/",
		component: PrincipalComponent,
	},
	{
		path: "/AstraHistoryComponent",
		component: AstraHistoryComponent,
	},
	{
		path: "/BreachHistoryComponent",
		component: BreachHistoryComponent,
	},
	{
		path: "/BrimstoneHistoryComponent",
		component: BrimstoneHistoryComponent,
	},
	{
		path: "/ChamberHistoryComponent",
		component: ChamberHistoryComponent,
	},
	{
		path: "/CypherHistoryComponent",
		component: CypherHistoryComponent,
	},
	{
		path: "/FadeHistoryComponent",
		component: FadeHistoryComponent,
	},
	{
		path: "/JettHistoryComponent",
		component: JettHistoryComponent,
	},
	{
		path: "/KayoHistoryComponent",
		component: KayoHistoryComponent,
	},
	{
		path: "/KilljoyHistoryComponent",
		component: KilljoyHistoryComponent,
	},
	{
		path: "/NeonHistoryComponent",
		component: NeonHistoryComponent,
	},
	{
		path: "/OmenHistoryComponent",
		component: OmenHistoryComponent,
	},
	{
		path: "/PhoenixHistoryComponent",
		component: PhoenixHistoryComponent,
	},
	{
		path: "/RazeHistoryComponent",
		component: RazeHistoryComponent,
	},
	{
		path: "/ReynaHistoryComponent",
		component: ReynaHistoryComponent,
	},
	{
		path: "/SageHistoryComponent",
		component: SageHistoryComponent,
	},
	{
		path: "/SkyeHistoryComponent",
		component: SkyeHistoryComponent,
	},
	{
		path: "/SovaHistoryComponent",
		component: SovaHistoryComponent,
	},
	{
		path: "/ViperHistoryComponent",
		component: ViperHistoryComponent,
	},
	{
		path: "/YoruHistoryComponent",
		component: YoruHistoryComponent,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
