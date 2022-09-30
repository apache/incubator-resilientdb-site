<template>
	<router-link :to="path" v-slot="{ isExactActive }">
		<div class="menu-item" :class="{ active: isExactActive }">
			<div class="icon">
				<slot name="icon"> </slot>
			</div>
			<div class="name">
				<slot name="name">
					{{ name }}
				</slot>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "MenuItem",
		props: {
			path: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/styles/variables.scss";

	.menu-item {
		color: #fff;
		display: flex;
		justify-content: center;
		padding: 5px 3px;
		align-items: center;
		flex-direction: column;
		font-weight: 600;
		transition: color 0.2s ease-in-out, background 0.3s ease-in-out;
		cursor: pointer;
	}

	.menu-item .icon {
		font-size: 20pt;
		transition: transform 0.2s ease-in;
	}

	.menu-item:hover .icon {
		transform: rotate(20deg);
	}

	.menu-item .name {
		font-size: 11.5pt;
		text-transform: capitalize;
	}

	.menu-item:hover {
		color: $primary-color;
	}

	.menu-item:active,
	.menu-item.active {
		color: $primary-color;
		pointer-events: none;
	}

	@media (max-width: 400px) {
		.menu-item {
			padding: 5px 3px;
		}

		.menu-item .icon {
			font-size: 12pt;
		}

		.menu-item .name {
			font-size: 8pt;
		}
	}
</style>
