
function fetchJSONData() {
    //fetch json file
    fetch('./code-test.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => {

            if (data) {
                if (data !== null && data !== undefined) {
                     // Access Data
                    renderData(data);
                } else {
                  // Handle null or undefined data
                  console.log("response 404")
                }
              } else {
                // Handle null or undefined data
                console.log("response 404")
              }
            
        })  
        .catch(error => console.error('Failed to fetch data:', error)); 
}

window.onload = fetchJSONData();  

//created function for genrate dynamic HTML and render data.
function renderData(data){
    var htmlTag = "";
    var getoutput = data.articles.forEach((item, index)=>{
        htmlTag += '<div class="card-div"><label class="category">'+item.primarySectionRouteName+'</label><h1 class="title">'+item.headline+'</h1><div class="midsection"><div class="img-section"><img src="'+item.thumbnail.src+'" alt="'+item.thumbnail.title+'"></div><div class="para-section"><p class="standfirst">'+item.standfirst+'</p><h1 class="title">'+item.headline+'</h1></div></div></div>';
    })

    document.getElementById("myList").insertAdjacentHTML('afterend', htmlTag);
}
