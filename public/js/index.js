console.log("Project 3");
console.log("News Dekho...")
//intilize new api variables
let country = 'in';
let apiKey = 'f4235f152ea74884bf36641cbba76ff4';

//grab the div which id is newsAcordian
let Accordion = document.getElementById('newsAcordian');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
      articles.forEach(function(element,index) {
        
        news = `
  
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                  ${element["title"]}
                </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">${element["content"]}.<a href="${element['url']}" target="_blank" > Read more</a></div>
            </div>
        </div>
            `;

        newsHtml+=news;
       });
        Accordion.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured")
    }

    let search = document.getElementById('searchTxt');
    search.addEventListener('input',function(){

    let inputVal = search.value.toLowerCase();
    let accordions = document.getElementsByClassName("accordion-item");
    Array.from(accordions).forEach(function(element){

    let accordianTxt = element.getElementsByTagName('div')[1].innerHTML;
    // console.log(accordianTxt)
    if(accordianTxt.includes(inputVal)){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
    })
})


}

xhr.send()



