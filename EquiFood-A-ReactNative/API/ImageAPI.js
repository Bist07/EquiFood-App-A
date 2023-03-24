import axios from "axios";
import config from "../config"


const image_S3 = await axios({
  url: `${config.local.url}:${config.local.port}/Images/posts`,
  method: 'post',
  data: data,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
});