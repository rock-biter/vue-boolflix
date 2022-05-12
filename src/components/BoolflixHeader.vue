<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="logo">
            Boolflix
          </div>

          <input type="text" class="search-field" v-model="search" @keyup.enter="setSearch" placeholder="cerca">  
        </div>
      </div>

       
    </div>
    
    <!-- <input type="text" v-model="password" placeholder="password">
    <input type="text" v-model="passwordConfirm" placeholder="conferma password"> -->

    <!-- <p>{{ output }}</p> -->

  </header>
</template>

<script>

import state from '../store.js'
// import { fetchData } from '../store.js'

export default {
  data() {
    return {
      search: '',
      password: '',
      passwordConfirm: '',
      output: ''
    }
  },
  watch: {
    search: function(newValue,oldValue) {
      console.log(`search è cambiato: ${ oldValue } è diventato ${ newValue }`)

      const val = newValue.replaceAll('culo','****')

      this.output = val
    },
    passwordConfirm: function(newValue) {
      if( this.password === newValue ) {
        alert('le password sono identiche')
      }
    }
  },
  methods: {
    setSearch: function() {

      this.$emit('changed',this.search)

      state.search = this.search

      // fetchData()
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  background-color: #0B0B0F;
  padding: 15px 10px;

  .col-12 {
    display: flex;
    justify-content: space-between;
    gap: 30px;


    .logo {
      font-size: 1.75rem;
      text-transform: uppercase;
      color: rgb(174, 0, 0);
      font-weight: 700;
    }

    .search-field {
      padding: 0 15px;
      max-width: 250px;
      flex-grow: 1;
      border-radius: 4px;
      border: none;
    }
  }
}

</style>