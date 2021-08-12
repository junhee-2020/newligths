<template>
  <div class="free-board-view">
    <div class="free-board-view-body">
        <iframe :src="boardSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardSrc: 'http://www.newlights.net/bbs/zboard.php?id=free',
    }
  }
}
</script>

<style scoped>
.free-board-view {
  margin: 9vh 0;
}  
iframe {
  width: 100%;
  min-height: 500px;
}

@media (max-width: 500px) {
    .free-board-view {
      margin: 11vh 0;
    }    
    .free-board-view-body {
        font-size: 0.8rem;
    }
}
</style>