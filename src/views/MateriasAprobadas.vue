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
        Materias Aprobadas
      </caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Materia</th>
          <th class="w-25">Calificaciónes</th>
          <th>Condición</th>
          <th>Llamado</th>
        </tr>
      </thead>
      <tbody
        v-if="asignaturas.length > 0"
        v-for="(asignatura, index) in asignaturas"
        :key="asignatura.id"
      >
        <tr class="uppercase">
          <td>{{ index + 1 }}</td>
          <td>{{ asignatura.asignatura }}</td>
          <td>{{ asignatura.nota }}</td>
          <td>{{ asignatura.condicion }}</td>
          <td>{{ asignatura.llamado }}</td>
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
  name: "MateriasAprobadas",
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
    this.aprobado();
  },
  methods: {
    aprobado() {
      this.loading = true;

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/finales/aprobadas",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
      setTimeout(() => {
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.asignaturas = response.data;
            console.log(this.asignaturas);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }, 2000);
    },
  },
};
</script>
