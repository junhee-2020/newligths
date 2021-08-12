<template>
  <div class="iframe-view">
    <div class="iframe-view-body">
        <iframe :src="boardSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.initBoardSrc();
  },
  computed: {
      boardSrc () {
        const srcArr = {
          'freeBoard': 'http://www.newlights.net/bbs/zboard.php?id=free',
          'news': 'http://www.newlights.net/bbs/zboard.php?id=notice',
          'picAll': 'http://www.newlights.net/bbs/zboard.php?id=gallery_newlights',
          'picChildren': 'http://www.newlights.net/bbs/zboard.php?id=gallery',
          'picElder': 'http://www.newlights.net/bbs/zboard.php?id=gallery_jangnyun',
          'picYoungMan': 'http://www.newlights.net/bbs/zboard.php?id=gallery_chungnyun',        
        };

        return srcArr[this.$route.params.src];
      }
  },

}
</script>

<style scoped>

.iframe-view {
  margin: 8vh 0;
}  

iframe {
  width: 100vw;
  height: 60vh;
}

@media (max-height: 800px) {
  .iframe-view {
    margin: 13vh 0;
  }  
}
</style>