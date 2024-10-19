<script setup>
import { useCategoryStore } from '@/stores/categoryStore';
import HeaderCart from './HeaderCart.vue';
const categoryStore=useCategoryStore()
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li v-for="item in categoryStore.categoryList" :key="item.id" class="home">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
      <div>
        <HeaderCart/>
      </div>
    </div>
  </header>
</template>

<style scoped lang='scss'>
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around; // 添加这个属性来分配剩余空间，使购物车在右侧
  }
  .logo {
    width: 200px;
    a {
      color: black;
      text-decoration: none;
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
  .app-header-nav {
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    li {
      margin-right: 40px;
      a {
        color: black;
        text-decoration: none;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
  .search {
    width: 200px; // 调整宽度以适应内容
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    display: flex;
    align-items: center;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 100%; // 使输入框宽度填满搜索区域
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: -6px; // 调整位置以适应数字
        top: -6px;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
