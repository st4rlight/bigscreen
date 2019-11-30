<template>
    <div class="widthHeight">
        <div class="center-title">
            <div style="border-bottom: 2px dashed white; display: inline-block;" >
                每月办件受理情况
            </div>
        </div>
        <div class="center-body inline-center">
            <v-chart :options="line" style="width: 90%; height: 100%"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GovCenter",
        data(){
            let data = [];
            for(let i = 0; i < 12; i++)
                data.push(i + 1 + '月');

            return {
                line: {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type: 'category',
                            boundaryGap : false,
                            data: data,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 30,
                                    color: 'white'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                textStyle: {
                                    fontSize: 30,
                                    color: 'white'
                                }
                            }
                        }
                    ],
                    color: ['#fff', '#409EFF'],
                    // color: ['rgb(252,157,154)', 'rgb(200,200,169)', 'rgb(249,205,173)', 'rgb(131,175,155)'],
                    series : [
                        {
                            name:'总件数',
                            type:'line',
                            areaStyle: {},
                            data:[800, 1400, 1800, 1900, 1500, 1000, 2000, 2300, 2500, 2250, 1700, 1100],
                            smooth: true
                        },
                        {
                            name:'处理件数',
                            type:'line',
                            areaStyle: {},
                            data:[300, 1000, 1350, 1650, 1000, 500, 1400, 1900, 2100, 1800, 1300, 800],
                            smooth: true
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.center-title{
    height: 80px;
    width: 100%;
    font-weight: bold;
    font-size: 2.2rem;
    margin-left: 2.5%;
    display: flex;
    align-items: flex-end;
}
.center-body{
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>