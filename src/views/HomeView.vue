<template>  
  <div class="home-view">
    <div class="home-view-page1">
      <div class="home-view-top"></div>
      <div class="home-view-down">
        <div class="home-view-video">
          <iframe src="https://www.youtube.com/embed/videoseries?list=PL03nHHWQGFZ-JazgO1Pygs863HMolWhWz" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
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
            <div class="home-view-emp-contents-title">우리는 새빛</div>
            <div class="home-view-emp-contents-img">
                <a href="http://www.newlights.net/bbs/zboard.php?id=gallery_newlights" target="_blank">
                <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/1.jpg" alt="우리는새빛" />
              </a>
            </div>
          </div>
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">유초등부</div>
            <div class="home-view-emp-contents-img">
                <a href="http://www.newlights.net/bbs/zboard.php?id=gallery" target="_blank">
                <img src="http://www.newlights.net/bbs/data/gallery/2019/07/29/10500240335d3e453daba43.jpg" alt="유초등부" />
              </a>
            </div>
          </div>              
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">장년부</div>
            <div class="home-view-emp-contents-img">
                <a href="http://www.newlights.net/bbs/zboard.php?id=gallery_jangnyun" target="_blank">
                <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="장년부" />
              </a>
            </div>
          </div>
          <div class="home-view-emp-contents-item">
            <div class="home-view-emp-contents-title">청년부/중고등부</div>            
            <div class="home-view-emp-contents-img">
              <a href="http://www.newlights.net/bbs/zboard.php?id=gallery_chungnyun" target="_blank">
                <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/2.JPG" alt="청년부" />
              </a>
            </div>                        
          </div>
        </div>
      </div>
    </div> -->    
    <div class="test-emp-title">
      <div class="home-view-emp-title">사역</div>
    </div>
    <carousel :per-page="1">
      <slide>        
        <div class="test-class">          
          <div class="home-view-emp-contents-title">우리는 새빛</div>             
          <router-link to="/IframeCompView/picAll">
            <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/1.jpg" alt="우리는새빛" />
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="test-class">
          <div class="home-view-emp-contents-title">유초등부</div>
          <router-link to="/IframeCompView/picChildren">
            <img src="http://www.newlights.net/bbs/data/gallery/2019/07/29/10500240335d3e453daba43.jpg" alt="유초등부" />
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="test-class">
          <div class="home-view-emp-contents-title">장년부</div>
          <router-link to="/IframeCompView/picElder">
            <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="장년부" />
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="test-class">
          <div class="home-view-emp-contents-title">청년부</div>
          <router-link to="/IframeCompView/picYoungMan">
            <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/2.JPG" alt="청년부" />
          </router-link>
        </div>
      </slide>            
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>

.home-view {
  height: 160vh;  
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
  background-color: #D1DDDB;
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
  font-size: 2rem;
  color: #283B42;
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
  background-color: blanchedalmond;
}

.home-view-page2 {  
  height: 80vh;
}

.home-view-emp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;  
}

.home-view-emp-title {
  font-size: 2rem;
  color: #283B42;
  font-weight: 600;
  text-decoration: underline;  
}

.home-view-emp-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.home-view-emp-contents-item img{
  width: 220px;
  height: 200px;  
  border-radius: 10px;
  margin: 0 1rem;
}

.home-view-emp-contents-item img:hover{
  opacity: 0.8;
}

.home-view-emp-contents-title {
 text-align: center; 
 font-size: 1.5rem;
 font-weight: bold; 
 background-color:#D1DDDB;
 color: #283B42;
 border-radius: 10px;
 margin: 1rem;
 padding: 1rem; 
 width: 800px;
}

.home-view-emp-contents-title:hover { 
  background-color: blanchedalmond;
}

.home-view-emp-contents-img {
  text-align: center;
}

.test-class {
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;  
  width: 100vw;
  margin-top: 1rem;
}

.test-class img{
  width: 800px;  
  height: 600px;  
  border-radius: 10px;    
}

.test-emp-title {
  margin-top: 1rem;
  text-align: center;
}

@media (max-height: 800px) {
  
  .home-view {
    height: 170vh;  
  }
  
  .home-view-top {
    height: 12vh
  }

  iframe {
    width: 90vw;
    height: 50vh;
  }

.home-view-down {
  flex-direction: column-reverse;
}

.home-view-board-menu {    
  margin: 0 0 1rem 0;
  display: flex;
  border-radius: 0px;
  background-color: white;
}

.home-view-top-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 8vh;
}

.home-view-down-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 8vh;  
}

.menu-item {
  font-size: 0.8rem;
  font-weight: bold;
  width: 80%;
  height: 80%;
  margin: 0.1rem;  
  background-color:#D1DDDB;
}

.home-view-page2 {
  height: 150vh;
}

.home-view-emp-contents {  
  flex-direction: column;
}

.home-view-emp-contents-title { 
 font-size: 1.6rem; 
 margin: 1rem;
 padding: 1rem;
 width: 300px;
}

.home-view-emp-contents-item img{
  width: 350px;
  height: 250px;  
  border-radius: 1rem;  
  margin: 0;  
}

.test-class img{
  width: 300px;
  height: 200px;  
  border-radius: 10px;  
}

}

</style>