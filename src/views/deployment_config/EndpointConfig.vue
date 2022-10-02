<script setup lang="ts">
import { CloudFilled } from "@ant-design/icons-vue";
import { MehOutlined } from "@ant-design/icons-vue";
import { useEndpointsStore } from "@/store/endpoints";
import { useNodesStore } from "@/store/nodes";
import { ref } from "vue";

const endpointsStore = useEndpointsStore();
const nodesStore = useNodesStore();
const address = ref("");
const addingEndpoint = ref(false);

async function addEndpoint() {
  addingEndpoint.value = true;
  if (await endpointsStore.addEndpoint(address.value)) {
    address.value = "";
  }
  addingEndpoint.value = false;
  return false;
}

function getTotalReplicas(endpoint: string) {
  let totalReplicas = 0;
  for (const replicaID in nodesStore.replicas) {
    const replica = nodesStore.replicas[replicaID];
    if (replica.endpointID === endpoint) {
      totalReplicas++;
    }
  }
  return totalReplicas;
}
function getTotalClients(endpoint: string) {
  let totalClients = 0;
  for (const clientID in nodesStore.clients) {
    const client = nodesStore.clients[clientID];
    if (client.endpointID === endpoint) {
      totalClients++;
    }
  }
  return totalClients;
}

function proceed() {
  return endpointsStore.endpoints.length > 0;
}

defineExpose({
  proceed,
});
</script>
<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 50px;
      color: #dedbdb;
    "
    v-if="endpointsStore.endpoints.length === 0"
  >
    <meh-outlined style="font-size: 40px" />
    <div style="margin-top: 10px; font-size: 20px">No endpoints added yet.</div>
  </div>
  <div v-else style="margin-top: 50px" class="endpoints-container">
    <div
      v-for="endpoint in endpointsStore.endpoints"
      class="endpoint"
      :key="endpoint"
    >
      <div class="title">
        <cloud-filled class="icon" />
        <div style="margin-left: 10px; font-weight: 500">{{ endpoint }}</div>
      </div>
    </div>
  </div>
  <div style="margin-top: 50px; margin-bottom: 20px">
    <a-input-search
      v-model:value="address"
      placeholder="127.0.0.1:3000"
      enter-button="Add Endpoint"
      :loading="addingEndpoint"
      size="medium"
      @search="addEndpoint"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.endpoints-container {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.endpoint {
  width: 200px;
  color: #fff;
  background: $secondary-color-dark;
  text-overflow: ellipsis;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.endpoint .title {
  padding: 10px;
  display: flex;
  align-items: center;
}

.endpoint .icon {
  color: $primary-color;
}

.endpoint .info {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 5px 5px 5px;
  background: lighten($secondary-color-dark, 10%);
  border-radius: 5px;
}
</style>
