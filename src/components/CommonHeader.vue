<template>
  <div class="header">
    <div class="header-left">
      <el-button size="small">
        <el-icon ><Menu /></el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar shape="square" size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          <el-text class="mx-1" size="large">张三</el-text>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script >

</script>
<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
}

.header-left{
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.breadcrumb{
  font-size: 14px;
}

.el-dropdown-link{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-avatar{
    margin-right: 5px;
  }
  .el-text{
    color: #fff;
  }
}

:deep(.breadcrumb span) {
  color: #fff !important;
  cursor: pointer;
}
</style>
