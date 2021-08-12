<template>
  <div class="new-light-news-view">    
    <div class="new-light-news-view-body">
        <iframe :src="boardSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardSrc: 'http://www.newlights.net/bbs/zboard.php?id=notice',
    }
  }
}
</script>

<style scoped>
.new-light-news-view {
  margin: 8vh 0;
}
iframe {
  width: 100%;
  min-height: 500px;
}

@media (max-width: 500px) {
    .new-light-news-view {
      margin: 11vh 0;
    }  
    .new-light-news-view-body {
        font-size: 0.8rem;
    }
}
</style>