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
          Plan de Estudio
        </caption>
        <thead>
          <tr>
            <th>Año</th>
            <th>Materia</th>
            <th class="w-25">Para Cursar: Regularizada</th>
            <th>Para Rendir: Aprobada</th>
            <th>Tipo de Materia</th>
          </tr>
        </thead>
        <tbody
          v-if="materias.length > 0"
          v-for="(materia) in materias"
        >
          <tr class="uppercase">
            <td class="w-[70px]">{{ materia.año }}</td>
            <td>{{ materia.nombre }}</td>
            <td>{{ materia.correlativasRegular }}</td>
            <td>{{ materia.correlativasRendir }}</td>
            <td>{{ materia.tipo }}</td>
          </tr>
        </tbody>
       
        <tfoot>
        <tr>
          <th colspan="6" class="bg-green-200">
            <span class="hover:bg-green-600 cursor-pointer py-2 px-2 rounded-lg"
              >Descargar Plan de Estudio</span
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
  name: "PlanEstudio",
  components: {
    Loader,
  },
  data() {
    return {
      materias: [],
      loading: false,
      primerAño: [],
      segundoAño: [],
      tercerAño: [],
    };
  },
  created() {
    this.planEstudio();
  },
  methods: {
    planEstudio() {
      this.loading = true;
      setTimeout(() => {
        axios
          .get("http://localhost:8080/api/materias")
          .then((response) => {
            this.materias = response.data;
            console.log(response.data);
            this.primerAño = this.materias.filter(
              (materia) => materia.año == 1
            );
            this.segundoAño = this.materias.filter(
              (materia) => materia.año == 2
            );
            this.tercerAño = this.materias.filter(
              (materia) => materia.año == 3
            );
          })
          .finally(() => {
            this.loading = false;
          });
      }, 1000);
    },
  },
};
</script>
<style></style>
