<template>
    <CardContainer title="椰城市民云" class="widthHeight">
        <el-row class="widthHeight" type="flex" justify="space-around">
            <el-col :span="5" class="height">
                <InfoCard title="省公积金访问量" :value="1.5" unit="万次"
                          :left="8" :right="16"
                          :li_style="true"
                          icon="el-icon-gongjijin"
                />
            </el-col>
            <el-col :span="5" class="height">
                <InfoCard title="人社保险访问量" :value="7.6" unit="万次"
                          :left="8" :right="16"
                          :li_style="true"
                          icon="el-icon-insurance"
                />
            </el-col>
            <el-col :span="6" class="height">
                <InfoCard title="公交系统查询访问量" :value="2.5" unit="万次"
                          :left="7" :right="17"
                          :li_style="true"
                          icon="el-icon-weibiaoti507"
                />
            </el-col>
            <el-col :span="6" class="height">
                <InfoCard title="交通违章查询访问量" :value="1.8" unit="万次"
                          :left="7" :right="17"
                          :li_style="true"
                          icon="el-icon-top-illegal"
                />
            </el-col>
        </el-row>
    </CardContainer>
</template>

<script>
import CardContainer from "@/components/cards/CardContainer";
import InfoCard from "@/components/cards/InfoCard";
export default {
    name: "Cloud",
    components: {
        InfoCard,
        CardContainer
    }
}
</script>

<style scoped>

</style>