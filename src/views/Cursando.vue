<template>
    <div class="container mx-auto mt-5">
        <table>
            <caption class="text-center text-2xl mb-5 font-bold">
                Materias Cursando Actualmente
            </caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Materia</th>
                    <th>Calificaciónes</th>
                    <th>Condición</th>
                    <th>Tipo de Materia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Matemáticas</td>
                    <td>10</td>
                    <td>Aprobado</td>
                    <td>Regular</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="5">Descargar Reporte</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Cursando'
}
</script>
<style >
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