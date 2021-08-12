<template>
  <div class="picture-view">
    <div class="picture-view-body">
        <iframe :src="boardSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardSrc: 'http://www.newlights.net/bbs/zboard.php?id=gallery_newlights',
    }
  }
}
</script>

<style scoped>
.picture-view {
  margin: 9vh 0;
}
iframe {
  width: 100%;
  min-height: 900px;
}
@media (max-width: 500px) {
    .picture-view {
      margin: 11vh 0;
    }  
    .picture-view-body {
        font-size: 0.8rem;
    }
}
</style>