<template>
  <el-aside width="180px" class="aside">
    <h5 class="logo">通用后台管理系统</h5>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
    <div v-for="(item, index) in menus" :key="index">
      <template v-if="item.children">
        <el-sub-menu :index="item.path">
          <template #title>
            <component class="icons" :is="item.icon" />
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :key="child.path"
          >
          <component class="icons" :is="child.icon" />
          <span>{{ child.label }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <component class="icons" :is="item.icon" />
          <span>{{ item.label }}</span>
        </el-menu-item>
      </template>
    </div>
    </el-menu>
  </el-aside>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    // 菜单数据
    const menus = ref([
      {
        path: "/dashboard",
        label: "仪表盘",
        icon: "House",
        children: [
          {
            path: "/dashboard/overview",
            name: "overview",
            label: "概览",
            icon: "House",
            url: "/dashboard/overview",
          },
          {
            path: "/dashboard/stats",
            name: "stats",
            label: "统计",
            icon: "PieChart",
            url: "/dashboard/stats",
          },
        ],
      },
      {
        path: "/settings",
        label: "设置",
        icon: "Setting",
        children: [
          {
            path: "/settings/profile",
            name: "profile",
            label: "个人设置",
            icon: "User",
            url: "/settings/profile",
          },
          {
            path: "/settings/security",
            name: "security",
            label: "安全设置",
            icon: "lock",
            url: "/settings/security",
          },
        ],
      },
      {
        path: "/help",
        name: "help",
        label: "帮助",
        icon: "Help",
        url: "/help",
      },
    ]);

    // 处理菜单打开的函数
    const handleOpen = function (key, keyPath) {
      console.log("Open:", key, keyPath);
    };

    // 处理菜单关闭的函数
    const handleClose = function (key, keyPath) {
      console.log("Close:", key, keyPath);
    };

    return {
      menus,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style type="less" scoped>
.icons {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.el-menu {
  border-right: none;
}

.aside{
  height: 100%;
  overflow-y: auto;
}

.logo {
  line-height: 60px;
  margin: 0px;
  color: #fff;
  text-align: center;
  background-color: #333;
  border-right: grey 1px solid;
}
</style>
