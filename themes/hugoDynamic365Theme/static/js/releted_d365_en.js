const query_url = "https://9V4M3BO2Z4-1.algolianet.com/1/indexes/*/queries";

async function showList() {
  const headers = {
    accept: "*/*",
    "Content-Type": "application/json",
    "X-Algolia-API-Key": "2b38225995523c5ee9697817c6a850be",
    "X-Algolia-Application-Id": "9V4M3BO2Z4"
  };
  const data = {
    requests: [
      {
        indexName: "d365_english_content",
        params:
          "attributes=title,url,indexImg&hitsPerPage=6&query=&sumOrFiltersScores=true&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%5D&tagFilters=",
      },
    ],
  };

  const responseData = await fetch(query_url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  const store = await responseData.json();
  const results = store.results[0].hits;
  let list ="";
  results.forEach((result) => {
    let title = result.title;
    let url = result.url;
    let image = result.indexImg;
    list = list + `<div class="article-list">
                        <a href="${url}" class="article-list-img">
                            <amp-img src="${image}"  layout="fill" alt="" ></amp-img>
                        </a>
                        <a href="${url}" class="article-list-content">
                            <p>${title}</p>
                        </a>
                </div>`;
   
  });
  document.getElementById("releted").innerHTML =  list;
}

showList();
