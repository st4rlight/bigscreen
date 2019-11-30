<template>
    <div class="widthHeight">
        <div style="height: 15%" class="inline-center">
            <a class="top-title">{{ this.title }}</a>
        </div>
        <div style="height: 50%" class="inline-center">
            <v-chart :options="circle" />
        </div>
        <div style="height: 35%; margin-top: -10px">
            <el-row class="widthHeight" v-if="this.list.length === 4" type="flex" justify="space-around">
                <el-col :span='11' class="height" style="display: flex; justify-content: right">
                    <ul>
                        <template v-for="(item, index) in this.list.slice(0, 2)">
                            <li :key="index" class="li-title">{{ item.title }}</li>
                            <a class="li-content">
                                {{ item.content }}
                                <a style="font-size: 2rem; font-weight: bold">{{ item.value }}</a>
                                {{item.unit}}
                            </a>
                            <br />
                        </template>
                    </ul>
                </el-col>
                <el-col :span='11' class="height" style="display: flex; justify-content: left">
                    <ul>
                        <template v-for="(item, index) in this.list.slice(2)">
                            <li :key="index" class="li-title">{{ item.title }}</li>
                            <a class="li-content">
                                {{ item.content }}
                                <a style="font-size: 2rem; font-weight: bold">{{ item.value }}</a>
                                {{ item.unit }}
                            </a>
                            <br />
                        </template>
                    </ul>
                </el-col>
            </el-row>

            <div class="inline-center widthHeight" v-else>
                <ul>
                    <template v-for="(item, index) in this.list.slice(0, 2)">
                        <li :key="index" class="li-title">{{ item.title }}</li>
                        <a class="li-content">{{ item.content + item.value + item.unit}}</a>
                        <br />
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopCard",
        props: ['title', 'center', 'value', 'unit', 'list'],
        data(){
            let center = `{title|${this.center}}\n\n{value|${this.value}}{unit|${this.unit}}`;
            return {
                circle: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['#8dc1a9', '#e69d87', '#759aa0', '#dd6b66','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
                    // color: ['rgb(131,175,155)', 'rgb(200,200,169)', 'rgb(249,205,173)', 'rgb(252,157,154)', 'rgb(254,67,101)'],
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['48%', '70%'],
                            avoidLabelOverlap: true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: (param) => {
                                        if(param.dataIndex === 0)
                                            return center;
                                        else
                                            return '';
                                    },
                                    rich: {
                                        title: {
                                            fontSize: 25,
                                            color: 'white',
                                            verticalAlign: 'top'
                                        },
                                        value: {
                                            fontSize: 55,
                                            color: 'white',
                                            fontWeight: 'bold'
                                        },
                                        unit: {
                                            fontSize: 25,
                                            color: 'white',
                                            verticalAlign: 'bottom'
                                        }
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: (this.list.length === 4) ?
                                this.list.map((item) => {
                                    return {
                                        value: item.value,
                                         name: item.title
                                    }
                                })
                                :
                                [
                                    {
                                         name: '多证业务',
                                        value: '621'
                                    }
                                ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.top-title{
    font-size: 2.2rem;
    font-weight: bold;
}
.li-title{
    font-size: 1.7rem;
    padding-top: 15px;
}
.li-content{
    font-size: 1.5rem;
}
</style>