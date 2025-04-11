async function sendRequest(request) {
  try {
    const res = await fetch(request.path, request.option);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    if (res.status !== 204) {
      return await res.json();
    } else {
      return await res.text();
    }
  } catch (err) {
    console.warn(err);
  }
}

export default sendRequest;
