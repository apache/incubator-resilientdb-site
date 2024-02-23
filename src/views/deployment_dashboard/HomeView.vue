<script setup lang="ts">
import { useDeploymentStore } from "@/store/deployment";
import { useNodesStore } from "@/store/nodes";
import { execTransaction as exec } from "@/api/endpoint";
import { storeToRefs } from "pinia";
import { useEndpointsStore } from "@/store/endpoints";
import { onMounted, ref } from "vue";
import { notification } from "ant-design-vue";
import { CloseSquareFilled } from "@ant-design/icons-vue";
import ReplicaItem from "@/views/deployment_dashboard/ReplicaItem.vue";

const deploymentStore = useDeploymentStore();
const { deployed, replicaIds } = storeToRefs(deploymentStore);
const endpointsStore = useEndpointsStore();
const transaction = ref("");
const transactionResult = ref("");
const executingTransaction = ref(false);

async function execTransaction() {
  transactionResult.value = "";
  executingTransaction.value = true;
  try {
    const res = await exec(endpointsStore.endpoints, {
      transaction: transaction.value,
    });
    transactionResult.value = res.result;
    transaction.value = "";
  } catch (e) {
    console.log(e);
  }
  executingTransaction.value = false;
}

function killDeployment() {
  deploymentStore.killDeployment();
}

/*onMounted(() => {
  console.log("Refreshing endpoints..");
  setInterval(() => {
    endpointsStore.refresh();
  }, 4000);
});*/
</script>

<template>
  <div>
     <div style="display: flex; justify-content: center">
      <a-button type="primary" danger @click="killDeployment">
        <close-square-filled />
        Stop deployment
      </a-button>
    </div>

    <div style="display: flex; justify-content: center; margin-top: 50px">
	<a-button target="_blank" type="primary" style="background-color:blue" href="http://ec2-54-84-181-59.compute-1.amazonaws.com:9090/targets?search=">
		Deployment Status
	</a-button>
    </div>
    
    <iframe src="https://ec2-54-84-181-59.compute-1.amazonaws.com/targets?search="
        width="100%" height="110%" frameborder="0" >
    </iframe>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.replicas-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: center;
  align-items: flex-start;
}

.response {
  margin-top: 10px;
  font-size: 14px;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
