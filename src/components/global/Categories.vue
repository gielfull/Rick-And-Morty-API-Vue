<template>
    <div id="categories">
        <div class="categories-menu">
            <template v-for="(item, i) in menuItems" :key="i">
                <div :class="[item.active ? 'categories-item categories-item-active' : 'categories-item']" @click="getCharactersByGender(item, item.name)">{{item.name}}</div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Categories',
        data() {
            return {
                menuItems : [
                    {
                        name: 'all',
                        active: true,
                    },
                    {
                        name: 'unknown',
                        active: false,
                    },
                    {
                        name: 'female',
                        active: false
                    },
                    {
                        name: 'male',
                        active: false
                    },
                    {
                        name: 'genderless',
                        active: false
                    }
                    
                ]
            }
        },
        methods: {
            getCharactersByGender(item, gender) {
                this.$store.dispatch('setCurrentGender', gender)

                this.menuItems.forEach(e => e.active = false)
                item.active = true;

                if(gender === 'all') return this.$store.dispatch('getCharacters');

                this.$store.dispatch('getCharactersByGender', gender)
            }
        },
        beforeMount() {
            if(this.$store.state.currentGender) {
                const ele = this.menuItems.find(e => e.name === this.$store.state.currentGender)
                this.getCharactersByGender(ele, this.$store.state.currentGender)
            }
        }
    }
</script>

<style scoped>
#categories {
    background-color: #F2F2F2;
}

.categories-menu {
    width: 1030px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.categories-item {
    height: 80px;
    width: 100%;
    line-height: 80px;
    text-align: center;
    color: black;
    font-family: 'Montserrat';
    font-size: 18px;
    text-transform: capitalize;
}

.categories-item-active,
.categories-item:hover {
    border-bottom: 3px solid #34C759;
    cursor: pointer;
}
</style>