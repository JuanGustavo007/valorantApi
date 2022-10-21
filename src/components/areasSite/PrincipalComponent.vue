<template>
	<div class="guardando">
		<AgentesComponent></AgentesComponent>
		<router-view></router-view>
	</div>
</template>

<style scoped></style>

<script>
import AgentesComponent from "../outros/AgentesComponent.vue";
export default {
	name: "PrincipalComponent",
	components: { AgentesComponent },
};
</script>
