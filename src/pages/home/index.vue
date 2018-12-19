/**
* Created by wanghongxiang on 2018/2/7.
 */
<template>
  <div class="layout home">
      <Header ref="home-header" class="i-row">
        <div class="layout-logo ivu-col-span-6">
          <Input  v-model="searchText" style="width: 200px" icon="ios-search" placeholder="Enter something..." ></Input>
        </div>
        <Menu @on-select="changeMenu" class="ivu-col-span-18" mode="horizontal"  active-name="home">
            <MenuItem name="home">
              <Icon type="ios-paper"></Icon>
              首页
          </MenuItem>
            <MenuItem name="tags">
              <Icon type="ios-people"></Icon>
              新增文章
          </MenuItem>
            <MenuItem name="archive" >
              <Icon type="ios-paper"></Icon>
              归档
          </MenuItem>
            <MenuItem name="about">
              <Icon type="settings"></Icon>
              关于我
          </MenuItem>
          <Dropdown style="float: right;marginRight:30px">
            <a href="javascript:void(0)">
              管理中心
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>hello</DropdownItem>
              <DropdownItem>登陆/登岀</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          </Menu>
      </Header>
      <Layout>
          <Sider ref="side1">
              <div ref="left-info" class="left-info">
                　<a href="#"><img class="photo" :src="imgsrc" alt=""></a>
                  <h2>supernever</h2>
                  <h3>Web Developer && Designer</h3>
                  <ul class="contact">
                    <li><a href=""><Icon type="ios-email-outline"></Icon></a></li>
                    <li><a href=""><Icon type="ios-chatbubble-outline"></Icon></a></li>
                    <li><a href=""><Icon type="social-github-outline"></Icon></a></li>
                  </ul>
              </div>

          </Sider>
          <Content :style="{position: 'relative',borderLeft: '1px solid #ccc', background: '#fff', minHeight: '260px'}">
            <Scroll :style="{position: 'relative'}" :distance-to-edge="20" loading-text="加载中...." :height="h" :on-reach-bottom="handleReachEdge">
              <component :is="currentView"></component>
            </Scroll>
        </Content>
      </Layout>
  </div>
</template>
<script>
  import MuActicle from '@/pages/blog/index'
  import AddActice from '@/pages/blog/acticle/add'
  import Archive from '@/pages/archive/index'
  import About from '@/pages/about/index'
  export default {
    components: {
      home: MuActicle,
      tags: AddActice,
      archive: Archive,
      about: About
    },
    data () {
      return {
        imgsrc: '/static/imgs/k.jpg',
        h: 300,
        searchText: '',
        currentView: 'home'
      }
    },
    computed: {
    },
    mounted () {
      this.h = document.body.clientHeight - this.$refs['home-header'].$el.clientHeight
    },
    methods: {
      changeMenu (e) {
        this.currentView = e
        this.$store.commit('counter/add', {id: 1})
        console.log('state.counter.count', this.$store.state.counter.count)
        console.log('getters', this.$store.getters['counter/biggerCount'])
        this.$store.dispatch('counter/littleCount', {id: 2})
      },
      handleReachEdge () {
        if (document.body.clientHeight - this.$refs['home-header'].$el.clientHeight !== this.h) {
          this.h = document.body.clientHeight - this.$refs['home-header'].$el.clientHeight
        }
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .home {
    img.photo {
      width: 100px;
      height: 100px;
      border-radius: 100px;
    }
    .contact {
      display: inline-block;
      li {
        float: left;
        padding:0 10px;
        font-size: 24px;
      }
      a {
        color: #999;
        &:hover {
          color: #000;
        }
      }
    }
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .layout-logo{
      color: #ad8aff;
      line-height: 60px;
      height: 60px;
      float: left;
      position: relative;
      text-align: center;
      border-bottom: 1px solid #dddee1;
    }
    .layout-nav{
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;
    }
    .layout-header-bar{
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
    }
    .menu-icon{
      transition: all .3s;
    }
    .rotate-icon{
      transform: rotate(-90deg);
    }
    .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
    .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
    }
    .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
    .ivu-layout-header {
      background: #fff;
    }
    .ivu-layout-sider {
      background: rgba(233, 240, 230, 0.57);
    }
  }
</style>
<style lang="less">
  .home {
    height: 100%;
    .ivu-layout-sider-children {
      display: flex;
    }
    .left-info {
      width: 100%;
      line-height: 2;
      margin-top:50%;
    }
    .ivu-layout {
      height: 100%;
    }
    .ivu-layout-sider {
      text-align: center;
    }
    .ivu-layout-sider-trigger {
      background: #fff;
      color: #000;
    }
    .ivu-menu {
      display: inline-block;
    }
    .ivu-layout-header {
      padding:0;
    }
  }
</style>
