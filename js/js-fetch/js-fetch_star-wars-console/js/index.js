console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data = await response.json();
      console.log(data);
      console.log(data.results);
      console.log(data.results[2].eye_color);
      return data;
    } catch (error) {
      console.log("The force is not with you. :(");
    }
  }
}

fetchData();
