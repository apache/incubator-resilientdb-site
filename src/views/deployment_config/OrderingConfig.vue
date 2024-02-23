<script setup lang="ts">
import { CloudFilled } from "@ant-design/icons-vue";
import { MehOutlined } from "@ant-design/icons-vue";
import { useConsensusStore } from "@/store/consensusConfig";
import { ref } from "vue";

const consensusStore = useConsensusStore();
const protocol = ref(consensusStore.protocol);
const pbftOptions = {
  num_commitment_threads: ref(consensusStore.options.num_commitment_threads),
  watermark_width: ref(consensusStore.options.watermark_width),
};

const protocolsAvailable = [
  {
    value: "pbft",
    label: "PBFT",
  },
];
function proceed() {
  if (isNaN(pbftOptions.num_commitment_threads.value)) {
    return false;
  }
  if (isNaN(pbftOptions.watermark_width.value)) {
    return false;
  }
  consensusStore.modifyConfig({
    protocol: protocol.value,
    options: {
      watermark_width: pbftOptions.watermark_width.value,
      num_commitment_threads: pbftOptions.num_commitment_threads.value,
    },
  });
  return true;
}

defineExpose({
  proceed,
});
</script>
<template>
  <div style="margin-top: 40px">
    <div>
      Protocol: &nbsp;<a-select
        ref="select"
        v-model:value="protocol"
        style="width: 120px"
        :options="protocolsAvailable"
      ></a-select>
    </div>

    <div style="margin-top: 40px; font-weight: bold">Protocol Options</div>
    <div style="margin-top: 10px; margin-bottom: 30px">
      <div>
        Num Commitment Threads:
        <a-input
          v-model:value="pbftOptions.num_commitment_threads.value"
          style="max-width: 100px"
        />
      </div>
      <div style="margin-top: 10px">
        Watermark width:
        <a-input
          v-model:value="pbftOptions.watermark_width.value"
          style="max-width: 100px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
