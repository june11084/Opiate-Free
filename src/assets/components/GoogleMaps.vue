<template>
  <div>
      <h1>Map is here</h1>
      <div id="map" class="gMap"></div>
  </div>
</template>

<script>
import store from '.././store';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

let connecticut = [41.6032, -73.0877];

export default {
  props: {
    'latitude': {
      type: Number,
      default() {
        return connecticut[0]
      }
    },
    'longitude': {
      type: Number,
      default() {
        return connecticut[1]
      }
    },
    'zoom': {
      type: Number,
      default() {
        return 14
      }
    },
  },
  mounted() {
    this.$map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: this.zoom
    });
  },
  data(){
      return {};
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#map {
    margin: 0 auto;
    background: gray;
}
.gMap {
    height:500px;
}

</style>
