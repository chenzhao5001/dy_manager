<template>
  <div>
    <el-container class = "manager-page">
      <el-header class="header">
        <span class="title">
          <img class="logo" src="../assets/img/logo.png" alt="">
          导音教育后台审核查询管理系统
        </span>

        <span class="user">
          <img class="logo" src="../assets/img/icon_def.png" alt="">
          卓月
        </span>
      </el-header>
      <div class="h-line"></div>
      <el-container id="content-show">
        <el-aside>
          <a class="item" href="">视频搜索</a>
          <a class="item" href="">视频审核</a>
          <a class="item" href="">文章审核</a>

          <a class="item" href="">用户审核</a>
          <a class="item" href="">商品审核</a>
          <a class="item" href="">辅导课审核</a>
          <a class="item" href="">录播课审核</a>

          <a class="item-end" href="">退出登录</a>


        </el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  function getClientHeight()
  {
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight)
    {
      var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    else
    {
      var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    return clientHeight;
  }

  export default {
    // mounted :function() {
    //   var main_height = getClientHeight() - 60;
    //   // var o = document.getElementById("content-show");
    //   // alert(o);
    //   document.getElementById("content-show").style.height = main_height + "px"
    // },
    name: "Container"
  }
</script>

<style lang="scss" scoped>


  .header {

    box-sizing: border-box;

    .title {
      height: 58px;
      line-height: 58px;
      color: green;

      .logo {
        height: 40px;
        vertical-align: middle;
        /*margin:10px 10px;*/
      }
    }

    .user {
      height: 60px;
      line-height: 60px;
      color: green;
      float: right;

      .logo {
        height: 40px;
        vertical-align: middle;
      }
    }

  }

  .h-line {
    border-bottom: 2px solid green;
  }

  .el-aside {
    border-right: 2px solid green;
    width:120px !important;
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: auto;
    .item {
      text-decoration: none;
      display: block;
      font-weight: bold;
      font-size: 18px;
      margin: 10px 0px;
      width: 100%;
      text-align: center;
    }

    .item-end {
      position: absolute;
      bottom: 0;
      text-decoration: none;
      display: block;
      font-weight: bold;
      font-size: 18px;
      margin: 10px 0px;
      background: grey;
      z-index: 1;
      width: 100%;
      text-align: center;


    }

  }

  .el-main {
    background: grey;
    display: block;
    position: absolute;
    left: 120px;
    right: 0;
    top: 62px;
    bottom: 0;
    overflow-y: auto;
  }


</style>
