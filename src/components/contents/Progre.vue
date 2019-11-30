<template>
    <el-row type="flex" class="widthHeight" :gutter="30">
        <el-col :span="6" style="" class="progress_title">
            {{ title }}
        </el-col>
        <el-col :span="17" class="inline-center">
            <b-progress
                show-progress animated
                style="height: 45px; width: 100%"
                :max="max"
            >
                <b-progress-bar
                    :variant="variant"
                    :value="value"
                    :label="(value / max * 100).toFixed(2) + ' %'"
                />
            </b-progress>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Progre",
    props: ['title', 'value', 'max', 'variant']
}
</script>

<style scoped>
.progress_title{
    font-size: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
}
</style>