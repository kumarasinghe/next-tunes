async function get(url, responseType = "json") {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  switch (responseType) {
    case "json":
      return await response.json();
    default:
      return await response.text();
  }
}

export { get };
