
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


  { "title": "One Piece", "imageLink": "https://meo.comick.pictures/3MzEO.png", "type": "Manga | 1150", "desc": "", "author": "Eiichiro Oda", "dateOfRelease": "1997", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Dr. Stone", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "type": "Manga | 250", "desc": "", "author": "Riichirō Inagaki & Boichi", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Spy x Family", "imageLink": "https://meo.comick.pictures/pVDV1.jpg", "type": "Manga | 150", "desc": "", "author": "Tatsuya Endo", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "One Punch Man", "imageLink": "https://meo.comick.pictures/lalkm.jpg", "type": "Manga | 200", "desc": "", "author": "ONE & Yūsuke Murata", "dateOfRelease": "2012", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Jujutsu Kaisen", "imageLink": "https://meo.comick.pictures/KrgKwn.jpg", "type": "Manga | 200", "desc": "", "author": "Gege Akutami", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Berserk", "imageLink": "https://meo.comick.pictures/zgyM3.jpg", "type": "Manga | 400", "desc": "", "author": "Kentaro Miura (& Studio Gaga)", "dateOfRelease": "1989", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Tokyo Revengers", "imageLink": "https://meo.comick.pictures/pVVbv.jpg", "type": "Manga | 300", "desc": "", "author": "Ken Wakui", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Attack on Titan", "imageLink": "https://meo.comick.pictures/8Dm1d.jpg", "type": "Manga | 350", "desc": "", "author": "Hajime Isayama", "dateOfRelease": "2009", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Rent a Girlfriend", "imageLink": "https://meo.comick.pictures/xXG3O.jpg", "type": "Manga | 400", "desc": "", "author": "Reiji Miyajima", "dateOfRelease": "2017", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Blue Lock", "imageLink": "https://meo.comick.pictures/Z8nqbl.jpg", "type": "Manga | 350", "desc": "", "author": "Muneyuki Kaneshiro & Yusuke Nomura", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Naruto", "imageLink": "https://meo.comick.pictures/7rX2v.jpg", "type": "Manga | 700", "desc": "", "author": "Masashi Kishimoto", "dateOfRelease": "1999", "status": "Completed", "summary": "", "comments": "" },
  { "title": "My Hero Academia", "imageLink": "https://meo.comick.pictures/ddz1G.jpg", "type": "Manga | 450", "desc": "", "author": "Kohei Horikoshi", "dateOfRelease": "2014", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Hunter x Hunter", "imageLink": "https://meo.comick.pictures/a0pPE.jpg", "type": "Manga | 400", "desc": "", "author": "Yoshihiro Togashi", "dateOfRelease": "1998", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Hell's Paradise", "imageLink": "https://meo.comick.pictures/wrv9a.jpg", "type": "Manga | 150", "desc": "", "author": "Yuji Kaku", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "" },
  { "title": "The Promised Neverland", "imageLink": "https://meo.comick.pictures/W8zwp0.jpg", "type": "Manga | 200", "desc": "", "author": "Kaiu Shirai & Posuka Demizu", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Bleach", "imageLink": "https://meo.comick.pictures/O8bqW6.jpg", "type": "Manga | 700", "desc": "", "author": "Tite Kubo", "dateOfRelease": "2001", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Mashle: Magic and Muscles", "imageLink": "https://meo.comick.pictures/B8rBnJ.jpg", "type": "Manga | 50", "desc": "", "author": "Hajime Komoto", "dateOfRelease": "2020", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Black Clover", "imageLink": "https://meo.comick.pictures/vakBe.jpg", "type": "Manga | 700", "desc": "", "author": "Yūki Tabata", "dateOfRelease": "2015", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Chainsaw Man", "imageLink": "https://meo.comick.pictures/4ejkEY.jpg", "type": "Manga | 200", "desc": "", "author": "Tatsuki Fujimoto", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Demon Slayer", "imageLink": "https://meo.comick.pictures/MLbGQa.jpg", "type": "Manga | 200", "desc": "", "author": "Koyoharu Gotouge", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Tokyo Ghoul", "imageLink": "https://meo.comick.pictures/aYZWz.jpg", "type": "Manga | 200", "desc": "", "author": "Sui Ishida", "dateOfRelease": "2011", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Food Wars!", "imageLink": "https://meo.comick.pictures/JE47p.jpg", "type": "Manga | 500", "desc": "", "author": "Yūto Tsukuda & Shun Saeki", "dateOfRelease": "2012", "status": "Completed", "summary": "", "comments": "" },
  { "title": "The Hero Is Overpowered but Overly Cautious", "imageLink": "https://meo.comick.pictures/wEvAD.jpg", "type": "Manga | 50", "desc": "", "author": "Light Tuchihi", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Death Note", "imageLink": "https://meo.comick.pictures/AKkv7.jpg", "type": "Manga | 100", "desc": "", "author": "Tsugumi Ohba & Takeshi Obata", "dateOfRelease": "2003", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Kaiju No.8", "imageLink": "https://meo.comick.pictures/NrqGdo.jpg", "type": "Manga | 150", "desc": "", "author": "Naoya Matsumoto", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Undead Unluck", "imageLink": "https://meo.comick.pictures/vobwa.jpg", "type": "Manga | 200", "desc": "", "author": "Yoshifumi Tozuka", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Delicious in Dungeon", "imageLink": "https://meo.comick.pictures/Q76Da.jpg", "type": "Manga | 200", "desc": "", "author": "Ryoko Kui", "dateOfRelease": "2014", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Kindergarten Wars", "imageLink": "https://meo.comick.pictures/1vOxkR.jpg", "type": "Manga | 50", "desc": "", "author": "You Chiba", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Tomodachi Game", "imageLink": "https://meo.comick.pictures/dGBbQR.png", "type": "Manga | 150", "desc": "", "author": "Mikoto Yamaguchi & Yuki Sato", "dateOfRelease": "2013", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Assassination Classroom", "imageLink": "https://meo.comick.pictures/ky4zP.jpg", "type": "Manga | 250", "desc": "", "author": "Yūsei Matsui", "dateOfRelease": "2012", "status": "Completed", "summary": "", "comments": "" },
  { "title": "The Apothecary Diaries", "imageLink": "https://meo.comick.pictures/r2ODo.png", "type": "Manga | 100", "desc": "", "author": "Natsu Hyūga & Nekokurage", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Sakamoto Days", "imageLink": "https://meo.comick.pictures/MRr4E.jpg", "type": "Manga | 100", "desc": "", "author": "Yuto Suzuki", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Phantom Busters", "imageLink": "https://meo.comick.pictures/w7py8M.jpg", "type": "Manga | 50", "desc": "", "author": "Neo Shoco", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Haikyu!!", "imageLink": "https://meo.comick.pictures/O8kRNO.jpg", "type": "Manga | 400", "desc": "", "author": "Haruichi Furudate", "dateOfRelease": "2011", "status": "Completed", "summary": "", "comments": "" },
  { "title": "Made in Abyss", "imageLink": "https://meo.comick.pictures/10BWD.jpg", "type": "Manga | 100", "desc": "", "author": "Akihito Tsukushi", "dateOfRelease": "2012", "status": "Ongoing", "summary": "", "comments": "" },
  { "title": "Gachiakuta", "imageLink": "https://meo.comick.pictures/GXZxr7.jpg", "type": "Manga | 50", "desc": "", "author": "Kei Urana", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "" }





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


if (window.location.href.includes("single-recipe")){
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
 
  books.forEach(book => {
    if(book["title"] === title){
      document.getElementById("title").innerText = book["title"];
      document.getElementById("imageRec").src = book["imageLink"];
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
