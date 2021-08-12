<template>
  <div class="header">
        <div class="header-left">
            <router-link to="/HomeView">
                <img src="../assets/logo.png" alt="logo" />
            </router-link>
        </div>
        <div class="header-right">
            <router-link to="/AboutChurchView">교회 소개</router-link> |
            <router-link to="/IframeCompView/news">교회 소식</router-link> |                        
            <router-link to="/IframeCompView/picAll">새빛 사진</router-link> |
            <router-link to="/IframeCompView/freeBoard">은혜 나눔</router-link> |
            <a href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">온라인 예배</a>            
        </div>
        <div class="header-right-menu">
          <a href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank"><img src="../assets/youtube.png" alt="online-worship" /></a>
          <router-link to="/MenuBar"><img src="../assets/menu_lines.png" alt="menu" /></router-link>            
        </div>
  </div>
</template>

<script>

export default {
    mounted() {

    }, 
    data() {
        return {
            propsString: '123',
        }        
    }

}
</script>

<style scoped>
.header-left img {
    width: 150px;
    border-radius: 10px;
}
.header {        
    position: fixed;
    top:0;    
    display: flex;        
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;    
    font-size: 1.3rem;
    color: #eee;
    background: white;
    width: 100%;    
    border-bottom: 2px solid #eee;
}
.header .router-link-exact-active 
{   
    color: #355c7d;         
    text-decoration: underline;
    font-weight: bold;            
}
.header a {    
    padding: 0 0.8rem;    
    color: black;
    text-decoration: none;    
}
.header a:hover {            
    text-decoration: underline;
}
.header-right-menu {
    display: none;
}
.header-right-menu img {
    width: 50px;
}

.header-left {
    margin-left: 1rem;
}

.header-right {
    margin-right: 1rem;
}

@media (max-width: 910px) {
    .header {        
        background: white;
        border-bottom: 2px solid #eee;
    }
    .header-left img {
        width: 150px;
        border-radius: 10px;
    }
    .header-right {
        display: none;
    }
    .header-right-menu {
        display: block;
        margin-right: 1rem;
    }    
}
@media (min-width: 190px) {    
    .header {
        font-size: 1.3rem;
    }
}

</style>