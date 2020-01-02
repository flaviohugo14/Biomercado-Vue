<template>
<body>
  <Nav/>
  <br>
  <br>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Preço</th>
              <th scope="col">País</th>
              <th scope="col">Estado</th>
              <th scope="col">Empresa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <th scope="row">{{ new Date(parseInt(product.date)).toLocaleString('pt-BR').split(' ')[0]}}</th>
              <td>{{ product.name }}</td>
              <td>{{ product.variation }}</td>
              <td>{{ product.country === 'Brasil' ? 'R$ ' + product.price : 'US$ ' + product.price}}</td>
              <td>{{ product.country }}</td>
              <td>{{ product.country === 'Brasil' ? product.state : 'Internacional' }}</td>
              <td>{{ product.country === 'Brasil' ? product.society : 'Internacional' }}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="card">
      <div class="card-body">
        <div class="form-row">
          <div class="col">
          <div class="form-group">
            <label for="name">Nome</label>
            <select class="form-control" id="name">
              <option value="Soja">Soja</option>
              <option value="Algodão">Algodão</option>
              <option value="Girassol">Girassol</option>
              <option value="Canola">Canola</option>
              <option value="Mamona">Mamona</option>
              <option value="Cacho">Cacho</option>
              <option value="Dendê">Dendê</option>
              <option value="Babaçu">Babaçu</option>
              <option value="Coco">Coco</option>
              <option value="Amendoim">Amendoim</option>
              <option value="Linhaça">Linhaça</option>
              <option value="Palma">Palma</option>
              <option value="Palmiste">Palmiste</option>
              <option value="Sebo Bovino">Sebo Bovino</option>
              <option value="Glicerina">Glicerina</option>
              <option value="Milho">Milho</option>
            </select>
          </div>
          </div>
          <div class="col">
          <div class="form-group">
            <label for="variation">Tipo</label>
            <select class="form-control" id="variation">
              <option value="Farelo">Farelo</option>
              <option value="Óleo">Óleo</option>
              <option value="Grão">Grão</option>
              <option value="Torta">Torta</option>
              <option value="Caroço">Caroço</option>
              <option value="Amendôa">Amêndoa</option>
            </select>
          </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
          <div class="form-group">
            <label for="country">País</label>
            <select class="form-control" id="country">
              <option value="BR">Brasil</option>
              <option value="EUA">Estados Unidos</option>
              <option value="ARG">Argentina</option>
              <option value="PB">Países Baixos</option>
              <option value="CAN">Canadá</option>
            </select>
          </div>
          </div>
          <div class="col">
          <div class="form-group">
            <label for="state">Estado</label>
            <select class="form-control" id="state" name="estado">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="IN">Internacional</option>
            </select>
          </div>
          </div>
        </div>
        <div class="form-group">
          <label for="society">Empresa</label>
          <select class="form-control" id="state">
              <option value="Granol Anápolis">Granol Anápolis</option>
              <option value="Binatural">Binatural</option>
              <option value="Granol Tupã">Granol Tupã</option>
          </select>
        </div>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="date">Data</label>
              <input type="date" class="form-control">
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="price">Preço</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">$</div>
                </div>
                <input class="form-control" type="text" id="price">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</body>
</template>

<script>
/* eslint-disable */
import axios from 'axios/dist/axios';
import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    Nav,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios({
      url: 'http://localhost:4000/',
      method: 'post',
      data: {
        query: `
          {
            products {
              id
              name
              variation
              price
              country
              state
              society
              date
              createdAt
            }
          }
        `
      }
    }).then(response => {
      const query = response.data;
      this.products = query.data.products;
      console.log(query.data);
    }).catch((response) => {
      console.error(response);
    });
  }
}
</script>
