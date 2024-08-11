<template>
    
</template>
<script>
import { defineComponent } from '@vue/composition-api'

const menu = [
    {
      "path": "/dashboard",
      "label": "仪表盘",
      "icon": "el-icon-s-home",
      "children": [
        {
          "path": "/dashboard/overview",
          "name": "overview",
          "label": "概览",
          "icon": "el-icon-s-data",
          "url": "/dashboard/overview"
        },
        {
          "path": "/dashboard/stats",
          "name": "stats",
          "label": "统计",
          "icon": "el-icon-s-marketing",
          "url": "/dashboard/stats"
        }
      ]
    },
    {
      "path": "/settings",
      "label": "设置",
      "icon": "el-icon-s-tools",
      "children": [
        {
          "path": "/settings/profile",
          "name": "profile",
          "label": "个人设置",
          "icon": "el-icon-user-solid",
          "url": "/settings/profile"
        },
        {
          "path": "/settings/security",
          "name": "security",
          "label": "安全设置",
          "icon": "el-icon-lock",
          "url": "/settings/security"
        }
      ]
    },
    {
      "path": "/help",
      "name": "help",
      "label": "帮助",
      "icon": "el-icon-question",
      "url": "/help"
    }
  ]
}
}

]
</script>
