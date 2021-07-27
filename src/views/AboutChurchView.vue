<template>
  <div class="about-church-view">
    <div class="about-church-body">
      <div v-for="item in fetchAboutChurchList" :key="item.key">
        <ol class="about-church-ol">
          <li class="about-church-item-title">{{`${item.title}`}}</li>
          <li class="about-church-item-content">{{item.target}}</li>
          <li class="about-church-item-content">{{item.date}}</li>
          <li class="about-church-item-content">{{item.place}}</li>          
        </ol>
      </div>      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {    
    ...mapGetters(['fetchAboutChurchList']),
  },
  created() {
    this.$store.dispatch('FETCH_ABOUT_CURCH_CONTENT');
  }
}
</script>

<style scoped>
.about-church-view {
  margin: 10vh 0;
}
.about-church-ol {
  padding: 1rem;
  margin: 0rem;  
  border-bottom: 1px solid #eee;  
}

.about-church-item-title {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.8rem 0;
  list-style-type: none;
}
.about-church-item-content {
  font-size: 1rem;
  padding-bottom: 0.5rem;
  margin-left: 1.8rem;
  color: #6c5b7b;  
  list-style-type: circle;  
}

@media (max-width: 500px) {
  .about-church-item-title {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.3rem;
    list-style-type: none;
  }
  .about-church-item-content {
    font-size: 0.8rem;  
    padding-bottom: 0.5rem;
    margin-left: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .about-church-ol {
    padding: 1.2rem;
    margin: 0rem;
    border-bottom: 1px solid #eee;
  }
  .about-church-item-title {
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    list-style-type: none;
  }
  .about-church-item-content {
    font-size: 1.2rem;  
    padding-bottom: 0.8rem;
    margin-left: 1.8rem;
  }
}
</style>