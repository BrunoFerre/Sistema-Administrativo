<template>
  <!-- From Uiverse.io by JohnnyCSilva -->
  <form class="form">
    <div class="flex-column">
      <label>Email </label>
    </div>
    <div class="inputForm">
      <input placeholder="Enter your Email" class="input" type="text" />
    </div>

    <div class="flex-column">
      <label>D.N.I </label>
    </div>
    <div class="inputForm">
      <input placeholder="Enter your D.N.I" class="input" type="password" />
    </div>
    <div class="flex-column">
      <label>Password </label>
    </div>
    <div class="inputForm">
      <input placeholder="Enter your Password" class="input" type="password" />
    </div>
    <button class="button-submit" @click.prevent="login">Sign In</button>
    <div class="flex-column">
      <button class="btn google">Google</button>
      <button class="btn facebook">Facebook</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      console.log("login");
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        username: "brunodev",
        password: "1234",
        dni:"42273555",
        email: "bruno@email.com"
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) =>{
          if(result){
            console.log(result);
            localStorage.setItem("token", result.jwt);
            window.location.href = "/cuenta";
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
<style scoped>
/* From Uiverse.io by JohnnyCSilva */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: #151717;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}
</style>
