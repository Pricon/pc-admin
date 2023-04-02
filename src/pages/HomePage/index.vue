<template>
  <div class="container">
    <el-image class="img" v-for="url in urls" :key="url" :src="url" lazy>
    </el-image>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      urls: [],
    };
  },
  async created() {
    //第一种解决跨域问题的方法：使用CORS，需要在后端配置响应头
    // const res = await fetch("http://localhost:3002/api/getPicList");
    // const resJson = await res.json();
    // this.urls = resJson.data;

    //第二种方法：使用webpack转发数据,请求时不指定域名,然后在vue.config.js里面配置转发
    const res = await fetch("http://47.99.121.239:3002/api/getPicList");
    const resJson = await res.json();
    this.urls = resJson.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  .img {
    width: 100%;
  }
}
</style>
