let body=document.body
const source = "http://localhost:3000/api/data";

fetch(source)
  .then(response => response.json())
  .then(stores => {
    console.log(stores);
    const storesList = document.getElementById("stores-list");
    stores.forEach(store => {
      const storeContainer = document.createElement("div");
      storeContainer.classList.add("stores-list");
      storeContainer.classList.add("store-container");


      const storeName = document.createElement("h3");
      storeName.classList.add("store-name");
      storeName.textContent = store.name;


      const storeUrl = document.createElement("a");
      storeUrl.classList.add("store-url");

      // Check if store URL is complete
      let url = store.url;
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
      }

      storeUrl.href = url;
      storeUrl.innerHTML = `<strong>Visit Store</strong>`;

      const storeDistrict = document.createElement("p");
      storeDistrict.classList.add("store-district");
      storeDistrict.innerHTML = `<strong>District:</strong>${store.district}`;

      // ADD storeName and storeUrl to storeContainer TO EACH store
      storeContainer.appendChild(storeName);
      storeContainer.appendChild(storeUrl);
      storeContainer.appendChild(storeDistrict);


      // Append storeContainer to storesList
      storesList.appendChild(storeContainer);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




