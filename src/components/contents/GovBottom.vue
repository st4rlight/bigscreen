<template>
    <div class="widthHeight">
        <div class="bottom-title">
            <div style="border-bottom: 2px dashed white; display: inline-block">
                接待情况
            </div>
        </div>
        <el-row class="bottom-body" type="flex" justify="space-between">
            <el-col :span="6" class="height">
                <InfoCard title="平均等待时间约" :value="26" unit="MIN"
                          :left="10" :right="14"
                          :li_style="true"
                          icon="el-icon-ico-dengdai"
                />
            </el-col>
            <el-col :span="5" class="height">
                <InfoCard title="等待人数约" :value="0" unit="人"
                          :left="10" :right="14"
                          :li_style="true"
                          icon="el-icon-renshu"
                />
            </el-col>
            <el-col :span="8" class="height">
                <InfoCard title="集体土地所有权权属确认约" :value="28" unit="MIN"
                          :left="7" :right="17"
                          :li_style="true"
                          icon="el-icon-fangwu"
                />
            </el-col>
            <el-col :span="5" class="height">
                <InfoCard title="开业登记约" :value="15" unit="MIN"
                          :left="10" :right="14"
                          :li_style="true"
                          icon="el-icon-kaiye1"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import InfoCard from "@/components/cards/InfoCard.vue";
export default {
    name: "GovBottom",
    components: {
        InfoCard
    }
}
</script>

<style scoped>
.bottom-title{
    width: 100%;
    height: 80px;
    font-weight: bold;
    font-size: 2.2rem;
    margin-left: 2.5%;
    display: flex;
    align-items: flex-end;
}
.bottom-body{
    height: calc(100% - 80px);
    width: 100%;
}
</style>