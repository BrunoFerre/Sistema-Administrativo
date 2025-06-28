<template>
  <div class="container mx-auto mt-5">
    <div
      class="flex justify-center items-center h-[300px] mx-auto"
      v-if="loading"
    >
      <Loader />
    </div>
    <table v-else>
      <caption class="text-center text-2xl mb-5 font-bold">
        Asignaturas Cursando Actualmente
      </caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Asignatura</th>
          <th>Tipo de Asignatura</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody v-if="asignaturas.length > 0" v-for="(asignatura, index) in asignaturas">
        <tr class="uppercase">
          <td>{{ index + 1 }}</td>
          <td>{{ asignatura.materia }}</td>
          <td>{{ asignatura.tipo }}</td>
          <td>{{ asignatura.anio }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6" class="bg-green-200">
            <span class="hover:bg-green-600 cursor-pointer py-2 px-2 rounded-lg"
              >Descargar Reporte</span
            >
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Loader from "../components/Loader.vue";
export default {
  name: "Cursando",
  components: {
    Loader,
  },
  data() {
    return {
      asignaturas: [],
      loading: false,
    };
  },
  created() {
    this.cursando();
  },
  methods: {
    cursando() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/curso/alumno/cursando",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      this.loading = true;
      setTimeout(() => {
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.asignaturas = response.data;
          })
          .catch((error) => {
            console.log(error);
          }).finally(() => {
            this.loading = false;
          });
      }, 2000); // El tiempo de delay está en milisegundos, aquí 2000ms = 2 segundos
    },
  },
};
</script>
<style>
table {
  @apply border-collapse;
  @apply text-sm;
  @apply border-black;
  @apply border-2;
  @apply text-center;
  @apply w-[100%];
}
thead {
  @apply text-lg;
  @apply font-bold;
  @apply h-[65px];
}

tr,
td,
th {
  @apply border-b;
  @apply border-black;
  @apply border-2;
  @apply h-[50px];
}
</style>
