<template>
  <el-aside width="180px">
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
        v-for="(item, index) in menus" 
        :index="item.path" 
        :key="index"
      >
        <!-- 判断是否存在 children 元素 -->
        <template v-if="item.children">
            <el-menu-item-group>
            <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
            >
                <component class="icons" :is="child.icon" />
                <span>{{child.label}}</span>
            </el-menu-item>
            </el-menu-item-group>
        </template>        
        <!-- 如果没有 children，则渲染普通菜单项 -->
        <template v-else>
            <el-menu-item :index="item.path">
            <component class="icons" :is="item.icon" />
            <span>{{item.label}}</span>
            </el-menu-item>
        </template>
        </el-sub-menu>
      </el-menu>
  </el-aside>
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

<style type="less" scoped>
.icons {
    width: 16px;
    height:16px;
    margin-right: 5px;
}

.el-menu{
    border-right: none;
    h3{
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
}
</style>
