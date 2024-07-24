const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//searches through all the fruit 
function search(str) {
	let results = [];
  let inputVal = str.toLowerCase()
  //loop over all the fruits
    fruits.forEach((fruit) => {
        let lowerCasedFruit = fruit.toLowerCase();
        //check to see if the fruit contains part of the input value
        if(lowerCasedFruit.includes(inputVal)) {
        // add the fruits that contain the input value to the results arr
          results.push(fruit);      
      };
    })
	return results;
};

// the input section where you type
function searchHandler(e) {  
  const inputVal = e.target.value
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

//the results from searching
function showSuggestions(results) {
  //get reference to ul(suggestions)
  //loop over all the results
  for(let i = 0; i < 5; i++) {
    //create a li element
    const li = document.createElement('li');   
     //if i type another suggestion i need to remove the added li
     input.addEventListener('input', () => {
      suggestions.replaceChildren()
    })
    //add the results into the li
    li.textContent = results[i];
    //appends to ul
    suggestions.appendChild(li);
  }    
}

//replaces the input with what you click 
function useSuggestion(e) {
  // get the li value === e.target.value
  const clickedItem = e.target.textContent;
  // set input to li value
  input.value = clickedItem;
  //remove the suggestions (use .replaceChildren())
  suggestions.replaceChildren()
  //https://stackoverflow.com/a/65413839/25279995
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);