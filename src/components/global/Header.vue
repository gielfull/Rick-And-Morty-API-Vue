<template>
  <div id="Header">
      <img alt="RAM logo" class="ram-img" src="@/assets/ram.png" />
      <input type="text" placeholder="Buscar personaje..." v-model="searchInput" />
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
          searchInput: ''
        }
    },
    watch: {
      // TODO: add debounce to the search input
        searchInput(newValue) {
          this.$store.dispatch('getCharacterByName', newValue)
        }
    }
}
</script>

<style>
#Header {
  height: 455px;
  background: url('@/assets/ram-header.png') no-repeat top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#Header img {
  width: 347px;
}

#Header input {
  background: #081F32 url('@/assets/search-icon.svg') no-repeat 15px center;
  background-size: 28px;
  width: 500px;
  height: 60px;
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  font-family: 'Montserrat';
  font-size: 18px;
  padding-left: 58px;
  position: relative;
}

#Header input::placeholder {
  color: white;
}

#Header input:focus {
  outline: none;
}
</style>