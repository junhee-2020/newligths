<template>
  <div class="way-to-come-view">
    <div class="way-to-come-view-body">      
      <ul class="way-to-come-view-ul" v-for="item in fetchedWayToComeList" :key="item.key_en">
        <li class="way-to-come-view-body-item">{{`${item.key_ko} : ${item.value}`}}</li>
      </ul>      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {    
    ...mapGetters(['fetchedWayToComeList']),
  },
  created() {
    this.$store.dispatch('FETCH_WAY_TO_COME_CONTENT');
  }
}
</script>

<style scoped>
.way-to-come-view {
  margin: 12vh 0;
}
.way-to-come-view-ul {
  padding: 1rem;
  margin: 0rem;  
  border-bottom: 1px solid #eee;
}
.way-to-come-view-body-item {
  font-size: 1rem;
  margin-left: 1.8rem;
  padding-bottom: 0.5rem; 
  list-style-type: none;
}

@media (max-width: 500px) {
.way-to-come-view-body-item {
  font-size: 0.8rem;
  padding-bottom: 0.3rem;
  margin-left: 1.5rem;
}
}
@media (min-width: 1200px) {
.way-to-come-view-body-item {
  font-size: 1.3rem;
  padding-bottom: 0.8rem;
  margin-left: 1.8rem;
}
}

</style>