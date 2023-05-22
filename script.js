const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  const inputVal = str.toLowerCase();

  for (let i = 0; i < fruit.length; i++) {
    const fruitName = fruit[i].toLowerCase();
    if (fruitName.includes(inputVal)) {
      //add matching fruits to the results list
      results.push(fruit[i]);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value; // get current value of the input field
  const results = search(inputVal); // calls the search function to get matching fruits
  showSuggestions(results, inputVal); // display the suggestion in the dropdown
}

function showSuggestions(results, inputVal) {
  // clear the existing suggestions
  suggestions.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const suggestion = document.createElement("li"); // creates a new li element
    suggestion.textContent = results[i]; //set the text content of the li to the fruit name
    suggestions.appendChild(suggestion); // add the suggestion to the dropdown
  }
}

function useSuggestion(e) {
  const selectedSuggestion = e.target.textContent; // get the selected suggestion from the clicked li
  input.value = selectedSuggestion; // set the input field value to the selected suggestion
  suggestions.innerHTML = ""; // clears the dropdown
}

// clears the input field with a double click after making a selection
function clearInputField(e) {
  if (e.type === "dblclick") {
    input.value = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion); // adds the selected item to the input field
input.addEventListener("dblclick", clearInputField);
