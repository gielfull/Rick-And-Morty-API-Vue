<template>
    <div>
        <div class="modal" v-show="showModal" @click="close">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-header-bg">
                        <img class="close-icon" alt="Close icon" src="@/assets/close-icon.svg" @click="close" />
                    </div>
                    <div class="modal-avatar">
                        <img :src="characterInfo.image" />
                        <div class="favorite-icon" @click="favorite">
                            <img alt="Favorite icon" src="@/assets/star-active-icon.svg" />
                        </div>
                    </div>
                    <span>{{characterInfo.status}}</span>
                    <h2>{{characterInfo.name}}</h2>
                    <p>{{characterInfo.species}}</p>
                </div>

                <div class="modal-info">
                    <h2>Información</h2>
                    <div class="modal-info-container">
                        <div>
                            <span>Gender:</span>
                            <p>{{characterInfo.gender}}</p>
                        </div>
                        <div>
                            <span>Origin:</span>
                            <p>{{characterInfo.origin.name}}</p>
                        </div>
                        <div>
                            <span>Type:</span>
                            <p>{{characterInfo.species}}</p>
                        </div>
                    </div>

                    <div class="separator"></div>
                </div>

                <div class="modal-info">
                    <h2>Episodios</h2>
                    <div class="modal-info-container">
                        <div v-for="(item, i) in episodes" :key="i">
                                <span>{{item.name}}</span>
                                <p>{{item.episode}}</p>
                                <span>{{item.air_date}}</span>
                        </div>
                    </div>
                    <div class="separator"></div>
                </div>

                <div class="modal-info">
                    <h2>Personajes interesantes</h2>
                        <div class="items">
                            <template v-for="(character, i) in interestingCharacters" :key="i">
                                    <Card :character="character" />
                            </template>
                        </div>
                    <div class="modal-info-container">
                    </div>
                </div>

                <button class="btn">Compartir personaje</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Card from '@/components/home/Card.vue'

    export default {
      name: "Modal",
        components: {
            Card
        },
        computed: {
            showModal() {
                return this.$store.state.showModal
            },
            characterInfo() {
                return this.$store.state.character
            }
        },
        data() {
            return {
                show: true,
                episodes: [],
                interestingCharacters: []
            }
        },
        methods: {
            close() {
                this.show = false;
                this.$store.dispatch('showModal', false)
            },
            getEpisodeData(episodeUrl) {
                axios.get(episodeUrl).then(response => {
                    this.episodes.push(response.data);
                });
            }
        },
        mounted() {
            if(this.$store.state.character) {
                this.$store.state.character.episode.forEach(episodeUrl => {
                    this.getEpisodeData(episodeUrl);
                });

                for(let i = 1; i <= 3; i++) {
                    axios.get(`https://rickandmortyapi.com/api/character/${i}`).then(response => {
                        this.interestingCharacters.push(response.data);
                    });
                }
            }
        }

    }
</script>

<style scoped>
.modal {
  height: 100vh;
  width: 100vw;
  display: block;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}

.modal-content {
  content: "";
  display: block;
  height: 70vh;
  width: 740px;
  background: white;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  overflow: scroll;
}

@media screen and (max-width: 740px) {
  .modal-content {
    width: 100%;
  }
}

.modal-header {
    background: #F2F2F2;
    border-radius: 10px;
    text-align: center;
    font-family: 'Montserrat';
    padding-bottom: 16px;
}

.modal-header-bg {
    height: 220px;
    background: url('@/assets/detail-bg.png') no-repeat center center;
    background-size: cover;
}

.close-icon {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 30px 0 60px 0;
  width: 100%;
  overflow-x: scroll;
}

.modal-avatar {
    width: 155px;
    height: 155px;
    border-radius: 50%;
    margin: -77px auto 0 auto;
    background: white;
    padding: 4px;
    position: relative;
}

.modal-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.modal-header span {
    color: #4F4F4F;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 12px;
    display: block;
}

.modal-header h2 {
    color: #081F32;
    font-size: 20px;
    font-weight: 600;
}

.modal-header p {
    color: #4F4F4F;
    font-size: 12px;
    text-transform: uppercase;
}

.favorite-icon {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX( -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #E0E0E0;
    border: 4px solid white;
    cursor: pointer;
}

.favorite-icon img {
    width: 17px;
    height: 18px;
    margin-top: 1px;
}

.modal-info {
    padding: 22px 22px 0 22px;
    font-family: 'Montserrat';
}

.modal-info h2 {
    margin-bottom: 18px;
    color: #4F4F4F;
    font-weight: 600;
}

.separator {
    width: 100%;
    height: 1px;
    background: #E0E0E0;
    margin-top: 15px;
}

.modal-info-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.modal-info-container div {
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    font-family: 'Montserrat';
    width: 163px;
    padding: 6px 12px;
    margin-bottom: 20px;
}

.modal-info-container div span {
    color: #828282;
    font-size: 11px;
    display: block;
}

.modal-info-container div p {
    color: #081F32;
    font-weight: 600;
    font-size: 17px;
    margin: 0;
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
  float: right;
  margin: 0 15px 30px 0;
}
</style>