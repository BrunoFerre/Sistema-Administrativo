<template>
  <div class="flex items-start justify-center w-full" v-if="login">
    <PersonaComponent />
    <div>
      <label>
        Usuario:
        <input type="text" name="username" :value="persona.username" disabled />
      </label>
      <label>
        Nombre:
        <input type="text" name="name" :value="persona.nombre" disabled />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" :value="persona.apellido" disabled />
      </label>
      <label>
        Email:
        <input type="text" name="email" :value="persona.email" disabled />
      </label>
      <label>
        Telefono:
        <input type="text" name="telefono" :value="persona.telefono" disabled />
      </label>
      <label>
        D.N.I:
        <input type="text" name="DNI" :value="persona.dni" disabled />
      </label>
      <label>
        Rol:
        <input type="text" name="rol" value="persona.rol" disabled />
      </label>
      <label
        >Estado:
        <input type="text" name="estado" :value="persona.estado" disabled />
      </label>
    </div>
  </div>
  <div v-else class="w-2/3 mx-auto flex items-center justify-center mt-10">
    <Login />
  </div>
</template>

<script>
import axios from "axios";
import Login from "../components/Login.vue";
import PersonaComponent from "../components/Persona.vue";
export default {
  name: "Cuenta",
  components: {
    Login,
    PersonaComponent,
  },
  data() {
    return {
      persona: [],
      login: false,
    };
  },
  mounted() {
    this.getPersona();
  },
  methods: {
    getPersona() {
      if (localStorage.getItem("token" == null)) {
        this.login = false;
      } else {
        let data = "";
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:8080/personas/me",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.persona = response.data;
            this.login = true;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style scoped>
label {
  @apply text-2xl uppercase inline-flex gap-4 w-full;
}
/* From Uiverse.io by andrew-demchenk0 */
.card {
  --main-color: #000;
  --submain-color: #78858f;
  --bg-color: #fff;
  position: relative;
  width: 300px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--bg-color);
}

.card__img {
  height: 192px;
  width: 100%;
}

.card__img svg {
  height: 100%;
  border-radius: 20px 20px 0 0;
}

.card__avatar {
  position: absolute;
  width: 114px;
  height: 114px;
  background: var(--bg-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 57px);
}

.card__avatar svg {
  width: 100px;
  height: 100px;
}

.card__title {
  margin-top: 60px;
  font-weight: 500;
  font-size: 18px;
  color: var(--main-color);
}

.card__subtitle {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  color: var(--submain-color);
}

.card__btn {
  margin-top: 15px;
  width: 76px;
  height: 31px;
  border: 2px solid var(--main-color);
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
  color: var(--main-color);
  background: var(--bg-color);
  text-transform: uppercase;
  transition: all 0.3s;
}

.card__btn-solid {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn-solid:hover {
  background: var(--bg-color);
  color: var(--main-color);
}
</style>

<!--    this.id = persona.getId();
        this.username = persona.getUsername();
        this.password = persona.getPassword();
        this.nombre = persona.getNombre();
        this.apellido = persona.getApellido();
        this.dni = persona.getDni();
        this.telefono = persona.getTelefono();
        this.email = persona.getEmail(); -->
