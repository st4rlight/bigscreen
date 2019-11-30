<template>
  <Card title="政务中心" class="widthHeight">
    <div class="height">
<!--      中心布局-->
      <div id="top">
        <GovTop />
      </div>

<!--      每月办件受理情况-->
      <div id="center">
        <GovCenter />
      </div>

<!--      接待情况-->
      <div id="bottom">
        <GovBottom />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/cards/CardContainer.vue';
import GovTop from "@/components/contents/GovTop.vue";
import GovCenter from "@/components/contents/GovCenter.vue";
import GovBottom from "@/components/contents/GovBottom.vue";

export default {
  name: 'Gov',
  components: {
    Card,
    GovTop,
    GovCenter,
    GovBottom
  }
}
</script>

<style scoped>
#top{
    height: 40%;
}
#center{
    height: 40%;
    margin-top: 20px;
}
#bottom{
    height: 18%;
    margin-top: 20px;
}
</style>