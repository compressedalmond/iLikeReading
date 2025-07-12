
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


  { "title": "One Piece", "imageLink": "https://meo.comick.pictures/3MzEO.png", "type": "Manga | 1150", "desc": "", "author": "Eiichiro Oda", "dateOfRelease": "1997", "status": "Ongoing", "summary": "", "comments": "", "tags": "action adventure fantasy comedy" },
  { "title": "Dr. Stone", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "type": "Manga | 250", "desc": "", "author": "Riichirō Inagaki & Boichi", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "mystery action sci-fi adventure fantasy"},
  { "title": "Spy x Family", "imageLink": "https://meo.comick.pictures/pVDV1.jpg", "type": "Manga | 150", "desc": "", "author": "Tatsuya Endo", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy slice-of-life romance drama"},
  { "title": "One Punch Man", "imageLink": "https://meo.comick.pictures/lalkm.jpg", "type": "Manga | 200", "desc": "", "author": "ONE & Yūsuke Murata", "dateOfRelease": "2012", "status": "Ongoing", "summary": "", "comments": "", "tags":"action fantasy sci-fi" },
  { "title": "Jujutsu Kaisen", "imageLink": "https://meo.comick.pictures/KrgKwn.jpg", "type": "Manga | 200", "desc": "", "author": "Gege Akutami", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "", "tags": "action thriller drama" },
  { "title": "Berserk", "imageLink": "https://meo.comick.pictures/zgyM3.jpg", "type": "Manga | 400", "desc": "", "author": "Kentaro Miura (& Studio Gaga)", "dateOfRelease": "1989", "status": "Ongoing", "summary": "", "comments": "", "tags":"thriller horror mystery action fantasy historical drama" },
  { "title": "Tokyo Revengers", "imageLink": "https://meo.comick.pictures/pVVbv.jpg", "type": "Manga | 300", "desc": "", "author": "Ken Wakui", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags":"isekai action drama slice-of-life mystery" },
  { "title": "Attack on Titan", "imageLink": "https://meo.comick.pictures/8Dm1d.jpg", "type": "Manga | 350", "desc": "", "author": "Hajime Isayama", "dateOfRelease": "2009", "status": "Completed", "summary": "", "comments":"", "tags": "historical action adventure thriller fantasy" },
  { "title": "Rent a Girlfriend", "imageLink": "https://meo.comick.pictures/xXG3O.jpg", "type": "Manga | 400", "desc": "", "author": "Reiji Miyajima", "dateOfRelease": "2017", "status": "Ongoing", "summary": "", "comments": "", "tags":"romance slice-of-life drama" },
  { "title": "Blue Lock", "imageLink": "https://meo.comick.pictures/Z8nqbl.jpg", "type": "Manga | 350", "desc": "", "author": "Muneyuki Kaneshiro & Yusuke Nomura", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags":"sports action comedy drama" },
  { "title": "Naruto", "imageLink": "https://meo.comick.pictures/7rX2v.jpg", "type": "Manga | 700", "desc": "", "author": "Masashi Kishimoto", "dateOfRelease": "1999", "status": "Completed", "summary": "", "comments": "", "tags":"action adventure comedy drama fantasy" },
  { "title": "My Hero Academia", "imageLink": "https://meo.comick.pictures/ddz1G.jpg", "type": "Manga | 450", "desc": "", "author": "Kohei Horikoshi", "dateOfRelease": "2014", "status": "Completed", "summary": "", "comments":"", "tags": "action comedy drama sci-fi" },
  { "title": "Hunter x Hunter", "imageLink": "https://meo.comick.pictures/a0pPE.jpg", "type": "Manga | 400", "desc": "", "author": "Yoshihiro Togashi", "dateOfRelease": "1998", "status": "Ongoing", "summary": "", "comments":"", "tags": "action adventure drama comedy mystery fantasy" },
  { "title": "Hell's Paradise", "imageLink": "https://meo.comick.pictures/wrv9a.jpg", "type": "Manga | 150", "desc": "", "author": "Yuji Kaku", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments":"", "tags": "thriller action adventure fantasy mystery" },
  { "title": "The Promised Neverland", "imageLink": "https://meo.comick.pictures/W8zwp0.jpg", "type": "Manga | 200", "desc": "", "author": "Kaiu Shirai & Posuka Demizu", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments":"", "tags": "adventure fantasy sci-fi horror thriller mystery" },
  { "title": "Bleach", "imageLink": "https://meo.comick.pictures/O8bqW6.jpg", "type": "Manga | 700", "desc": "", "author": "Tite Kubo", "dateOfRelease": "2001", "status": "Completed", "summary": "", "comments":"", "tags": "action adventure drama comedy fantasy" },
  { "title": "Mashle: Magic and Muscles", "imageLink": "https://meo.comick.pictures/B8rBnJ.jpg", "type": "Manga | 50", "desc": "", "author": "Hajime Komoto", "dateOfRelease": "2020", "status": "Completed", "summary": "", "comments":"", "tags": "comedy action fantasy" },
  { "title": "Black Clover", "imageLink": "https://meo.comick.pictures/vakBe.jpg", "type": "Manga | 700", "desc": "", "author": "Yūki Tabata", "dateOfRelease": "2015", "status": "Completed", "summary": "", "comments":"", "tags": "action adventure comedy mystery fantasy" },
  { "title": "Chainsaw Man", "imageLink": "https://meo.comick.pictures/4ejkEY.jpg", "type": "Manga | 200", "desc": "", "author": "Tatsuki Fujimoto", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments":"", "tags": "thriller mystery action drama sci-fi" },
  { "title": "Demon Slayer", "imageLink": "https://meo.comick.pictures/MLbGQa.jpg", "type": "Manga | 200", "desc": "", "author": "Koyoharu Gotouge", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments":"", "tags": "thriller mystery action adventure comedy fantasy historical" },
  { "title": "Tokyo Ghoul", "imageLink": "https://meo.comick.pictures/aYZWz.jpg", "type": "Manga | 200", "desc": "", "author": "Sui Ishida", "dateOfRelease": "2011", "status": "Completed", "summary": "", "comments":"", "tags": "sci-fi thriller action fantasy mystery" },
  { "title": "Food Wars!", "imageLink": "https://meo.comick.pictures/JE47p.jpg", "type": "Manga | 500", "desc": "", "author": "Yūto Tsukuda & Shun Saeki", "dateOfRelease": "2012", "status": "Completed", "summary": "", "comments":"", "tags": "comedy slice-of-life drama" },
  { "title": "The Hero Is Overpowered but Overly Cautious", "imageLink": "https://meo.comick.pictures/wEvAD.jpg", "type": "Manga | 50", "desc": "", "author": "Light Tuchihi", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments":"", "tags": "fantasy adventure comedy drama isekai" },
  { "title": "Death Note", "imageLink": "https://meo.comick.pictures/AKkv7.jpg", "type": "Manga | 100", "desc": "", "author": "Tsugumi Ohba & Takeshi Obata", "dateOfRelease": "2003", "status": "Completed", "summary": "", "comments":"", "tags": "thriller mystery drama" },
  { "title": "Kaiju No.8", "imageLink": "https://meo.comick.pictures/NrqGdo.jpg", "type": "Manga | 150", "desc": "", "author": "Naoya Matsumoto", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments":"", "tags": "action drama thriller sci-fi" },
  { "title": "Undead Unluck", "imageLink": "https://meo.comick.pictures/vobwa.jpg", "type": "Manga | 200", "desc": "", "author": "Yoshifumi Tozuka", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments":"", "tags": "comedy action drama" },
  { "title": "Delicious in Dungeon", "imageLink": "https://meo.comick.pictures/Q76Da.jpg", "type": "Manga | 200", "desc": "", "author": "Ryoko Kui", "dateOfRelease": "2014", "status": "Ongoing", "summary": "", "comments":"", "tags": "comedy adventure fantasy" },
  { "title": "Kindergarten Wars", "imageLink": "https://meo.comick.pictures/1vOxkR.jpg", "type": "Manga | 50", "desc": "", "author": "You Chiba", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments":"", "tags": "comedy action slice-of-life drama" },
  { "title": "Tomodachi Game", "imageLink": "https://meo.comick.pictures/dGBbQR.png", "type": "Manga | 150", "desc": "", "author": "Mikoto Yamaguchi & Yuki Sato", "dateOfRelease": "2013", "status": "Ongoing", "summary": "", "comments":"", "tags": "thriller drama mystery" },
  { "title": "Assassination Classroom", "imageLink": "https://meo.comick.pictures/ky4zP.jpg", "type": "Manga | 250", "desc": "", "author": "Yūsei Matsui", "dateOfRelease": "2012", "status": "Completed", "summary": "", "comments":"", "tags": "action comedy sci-fi slice-of-life" },
  { "title": "The Apothecary Diaries", "imageLink": "https://meo.comick.pictures/r2ODo.png", "type": "Manga | 100", "desc": "", "author": "Natsu Hyūga & Nekokurage", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments":"", "tags": "historical adventure comedy romance drama mystery" },
  { "title": "Sakamoto Days", "imageLink": "https://meo.comick.pictures/MRr4E.jpg", "type": "Manga | 100", "desc": "", "author": "Yuto Suzuki", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments":"", "tags": "action comedy drama slice-of-life" },
  { "title": "Phantom Busters", "imageLink": "https://meo.comick.pictures/w7py8M.jpg", "type": "Manga | 50", "desc": "", "author": "Neo Shoco", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments":"", "tags": "comedy adventure slice-of-life mystery" },
  { "title": "Haikyu!!", "imageLink": "https://meo.comick.pictures/O8kRNO.jpg", "type": "Manga | 400", "desc": "", "author": "Haruichi Furudate", "dateOfRelease": "2011", "status": "Completed", "summary": "", "comments":"", "tags": "sports action comedy" },
  { "title": "Made in Abyss", "imageLink": "https://meo.comick.pictures/10BWD.jpg", "type": "Manga | 100", "desc": "", "author": "Akihito Tsukushi", "dateOfRelease": "2012", "status": "Ongoing", "summary": "", "comments":"", "tags": "drama fantasy mystery thriller adventure" },
  { "title": "Gachiakuta", "imageLink": "https://meo.comick.pictures/GXZxr7.jpg", "type": "Manga | 50", "desc": "", "author": "Kei Urana", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments":"", "tags": "action adventure sci-fi" },

  { "title": "Sweet Home", "imageLink": "https://meo.comick.pictures/Goko6.jpg", "type": "Manhwa | 150", "desc": "", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Omniscient Reader's Viewpoint", "imageLink": "https://meo.comick.pictures/p7j8l.jpg", "type": "Manhwa | 200", "desc": "", "author": "Sing Shong (adapted by Sleepy-C, art by Redice Studio)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "The Boxer", "imageLink": "https://meo.comick.pictures/0xvRq.png", "type": "Manhwa | 150", "desc": "", "author": "JH", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Operation: True Love", "imageLink": "https://meo.comick.pictures/L03pa.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kkokkalee (art by Dledumb)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Return of the Blossoming Blade", "imageLink": "https://meo.comick.pictures/mprkk.jpg", "type": "Manhwa | 200", "desc": "", "author": "Biga (adapted from the novel by Plum)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Weak Hero", "imageLink": "https://meo.comick.pictures/kov2z.jpg", "type": "Manhwa | 300", "desc": "", "author": "Seopass & Razen", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Solo Leveling", "imageLink": "https://meo.comick.pictures/v8kZna.jpg", "type": "Manhwa | 200", "desc": "", "author": "Chugong (adapted by Dubu/Redice Studio)", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Days of Hana", "imageLink": "https://meo.comick.pictures/rZj1p.jpg", "type": "Manhwa | 100", "desc": "", "author": "Seokwoo", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "The Ember Knight", "imageLink": "https://meo.comick.pictures/d5pdn.jpg", "type": "Manhwa | 100", "desc": "", "author": "Studio Inus & LICO", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "My Gently Raised Beast", "imageLink": "https://meo.comick.pictures/451bz.jpg", "type": "Manhwa | 100", "desc": "", "author": "Early Flower (art by Teava)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "#Killstagram", "imageLink": "https://meo.comick.pictures/DDqYZ.jpg", "type": "Manhwa | 50", "desc": "", "author": "Ryoung", "dateOfRelease": "2020", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Shotgun Boy", "imageLink": "https://meo.comick.pictures/arqYv.jpg", "type": "Manhwa | 50", "desc": "", "author": "Carnby Kim & Hongpil", "dateOfRelease": "2021", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "The Horizon", "imageLink": "https://meo.comick.pictures/d5odz.jpg", "type": "Manhwa | 30", "desc": "", "author": "JH", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Castle Swimmer", "imageLink": "https://meo.comick.pictures/1K6bD.jpg", "type": "Webtoon | 150", "desc": "", "author": "Wendy Lian Martin", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
 { "title": "Unordinary", "imageLink": "https://meo.comick.pictures/aOBbOK.jpg", "type": "Webtoon | 300", "desc": "", "author": "uru-chan", "dateOfRelease": "2016", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },

  { "title": "Cursed Princess Club", "imageLink": "https://m.media-amazon.com/images/I/81Bj9pG4T9L.jpg", "type": "Webtoon | 150", "desc": "", "author": "LambCat", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "My Deepest Secret", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Hanza Art", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "She's Hopeless", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Jangbi (art by Gyeol)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Homesick", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Ms. Freaky", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Nice to Meet You", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Wishroomness", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Morgana & Oz", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Meryl Patton", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Pyramid Game", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Dalgonyak", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "It's Mine", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "LuckS (Studio Lico)", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Bastard", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2014", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "School Bus Graveyard", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "JackieE", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Flawed Almighty", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Naver Webtoon Author (Exact name unknown)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Mosquito War", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Lee Hyunmin", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Brass & Sass", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Antlerella", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Remarried Empress", "imageLink": "", "type": "Manhwa | 150", "desc": "", "author": "Alphatart (art by Sumpul)", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "The Beginning After the End", "imageLink": "", "type": "Manhwa | 200", "desc": "", "author": "TurtleMe (art by Fuyuki23)", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },

  { "title": "Lookism", "imageLink": "", "type": "Manhwa | 450", "desc": "", "author": "Taejun Park", "dateOfRelease": "2014", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "One Day, Seoul is Infected", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Soo Ho", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Revelations of Youth", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Yuns (Art by Kim Soo-young)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Pure Villain", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Do Ara", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Tomb Raider King", "imageLink": "", "type": "Manhwa | 400", "desc": "", "author": "Yoonz (Redice Studio)", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "The Greatest Estate Developer", "imageLink": "", "type": "Manhwa | 150", "desc": "", "author": "Lee Hyunmin & Kim Soji", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Teenage Mercenary", "imageLink": "", "type": "Manhwa | 150", "desc": "", "author": "YC & Rak Hyun", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Ki Sisters", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Hwarang", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "SSS Class Revival Hunter", "imageLink": "", "type": "Manhwa | 150", "desc": "", "author": "Shin Noah (art by Bill K)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Special Civil Servant", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Na Yoonseok", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Return of the Baskerville Hound", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Zec", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Quick Healer", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Dubi & Lico", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Surviving the Game as a Berserker", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Jin Seolwoo (art by Hong Daeui)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Eleceed", "imageLink": "", "type": "Manhwa | 250", "desc": "", "author": "Son Jeho & ZHENA", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Our Alliance", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Miryang & Toyou's Dream", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },

  { "title": "Dead Mansion", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Kim Yongki", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Leviathan", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Lee Gyeonghoon & Kim Joonshik", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Nano Machine", "imageLink": "", "type": "Manhwa | 200", "desc": "", "author": "Han Joongwueol & Geumgangbulgoe (art by Jeong Hanjung)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Lost in the Cloud", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Beck (art by 39)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Surviving the Apocalypse", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Yoonsoo", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "How to Use a Returner", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Jeon Sunwoo (art by 935)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "The Hunter's Gonna Lay Low", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Gugyeong (art by Guksu)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Survive Romance", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Lee Yone", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "The Genius", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Dr. Solo", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Pick Me Up", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Gingming", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Blink: Master of the Magic Academy", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Serim (art by Ccong)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "On the Way to Meet Mom", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Yun Kyoung", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Infinite Mage", "imageLink": "", "type": "Manhwa | 100", "desc": "", "author": "Kwon Ohjin (art by Kim Chungil)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Myst, Magic, Mayhem", "imageLink": "", "type": "Manhwa | 50", "desc": "", "author": "Whale", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Legend of the Northern Blade", "imageLink": "", "type": "Manhwa | 200", "desc": "", "author": "Hae-Min (art by Woo-Gak)", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },


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
