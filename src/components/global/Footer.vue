<template>
    <div id="Footer">
        <img alt="Suoza logo" class="ram-img" src="@/assets/logo_suazo.png" />
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
#Footer {
    height: 143px;
    background: black url('@/assets/footer.png') no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#Footer img {
    height: 50px;
}
</style>