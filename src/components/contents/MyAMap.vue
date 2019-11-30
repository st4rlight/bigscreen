<template>
    <div class="widthHeight" id="map_container">
        <!--  地图容器  -->
    </div>
</template>

<script>
import AMap from 'AMap';
export default {
    name: 'MyAMap',
    mounted () {
        this.init();
    },
    methods: {
        init () {
            let map = new AMap.Map('map_container', {
                center: [120.13, 30.2595],
                resizeEnable: false,
                mapStyle: 'amap://styles/grey',
                zoom: 16,
                // viewMode:'3D',
                layers: [//使用多个图层
                ],
                zooms: [4,18],//设置地图级别范围,
                features: ["road"]
            });

            map.setFeatures(["road"]);

        }
    }
}
</script>

<style scoped>

</style>