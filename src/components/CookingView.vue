<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 30pt;
    "
  >
    Brewing <coffee-outlined style="margin-left: 10px; margin-top: -4px" />
  </div>
</template>

<script>
import { CoffeeOutlined } from "@ant-design/icons-vue";
export default {
  name: "CookingView",
  components: { CoffeeOutlined },
};
</script>

<style scoped></style>
