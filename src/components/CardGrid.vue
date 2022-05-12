<template>
  <section>
    <div class="container grid-section">
      <h2 class="grid-title">{{ title }}</h2>
      <div v-if="items.length" class="grid movie-grid">
        <Card v-for="item in items" :key="item.id" :element="item"/>  
      </div>
      <p class="nothing" v-else>Nessun risultato</p>
    </div>
    
  </section>
</template>

<script>
  import Card from './CardItem.vue' 
  export default {
    components: {
      Card
    },
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>

.grid-section {
  padding: 20px 0;

  .grid-title {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .nothing {
    color: white;
  }

}


</style>