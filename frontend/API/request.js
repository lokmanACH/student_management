const serverLink = import.meta.env.VITE_SERVER_LINK;

export async function postRequest(link, body) {
  try {
    const response = await fetch(serverLink + link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    return { status: response.status };
  } catch (error) {
    console.log(error);
    return { status: 500, result: null };
  }
}

export async function putRequest(link, body) {
  try {
    const response = await fetch(serverLink + link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    return { status: response.status };
  } catch (error) {
    console.log(error);
    return { status: 500, result: null };
  }
}

export async function getRequest(link) {
  try {
    const response = await fetch(serverLink + link, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return { status: response.status, result };
    }

    if (response.status == 203) {
    }

    return { status: response.status, result };
  } catch (error) {
    console.log(error);
    return { status: 500, result: null };
  }
}

export async function deleteRequest(link, body) {
  try {
    const response = await fetch(serverLink + link, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    return { status: response.status };
  } catch (error) {
    console.log(error);
    return { status: 500, result: null };
  }
}
