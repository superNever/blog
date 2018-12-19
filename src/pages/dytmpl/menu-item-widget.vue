/**
* Created by wanghongxiang on 2018/2/5.
 */

<template>
  <MenuItem name="rowspan0" class="set-row-span">
    <i-input v-model="row" size="small" :placeholder="row"></i-input>
    <Icon class="sn-arrow-move" type="arrow-move" @click.native="toggleRowNone"></Icon>
    <Row v-if="rownone">
      <i-col v-for="i in items" :key="guid()" :span="i">col-{{i}} </i-col>
    </Row>
  </MenuItem>
</template>
<script>
  export default {
    name: 'menu-item-widget',
    props: {
      rowspan: {
        default: '12 12',
        type: String
      }
    },
    data () {
      return {
        row: this.rowspan,
        rownone: false,
        items: []
      }
    },
    methods: {
      createItem () {
        this.items = this.row.trim().split(' ')
      },
      guid () {
        function S4 () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
        }

        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
      },
      toggleRowNone () {
        this.rownone = !this.rownone
      }
    },
    created () {
      this.createItem()
    }
  }
</script>
<style lang="less" scoped>
  .set-row-span {
    .ivu-input-wrapper {
      width: 80%;
    }
    .ivu-col {
      background: rgba(0,153,229,.9);
      color: #fff;
      &:nth-child(odd) {
        background: rgba(0,153,229,.7);
      }
    }
    .sn-arrow-move > i {
      magin-left: 6px;
    }
    .row-none {
      display: none;
    }
    i.sn-arrow-move {
      margin-left: 4px;
    }
  }
</style>
