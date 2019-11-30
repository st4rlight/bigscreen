<template>
    <el-row class="widthHeight" type="flex" justify="space-around">
        <el-col :span="10" class="height">
            <TopCard title="中心布局" center="窗口总数" unit="个" :value="141" :list="list1" />
        </el-col>
        <el-col :span="6" class="height">
            <TopCard title="一窗业务分类" center="统计调查" unit="天" :value="45" :list="list2" />
        </el-col>
        <el-col :span="7" class="height">
            <TopCard title="多证业务" center="多证业务" unit="件" :value="621" :list="list3" />
        </el-col>
    </el-row>
</template>

<script>
import TopCard from "@/components/cards/TopCard";
export default {
    name: "GovTop",
    data(){
        return {
            list1: [
                {
                    title: '社会民生',
                    content: '部门: 23　窗口: ',
                    value: 42,
                    unit: ''
                },
                {
                    title: '不动产交易',
                    content: '部门: 3　窗口: ',
                    value: 39,
                    unit: ''
                },
                {
                    title: '企业服务',
                    content: '部门: 2　窗口: ',
                    value: 25,
                    unit: ''
                },
                {
                    title: '建设工程',
                    content: '部门: 9　窗口: ',
                    value: 35,
                    unit: ''
                }
            ],
            list2: [
                {
                    title: '换发零食',
                    content: '',
                    value: 25,
                    unit: '天'
                },
                {
                    title: '建设工程',
                    content: '',
                    value: 49,
                    unit: '天'
                },
                {
                    title: '土地估计',
                    content: '',
                    value: 34,
                    unit: '天'
                },
                {
                    title: '新建、改',
                    content: '',
                    value: 30,
                    unit: '天'
                }
            ],
            list3: [
                {
                    title: '一窗办',
                    content: '一次提交，平均办理时间 3 天',
                    value: '',
                    unit: ''
                },
                {
                    title: '13+部门　26事项',
                    content: '',
                    value: '',
                    unit: ''
                }
            ]
        }
    },
    components: {
        TopCard
    }
}
</script>

<style scoped>
</style>