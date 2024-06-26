// getItems function
export async function getItems(type) {
  try {
    const response = await fetch(`http://localhost:3001/kaira/${type}`);
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching new Collections: ", error);
  }
}

export async function getItem(id) {
  try {
    const response = await fetch(`http://localhost:3001/item/${id}`);
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching information about single item", error);
  }
}
