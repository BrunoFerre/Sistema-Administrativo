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
          <th>Tipo de Materia</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody
        v-if="materias.length > 0"
        v-for="(materia, index) in materias"
        :key="materia.id"
      >
        <tr class="uppercase">
          <td>{{ index + 1 }}</td>
          <td>{{ materia.materia }}</td>
          <td>{{ materia.nota }}</td>
          <td>{{ materia.estado }}</td>
          <td>{{ materia.tipo }}</td>
          <td>{{ materia.anio }}</td>
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
      materias: [],
      loading: false,
    };
  },
  created() {
    this.aprobado();
  },
  methods: {
    aprobado() {
      this.loading = true;
      setTimeout(() => {
        axios
          .get("http://localhost:8080/api/alumnos/aprobado/42273555")
          .then((response) => {
            this.materias = response.data;
            console.log(response.data);
          })
          .finally(() => {
            this.loading = false;
          });
      }, 2000);
    },
  },
};
</script>
