let url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
let h1 = document.querySelector("#title");
let mean = document.querySelector("#meaning");
let ul = document.querySelector("#ul");
let source = document.querySelector("#source");
let p = document.createElement("li");
let p1 = document.createElement("li");
// let p2 = document.createElement("li");

async function getResponse() {
  try {
    input = document.querySelector("#input-search").value;
    let response = await axios.get(url + input);
    console.log(response.data[0]);
    h1.innerHTML =
      response.data[0].word.charAt(0).toUpperCase() +
      response.data[0].word.slice(1);
    mean.innerHTML = "Meaning";
    p.innerHTML = response.data[0].meanings[0].definitions[0].definition;
    p1.innerHTML = response.data[0].meanings[0].definitions[1].definition;
    // p2.innerHTML = response.data[0].meanings[0].definitions[2].definition;
    source.innerHTML = "Source: " + response.data[0].sourceUrls[0];
    ul.appendChild(p);
    ul.appendChild(p1);
    // ul.appendChild(p2);
  } catch (error) {
    console.log(error.message);
    // let h2 = document.createElement("h2");
    // h2.innerHTML = "Sorry we can't find this word!";
    // h1.appendChild(h2);
  }
}

let btn = document.querySelector("#btn-search");
btn.addEventListener("click", async () => {
  await getResponse();
});
