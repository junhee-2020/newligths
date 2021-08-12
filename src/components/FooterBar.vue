<template>
  <div class="footer-bar">
      <div class="footer-bar-body">
          <div class="footer-bar-item">Copyright (c) 새빛교회 All rights reserved.</div>          
          <div class="footer-bar-item">경기 광명시 하안로 258</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-bar {
    display: block;
    margin: 0;
    padding: 0.5rem 0 1.5rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #1D6A96;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    color: white;    
    font-weight: bold;
}

.footer-bar-item {        
    padding: 0.8rem 0 0 1.2rem;    
    font-size: 1rem;
}

@media screen and (max-height: 600px) {
    .footer-bar {
        display: block;
        margin: 0;
        padding: 2rem 0 2rem 0;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #1D6A96;
        color: white;    
        font-weight: bold;
    }

    .footer-bar-item {        
        padding: 0.5rem;    
        font-size: 0.7rem;
    }
}

</style>