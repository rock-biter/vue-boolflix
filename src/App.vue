<template>
  <div id="app">
    <Header />
   
    <main>
      <!-- <h2>Film</h2>
      <div class="container grid movie-grid">
        <Card v-for="movie in films" :key="movie.id" :element="movie"/>  
      </div> -->
      <CardGrid title="Film trovati" :items="films" />
      <CardGrid title="Serie TV trovate" :items="series" />
    </main>
    
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/BoolflixHeader.vue'
import CardGrid from './components/CardGrid.vue'

import state from './store.js'

export default {
  components: {
    Header,
    CardGrid,
  },
  name: 'App',
  data(){
    return {
      films: [],
      series: [],
      loading: false
    }
  },
  computed: {
    // movies: function() {
    //   return state.movies
    // },
    search: function() {
      return state.search
    }
  },
  watch: {
    search: function(value) {
      console.log('state.filter è cambiato',value)
      this.fetchData();
    }
  },
  methods: {
    
    fetchData: function() {

      // this.loading = true
      // fetch movies data
      axios.get(`${ state.baseURI }/search/movie`,{
        params: {
          api_key: '9857cfb37fc41b760e69c70f6d75b517',
          query: this.search,
          language: 'it-IT',
        }
      })
      .then( res => {
        console.log( res.data )
        this.films = res.data.results
        // this.loading = false
      })
      .catch( error => {
        console.log( error.response )
        // this.loading = false
      })


      // fetch series data
      axios.get(`${ state.baseURI }/search/tv`,{
        params: {
          api_key: '9857cfb37fc41b760e69c70f6d75b517',
          query: this.search,
          language: 'it-IT',
        }
      })
      .then( res => {
        console.log( res.data )
        this.series = res.data.results
        // this.loading = false
      })
      .catch( error => {
        console.log( error.response )
        // this.loading = false
      })

    
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/app.scss';
@import '~@fortawesome/fontawesome-free/css/all.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  background-color: #434343;
  flex-grow: 1;
  padding: 50px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

</style>
