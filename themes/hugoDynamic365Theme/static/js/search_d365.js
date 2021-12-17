const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input",onInput);
async function onInput(event) {
    let element = document.getElementById("searchTitle");
    if(searchInput.value == '')
    {
      element.innerHTML = '';
      element.style.background = '';
    }
    if(searchInput.value.length>4){
        const postData = {};
        const response = await searchResult(searchInput.value);
        // var script = document.createElement('script');      
        // script.type ='application/json';
        // // script.body = response;
        // // document.getElementsByTagName('amp-autocomplete').appendChild = script;
        // var a = document.getElementById('demo').appendChild = script;
        postData['items'] = JSON.stringify(response.hits[0]);
        // return JSON(postData);
        
    //    var result =  JSON.stringify(response);
          responseData = response.hits;
          element.innerHTML = "";
          responseData.forEach(addSearchData);
          function addSearchData(data, index)
          {
            let anchorTag = document.createElement("li");
            anchorTag.href = data['url'];
            let para = document.createElement("a");
            para.style.cssText = "color: black;padding: 10px;display:block"
            let node = document.createTextNode(data['title']);
            para.appendChild(node);
            anchorTag.appendChild(para);
            element.style.background = "#e8e8e9";
            element.appendChild(anchorTag);
          }
          
          // const anchorTag = document.createElement("a");
          //   anchorTag.href = item['url'];
          //   anchorTag.style.cssText = "color: black;padding: 10px;"
          //   const para = document.createElement("li");
          //   const node = document.createTextNode(item['title']);
          //   para.appendChild(node);
          //   anchorTag.appendChild(para);
          //   document.getElementById("searchTitle").style.background = "beige";
          //   const element = document.getElementById("searchTitle");
          //   element.appendChild(anchorTag);
          // const title = response.hits[0].title;
          // const para = document.createElement("li");
          // const node = document.createTextNode(title);
          
          // document.getElementById("searchTitle").style.background = "beige";
          // para.appendChild(node);
          // const element = document.getElementById("searchTitle");
          // element.appendChild(para);
          
        // document.getElementById('demo').append(title);

        // const url = response.hits[0].url;
        // console.log(title);
       
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
