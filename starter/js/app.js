
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
  {"title": "One Piece", "dateOfRelease": "1999", "imageLink": "https://meo.comick.pictures/3MzEO.png", "desc": "This is one piece"},
  {"title": "Dr. Stone", "dateOfRelease": "1999", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "desc": "This is dr stone"},
  {"title": "Jojo's Bizzare Adventure", "dateOfRelease": "1983","imageLink":"https://meo.comick.pictures/0ZoyRk.jpg"}
]

if (window.location.href.includes("index")){
  books.forEach(book => {
    const homeBooks = document.getElementById("homeBooks");

    const title = document.createElement("a");
    title.innerText = book["title"];

    homeBooks.appendChild(title);
  });
}

if (window.location.href.includes("single-recipe")){
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
 
  books.forEach(book => {
    if(book["title"] === title){
      document.getElementById("title").innerText = book["title"];
      document.getElementById("imageRec").src = book["imageLink"];
      document.getElementById("desc").innerText = book["desc"];


      return;
    }
  });
} 