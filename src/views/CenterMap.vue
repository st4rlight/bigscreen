<template>
    <div class="widthHeight">
        <div class="MapTitle">
            <a>XXX　城市大脑 ---- 政务</a>
        </div>
        <div style="height: calc(100% - 200px); position: relative;">
            <MapCard title="区域概览" style="position: absolute; top: 500px; left: 200px" >
                <template v-for="(item, idx) in listData">
                    <InfoCard :title="item.title" :value="item.value"
                              :unit="item.unit"   :icon="item.icon"
                              :key="idx"          :slot="item.slot"
                              :left="10" :right="14"
                              :li_style="true"
                              :small="true"
                    />
                </template>
            </MapCard>
            <MapCard title="区域概念" style="position: absolute; top: 700px; left: 800px">
                <template v-for="(item, idx) in listData">
                    <InfoCard :title="item.title" :value="item.value"
                              :unit="item.unit"   :icon="item.icon"
                              :key="idx"          :slot="item.slot"
                              :left="10" :right="14"
                              :li_style="true"
                              :small="true"
                    />
                </template>
            </MapCard>
            <MapCard title="区域概念" style="position: absolute; top: 1000px; left: 2100px">
                <template v-for="(item, idx) in listData">
                    <InfoCard :title="item.title" :value="item.value"
                              :unit="item.unit"   :icon="item.icon"
                              :key="idx"          :slot="item.slot"
                              :left="10" :right="14"
                              :li_style="true"
                              :small="true"
                    />
                </template>
            </MapCard>
            <MapCard title="区域概念" style="position: absolute; top: 300px; left: 2300px">
                <template v-for="(item, idx) in listData">
                    <InfoCard :title="item.title" :value="item.value"
                              :unit="item.unit"   :icon="item.icon"
                              :key="idx"          :slot="item.slot"
                              :left="10" :right="14"
                              :li_style="true"
                              :small="true"
                    />
                </template>
            </MapCard>
        </div>
    </div>
</template>

<script>
import MapCard from "@/components/cards/MapCard";
import InfoCard from "@/components/cards/InfoCard";

export default {
    name: "CenterMap",
    components: {
        MapCard,
        InfoCard
    },
    data(){
        return {
            listData: [
                {
                    title: '总接待',
                    value: 611,
                     unit: '件',
                     slot: 'first',
                     icon: 'el-icon-jiedai'
                },
                {
                    title: '办件量',
                    value: 526,
                    unit: '件',
                    slot: 'second',
                    icon: 'el-icon-banjiangonggao'
                },
                {
                    title: '总事项',
                    value: 611,
                    unit: '件',
                    slot: 'third',
                    icon: 'el-icon-shixiang'
                },
                {
                    title: '满意度',
                    value: 98,
                    unit: '%',
                    slot: 'fourth',
                    icon: 'el-icon-manyidu2'
                },
            ]
        }
    }
}
</script>

<style scoped>
.MapTitle{
    height: 200px;
    font-size: 5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
</style>