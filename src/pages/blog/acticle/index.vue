/**
* Created by wanghongxiang on 2018/2/6.
 */
<template>
  <div>
    <i-col class="ibox" :xs="24" :sm="24" :md="24" :lg="24">
      <div class="ibox-content">
        <a @click="jumpDetail" class="btn-link">
          <h2>
            {{title}}
          </h2>
        </a>
        <div class="small m-b-xs">
          <strong>{{owner}}</strong> <span class="text-muted"><Icon type="clock"></Icon>{{time}}</span>
        </div>
        <p>
          {{content}}
        </p>
        <Row>
          <i-col span="12">
            <h5>标签：</h5>
            <i-button v-for="i in tagList" :key="i" class="btn btn-primary btn-xs" type="primary" size="small">{{i}}</i-button>
          </i-col>
          <i-col span="12">
            <div class="small text-right">
              <h5>状态：</h5>
              <div>
                <Icon type="ios-chatboxes-outline"></Icon>
                {{this.commentNum}} 评论
            </div>
              <Icon type="ios-eye-outline"></Icon> {{lookupNum}} 浏览
          </div>
          </i-col>
        </Row>
      </div>
    </i-col>
  </div>
</template>
<script>
  export default {
    name: 'acticle',
    data () {
      return {
        title: '想知道宁泽涛每天游多少圈？送他 Misfit 最新款 Speedo Shine',
        owner: '高 晨',
        time: ' 3 小时前',
        content: '就算你敢带着 Apple Watch 下水游泳，它也不能记录你游了多少圈。 夏天刚来时就不停地听到有人提起“有没有在我游泳的时候可以帮忙数圈的设备”，今天 Misfit 终于赶在夏天结束之前推出可追踪游泳运动的新款 Shine。这款新设备是 Misfit 与泳衣品牌 Speedo （速比涛）合作推出，因此被命名为 Speedo Shine。',
        tagList: ['Apple Watch', '速比涛'],
        commentNum: 56,
        lookupNum: 144
      }
    },
    methods: {
      jumpDetail () {
        this.$router.push('acticle/detail')
        this.$emit('go2detail', {data: 111})
      }
    }
  }
</script>
<style lang="less" scoped>
  .ibox {
    float: none;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #dee5e7;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    h2 {
      color: inherit;
    }
    p {
      margin: 0 0 10px;
    }
    h5 {
      margin: 0 0 5px 0;
    }
    .btn {
      margin: 0 5px 5px 0;
    }
  }
  .ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    -webkit-border-image: none;
    -o-border-image: none;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0px;
  }
  .text-muted {
    color: #d6d3e6;
  }
  .btn-link {
    font-weight: 400;
    color: #337ab7;
    border-radius: 0;
  }
  .text-right {
    text-align: right;
  }
</style>
