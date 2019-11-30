<template>
    <div class="widthHeight">
        <div style="background-color: rgba(0, 0, 0, 0.25); display: flex; justify-content: center">
            <div class="title">
                <div class="title-container">
                    <div class="title-under">
                        <a>{{ title }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardContainer",
        props: ['title']
    }
</script>

<style scoped>
.title{
    height: 140px;
     width: 94%;
    border-bottom: 1px solid white;
}
.title-container{
    font-size: 3.2rem;
    font-weight: bolder;
    border-bottom: 7px solid white;
    height: 100%;
    display: inline-block;
}
.title-under{
    height: 100%;
    display: flex;
    align-items: center;
}
.body{
    width: 100%;
    height: calc(100% - 140px);
    background-color: rgba(0, 0, 0, 0.15);
    padding-top: 25px;
}
</style>