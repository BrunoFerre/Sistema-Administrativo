<template>
  <header class="header bg-white shadow py-4 mx-2">
        <div class="header-content flex items-center flex-row">
          <form action="#">
            <div class="hidden md:flex relative text-3xl pl-5 text-bold">
            Bienvenido al sistema
            </div>
            <div class="flex md:hidden">
              <select class="h-[40px] m:hidden text-md text-black border-gray-200 rounded-lg px-2">
                <option>Bienvenido al sistema</option>
                <option>Aprobadas</option>
                <option>Finales</option>
                <option>Cursando</option>
                <option>Condicional</option>
                <option>Cuenta</option>
                <option>Cerrar Sesion</option>
              </select>
            </div>
          </form>
          <div class="flex ml-auto">
              <span class="flex flex-col ml-2">
                <span class="truncate w-20 font-semibold tracking-wide leading-none">Alumno</span>
                <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">Admin</span>
              </span>
          </div>
        </div>
      </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>