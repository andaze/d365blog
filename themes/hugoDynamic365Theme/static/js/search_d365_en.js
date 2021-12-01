const searchInput = document.querySelector("#search-input");
// console.log(searchInput);
searchInput.addEventListener("input",onInput);

async function onInput(event) {

    if(searchInput.value.length>4){
        const postData = {};
        const response = await searchResult(searchInput.value);
        // var script = document.createElement('script');      
        // script.type ='application/json';
        // // script.body = response;
        // // document.getElementsByTagName('amp-autocomplete').appendChild = script;
        // var a = document.getElementById('demo').appendChild = script;
        postData['items'] = JSON.stringify(response.hits[0]);
        // console.log(postData);
        // return JSON(postData);
        console.log(postData);
    //    var result =  JSON.stringify(response);
    //    console.log(result)  
        
        const title = response.hits[0].title;
        const para = document.createElement("li");
        const node = document.createTextNode(title);
        para.appendChild(node);
        const element = document.getElementById("searchTitle");
        element.appendChild(para);
        // document.getElementById('demo').append(title);

        // const url = response.hits[0].url;
        // console.log(title);
       
    }

   
  
}

async function searchResult(query) {
  const query_url = `https://9V4M3BO2Z4.algolia.net/1/indexes/netlify_23ba4425-f265-49c0-b287-cb888a5f951c_devlop_all?hitsPerPage=1&query=${query}`;

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
