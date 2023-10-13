import axios from "axios";
import { notification } from "ant-design-vue";

axios.interceptors.response.use(
  function (response) {
    // Called when request ends with 2xx
    return response;
  },
  function (error) {
    // Called when request doesn't end with 2xx
    if (error.response && error.response.data && error.response.data.message) {
      notification.warning({
        message: "Error",
        description: error.response.data.message,
      });
    } else {
      notification.warning({
        message: "Error",
        description:
          "Please make sure you're on a reliable internet connection and retry.",
      });
      console.log(error);
    }
    return Promise.reject(error);
  }
);
