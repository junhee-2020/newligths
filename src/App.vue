<template>
  <div id="app">    
    <tool-bar class="tool-bar"></tool-bar>
    <router-view class="router-view-bar"></router-view>
    <footer-bar class="footer-bar"></footer-bar>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    ToolBar,
    FooterBar
  }, 
}
</script>

<style>
@font-face {
  font-family: "NanumBarunGothic";
  src: local("NanumBarunGothic"),
   url(./fonts/NanumBarunGothic/NanumBarunGothic.ttf) format("truetype");
}

@font-face {
  font-family: "NanumSquare";
  src: local("NanumSquare"),
   url(./fonts/NanumSquare/NanumSquareRoundB.ttf) format("truetype");
}

html, body {
  padding: 0;
  margin: 0;  
  font-family: 'NanumBarunGothic';  
}
</style>