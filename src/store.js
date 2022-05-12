import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
  search: '',
  movies: [],
  baseURI: 'https://api.themoviedb.org/3'
})

export default state


export function fetchData() {

  axios.get(`${ state.baseURI }/search/movie`,{
    params: {
      api_key: '9857cfb37fc41b760e69c70f6d75b517',
      query: state.search,
      language: 'it-IT',
    }
  })
  .then( res => {
    console.log( res.data )
    state.movies = res.data.results
  })
  .catch( error => {
    console.log( error.response )
  })

}

