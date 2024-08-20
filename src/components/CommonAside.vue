<template>
  <el-aside :width="asideWidth" class="aside">
    <h5 class="logo" v-show="!isCollapse">通用后台管理系统</h5>
    <h5 class="logo" v-show="isCollapse">后台</h5>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <div v-for="(item, index) in menus" :key="index">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon><component class="icons" :is="item.icon" /></el-icon>
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
        <div v-else>
          <el-menu-item :index="item.path">
            <el-icon><component class="icons" :is="item.icon" /></el-icon>
            <template #title>{{ item.label }}</template>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { computed, ref } from "vue";
import { useAllDataStore } from "@/stores";

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

const store = useAllDataStore();
const isCollapse = computed(() => store.state.isCollapse);
const asideWidth = computed(() => (isCollapse.value ? "64px" : "180px"));
</script>

<style lang="less" scoped>
.icons {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.el-menu {
  border-right: none;
}

.aside {
  width: auto;
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
<style lang="less">
.el-menu--collapse .el-sub-menu__icon-arrow {
  display: none;
}
.el-menu--collapse .el-sub-menu__title span {
  display: none;
}
</style>
