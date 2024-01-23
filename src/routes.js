import { createRouter, createWebHistory } from "vue-router";
import Cuenta from "./views/Cuenta.vue";
import Cursando from "./views/Cursando.vue";
import AlumnoRegular from "./views/AlumnoRegular.vue";
import CursandoCon from "./views/CursandoCon.vue";
import Finales from "./views/Finales.vue";
import MateriasAprobadas from "./views/MateriasAprobadas.vue";
import Titulo from "./views/Titulo.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Cuenta },
        { path: "/materias-aprobadas", component: MateriasAprobadas },
        { path: "/finales", component: Finales },
        { path: "/cursando", component: Cursando },
        { path: "/condicional", component: CursandoCon },
        { path: "/titulo", component: Titulo },
        { path: "/alumno-regular", component: AlumnoRegular },
        { path: "/cuenta", component: Cuenta },
    ],
})
export default router