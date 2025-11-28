const ex03 = () => {
  const cargarUsuario = () => {
    fetch("https://jsonplaceholder.typicode.com/users/10")
      .then((respuesta) => respuesta.json())
      .then((usuario) => {
        console.log("Name:", usuario.name);
        console.log("Username:", usuario.username);
        console.log("email", usuario.email);
      })
      .catch((error) => {
        console.log("Error al cargar usuario:", error);
      });
  };

  cargarUsuario();
};

const ex04 = () => {
  const cargarUsuario = async () => {
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users/10",
      );
      const usuario = await respuesta.json();
      console.log("Name:", usuario.name);
      console.log("Username:", usuario.username);
      console.log("Email:", usuario.email);
    } catch (e) {
      console.log("Error", e);
    }
  };

  cargarUsuario();
};

const ex05 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => respuesta.json())
    .then((usuarios) =>
      usuarios.forEach((usuario) => {
        console.log(usuario.name);
      }),
    )
    .catch((e) => {
      console.log("Error:", e);
    });
};

const ex06 = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    usuarios.forEach((usuario) => {
      console.log(usuario.name);
    });
  } catch (e) {
    console.log("Error", e);
  }
};

const ex10 = () => {
  const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  console.log(regexContraseña.test("as3HOLA4"));
};

const ex11 = () => {
  const urls = /^https:\/\/+[^/\s].[^/\s]$/;
  console.log(urls.test("https://www.youtube.com"));
};

const ex12 = () => {
  const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  console.log(regexContraseña.test("as3HOLA4"));
};

const ex13 = () => {
  const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  console.log(regexContraseña.test("as3HOLA4"));
};

const ex14 = () => {
  const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  console.log(regexContraseña.test("as3HOLA4"));
};
