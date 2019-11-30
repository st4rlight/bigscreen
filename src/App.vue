<template>
  <div id="app">
    <div class="amap-wrapper">
      <MyAMap />
    </div>

    <el-row id="whole_container" type="flex" justify="space-around" align="center">
      <!-- 左边 -->
      <el-col :span="6" class="mask">
        <div id="left_container">
          <div id="gov_center">
            <Gov />
          </div>
          <div id="one_net">
            <OneNet />
          </div>
        </div>
      </el-col>

      <!-- 中间 -->
      <el-col :span="11">
        <div class="widthHeight">
          <CenterMap />
        </div>
      </el-col>

      <!-- 右边 -->
      <el-col :span="6" class="mask">
        <div id="right_container">
          <div id="city_cloud">
              <Cloud />
          </div>
          <div id="traffic">
              <Traffic />
          </div>
          <div id="dingding">
              <Dingding />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OneNet from '@/views/OneNet';
import Gov from '@/views/Gov';
import NetCard from "@/components/cards/NetCard";
import Cloud from "@/views/Cloud";
import Traffic from "@/views/Traffic";
import Dingding from "@/views/Dingding";
import MyAMap from "@/components/contents/MyAMap";
import CenterMap from "@/views/CenterMap";

export default {
  name: "App",
  components: {
    CenterMap,
    MyAMap,
    Dingding,
    Traffic,
    NetCard,
    OneNet,
    Gov,
    Cloud
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   width: 6912px;
  height: 2432px;
  position: absolute;
}

.amap-wrapper {
  width: 100%;
  height: 100%;
  opacity: 0.95;
}
#whole_container{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
}

#left_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
#right_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
#gov_center{
  height: 72%;
  padding: 25px;
  box-sizing:border-box;
}
#one_net{
  height: 22%;
  padding: 25px;
  box-sizing:border-box;
}
body *{
  color: white;
  /*border: 1px solid black;*/
}
.mask{
  /*background-color: rgba(0, 0, 0, 0.15);*/
}
.inline-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.height{
  height: 100%;
}
.width{
  width: 100%;
}
.widthHeight{
  width: 100%;
  height: 100%;
}
li{
  list-style-type: square;
}
#city_cloud{
  height: 18%;
  padding: 20px;
  box-sizing:border-box;
}
#traffic{
  height: 46%;
  padding: 20px;
  box-sizing:border-box;
}
#dingding{
  height: 32%;
  padding: 20px;
  box-sizing:border-box;
}
.progress-bar{
  font-size: 2rem;
}
</style>
