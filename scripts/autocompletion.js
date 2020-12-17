// gathering the required autocomplete suggestion for heroes

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestionBox = searchWrapper.querySelector(".autocomplete-box");

// When the user types anything into the search field
inputBox.onkeyup = (e)=> {
    let userData = e.target.value; // this is the user entered data
    let emptyArray = []; 
    if(userData) {
        emptyArray = suggestions.filter((data)=>{
            // Filtering the "herosuggestions" with the user data
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=> {
            return data = '<li>' + '<img src=' + getHeroImage(data) + '>' + data + '<img src=' + getHeroAttribute(data) + ' id="imageAttribute">' + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show autocomplete results 
        showSuggestions(emptyArray);
        // iterate over every list (li) element
        let allList = suggestionBox.querySelectorAll("li")
        for (let i = 0; i < allList.length; i++) {
            // adding onclick attribute to each elements
            allList[i].setAttribute("onclick", "select(this)");
        }   
    } else {
        searchWrapper.classList.remove("active"); // hide autocomplete results
    }
}

// Use for redirecting
function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; // passing the value which the user selecetd
    console.log(selectUserData);
    searchWrapper.classList.remove("active"); // hide autocomplete results
}

function showSuggestions(list) {
    let listData;
    if(!list.length) {
        // handle the "undefined" that shows up when failed search
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}