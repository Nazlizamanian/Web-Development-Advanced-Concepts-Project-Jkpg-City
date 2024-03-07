// script.js

async function fetchData() {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
  
      const dataContainer = document.getElementById('dataContainer');
      data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('data-item');
  
        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('name');
        nameParagraph.textContent = `${item.name}`;
  
        const urlParagraph = document.createElement('p');
        urlParagraph.classList.add('url');
        urlParagraph.innerHTML = `<strong>URL:</strong> <a href="${item.url}" target="_blank">${item.url}</a>`;
  
        const districtParagraph = document.createElement('p');
        districtParagraph.classList.add('district');
        districtParagraph.textContent = `District: ${item.district}`;
  
        div.appendChild(nameParagraph);
        div.appendChild(urlParagraph);
        div.appendChild(districtParagraph);
  
        dataContainer.appendChild(div);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call fetchData when the page loads
  document.addEventListener('DOMContentLoaded', fetchData);
  