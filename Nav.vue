<template>
  <div id="Nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#" class="navbar-brand">
        <img src="../assets/stocks.png" alt="Biomercado" height="35" width="35">
        <span class="green-text">BIO</span>MERCADO
        <img src="../assets/leaf.png" alt="Biomercado" height="26" width="26">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#list"
        aria-controls="list"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="list">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              O Biomercado
            </a>
            <div 
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Cotações</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';

export default {
  name: 'Nav',
}
</script>

<style scoped>
  #Nav {
    color: #FFF;
  }
  .navbar-brand {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.202em;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .green-text {
    color: #a6e66e;
    margin-left: 12px;
  }

  #list a{
    border-bottom:0.5px solid transparent;
  }
  #list a:hover{
    border-bottom:0.5px solid #a6e66e;
  }
</style>
