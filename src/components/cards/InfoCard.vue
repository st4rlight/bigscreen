<template>
    <el-row class="widthHeight">
        <el-col :span="this.left" class="height inline-center">
            <span>
                <svg :class="[this.small ? 'icon-small' : 'icon']" aria-hidden="true">
                   <use :xlink:href="'#' + this.icon"></use>
                </svg>
            </span>
        </el-col>
        <el-col :span="this.right" class="height start-center">
            <div>
                <li :class="['key', {li: li_style}]">
                    {{ this.title }}
                </li>
                <span>
                    <a :class="this.small ? 'value-small' : 'value' ">
                        {{ this.value }}
                    </a>
                    <a class="unit" >{{ this.unit }}</a>
                </span>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "InfoCard",
    props: ['title', 'value', 'unit', 'left', 'right', 'icon', 'li_style', 'small']
}
</script>

<style scoped>
.key{
    font-size: 2rem;
}
.value{
    font-size: 4.5rem;
    font-weight: bold;
}
.value-small{
    font-size: 3rem;
    font-weight: bold;
}
.start-center{
    display: flex;
    justify-content: start;
    align-items: center;
}
i{
    font-size: 7rem;
}
.icon{
    width: 6rem;
    height: 6rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.icon-small{
    width: 5em;
    height: 5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
svg:last-of-type {
    fill: #409EFF;
}
.li{
    list-style-type: none;
}
.unit{
    font-size: 1.7rem;
    font-weight: bold;
}
.unit-small{
    font-size: 1.2rem;
    font-weight: bold;
}
</style>