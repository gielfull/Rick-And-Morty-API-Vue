<template>
    <div class="card">

        <div class="card-picture">
            <img :src="character.image" />
            <div class="favorite-icon" @click="favorite">
                <img alt="Favorite icon" src="@/assets/star-active-icon.svg" />
            </div>
        </div>

        <div class="card-info">
            <div>
                <div class="card-info-status-species">
                    <span></span>
                    <p>{{character.status}} - {{character.species}}</p>
                </div>
                <h2>{{character.name}}</h2>
                <p class="card-info-title">Last known location:</p>
                <p class="card-info-text">{{character.location.name}}</p>
                <p class="card-info-title">First seen in:</p>
                <p class="card-info-text">{{character.origin.name}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            character: {
                type: Object,
                required: true
            }
        },
        methods: {
            favorite() {
                alert('Favorite');
            }
        }
    }
</script>

<style scoped>
.card {
    width: 326px;
    height: 140px;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    font-family: 'Montserrat';
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.card .card-picture {
    flex-basis: 140px;
    position: relative;
}

.card-picture img{
    width: 140px;
    height: 140px;
    border-radius: 10px 0 0 10px;
}

.favorite-icon {
    position: absolute;
    bottom: 5px;
    right: 9px;
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

.card-info {
    width: auto;
    color: black;
    padding-left: 15px;
    text-align: left;
    display: flex;
    align-items: center;
}

.card-info > div {
    display: flex;
    flex-direction: column;
}

.card-info-status-species {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.card-info-status-species p {
    font-size: 10px;
    color: #4F4F4F;
}

.card-info-status-species span {
    display: block;
    background: #27AE60;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 6px;
}

.card-info div h2 {
    font-size: 16px;
    color: black;
    line-height: 16px;
}

.card-info-title {
    color: #828282;
    font-size: 10px;
    line-height: 10px;
    margin-top: 9px;
    display: block;
}

.card-info-text {
    font-size: 12px;
    color: black;
    line-height: 15px;
}
</style>