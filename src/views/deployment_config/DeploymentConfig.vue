<script setup>
	import {
		CloudServerOutlined,
		ClusterOutlined,
		BlockOutlined,
		RocketFilled,
		RightOutlined,
		LeftOutlined,
	} from "@ant-design/icons-vue";
	import EndpointConfig from "./EndpointConfig.vue";
	import NetworkConfig from "./NetworkConfig.vue";
	import { useDeploymentStore } from "@/store/deployment";
	import { computed, ref } from "vue";

	const confComponents = [EndpointConfig,  NetworkConfig];
	const current = ref(0);
	const deploying = ref(false);
	const totalSteps = 2;

	const finalStep = computed(() => {
		return current.value + 1 === totalSteps;
	});

	function onPrevious() {
		if (current.value - 1 >= 0) {
			current.value--;
		}
	}

	async function onNext() {
		if (finalStep.value) {
			deploying.value = true;
			await useDeploymentStore().deploy();
			deploying.value = false;
			// deploy
		} else {
			current.value++;
		}
	}
</script>

<template>
	<div
		style="
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
		"
	>
		<h2 style="font-weight: bold">Deployment Configuration</h2>
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 100%;
				max-width: 700px;
				margin-top: 50px;
			"
		>
			<a-steps :current="current">
				<a-step title="Endpoints">
					<template #icon>
						<cloud-server-outlined />
					</template>
				</a-step>
				<a-step title="Network">
					<template #icon>
						<cluster-outlined />
					</template>
				</a-step>
			</a-steps>
		</div>
		    <!--<component
		      :is="confComponents[current]"
		    />-->
		<div style="margin-top: 20px">
			<a-button @click="onPrevious">
				<left-outlined />
				Previous
			</a-button>
			<a-button type="primary" @click="onNext" style="margin-left: 15px">
				{{ finalStep ? "Deploy" : "Next" }}
				<rocket-filled v-if="finalStep" />
				<right-outlined v-else />
			</a-button>
		</div>
	</div>
</template>

<style scoped></style>
