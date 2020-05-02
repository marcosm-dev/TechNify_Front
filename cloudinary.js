import Vue from 'vue'
import Cloudinary, { CldImage } from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration: {
    cloud_name: 'ddlpilgjn',
    api_key: '223145733496967',
    api_secret: 'PsH8qegRJYaslEIbw4P64XGzDfQ'
  },
  components: [CldImage]
})
