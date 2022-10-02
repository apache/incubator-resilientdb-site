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
    <iframe src="http://192.18.137.13:9090/targets?search="
        width="100%" height="110%" frameborder="0" >
    </iframe>
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
