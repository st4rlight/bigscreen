<template>
    <el-row class="widthHeight inline-center">
        <el-col :span="13">
            <v-chart :options="pie" style="margin-left: -51%"/>
        </el-col>
        <el-col :span="11">
            <ul>
                <li class="key">
                    {{ this.getName }}
                    <a class="value">
                        {{ this.getCount }}
                    </a>
                    <a class="unit">件</a>
                </li>

                <li class="key">
                    {{ this.dealName }}
                    <a class="value">
                        {{ this.dealCount }}
                    </a>
                    <a class="unit">件</a>
                </li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "NetCard",
    props: ['getName', 'getCount', 'dealName', 'dealCount', 'otherName'],
    data () {
        let center = `{value|${(this.dealCount / this.getCount * 100).toFixed(2)}}{unit|%}`;
        return {
            pie: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color: ['#909399', '#409EFF'],
                series: [
                    {
                        startAngle: 10,
                        type:'pie',
                        radius: ['45%', '60%'],
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
                                    value: {
                                        fontSize: 47,
                                        color: 'white',
                                    },
                                    unit: {
                                        fontSize: 27,
                                        color: 'white',
                                        verticalAlign: 'bottom',
                                    }
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {value: this.getCount - this.dealCount, name: this.otherName},
                            {value: this.dealCount, name: this.dealName},
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.key{
    font-size: 1.6rem;
}
.value{
    font-size: 2.8rem;
    font-weight: bold;
}
.unit{
    font-weight: bold;
}
</style>