function getUserDate() {
  return fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(usersData => {
      if (usersData) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(console.log);
      }
    });
}

getUserDate();
