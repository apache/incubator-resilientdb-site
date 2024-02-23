<script setup lang="ts">
import DeploymentConfig from "./deployment_config/DeploymentConfig.vue";
import HomeView from "./deployment_dashboard/HomeView.vue";
import { useDeploymentStore } from "@/store/deployment";
import { storeToRefs } from "pinia";

const { deployed } = storeToRefs(useDeploymentStore());
</script>

<template>
  <div class="dashboard">
    <component
      :is="deployed ? HomeView : DeploymentConfig"
      style="width: 100%"
    />
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex: 1;
  justify-content: center;
}
</style>
