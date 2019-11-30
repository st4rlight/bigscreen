<template>
    <CardContainer title="钉钉智能办公" class="widthHeight">
        <div style="padding: 20px; box-sizing:border-box;" class="widthHeight">
            <div class="dd-container">
                <el-row class="widthHeight">
                    <el-col :span="12" class="height">
                        <DdCard title="12345热线">
                            <InfoCard title="预警问题量" :value="5.6" unit="万件"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-yunanquan"
                                      slot="first"
                            />
                            <InfoCard title="处理量" :value="3.2" unit="万件"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-rexian"
                                      slot="second"
                            />
                        </DdCard>
                    </el-col>
                    <el-col :span="12" class="height">
                        <DdCard title="钉钉政务办公收发文">
                            <InfoCard title="处理数量" :value="1.1" unit="万件"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-gongwen"
                                      slot="first"
                            />
                            <InfoCard title="处理平均时间" :value="1.2" unit="天"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-shijianhuaban"
                                      slot="second"
                            />
                        </DdCard>
                    </el-col>
                </el-row>
            </div>
            <div class="dd-container">
                <el-row class="widthHeight">
                    <el-col :span="12" class="height">
                        <DdCard title="自由贸易港“政务协同平台”企业">
                            <InfoCard title="办件数量" :value="4.1" unit="万件"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-banjiangonggao"
                                      slot="first"
                            />
                            <InfoCard title="处理量" :value="3.1" unit="万件"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-tongji"
                                      slot="second"
                            />
                        </DdCard>
                    </el-col>
                    <el-col :span="12" class="height">
                        <DdCard title="钉钉企业">
                            <InfoCard title="不见面审批指数" :value="6.1" unit=""
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-hulian"
                                      slot="first"
                            />
                            <InfoCard title="审批满意度" :value="60" unit="%"
                                      :left="10" :right="14"
                                      :li_style="true"
                                      icon="el-icon-manyidu1"
                                      slot="second"
                            />
                        </DdCard>
                    </el-col>
                </el-row>
            </div>
        </div>
    </CardContainer>
</template>

<script>
import CardContainer from "@/components/cards/CardContainer";
import DdCard from "@/components/cards/DdCard";
import InfoCard from "@/components/cards/InfoCard";
export default {
    name: "Dingding",
    components: {InfoCard, DdCard, CardContainer}
}
</script>

<style scoped>
.dd-container{
    height: 50%;
}
</style>