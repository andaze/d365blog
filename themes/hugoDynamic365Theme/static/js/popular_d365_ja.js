const query_url = "https://9V4M3BO2Z4-1.algolianet.com/1/indexes/d365_japanese_content?hitsPerPage=6";

async function showList() {
  const headers = {
    accept: "*/*",
    "Content-Type": "application/json",
    "X-Algolia-API-Key": "2b38225995523c5ee9697817c6a850be",
    "X-Algolia-Application-Id": "9V4M3BO2Z4"
  };
  // const data = {
  //   requests: [
  //     {
  //       indexName: "d365_japanese_content",
  //       params:
  //         "attributes=title,url,dir&hitsPerPage=6&query=&sumOrFiltersScores=true&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%5D&tagFilters=",
  //     },
  //   ],
  // };

  const responseData = await fetch(query_url, {
    method: "GET",
    headers,
    // body: JSON.stringify(data),
  });
  const store = await responseData.json();
  const results = store.hits;
  let list ="";
  results.forEach((result) => {
    let title = result.title;
    let url = result.url;
    list = list + ` <div class="popular-list">
                      <div class="popular-list-img">
                        <amp-img src="https://dynamics365.andaze.com/wp-content/uploads/wordpress-popular-posts/2584-featured-105x105.jpg" width="105" height="105" layout="fill" alt="" ></amp-img>
                      </div>
                      <div class="popular-list-content">
                        <a href="${url}">${title}</a>
                      </div>
                    </div>`;
   
  });
  document.getElementById("popular").innerHTML =  list;
}

showList();
