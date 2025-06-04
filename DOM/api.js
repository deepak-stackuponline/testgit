fetch('https://mocki.io/v1/84f1aa92-af66-4453-9ce6-b9c5668ef03e')
  .then(response => response.json())
  .then(data => {
    // If data is an array, find the object with id == 1
    const result = Array.isArray(data)
      ? data.find(item => item.id === 5)
      : (data.id === 1 ? data : null);

    if (result) {
      console.log(result);  // Print the full object with id == 1
    } else {
      console.log("No item with id found.");
    }
  })
  .catch(error => console.error('Error:', error));
