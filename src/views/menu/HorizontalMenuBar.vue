<template>
	<div class="menu-bar">
		<menu-item
			v-for="route in routes"
			:key="route.path"
			:path="route.path"
			:name="route.name.toString()"
		>
			<template v-slot:icon>
				<component :is="route.props.default.icon" />
			</template>
		</menu-item>
	</div>
</template>

<script>
	import { defineComponent } from "vue";
	import MenuItem from "@/views/menu/MenuItem.vue";

	export default defineComponent({
		name: "HorizontalMenuBar",
		components: { MenuItem },
		computed: {
			routes() {
				return this.$router
					.getRoutes()
					.filter((r) => !r.props.default.hiddenRoute);
			},
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/variables.scss";

	.menu-bar {
		display: flex;
		align-items: center;
	}

	.menu-bar > * {
		margin-left: 40px;
	}
</style>
