<template>
    <Card title="一网通" class="widthHeight">
        <el-row class="widthHeight">
            <el-col :span="8" class="height">
                <NetCard
                    getName="今日收件总数"
                    :getCount="1235"
                    dealName="今日办件总数"
                    :dealCount="584"
                    otherName="今日剩余件数"
                />
            </el-col>
            <el-col :span="8" class="height">
                <NetCard
                    getName="当月累计收件"
                    :getCount="10053"
                    dealName="当月累计办结"
                    :dealCount="8670"
                    otherName="当月剩余件数"
                />
            </el-col>
            <el-col :span="8" class="height">
                <NetCard
                    getName="当年累计收件"
                    :getCount="80380"
                    dealName="当年累计办结"
                    :dealCount="69269"
                    otherName="当年剩余件数"
                />
            </el-col>
        </el-row>
    </Card>
</template>

<script>
import Card from '@/components/cards/CardContainer.vue';
import NetCard from "@/components/cards/NetCard.vue";

export default {
    name: "OneNet",
    components: {
        NetCard,
        Card
    }
}
</script>

<style scoped>

</style>