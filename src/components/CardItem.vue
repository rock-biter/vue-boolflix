<template>
  <!-- <div class="card" :style="{ backgroundImage: `url(${ image })` }"> -->
  <div class="card" :style="`background-image: url(${ image });`">
    <!-- <img :src="image" alt=""> -->
    <!-- <img v-else src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""> -->
    <!-- <h3 class="element-title" v-if="element.title">{{ element.title }}</h3>
    <h3 class="element-name" v-else>{{ element.name }}</h3> -->
    <!-- <h3 class="element-name" >{{ title }}</h3> -->
    <div class="overlay">

      <dl>
        <dt>Titolo:</dt>
        <dd>{{ element.title || element.name }}</dd>
        <!-- <br> -->

        <dt>Titolo originale:</dt>
        <dd>{{ originalTitle }}</dd>
        <!-- <br> -->
        <dt>Voto:</dt>
        <dd>
          <span class="star" v-for="n in 5" :key="n">
            <i  class="fa-star"
                :class=" n <= vote ? 'fa-solid gold' : 'fa-regular gray' "
            ></i> 
          </span>
        </dd>
        <!-- <br> -->
        <dt>Overview:</dt>
        <dd>
          {{ element.overview }}
        </dd>
      </dl>

      <!-- <h3 class="element-name" >{{ element.title || element.name }}</h3>
      <p>{{ originalTitle }} -  {{ getFlag( element.original_language ) }} -->
        <!-- <img v-if="flags[ movie.original_language ]" height="30" :src="flags[ movie.original_language ]"/>
        <span v-else>{{ movie.original_language }}</span> -->
      <!-- </p> -->
      <!-- <span class="star" v-for="n in 5" :key="n">
        <i  class="fa-star"
            :class=" n <= vote ? 'fa-solid gold' : 'fa-regular gray' "
        ></i> 
      </span> -->
    </div>
    

  </div>
</template>

<script>

import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { hasFlag } from 'country-flag-icons'

export default {
  data() {
    return {
      imgBaseURI: 'https://image.tmdb.org/t/p/',
      imgWidth: 'w500'
    }
  },
  props: {
    element: {
      type: Object,
      required: true,
    }
  },
  computed: {
    title: function() {
      // if( this.element.name !== undefined) {
      //   return this.element.name
      // } 
      // return this.element.title
      return this.element.name || this.element.title
      // return this.element.name !== undefined ? this.element.name : this.element.title
    },
    imgURI: function() {
      return this.imgBaseURI + this.imgWidth;
    },
    image: function() {
      return this.element.poster_path ? this.imgURI + this.element.poster_path : 
      this.imgURI + '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
      // return `https://image.tmdb.org/t/p/w342${ this.element.poster_path }`
    },
    originalTitle: function() {
      if( this.element.original_name !== undefined ) {
        return this.element.original_name
      }

      return this.element.original_title
    },
    vote: function() {
      return Math.ceil( this.element.vote_average / 2 )
    }
  },
  methods: {
    getFlag: function( unicode ) {

      if( unicode === 'en') {
        unicode = 'gb'
      }

      if( hasFlag( unicode.toUpperCase() ) ) {
        return getUnicodeFlagIcon(unicode);
      }

      return unicode

      
    },
  }
}
</script>

<style lang="scss" scoped>

.card {

  background-position: center;
  background-size: cover;
  
  &:hover .overlay {
    opacity: 1;
  }

  .overlay {
    background-color: rgba($color: #000000, $alpha: 0.8);
    padding: 2.75rem 1.25rem;
    height: 500px;
    color: white;
    overflow-y: auto;
    opacity: 0;

    dt {
      font-weight: 700;
      margin-right: 10px;
    }

    dd {
      color: rgb(205, 205, 205);
      &::after {
        content: '';
        display: block;
      }
    }

    dt, dd {
      display: inline;
    }
  }

}

// img {
//   max-width: 100%;
// }

.gold {
  color: gold;
}

.gray {
  color: rgba($color: #000000, $alpha: 0.3);
}

</style>