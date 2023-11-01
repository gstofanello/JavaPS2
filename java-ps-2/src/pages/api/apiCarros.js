let APIURL = "https://java-proj-ps2.onrender.com/carros";

export async function getCarros() {
  var carros = [];

  try {
    var response = await fetch(APIURL);
    carros = await response.json();
  } catch (error) {
    console.log(error);
  }

  return carros;
}
export async function setCarros(data) {
  if (
    !data ||
    !data.modelo ||
    !data.ano ||
    !data.marca ||
    !data.id ||
    !data.categoria
  ) {
    return undefined;
  }
  let { modelo, ano, marca, categoria, id } = data;
  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  };

  try {
    const response = await fetch(APIURL, options);
    return await response.json();
  } catch (error) {
    <Link to="/error"></Link>;
  }

  return undefined;
}

export async function deletePost(id) {
  if (!id) {
    return undefined;
  }

  let options = {
    method: "DELETE",
  };

  try {
    let response = await fetch(APIURL + "/" + id, options);
    return await response.json();
  } catch (error) {
    <Link to="/error"></Link>;
  }

  return undefined;
}
export async function editPost(data) {
  let { modelo, ano, marca, categoria, id } = data;

  if (!data) {
    return undefined;
  }

  let options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let response = await fetch(APIURL + "/" + id, options);
    return await response.json();
  } catch (error) {
    <Link to="/error"></Link>;
  }

  return undefined;
}
