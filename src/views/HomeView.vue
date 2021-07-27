<template>  
  <div class="home-view">
    <div class="home-view-page1">
      <div class="home-view-top"></div>
      <div class="home-view-down">
        <div class="home-view-video">
          <iframe src="https://www.youtube.com/embed/gH757Mg5jUI" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>
        <div class="home-view-board-menu">
          <div class="home-view-top-menu">
            <div class="menu-item">새빛교회에<br/>오신 것을</div>
            <div class="menu-item"><router-link to="/WorshipGuideView">예배 시간</router-link></div>
          </div>
          <div class="home-view-down-menu">
            <div class="menu-item"><router-link to="/WayToComeView">오시는 길</router-link></div>
            <div class="menu-item">Welcome<br/>환영합니다.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="home-view-page2">
      <div class="home-view-emp">
        <div class="home-view-emp-title">사역</div>
        <div class="home-view-emp-contents">
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">유초등부</div>
            <div class="home-view-emp-contents-img">
              <img src="" alt="유초등부" />
            </div>
          </div>
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">대예배</div>
            <div class="home-view-emp-contents-img">
              <img src="" alt="여름성경학교" />
            </div>
          </div>
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">비전트립</div>            
            <div class="home-view-emp-contents-img">
              <img src="" alt="비전트립" />
            </div>                        
          </div>
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">청년수련회</div>
            <div class="home-view-emp-contents-img">
              <img src="" alt="청년수련회" />
            </div>
          </div>
        </div>
      </div>
    </div>     -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.home-view {
  /* height: 200vh; */  
}

.home-view-page2 {
  /* height: 100vh; */
}

.home-view-top {
  height: 15vh
}

.home-view-down {
  display: flex;
  justify-content: center;
  align-items: center;  
}

iframe {
  width: 50vw;
  height: 60vh;
}

.home-view-board-menu {
  background-color: #eee;
  margin-left: 1rem;
}

.home-view-top-menu {
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 45vw;
  height: 30vh;
}

.home-view-down-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 30vh;  
}

.menu-item {
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 1rem;
  background-color: white;  
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
  padding: 0;
}

.menu-item a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color:black;
  border-radius: 1rem;
}

.menu-item a:hover {
  background-color:cornsilk;
}

@media (max-width: 910px) {
  iframe {
    width: 90vw;
    height: 50vh;
  }
  .home-view-board-menu {
    display: none;
  }
}

</style>