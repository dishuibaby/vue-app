<script setup>

</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
        <common-aside />
        <el-container>
            <el-hreader>
                <common-header />
            </el-hreader>
            <el-main>
                Main
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
    .common-layout,lay-container{
        width: 100%;
        height: 100%;
        overflow: hidden;

    }
</style>
