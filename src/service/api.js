// HOMEPAGE
// export function getNewCollectionsItems() {
//   return fetch("http://localhost:3001/kaira/newCollections")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was NOT ok");
//       }

//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//     });
// }

export async function getNewCollectionsItems() {
  try {
    const response = await fetch("http://localhost:3001/kaira/newCollections");
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching new Collections: ", error);
  }
}

export async function getCategoriesItems() {
  try {
    const response = await fetch("http://localhost:3001/kaira/categories");
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching the data: ", error);
  }
}

export async function getCollectionOnBgrnd() {
  try {
    const response = await fetch(
      "http://localhost:3001/kaira/collectionBackgrnd"
    );
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching new Collections: ", error);
  }
}

export async function getNewArrivals() {
  try {
    const response = await fetch("http://localhost:3001/kaira/newArrivals");
    if (!response.ok) {
      throw new Error("Network response was NOT ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching new arrivals", error);
  }
}
