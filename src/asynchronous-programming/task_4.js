function getUserDate() {
  const usersData = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(data => data.getUsersData);

  if (usersData) {
    fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
      .then(response => response.json())
      .then(console.log);
  }
}

getUserDate();
