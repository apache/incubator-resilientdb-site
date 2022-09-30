<script setup lang="ts">
	import { RouterView } from "vue-router";
	import HeaderView from "@/views/HeaderView.vue";
</script>

<template>
	<div style="width: 100%; display: flex; flex-direction: column; flex: 1">
		<header-view />
		<RouterView style="flex: 1; margin-top: 30px" />
	</div>
</template>

<style lang="scss">
	@import "@/styles/variables.scss";
	#app {
		width: 100%;
		height: 100%;
		display: flex;
		font-weight: normal;
		background: #fff;
		color: $secondary-color-dark;
	}
</style>
