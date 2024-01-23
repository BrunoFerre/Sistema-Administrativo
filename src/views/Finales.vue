<template>
      <div class="container mx-auto mt-5">
        <table>
            <caption class="text-center text-2xl mb-5 font-bold">
                Inscripción Finales
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
    name: 'Finales'
}
</script>