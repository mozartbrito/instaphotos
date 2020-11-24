const lerUsuarios = async (callback) => {
    const usuariosHTTP = await(fetch("http://hmgapi.harnet.com.br/api/usuarios.php"));
    const usuariosJson = await usuariosHTTP.json();
    callback(usuariosJson);
  }

export default lerUsuarios;