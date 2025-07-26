
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
  { "title": "Dandadan", "imageLink": "https://meo.comick.pictures/w7X6q7.jpg", "type": "Manga | 200", "desc": "", "author": "Yukinobu Tatsu", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "mystery sci-fi romance comedy fantasy thriller" },


  { "title": "Sweet Home", "imageLink": "https://meo.comick.pictures/Goko6.jpg", "type": "Manhwa | 150", "desc": "", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "sci-fi action drama thriller horror mystery" },
  { "title": "Omniscient Reader's Viewpoint", "imageLink": "https://meo.comick.pictures/p7j8l.jpg", "type": "Manhwa | 200", "desc": "", "author": "Sing Shong (adapted by Sleepy-C, art by Redice Studio)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "adventure action fantasy drama isekai" },
  { "title": "The Boxer", "imageLink": "https://meo.comick.pictures/0xvRq.png", "type": "Manhwa | 150", "desc": "", "author": "JH", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "sports action" },
  { "title": "Operation: True Love", "imageLink": "https://meo.comick.pictures/L03pa.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kkokkalee (art by Dledumb)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance drama slice-of-life" },
  { "title": "Return of the Blossoming Blade", "imageLink": "https://meo.comick.pictures/mprkk.jpg", "type": "Manhwa | 200", "desc": "", "author": "Biga (adapted from the novel by Plum)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "historical fantasy comedy action isekai" },
  { "title": "Weak Hero", "imageLink": "https://meo.comick.pictures/kov2z.jpg", "type": "Manhwa | 300", "desc": "", "author": "Seopass & Razen", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "action drama slice-of-life" },
  { "title": "Solo Leveling", "imageLink": "https://meo.comick.pictures/v8kZna.jpg", "type": "Manhwa | 200", "desc": "", "author": "Chugong (adapted by Dubu/Redice Studio)", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "", "tags": "action adventure isekai fantasy mystery" },
  { "title": "Days of Hana", "imageLink": "https://meo.comick.pictures/rZj1p.jpg", "type": "Manhwa | 100", "desc": "", "author": "Seokwoo", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "romance drama action mystery" },
  { "title": "The Ember Knight", "imageLink": "https://meo.comick.pictures/d5pdn.jpg", "type": "Manhwa | 100", "desc": "", "author": "Studio Inus & LICO", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy action drama mystery" },
  { "title": "My Gently Raised Beast", "imageLink": "https://meo.comick.pictures/451bz.jpg", "type": "Manhwa | 100", "desc": "", "author": "Early Flower (art by Teava)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance drama fantasy" },
  { "title": "#Killstagram", "imageLink": "https://meo.comick.pictures/DDqYZ.jpg", "type": "Manhwa | 50", "desc": "", "author": "Ryoung", "dateOfRelease": "2020", "status": "Completed", "summary": "", "comments": "", "tags": "horror thriller action mystery" },
  { "title": "Shotgun Boy", "imageLink": "https://meo.comick.pictures/arqYv.jpg", "type": "Manhwa | 50", "desc": "", "author": "Carnby Kim & Hongpil", "dateOfRelease": "2021", "status": "Completed", "summary": "", "comments": "", "tags": "sci-fi horror mystery thriller drama action" },
  { "title": "The Horizon", "imageLink": "https://meo.comick.pictures/d5odz.jpg", "type": "Manhwa | 30", "desc": "", "author": "JH", "dateOfRelease": "2016", "status": "Completed", "summary": "", "comments": "", "tags": "thriller mystery" },
  { "title": "Unreachable Girl", "imageLink": "https://meo.comick.pictures/x6p.png", "type": "Manhwa | 50", "desc": "", "author": "Jangbi (art by Gyeol)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance comedy drama slice-of-life" }, 
  { "title": "Nice to Meet You", "imageLink": "https://k07.mbwww.org/thumb/W600/ampi/6b5/6b5fab4bf0f036e86d1a1f4561283c00612af2c7_600_960_58945.jpeg", "type": "Manhwa | 100", "desc": "", "author": "Wishroomness", "dateOfRelease": "2018", "status": "Completed", "summary": "", "comments": "", "tags": "romance drama slice-of-life" },
  { "title": "Pyramid Game", "imageLink": "https://meo.comick.pictures/DGnEY.png", "type": "Manhwa | 50", "desc": "", "author": "Dalgonyak", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "thriller drama mystery" },
  { "title": "It's Mine", "imageLink": "https://meo.comick.pictures/bqNe4.jpg", "type": "Manhwa | 100", "desc": "", "author": "LuckS (Studio Lico)", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "romance mystery thriller drama" },
  { "title": "Bastard", "imageLink": "https://meo.comick.pictures/p1Do0.jpg", "type": "Manhwa | 100", "desc": "", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2014", "status": "Completed", "summary": "", "comments": "", "tags": "horror thriller mystery romance" },
  { "title": "Flawed Almighty", "imageLink": "https://meo.comick.pictures/2rDdL.png", "type": "Manhwa | 50", "desc": "", "author": "Naver Webtoon Author (Exact name unknown)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "action mystery drama" },
  { "title": "Mosquito War", "imageLink": "https://meo.comick.pictures/876oD.jpg", "type": "Manhwa | 50", "desc": "", "author": "Lee Hyunmin", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "thriller sci-fi fantasy action" },
  { "title": "Remarried Empress", "imageLink": "https://meo.comick.pictures/jgnvQ.jpg", "type": "Manhwa | 150", "desc": "", "author": "Alphatart (art by Sumpul)", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance historical fantasy drama" },
  { "title": "Lookism", "imageLink": "https://meo.comick.pictures/g6X10W.jpg", "type": "Manhwa | 450", "desc": "", "author": "Taejun Park", "dateOfRelease": "2014", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance comedy action slice-of-life" },
  { "title": "One Day, Suddenly, Seoul Is", "imageLink": "https://meo.comick.pictures/67Q1B.jpg", "type": "Manhwa | 50", "desc": "", "author": "Soo Ho", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "horror thriller action drama sci-fi" },
  { "title": "Revelations of Youth", "imageLink": "https://meo.comick.pictures/vRyXNJ.jpg", "type": "Manhwa | 50", "desc": "", "author": "Yuns (Art by Kim Soo-young)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance drama slice-of-life" },
  { "title": "Villain With A Crush", "imageLink": "https://meo.comick.pictures/bJEBy.jpg", "type": "Manhwa | 100", "desc": "", "author": "Do Ara", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy romance drama comedy" },
  { "title": "Tomb Raider King", "imageLink": "https://meo.comick.pictures/8QlXe.jpg", "type": "Manhwa | 400", "desc": "", "author": "Yoonz (Redice Studio)", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "action adventure fantasy" },
  { "title": "The Greatest Estate Developer", "imageLink": "https://meo.comick.pictures/mnWxYo.jpg", "type": "Manhwa | 150", "desc": "", "author": "Lee Hyunmin & Kim Soji", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy action adventure fantasy isekai historical" },
  { "title": "Mercenary Enrollment", "imageLink": "https://meo.comick.pictures/rKold.jpg", "type": "Manhwa | 150", "desc": "", "author": "YC & Rak Hyun", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "action drama" },
  { "title": "The Ki Sisters", "imageLink": "https://meo.comick.pictures/Nrq8pm.jpg", "type": "Manhwa | 50", "desc": "", "author": "Hwarang", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy drama slice-of-life" },
  { "title": "SSS Class Revival Hunter", "imageLink": "https://meo.comick.pictures/YO4qX.jpg", "type": "Manhwa | 150", "desc": "", "author": "Shin Noah (art by Bill K)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "isekai action fantasy" },
  { "title": "Special Civil Servant", "imageLink": "https://meo.comick.pictures/oam1Z4.jpg", "type": "Manhwa | 100", "desc": "", "author": "Na Yoonseok", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy historical action drama thriller" },
  { "title": "Revenge of the Baskerville Bloodhound", "imageLink": "https://meo.comick.pictures/N6n5Xz.jpg", "type": "Manhwa | 50", "desc": "", "author": "Zec", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "isekai drama action fantasy adventure" },
  { "title": "Life of a Quack Healer", "imageLink": "https://meo.comick.pictures/gO4E8-s.jpg", "type": "Manhwa | 50", "desc": "", "author": "Dubi & Lico", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "drama fantasy" },
  { "title": "Untouchable", "imageLink": "https://meo.comick.pictures/kRXjbJ.jpg", "type": "Manhwa | 150", "desc": "", "author": "massstar", "dateOfRelease": "2014", "status": "Completed", "summary": "", "comments": "", "tags": "romance slice-of-life drama" },
  { "title": "Maybe Meant To Be", "imageLink": "https://meo.comick.pictures/2NRb7Z.png", "type": "Manhwa | 50", "desc": "", "author": "Taejun Park", "dateOfRelease": "2022", "status": "Completed", "summary": "", "comments": "", "tags": "romance slice-of-life comedy" },
  { "title": "Villain To Kill", "imageLink": "https://meo.comick.pictures/v8pMmy.jpg", "type": "Manhwa | 100", "desc": "", "author": "D.P & Min Wook So", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy isekai action" },
  { "title": "Genius Archer's Livestreaming", "imageLink": "https://meo.comick.pictures/5pq0ep.png", "type": "Manhwa | 50", "desc": "", "author": "Ha Johan", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy sports adventure" },
  { "title": "Inso's Law", "imageLink": "https://meo.comick.pictures/ERoWe.jpg", "type": "Manhwa | 150", "desc": "", "author": "Yoo Seo Jung", "dateOfRelease": "2020", "status": "Completed", "summary": "", "comments": "", "tags": "romance drama slice-of-life" },
  { "title": "He Can't Be This Dumb", "imageLink": "https://meo.comick.pictures/KYQN4.jpg", "type": "Manhwa | 50", "desc": "", "author": "Yuto", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy romance drama" },
  { "title": "Famous Restaurant", "imageLink": "https://meo.comick.pictures/ez28bX.jpg", "type": "Manhwa | 50", "desc": "", "author": "Yoo Rin", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "thriller drama mystery" },
  { "title": "Dreaming Freedom", "imageLink": "https://meo.comick.pictures/gqyJR.jpg", "type": "Manhwa | 50", "desc": "", "author": "Pilgyoung", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance drama thriller" },
  { "title": "Surviving the Game as a Berserker", "imageLink": "https://meo.comick.pictures/Zq2Yv.jpg", "type": "Manhwa | 100", "desc": "", "author": "Jin Seolwoo (art by Hong Daeui)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "isekai action fantasy mystery adventure" },
  { "title": "Eleceed", "imageLink": "https://meo.comick.pictures/zlzOj.jpg", "type": "Manhwa | 250", "desc": "", "author": "Son Jeho & ZHENA", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy action sci-fi slice-of-life" },
  { "title": "Our Secret Alliance", "imageLink": "https://meo.comick.pictures/pw1v3.jpg", "type": "Manhwa | 50", "desc": "", "author": "Miryang & Toyou's Dream", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance slice-of-life drama" },
  { "title": "Dead Mansion", "imageLink": "https://meo.comick.pictures/rxakd2.png", "type": "Manhwa | 100", "desc": "", "author": "Kim Yongki", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "action mystery thriller" },
  { "title": "Leviathan", "imageLink": "https://meo.comick.pictures/mndwRX.jpg", "type": "Manhwa | 100", "desc": "", "author": "Lee Gyeonghoon & Kim Joonshik", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "thriller horror action adventure drama mystery sci-fi" },
  { "title": "Nano Machine", "imageLink": "https://meo.comick.pictures/wNEdM.jpg", "type": "Manhwa | 200", "desc": "", "author": "Han Joongwueol & Geumgangbulgoe (art by Jeong Hanjung)", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "action sci-fi historical" },
  { "title": "Lost in the Cloud", "imageLink": "https://prodimage.images-bn.com/pimages/9798893739459_p0_v7_s1200x630.jpg", "type": "Manhwa | 100", "desc": "", "author": "Beck (art by 39)", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance slice-of-life drama thriller" },
  { "title": "Surviving the Apocalypse", "imageLink": "https://meo.comick.pictures/7yONmN.png", "type": "Manhwa | 50", "desc": "", "author": "Yoonsoo", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "thriller horror action sci-fi mystery" },
  { "title": "How to Use a Returner", "imageLink": "https://meo.comick.pictures/rnmk2.png", "type": "Manhwa | 50", "desc": "", "author": "Jeon Sunwoo (art by 935)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "action fantasy isekai drama adventure" },
  { "title": "The Hunter's Gonna Lay Low", "imageLink": "https://meo.comick.pictures/qYrLy8.jpg", "type": "Manhwa | 50", "desc": "", "author": "Gugyeong (art by Guksu)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "comedy action drama fantasy" },
  { "title": "Survive Romance", "imageLink": "https://meo.comick.pictures/17eDB.png", "type": "Manhwa | 100", "desc": "", "author": "Lee Yone", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "romance drama action mystery thriller horror sci-fi" },
  { "title": "The Genius Who Sees Through The World", "imageLink": "https://meo.comick.pictures/oam5nk.jpg", "type": "Manhwa | 50", "desc": "", "author": "Dr. Solo", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "drama mystery" },
  { "title": "Pick Me Up", "imageLink": "https://meo.comick.pictures/7yKyBe.png", "type": "Manhwa | 50", "desc": "", "author": "Gingming", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "isekai action adventure fantasy thriller" },
  { "title": "Blink Master of the Magic Academy", "imageLink": "https://meo.comick.pictures/8yK0b5.jpg", "type": "Manhwa | 50", "desc": "", "author": "Serim (art by Ccong)", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "isekai action adventure fantasy" },
  { "title": "On the Way to Meet Mom", "imageLink": "https://meo.comick.pictures/pR6rRx.jpg", "type": "Manhwa | 50", "desc": "", "author": "Yun Kyoung", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy comedy drama mystery slice-of-life" },
  { "title": "Infinite Mage", "imageLink": "https://meo.comick.pictures/e1887.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kwon Ohjin (art by Kim Chungil)", "dateOfRelease": "2022", "status": "Ongoing", "summary": "", "comments": "", "tags": "fantasy action drama" },
  { "title": "Myst, Might, Mayhem", "imageLink": "https://meo.comick.pictures/Nrqr3o.jpg", "type": "Manhwa | 50", "desc": "", "author": "Whale", "dateOfRelease": "2023", "status": "Ongoing", "summary": "", "comments": "", "tags": "drama action historical fantasy mystery" },
  { "title": "Legend of the Northern Blade", "imageLink": "https://meo.comick.pictures/GkoXk.jpg", "type": "Manhwa | 200", "desc": "", "author": "Hae-Min (art by Woo-Gak)", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "adventure action historical mystery" },

  { "title": "The Beginning After the End", "imageLink": "https://meo.comick.pictures/DLyNQ.jpg", "type": "Webtoon | 200", "desc": "", "author": "TurtleMe (art by Fuyuki23)", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Castle Swimmer", "imageLink": "https://meo.comick.pictures/1K6bD.jpg", "type": "Webtoon | 150", "desc": "", "author": "Wendy Lian Martin", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Unordinary", "imageLink": "https://meo.comick.pictures/aOBbOK.jpg", "type": "Webtoon | 300", "desc": "", "author": "uru-chan", "dateOfRelease": "2016", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Cursed Princess Club", "imageLink": "https://m.media-amazon.com/images/I/81Bj9pG4T9L.jpg", "type": "Webtoon | 150", "desc": "", "author": "LambCat", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "My Deepest Secret", "imageLink": "https://m.media-amazon.com/images/M/MV5BMTU4YTgyYjgtM2YzYS00YjYwLWFhMmQtYzExYTE0YTIxNTlhXkEyXkFqcGc@._V1_.jpg", "type": "Webtoon | 100", "desc": "", "author": "Hanza Art", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Homesick", "imageLink": "https://swebtoon-phinf.pstatic.net/20210608_280/1623106223810Jjdjd_JPEG/1Homesick_mobile_landingpage.jpg?type=crop540_540", "type": "Webtoon | 50", "desc": "", "author": "Ms. Freaky", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "Brass & Sass", "imageLink": "https://static.usagi.one/uploads/pics/01/29/755.jpg", "type": "Webtoon | 50", "desc": "", "author": "Antlerella", "dateOfRelease": "2019", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "School Bus Graveyard", "imageLink": "https://meo.comick.pictures/X8X76M.png", "type": "Webtoon | 100", "desc": "", "author": "JackieE", "dateOfRelease": "2018", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Morgana & Oz", "imageLink": "https://meo.comick.pictures/P0dSACHe0ZkHX.webp", "type": "Webtoon | 50", "desc": "", "author": "Meryl Patton", "dateOfRelease": "2020", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "I'm The Grim Reaper", "imageLink": "https://prodimage.images-bn.com/pimages/9781974739080_p0_v2_s1200x630.jpg", "type": "Webtoon | 100", "desc": "", "author": "Jeo Seongmin", "dateOfRelease": "2021", "status": "Ongoing", "summary": "", "comments": "", "tags": "" },
  { "title": "Purple Hyacinth", "imageLink": "https://meo.comick.pictures/87djn.jpg", "type": "Webtoon | 200", "desc": "", "author": "Ephemerys", "dateOfRelease": "2019", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "I Love Yoo", "imageLink": "https://i.redd.it/g2ecyjfker961.jpg", "type": "Webtoon | 250", "desc": "", "author": "Quimchee", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  { "title": "I Love Yoo", "imageLink": "https://i.redd.it/g2ecyjfker961.jpg", "type": "Webtoon | 250", "desc": "", "author": "Quimchee", "dateOfRelease": "2017", "status": "Completed", "summary": "", "comments": "", "tags": "" },
  
  

  
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


function calcGenreAmount(){
  const usedGenres = {};

  books.forEach(book => {
    if (book.tags != undefined){
      const genres = book.tags.split(" ");
      genres.forEach(genre => {
        if (!usedGenres[genre]) {
          usedGenres[genre] = 1;
        } else {
          usedGenres[genre] += 1;
        }
      });
    }
  });

  return usedGenres;
}

if (window.location.href.includes("tags")){
  const recList = document.getElementById("recList");

  const usedGenres = calcGenreAmount()
  Object.keys(usedGenres).forEach(genre => {
    const aTag = document.createElement("a");
    aTag.className = "tag"
    aTag.href = `tag-template.html?genre=${genre}`
    const h5 = document.createElement("h5");
    const pTag = document.createElement("p");

    h5.innerText = genre;
    usedGenres[genre] === 1 ? pTag.innerText = usedGenres[genre] + " rec" : pTag.innerText = usedGenres[genre] + " recs"


    aTag.appendChild(h5);
    aTag.appendChild(pTag);

    recList.appendChild(aTag);
  });

}

if (window.location.href.includes("recommendations") || window.location.href.includes("index")){
  const recSide = document.getElementById("recSideBar");
  const usedGenres = calcGenreAmount();

  Object.keys(usedGenres).forEach(genre => {
    const aTag = document.createElement("a");
    aTag.innerText = genre + "(" + usedGenres[genre] + ")";
    aTag.href = `tag-template.html?genre=${genre}`;


    recSide.appendChild(aTag)
  });
}

if (window.location.href.includes("tag-template")){
  const params = new URLSearchParams(window.location.search);
  const genre = params.get("genre");
  const tagHomePage = document.getElementById("tagHomePage")

  const genreType=document.getElementById("genreType");
  genreType.innerText = genre;

  books.forEach(book => {
    if (book.tags === undefined){
      return;
    }
    if (book.tags.includes(genre)){
      const aTag = document.createElement("a");
      aTag.className = "tag"
      aTag.href = `single-recipe.html?title=${book.title}`
      aTag.className = "recipe";
      const img = document.createElement("img");
      img.src = book.imageLink;
      img.alt="read" 
      img.className ="img recipe-img"
      const h5 = document.createElement("h5");
      const pTag = document.createElement("p");

      h5.innerText = book.title;
      pTag.innerText = book.type;

      aTag.appendChild(img);
      aTag.appendChild(h5);
      aTag.appendChild(pTag);
      tagHomePage.appendChild(aTag);
    }
  });
}



