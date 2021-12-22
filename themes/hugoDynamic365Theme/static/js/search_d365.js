let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input",onInput);
async function onInput(event) {
    let element = document.getElementById("searchTitle");
    element.classList.add("active");
    if(searchInput.value == '')
    {
      element.innerHTML = '';
      element.style.background = '';
      element.classList.remove("active");
    }
    if(searchInput.value.length>4){
        const response = await searchResult(searchInput.value);
        responseData = response.hits;
        let searchResulthtml = '';
        element.innerHTML = "";
        var result = responseData.forEach(addSearchData);
        function addSearchData(data, index)
        {
          let string = data['section'].replaceAll('-',' ');
          console.log(string)
          let converString = string.toLowerCase();
          let dirName = string.charAt(0).toUpperCase() + converString.slice(1);
          
            searchResulthtml += ` <div class="search-menu-container">
            <ul class="search-menu-wrapper">
              <li class="hasChild" style="padding:5px"><b>${dirName}</b></li>
              <li class="hasChild">
                <ul class="search-menu-wrapper">
                  <li class="hasChild"><a href="${data['url']}">${data['title']}</a> </li>
                </ul>
              </li>
            </ul>
          </div>`;
          return searchResulthtml;
            // let anchorTag = document.createElement("li");
            // anchorTag.href = data['url'];
            // let para = document.createElement("a");
            // para.style.cssText = "color: black;padding: 10px;display:block"
            // let node = document.createTextNode(data['title']);
            // para.appendChild(node);
            // anchorTag.appendChild(para);
            // element.style.background = "#e8e8e9";
            // element.appendChild(anchorTag); 
          }
          element.innerHTML = `${searchResulthtml}`;
    }

   
  
}

async function searchResult(query) {
  let query_url;
  if(document.getElementById('lang').value == 'ja')
  {
    query_url = `https://9V4M3BO2Z4.algolia.net/1/indexes/d365_japanese_content?hitsPerPage=5&query=${query}`;
  }
  if(document.getElementById('lang').value == 'en')
  {
    query_url = `https://9V4M3BO2Z4.algolia.net/1/indexes/d365_english_content?hitsPerPage=5&query=${query}`;
  }
  const headers = {
    accept: "*/*",
    "Content-Type": "application/json",
    "X-Algolia-API-Key": "2b38225995523c5ee9697817c6a850be",
    "X-Algolia-Application-Id": "9V4M3BO2Z4",
  };
  const response = await fetch(query_url, {
    method: "GET",
    headers,
  });

  return response.json();
}
