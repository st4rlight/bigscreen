<template>
    <div style="width: 550px; height: 600px">
        <div class="map-card-title">
            <div class="map-title-container height">
                <a style="font-size: 2rem; font-weight: bold">{{ title }}</a>
            </div>
        </div>
        <div style="height: 80%; background: rgba(0, 0, 0, 0.15)">
            <el-row style="height: 50%">
                <el-col :span="12" class="height">
                    <slot name="first"></slot>
                </el-col>
                <el-col :span="12" class="height">
                    <slot name="second"></slot>
                </el-col>
            </el-row>
            <el-row style="height: 50%">
                <el-col :span="12" class="height">
                    <slot name="third"></slot>
                </el-col>
                <el-col :span="12" class="height">
                    <slot name="fourth"></slot>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "MapCard",
    props: ['title']
}
</script>

<style scoped>
.map-card-title{
    height: 20%;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
}
.map-title-container{
    display: flex;
    border-bottom: 2px solid white;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
}
</style>