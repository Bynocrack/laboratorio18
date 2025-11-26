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
