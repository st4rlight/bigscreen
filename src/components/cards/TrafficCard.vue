<template>
    <div class="widthHeight">
        <div style="height: 3%"></div>
        <div style="height: 65%" class="inline-center">
            <v-chart :options="traffic" style="width: 100%; height: 100%; margin-left: 20px"/>
        </div>
        <div style="height: 32%; flex-direction: column; justify-content: flex-start" class="inline-center">
            <a style="font-size: 2rem">
                {{ title }}
            </a>
            <a style="font-weight: bold; font-size: 3.2rem">
                {{ (this.value / this.max * 100).toFixed(2).toString() + '%' }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrafficCard",
    props: ['title', 'value', 'max'],
    data(){
        let center = `{value|${(this.value / this.max * 100).toFixed(2)}}{unit|%}`;
        return {
            traffic: {
                tooltip: {
                    trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color: ['#dd6b66', 'grey', '#8dc1a9', '#e69d87'],
                // color: ['rgb(131,175,155)', 'rgb(252,157,154)', 'rgb(200,200,169)', 'rgb(249,205,173)', 'rgb(254,67,101)'],
                series: [
                    {
                        startAngle: 310,
                        name: this.title,
                        type: 'pie',
                        radius: ['67%', '90%'],
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
                                    fontSize: 60,
                                    color: 'white',
                                },
                                unit: {
                                    fontSize: 30,
                                    color: 'white',
                                    verticalAlign: 'bottom',
                                }
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:
                        [
                            {
                                name: '已共享',
                                value: this.value
                            },
                            {
                                name: '未共享',
                                value: this.max - this.value
                            }
                        ]
                }]
            }
        }
    }
}
</script>

<style scoped>

</style>