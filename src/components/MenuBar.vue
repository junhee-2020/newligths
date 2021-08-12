<template>
  <div class="menu-bar">
        <div class="menu-bar-list">
            <div class="menu-bar-item"><router-link to="/WorshipGuideView">교회 소개</router-link></div>
            <div class="menu-bar-item"><router-link to="/NewLightNewsView">교회 소식</router-link></div>
            <div class="menu-bar-item"><router-link to="/PictureView">새빛 사진</router-link></div>
            <div class="menu-bar-item"><router-link to="/FreeBoardView">은혜 나눔</router-link></div>
            <div class="menu-bar-item"><a href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">온라인 예배</a></div>
        </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style scoped>
.menu-bar {
    font-family: "NanumSquare";
    font-size: 2rem;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: black;
    margin: 11vh 0 0 0;
    padding: 0;    
}

.menu-bar a {    
    padding: 1rem;    
    color: black;
    text-decoration: none;    
    border-bottom: 1px solid #eee;    
}
.menu-bar a:hover {           
    border-bottom: 2px solid #355b7d;          
}
.menu-bar-item {
    text-align: end;
    padding: 1rem 0;
    margin: 1rem;    
}
</style>