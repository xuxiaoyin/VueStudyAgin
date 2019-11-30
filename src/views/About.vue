<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-tree :data="copyData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 2,
              label: '二级 1-1',
              children: [{
                id: 3,
                label: '三级 1-1-1'
              }]
            }]
          },
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 2,
              label: '二级 1-1',
              children: [{
                id: 3,
                label: '三级 1-1-1'
              }]
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        copyData: [],
        arr: []
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      normalData(arr) {
        if (arr && arr.length) {
          arr.forEach(item => {
            this.copyData.push({
              id: item.id,
              label: item.label,
            })
            this.normalData(item.children)
          });
        }
      }
    },
    mounted() {
      this.normalData(this.data)
    },
  };
</script>
