
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date=getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent= currentYear


const books = [
<<<<<<< HEAD
  {"title": "One Piece", "imageLink": "https://meo.comick.pictures/3MzEO.png", "type":"Manga|",
  "desc": "This is one piece", "author": "Eiichiro Oda", "dateOfRelease": "1999", "status":"Ongoing",
"summary": "BLAHHHH", "comments":"meow meow"},
  {"title": "Dr. Stone", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "type":"hehe",
  "desc": "This is dr stone", "author": "Boiichi", "dateOfRelease": "202?", "status":"Complete",
"summary": "BLeAHHHH", "comments":"meow meow"},






]



if (window.location.href.includes("index")){
  const homeBooks = document.getElementById("homeBooks");
  books.forEach(book => {
    const atag = document.createElement("a");  
    atag.href=`single-recipe.html?title=${book["title"]}`
    const imagetag = document.createElement("img");  
    const h5tag = document.createElement("h5"); 
    const ptag = document.createElement("p");   
    h5tag.innerText = book["title"];
    ptag.innerText=book["type"]
    imagetag.src=book["imageLink"]
    imagetag.alt="book"
    imagetag.className="img recipe-img"
    atag.className="recipe"
atag.appendChild(imagetag)
atag.appendChild(h5tag)
atag.appendChild(ptag)
    homeBooks.appendChild(atag);
  });
}


if (window.location.href.includes("recommendations")){
  const homeBooks = document.getElementById("list");
  books.forEach(book => {
    const atag = document.createElement("a");  
    atag.href=`single-recipe.html?title=${book["title"]}`
    const imagetag = document.createElement("img");  
    const h5tag = document.createElement("h5"); 
    const ptag = document.createElement("p");   
    h5tag.innerText = book["title"];
    ptag.innerText=book["type"]
    imagetag.src=book["imageLink"]
    imagetag.alt="book"
    imagetag.className="img recipe-img"
    atag.className="recipe"
atag.appendChild(imagetag)
atag.appendChild(h5tag)
atag.appendChild(ptag)
    homeBooks.appendChild(atag);
  });
}


=======
  {"title": "One Piece", "dateOfRelease": "1999", "imageLink": "https://meo.comick.pictures/3MzEO.png", "desc": "This is one piece"},
  {"title": "Dr. Stone", "dateOfRelease": "1999", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "desc": "This is dr stone"},
  {"title": "Jojo's Bizzare Adventure", "dateOfRelease": "1983"}
]

if (window.location.href.includes("index")){
  books.forEach(book => {
    const homeBooks = document.getElementById("homeBooks");

    const title = document.createElement("a");
    title.innerText = book["title"];

    homeBooks.appendChild(title);
  });
}

>>>>>>> 938eb62f956b18bce27d9fb0e2dbc7776f7d41bb
if (window.location.href.includes("single-recipe")){
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
 
  books.forEach(book => {
    if(book["title"] === title){
      document.getElementById("title").innerText = book["title"];
      document.getElementById("imageRec").src = book["imageLink"];
<<<<<<< HEAD
     
      document.getElementById("desc").innerText = book["desc"];
      document.getElementById("author").innerText = book["author"];
      document.getElementById("dateOfRelease").innerText = book["dateOfRelease"];
      document.getElementById("status").innerText = book["status"];
      document.getElementById("summary").innerText = book["summary"];
      document.getElementById("comments").innerText = book["comments"];
      return;
    }
  });
} 
=======
      document.getElementById("desc").innerText = book["desc"];


      return;
    }
  });
} 
>>>>>>> 938eb62f956b18bce27d9fb0e2dbc7776f7d41bb
