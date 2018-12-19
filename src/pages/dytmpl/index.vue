/**
* Created by wanghongxiang on 2018/2/4.
 */
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">这是一个div</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Tooltip content="全屏">
                <Icon type="android-expand"></Icon>
              </Tooltip>
            </MenuItem>
            <MenuItem name="2">
              <Tooltip content="清空">
                <Icon type="trash-a"></Icon>
              </Tooltip>
            </MenuItem>
            <MenuItem name="3">
              <Tooltip content="编辑">
                <Icon type="edit"></Icon>
              </Tooltip>
            </MenuItem>
            <MenuItem name="4">
              <Tooltip content="源码">
                <Icon type="code"></Icon>
              </Tooltip>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="plus"></Icon> 设置行列
              </template>
              <MenuItemWidget :rowspan="rowspan1212"></MenuItemWidget>
              <MenuItemWidget rowspan="6 6 6 6"></MenuItemWidget>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                基础组件
            </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                自定义组件
            </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{paddingLeft: '12px'}">
          <Content :style="{padding: '10px', minHeight: '280px', background: '#fff'}">
            Content
        </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import MenuItemWidget from './menu-item-widget.vue'
  export default {
    name: 'dy-tmpl',
    components: {
      MenuItemWidget
    },
    data () {
      return {
        rowspan1212: '12 12'
      }
    },
    methods: {
      addRowSpan () {
        console.log('add-row-span')
      }
    }
  }
</script>
<style lang="less">
  body {
    background: #f0f3f4;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .set-row-span {
    i.sn-arrow-move {
      margin-left: 4px;
    }
  }
</style>
<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    & > div.ivu-layout {
      height: 100%;
    }
  }
  .set-row-span {
    .ivu-input-wrapper {
      width: 80%;
    }
    .sn-arrow-move > i {
      magin-left: 6px;
    }
    .row-none {
      display: none;
    }
  }
  .ivu-layout-header {
    padding: 0 10px;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-size: 14px;
    color: #fff;
    line-height: 30px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    .ivu-menu-item {
      float: right;
      padding: 0 5px;
    }
  }
</style>
