<script setup lang="ts">
import {
  ThunderboltFilled,
  CaretRightFilled,
  AudioMutedOutlined,
  AudioFilled,
} from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useNodesStore } from "@/store/nodes";
import { computed } from "vue";
const props = defineProps<{ replicaId: number }>();
const nodesStore = useNodesStore();
const { replicas } = storeToRefs(nodesStore);
const replica = computed(() => {
  return replicas.value[props.replicaId];
});

async function muteReplica() {
  await nodesStore.muteReplica(replica.value.id, replica.value.endpointID);
}

async function startReplica() {
  await nodesStore.startReplica(replica.value.id, replica.value.endpointID);
}

async function killReplica() {
  await nodesStore.killReplica(replica.value.id, replica.value.endpointID);
}

async function unmuteReplica() {
  await nodesStore.unmuteReplica(replica.value.id, replica.value.endpointID);
}
</script>

<template>
  <div class="replica">
    <div style="display: flex; align-items: center; padding: 10px">
      <div class="status-icon" :class="{ active: replica.active }"></div>
      <b style="margin-left: 5px">Replica {{ replicaId }}</b>
    </div>
    <div class="actions">
      <a-tooltip>
        <template #title>{{ replica.active ? "Kill" : "Start" }}</template>
        <div class="action" v-if="replica.active" @click="killReplica">
          <thunderbolt-filled />
        </div>
        <div class="action" v-else @click="startReplica">
          <caret-right-filled />
        </div>
      </a-tooltip>
      <a-tooltip v-if="replica.active">
        <template #title>{{ replica.muted ? "Unmute" : "Mute" }}</template>
        <div class="action" v-if="replica.muted" @click="unmuteReplica">
          <audio-muted-outlined />
        </div>
        <div class="action" v-else @click="muteReplica">
          <audio-filled />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.replica {
  width: 150px;
  height: 150px;
  margin-right: 40px;
  margin-top: 40px;
  background: $secondary-color;
  color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: -6px 6px rgba($primary-color, 0.4);
  transition: box-shadow 0.2s ease-in-out;
}

.replica:last-child {
  margin-right: 0;
}

.replica:hover {
  box-shadow: -3px 3px rgba($primary-color, 0.4);
}

.replica .status-icon {
  background: #ec2d2d;
  width: 10px;
  height: 10px;
  border-radius: 30px;
}

.replica .status-icon.active {
  background: #74f300;
  width: 10px;
  height: 10px;
  border-radius: 30px;
}

.actions {
  position: absolute;
  display: flex;
  right: 10px;
  bottom: 10px;
}

.actions .action {
  font-size: 18px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: background 0.2s ease;
  cursor: pointer;
}

.action:hover {
  background: $secondary-color-dark;
}
</style>
