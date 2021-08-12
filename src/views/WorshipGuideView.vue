<template>
  <div class="worship-guide-view">
    <div class="worship-guide-view-body">
      <div v-for="item in fetchedWorshipGuideList" :key="item.key">
        <ol class="worship-guide-view-ol">
          <li class="worship-guide-view-item-title">{{`${item.title}`}}</li>
          <li class="worship-guide-view-item-content">{{item.date}}</li>
          <li class="worship-guide-view-item-content">{{item.place}}</li>          
        </ol>
      </div>      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedWorshipGuideList']),
  },
  created() {    
    this.initWorshipGuide();    
  },    
  methods: {
    initWorshipGuide() {
      this.getContent();      
    },
    getContent() {
      this.$store.dispatch('FETCH_WORSHIP_GUIDE_CONTENT');
    }
  }
}
</script>

<style>
.worship-guide-view {
  margin: 9vh 0;
}
.worship-guide-view-ol {
  padding: 1rem;
  margin: 0rem;  
  border-bottom: 1px solid #eee;  
}

.worship-guide-view-item-title {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.8rem 0;
  list-style-type: none;
}
.worship-guide-view-item-content {
  font-size: 1rem;
  padding-bottom: 0.5rem;
  margin-left: 1.8rem;
  color: #6c5b7b;  
  list-style-type: circle;  
}

@media (max-width: 500px) {
  .worship-guide-view {
    margin: 11vh 0;
  }  
  .worship-guide-view-item-title {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.3rem;
    list-style-type: none;
  }
  .worship-guide-view-item-content {
    font-size: 0.8rem;  
    padding-bottom: 0.5rem;
    margin-left: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .worship-guide-view-ol {
    padding: 1.2rem;
    margin: 0rem;
    border-bottom: 1px solid #eee;
  }
  .worship-guide-view-item-title {
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    list-style-type: none;
  }
  .worship-guide-view-item-content {
    font-size: 1.2rem;  
    padding-bottom: 0.8rem;
    margin-left: 1.8rem;
  }
}
</style>