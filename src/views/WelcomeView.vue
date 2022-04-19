<template>
  <div class="HomeView">
    <div class="HomeViewContainer">
      <img alt="Suazo logo" class="logo-img" src="@/assets/logo_suazo.png" />
      <img alt="RAM logo" class="ram-img" src="@/assets/ram.png" />
      <h2>Bienvenido a Rick and Morty</h2>
      <p>En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de<br />código y la reproducción del siguiente diseño.</p>
      <router-link to="/home">
        <button class="btn">Continuar</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.HomeView {
  display: flex;
  height: 100vh;
  width: 100%;
  background: black url('@/assets/portal-ram.png') no-repeat center center;
  background-size: cover;
  position: relative;
  justify-content: center;
}

.HomeView::after {
  content: "";
  background: url('@/assets/overlay.png');
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.HomeViewContainer {
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.logo-img {
  width: 134.81px;
}

.ram-img {
  width: 664px;
}

h2 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;
}

p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  margin: 10px;
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
</style>