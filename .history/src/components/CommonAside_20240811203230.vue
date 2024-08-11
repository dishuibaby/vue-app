<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">通用后台管理系统</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu 
            v-for="item in menus"
            :index="item.path"
            :key="item.path"
        >
          <template #title>
            <component class="icons" :is="item.icon" />
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { ref, computed } from "vue";
//菜单数据
const menus = [
  {
    path: "/dashboard",
    label: "仪表盘",
    icon: "el-icon-s-home",
    children: [
      {
        path: "/dashboard/overview",
        name: "overview",
        label: "概览",
        icon: "el-icon-s-data",
        url: "/dashboard/overview",
      },
      {
        path: "/dashboard/stats",
        name: "stats",
        label: "统计",
        icon: "el-icon-s-marketing",
        url: "/dashboard/stats",
      },
    ],
  },
  {
    path: "/settings",
    label: "设置",
    icon: "el-icon-s-tools",
    children: [
      {
        path: "/settings/profile",
        name: "profile",
        label: "个人设置",
        icon: "el-icon-user-solid",
        url: "/settings/profile",
      },
      {
        path: "/settings/security",
        name: "security",
        label: "安全设置",
        icon: "el-icon-lock",
        url: "/settings/security",
      },
    ],
  },
  {
    path: "/help",
    name: "help",
    label: "帮助",
    icon: "el-icon-question",
    url: "/help",
  },
];

const hasChidren = computed(() => menus.value.filters((item) => item.children));
const noChidren = computed(() => menus.value.filters((item) => !item.children));
</script>

<style type="less" scoped></style>
