<template>
  <div class="HomeView">
    <Header />
    <Categories />
    <div class="container">
      <div class="show-favorites">
        <p>Mostrar favoritos:</p>
          <div :class="[favoritesActive ? 'favorite-active-icon' : 'favorite-icon']" @click="showFavorites">
              <img alt="Favorite icon" src="@/assets/star-active-icon.svg" />
          </div>
      </div>

      <template v-if="!characters">
        <div class="empty">
          <h2>Uh-oh!</h2>
          <p>¡Pareces perdido en tu viaje!</p>
          <button class="btn">Continuar</button>
        </div>
      </template>

      <div class="items">
        <template v-for="(character, i) in characters" :key="i">
          <Card :character="character" @click="selectCharacter(character.id)" />
        </template>
      </div>

      <div class="pagination" v-if="paginationInfo">
        <div class="pagination-prev" v-if="paginationInfo.prev" @click="prevCharacters">Anterior</div>
        <div class="pagination-next" @click="nextCharacters">Siguiente</div>
      </div>
    </div>

    <Modal v-if="showModal" />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import Categories from '@/components/global/Categories.vue'
import Card from '@/components/home/Card.vue'
import axios from 'axios'
import Modal from '@/components/global/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Categories,
    Card,
    Modal
  },
  computed: {
    characters () {
      return this.$store.state.characters.results
    },
    paginationInfo() {
      return this.$store.state.characters.info
    },
    showModal () {
      return this.$store.state.showModal
    }
  },
  data() {
    return {
      favoritesActive: false
    }
  },
  methods: {
    showFavorites() {
      this.favoritesActive = !this.favoritesActive
      this.$store.commit('setCharacters', [])
      if(!this.favoritesActive) {
        this.$store.dispatch('getCharacters')
      }
    },
    selectCharacter(id) {
      this.$store.dispatch('getCharacter', id)
      this.$store.dispatch('showModal', true)
    },
    prevCharacters() {
      const currentPage = this.paginationInfo.prev.split("=")[1];
      this.$store.dispatch('getNextCharacters', this.paginationInfo.prev)
    },
    nextCharacters() {
      const currentPage = this.paginationInfo.next.split("=")[1];
      this.$store.dispatch('getNextCharacters', this.paginationInfo.next)
    }
  },
  mounted() {
    if(!this.favoritesActive) {
      this.$store.dispatch('getCharacters')
    }

    if(this.$store.state.currentPage != 0) {
      this.$store.dispatch('goToCharactersPage', this.$store.state.currentPage)
    }

    if(this.$store.state.currentGender != null) {
      this.$store.dispatch('getCharactersByGender', this.$store.state.currentGender)
    }
  }
}
</script>


<style scoped>
.HomeView {
  background: white;
}

.container {
  max-width: 1030px;
  margin: 0 auto;
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 30px 0 60px 0;
}

.show-favorites {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 52px;
}

.show-favorites p {
  color: black;
  font-family: 'Montserrat';
  font-size: 14px;
  margin-right: 9px;
}

.favorite-icon, .favorite-active-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #E0E0E0;
    cursor: pointer;
    text-align: center;
}

.favorite-icon img {
    width: 17px;
    height: 18px;
    margin-top: 5px;
    filter: invert(64%) sepia(6%) saturate(15%) hue-rotate(333deg) brightness(79%) contrast(84%);
}

.favorite-active-icon img {
    width: 17px;
    height: 18px;
    margin-top: 5px;
}

.empty {
  text-align: center;
  margin: 130px auto;
}

.empty h2 {
  color: #353535;
}

.empty p {
  color: #5E5E5E;
}

.btn {
  background: #11555F;
  color: white;
  font-family: 'Lato';
  font-size: 18px;
  padding: 11px 20px;
  border-radius: 60px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
}

.pagination {
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pagination div {
    background: #11555F;
  color: white;
  font-family: 'Lato';
  font-size: 18px;
  padding: 11px 20px;
  border-radius: 60px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  margin: 0 15px 30px 0;
}

</style>
