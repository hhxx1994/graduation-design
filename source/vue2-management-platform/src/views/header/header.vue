<template>
  <div>
    <header>
      <ul class="header-operations">
        <li>
          <span v-if="user">
            <span class="header-lang is-active">用户：{{user.name}}</span>
             <el-button class="button" @click.native="tologinOut" type="success" size="small" round>退出</el-button>
          </span>
          <span v-else>
            <el-button class="button" @click.native="tologin" type="danger" size="small" round>登录</el-button>
            <el-button class="button" @click.native="toRegin" type="success" size="small" round>注册</el-button>
          </span>
        </li>
        <li></li>
      </ul>
    </header>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.min.css';

  export default {
    data() {
      return {};
    },
    methods: {
      tologin() {
        this.$router.push('/login')
      },
      toRegin() {
        this.$router.push('/regin')
      },
      tologinOut() {
        sessionStorage.removeItem('user')
        this.$store.dispatch('logout')
        this.$router.push('/index')
      }
    },
    //获取store的User数据
    computed: {
      user() {
        return this.$store.state.user
      },
    }
  };
</script>
<style>
  header {
    background-color: rgb(32, 160, 255);
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
  }

  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }

  .header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
  }

  .header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }

  .header-operations li:first-child {
    cursor: default
  }

  .header-opacity {
    opacity: .7;
  }

  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
</style>
