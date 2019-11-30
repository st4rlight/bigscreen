<template>
    <CardContainer title="畅通工程" class="widthHeight">
        <el-row class="traffic-container">
            <el-col :span="6" class="height">
                <TrafficCard title="部门共享率" :value="41" :max="50" />
            </el-col>
            <el-col :span="6" class="height">
                <TrafficCard title="系统共享率" :value="47" :max="120" />
            </el-col>
            <el-col :span="6" class="height">
                <TrafficCard title="信息项共享率" :value="9695" :max="10000" />
            </el-col>
            <el-col :span="6" class="height">
                <TrafficCard title="信息资源共享率" :value="392941335" :max="402645081" />
            </el-col>
        </el-row>
        <div class="pro-container inline-center" style="flex-direction: column">
            <div class="progress_container">
                <Progre title="部门接入数"
                        :value="41"
                        :max="50"
                        variant="success"
                />
            </div>
            <div class="progress_container">
                <Progre title="系统共享数"
                        :value="47"
                        :max="120"
                        variant="primary"
                />
            </div>
            <div class="progress_container">
                <Progre title="资源共享总交换量"
                        :value="392941335"
                        :max="402645081"
                        variant="warning"
                />
            </div>
        </div>
    </CardContainer>
</template>

<script>
import CardContainer from "@/components/cards/CardContainer";
import Progre from "@/components/contents/Progre";
import TrafficCard from "@/components/cards/TrafficCard";
export default {
    name: "Traffic",
    components: {TrafficCard, Progre, CardContainer}
}
</script>

<style scoped>
.traffic-container{
    height: 65%;
     width: 100%;
}
.pro-container{
    height: 35%;
     width: 100%;
}
.progress_container{
    height: 33.3%;
    width: 100%;
}
</style>