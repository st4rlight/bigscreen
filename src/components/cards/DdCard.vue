<template>
    <div class="widthHeight">
        <div class="DdCardTitle">
            <div style="display: inline-block; border-bottom: 1px dashed white">
                {{ this.title }}
            </div>
        </div>
        <div class="DdCardContent">
            <el-row class="widthHeight">
                <el-col :span="12" class="height">
                    <slot name="first"></slot>
                </el-col>
                <el-col :span="12" class="height">
                    <slot name="second"></slot>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "DdCard",
    props: ['title']
}
</script>

<style scoped>
.DdCardTitle{
    height: 80px;
    font-size: 2.5rem;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    margin-left: 2.5%;
}
.DdCardContent{
    height: calc(100% - 80px);
}
</style>