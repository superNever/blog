/**
* Created by wanghongxiang on 2018/2/7.
 */
<template>
  <div class="detail-add">
    <h1>新增一篇文章</h1>
    <i-form :model="formItem" :label-width="80">
      <FormItem label="标题">
        <Input v-model="formItem.title" placeholder="请输入标题"></Input>
      </FormItem>
      <FormItem label="内容">
        <Row>
          <i-col :span="24">
            <Input @input="update" v-model="formItem.content" type="textarea" :autosize="{minRows: 5, maxRows: 10}" placeholder="请输入markdown文本"></Input>
          </i-col>
          <i-col :span="12">
            <Button @click="modal1 = true">预览</Button>
            <!--<div class="detail-add-content" v-html="compiledMarkdown">232323</div>-->
          </i-col>
        </Row>
      </FormItem>
      <FormItem label="标签">
        <i-col :span="24">
          <Input v-model="formItem.tags" placeholder="请输入标签"></Input>
        </i-col>
      </FormItem>
      <FormItem class="btnGroup">
        <i-button type="primary" @click.native="getAllInfo">发布</i-button>
        <i-button type="ghost" style="margin-left: 8px" @click.native="reset">取消</i-button>
      </FormItem>
    </i-form>
    <Modal
      scrollable
      v-model="modal1"
      title="markdown预览"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <div v-html="compiledMarkdown"></div>
    </Modal>
  </div>
</template>
<script>
  import marked from 'marked'
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  })
  export default {
    data () {
      return {
        formItem: {
          title: '',
          content: '',
          htmlContent: '',
          tags: ''
        },
        modal1: false
      }
    },
    methods: {
      update (e) {
        this.formItem.content = e
      },
      getAllInfo () {
        console.log(this.formItem)
      },
      reset () {
        this.formItem = {
          title: '',
          content: '',
          htmlContent: '',
          tags: ''
        }
      },
      ok () {
        this.$Message.info('Clicked ok')
      },
      cancel () {
        this.$Message.info('Clicked cancel')
      }
    },
    computed: {
      compiledMarkdown: function () {
        let str = marked(this.formItem.content, { sanitize: true })
        this.formItem.htmlContent = str
        return str
      }
    }
  }
</script>
<style lang="less" scoped>
  .detail-add {
    padding: 10px 10px 0;
    h1 {
      text-align: center;
      margin: 10px 0;
    }
    &-content {
      border: 1px solid #fff;
      padding:5px;
    }
    .btnGroup {
      text-align: center;
    }

  }
</style>
<style lang="less">
    .ivu-modal-body {
      max-height: 400px;
      overflow: auto;
    }
</style>
