const books = [
  { "title": "One Piece", "imageLink": "https://meo.comick.pictures/3MzEO.png", "type": "Manga | 1150", "desc": "9.5/10", "author": "Eiichiro Oda", "dateOfRelease": "1997", "status": "Ongoing",
     "summary": "As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer 'Red-Haired' Shanks. But Luffy's life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary 'One Piece,' said to be the greatest treasure in the world...", 
     "comments": "MY FAVORITE MANGA OAT! Ik its over 1000 chaps but I legitamately wish it was longer. Carried me through covid", "tags": "action adventure fantasy comedy superpowers" },
  { "title": "Dr. Stone", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "type": "Manga | 250", "desc": "9.5/10", "author": "Riichirō Inagaki & Boichi", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he’s not alone! His science-loving friend Senku’s been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!", 
    "comments": "I absolutely love this one. It has just the right amount of science and story and it made me cry several times", "tags": "mystery action sci-fi adventure fantasy"},
  { "title": "Spy x Family", "imageLink": "https://meo.comick.pictures/pVDV1.jpg", "type": "Manga | 150", "desc": "9/10", "author": "Tatsuya Endo", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "The master spy codenamed <Twilight> has spent his days on undercover missions, all for the dream of a better world. But one day, he receives a particularly difficult new order from command. For his mission, he must form a temporary family and start a new life?! ", 
    "comments": "Cute story and art and I love the concept", "tags": "comedy slice-of-life romance drama school-life historical"},
  { "title": "One Punch Man", "imageLink": "https://meo.comick.pictures/lalkm.jpg", "type": "Manga | 200", "desc": "9/10", "author": "ONE & Yūsuke Murata", "dateOfRelease": "2012", "status": "Ongoing", 
    "summary": "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.", 
    "comments": "Funny trope and s2 is so exciting to read. Better work than Mob Psycho", "tags":"action fantasy sci-fi" },
  { "title": "Jujutsu Kaisen", "imageLink": "https://meo.comick.pictures/KrgKwn.jpg", "type": "Manga | 270", "desc": "7.5/10", "author": "Gege Akutami", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "", 
    "comments": "It had potential in the beginning until literally every single good character died", "tags": "action thriller drama superpowers" },
  { "title": "Berserk", "imageLink": "https://meo.comick.pictures/zgyM3.jpg", "type": "Manga | 380", "desc": "7.5/10", "author": "Kentaro Miura (& Studio Gaga)", "dateOfRelease": "1989", "status": "Ongoing", 
    "summary": "Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, and also vengeance against the man who branded him as an unholy sacrifice. Aided only by his titanic strength gained from a harsh childhood lived with mercenaries, a gigantic sword, and an iron prosthetic left hand, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity.", 
    "comments": "Number one griffith hater omfg he but also the story gets dark fast", "tags":"thriller horror mystery action fantasy historical drama survival" },
  { "title": "Tokyo Revengers", "imageLink": "https://meo.comick.pictures/pVVbv.jpg", "type": "Manga | 300", "desc": "7/10", "author": "Ken Wakui", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Cool concept and I'll admit I cried more than I should've but gets repetitive like bro Mikey pls retire alr", "tags":"action drama slice-of-life mystery" },
  { "title": "Attack on Titan", "imageLink": "https://meo.comick.pictures/8Dm1d.jpg", "type": "Manga | 350", "desc": "8.5/10", "author": "Hajime Isayama", "dateOfRelease": "2009", "status": "Completed", 
    "summary": "", 
    "comments":"Peak writing and foreshadowing holyyy. Not a big fan that literally everyone I liked died though", "tags": "historical action adventure thriller fantasy survival" },
  { "title": "Rent a Girlfriend", "imageLink": "https://meo.comick.pictures/xXG3O.jpg", "type": "Manga | 400", "desc": "4.5/10", "author": "Reiji Miyajima", "dateOfRelease": "2017", "status": "Ongoing", 
    "summary": "", 
    "comments": "Meh, I didn't get far cuz this seemed like a gooner read and I couldn't stand MC", "tags":"romance slice-of-life drama" },
  { "title": "Blue Lock", "imageLink": "https://meo.comick.pictures/Z8nqbl.jpg", "type": "Manga | 350", "desc": "9/10", "author": "Muneyuki Kaneshiro & Yusuke Nomura", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments": "I don't know shit about soccer and I can enjoy this. I like how it's more psychological than sporty lmao", "tags":"sports action comedy drama" },
  { "title": "Naruto", "imageLink": "https://meo.comick.pictures/7rX2v.jpg", "type": "Manga | 700", "desc": "7.5/10", "author": "Masashi Kishimoto", "dateOfRelease": "1999", "status": "Completed", 
    "summary": "Twelve years ago, the powerful Nine-Tailed Demon Fox attacked the ninja village of Konohagakure. The demon was quickly defeated and sealed into the infant Naruto Uzumaki, by the Fourth Hokage who sacrificed his life to protect the village. Now Naruto is the number one knucklehead ninja who's determined to become the next Hokage and gain recognition by everyone who ever doubted him!", 
    "comments": "Personally not a big naruto fan (I think its the worst of the big three) don't come after me pls", "tags":"action adventure comedy drama fantasy superpowers" },
  { "title": "My Hero Academia", "imageLink": "https://meo.comick.pictures/ddz1G.jpg", "type": "Manga | 450", "desc": "8.5/10", "author": "Kohei Horikoshi", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "", 
    "comments":"Surprisingly good and got way darker than I thought. The art becomes so good, but too much plot armor", "tags": "action comedy drama sci-fi school-life superpowers" },
  { "title": "Hunter x Hunter", "imageLink": "https://meo.comick.pictures/a0pPE.jpg", "type": "Manga | 400", "desc": "7.5/10", "author": "Yoshihiro Togashi", "dateOfRelease": "1998", "status": "Ongoing", 
    "summary": "", 
    "comments":"After chimera ant arc imo manga got worse. There were literally PARAGRAPHS on each page pmo", "tags": "action adventure drama comedy mystery fantasy superpowers" },
  { "title": "Hell's Paradise", "imageLink": "https://meo.comick.pictures/wrv9a.jpg", "type": "Manga | 150", "desc": "8/10", "author": "Yuji Kaku", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "", 
    "comments":"I really really liked the enemy designs. Element system weakness was also cool but too many deaths :(", "tags": "thriller action adventure fantasy mystery" },
  { "title": "The Promised Neverland", "imageLink": "https://meo.comick.pictures/W8zwp0.jpg", "type": "Manga | 200", "desc": "8.5/10", "author": "Kaiu Shirai & Posuka Demizu", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "", 
    "comments":"More promising but ending was rushed in anime. Loved learning about the monster backstory though", "tags": "adventure fantasy sci-fi horror thriller mystery" },
  { "title": "Bleach", "imageLink": "https://meo.comick.pictures/O8bqW6.jpg", "type": "Manga | 700", "desc": "7.5/10", "author": "Tite Kubo", "dateOfRelease": "2001", "status": "Completed", 
    "summary": "", 
    "comments":"I got up to saving rukia arc then got bored. Maybe I'll give it another change again but idk", "tags": "action adventure drama comedy fantasy superpowers" },
  { "title": "Mashle: Magic and Muscles", "imageLink": "https://meo.comick.pictures/B8rBnJ.jpg", "type": "Manga | 50", "desc": "7.5/10", "author": "Hajime Komoto", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "", 
    "comments":"Comfort manga? I find the concept hilarous and there are a bunch of funny scenes", "tags": "comedy action fantasy school-life superpowers" },
  { "title": "Black Clover", "imageLink": "https://meo.comick.pictures/vakBe.jpg", "type": "Manga | 700", "desc": "7/10", "author": "Yūki Tabata", "dateOfRelease": "2015", "status": "Completed", 
    "summary": "", 
    "comments":"Wow another special MC with special MC priviledges and op powers. But good worldbuilding ig", "tags": "action adventure comedy mystery fantasy superpowers" },
  { "title": "Chainsaw Man", "imageLink": "https://meo.comick.pictures/4ejkEY.jpg", "type": "Manga | 200", "desc": "7.5/10", "author": "Tatsuki Fujimoto", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments":"They did my boy Denji so dirty bro. The story is pretty good though and I liked the war devil", "tags": "thriller mystery action drama sci-fi superpowers" },
  { "title": "Demon Slayer", "imageLink": "https://meo.comick.pictures/MLbGQa.jpg", "type": "Manga | 200", "desc": "8/10", "author": "Koyoharu Gotouge", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family! In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the demon who ruined his life.", 
    "comments":"Good storyline but I thought there was too much plot armor at the end. Anime animations are crazy though", "tags": "thriller mystery action adventure comedy fantasy historical" },
  { "title": "Tokyo Ghoul", "imageLink": "https://meo.comick.pictures/aYZWz.jpg", "type": "Manga | 200", "desc": "6.5/10", "author": "Sui Ishida", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "", 
    "comments":"I don't really like the story but the ghouls are aura farming so much", "tags": "sci-fi thriller action fantasy mystery superpowers" },
  { "title": "Food Wars!", "imageLink": "https://meo.comick.pictures/JE47p.jpg", "type": "Manga | 500", "desc": "8/10", "author": "Yūto Tsukuda & Shun Saeki", "dateOfRelease": "2012", "status": "Completed", 
    "summary": "", 
    "comments":"Underrated af the competition arcs are so good as long as you ignore the strange parts", "tags": "comedy slice-of-life drama school-life" },
  { "title": "The Hero Is Overpowered but Overly Cautious", "imageLink": "https://meo.comick.pictures/wEvAD.jpg", "type": "Manga | 50", "desc": "6.5/10", "author": "Light Tuchihi", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "", 
    "comments":"Alright, good plot twist ig but the story was lacking and I did not care for the side characters", "tags": "fantasy adventure comedy drama reincarnation" },
  { "title": "Death Note", "imageLink": "https://meo.comick.pictures/AKkv7.jpg", "type": "Manga | 100", "desc": "7.5/10", "author": "Tsugumi Ohba & Takeshi Obata", "dateOfRelease": "2003", "status": "Completed", 
    "summary": "", 
    "comments":"TS had so much potential but then it got so boring when L died and I was so lost :(", "tags": "thriller mystery drama" },
  { "title": "Kaiju No.8", "imageLink": "https://meo.comick.pictures/NrqGdo.jpg", "type": "Manga | 150", "desc": "7/10", "author": "Naoya Matsumoto", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments":"Ok story and concept but its too generic. Modern AoT much?", "tags": "action drama thriller sci-fi superpowers" },
  { "title": "Undead Unluck", "imageLink": "https://meo.comick.pictures/vobwa.jpg", "type": "Manga | 200", "desc": "7/10", "author": "Yoshifumi Tozuka", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments":"Unique concept and cute interactions. I should honestly get back to this one I think it ends well", "tags": "comedy action drama superpowers" },
  { "title": "Delicious in Dungeon", "imageLink": "https://meo.comick.pictures/Q76Da.jpg", "type": "Manga | 200", "desc": "6.5/10", "author": "Ryoko Kui", "dateOfRelease": "2014", "status": "Ongoing", 
    "summary": "", 
    "comments":"Honestly not for me but I can see it being a really nice comfort manga", "tags": "comedy adventure fantasy" },
  { "title": "Kindergarten Wars", "imageLink": "https://meo.comick.pictures/1vOxkR.jpg", "type": "Manga | 50", "desc": "7/10", "author": "You Chiba", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments":"Not much to say tbh. Got lost in the plot somewhere but its funny", "tags": "comedy action slice-of-life drama" },
  { "title": "Tomodachi Game", "imageLink": "https://meo.comick.pictures/dGBbQR.png", "type": "Manga | 150", "desc": "9/10", "author": "Mikoto Yamaguchi & Yuki Sato", "dateOfRelease": "2013", "status": "Ongoing", 
    "summary": "", 
    "comments":"This was genuinely so good I always think about tomodachi game I wish I could read it for the first time again", "tags": "thriller drama mystery" },
  { "title": "Assassination Classroom", "imageLink": "https://meo.comick.pictures/ky4zP.jpg", "type": "Manga | 250", "desc": "8.5/10", "author": "Yūsei Matsui", "dateOfRelease": "2012", "status": "Completed", 
    "summary": "", 
    "comments":"Bro the ending was so sad I took like two days to grieve. Character development goes crazy", "tags": "action comedy sci-fi slice-of-life school-life" },
  { "title": "The Apothecary Diaries", "imageLink": "https://meo.comick.pictures/r2ODo.png", "type": "Manga | 100", "desc": "7.5/10", "author": "Natsu Hyūga & Nekokurage", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments":"I like momo but only her. The connection between cases is really cool though", "tags": "historical adventure comedy romance drama mystery" },
  { "title": "Sakamoto Days", "imageLink": "https://meo.comick.pictures/MRr4E.jpg", "type": "Manga | 100", "desc": "7/10", "author": "Yuto Suzuki", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen. But one day...he fell in love! Retirement, marriage, fatherhood and then... Sakamoto gained weight! The chubby guy who runs the neighborhood store is actually a former legendary hitman! Can he protect his family from danger?", 
    "comments":"Mostly in this for nagumo cuz I saw edits of him but anyways....fun story but a little far-fetched", "tags": "action comedy drama slice-of-life" },
  { "title": "Phantom Busters", "imageLink": "https://meo.comick.pictures/w7py8M.jpg", "type": "Manga | 50", "desc": "7/10", "author": "Neo Shoco", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments":"Didn't get too far into this but the characters are really cool. Not sure how it can get much better though", "tags": "comedy adventure slice-of-life mystery school-life superpowers" },
  { "title": "Haikyu!!", "imageLink": "https://meo.comick.pictures/O8kRNO.jpg", "type": "Manga | 400", "desc": "8/10", "author": "Haruichi Furudate", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "", 
    "comments":"I thought timeskip was a little too fast-paced but this was so fun to read and I cried a little too much", "tags": "sports action comedy school-life" },
  { "title": "Made in Abyss", "imageLink": "https://meo.comick.pictures/10BWD.jpg", "type": "Manga | 100", "desc": "7/10", "author": "Akihito Tsukushi", "dateOfRelease": "2012", "status": "Ongoing", 
    "summary": "", 
    "comments":"Story is good, but the author is a little bit sick in the head cuz why are there naked children ", "tags": "drama fantasy mystery thriller adventure" },
  { "title": "Gachiakuta", "imageLink": "https://meo.comick.pictures/GXZxr7.jpg", "type": "Manga | 50", "desc": "7/10", "author": "Kei Urana", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments":"Also didn't get very far cuz MC got a little irrelevant but the design and drip goes really hard", "tags": "action adventure sci-fi superpowers" },
  { "title": "Dandadan", "imageLink": "https://meo.comick.pictures/w7X6q7.jpg", "type": "Manga | 200", "desc": "7.5/10", "author": "Yukinobu Tatsu", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "Ghosts, monsters, aliens, teen romance, battles...and the kitchen sink! This series has it all! Takakura, an occult maniac who doesn't believe in ghosts, and Ayase, a girl who doesn't believe in aliens, try to overcome their differences when they encounter the paranormal! This manga is out of this world!", 
    "comments": "I read this at nighttime and it makes me feel high. Very cute cast of characters.", "tags": "mystery sci-fi romance comedy fantasy thriller school-life superpowers" },


  { "title": "Sweet Home", "imageLink": "https://meo.comick.pictures/Goko6.jpg", "type": "Manhwa | 150", "desc": "9.5/10", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Also highly recommend, this is the one that got me into manhwas bro I love Carnby Kim", "tags": "sci-fi action drama thriller horror mystery survival superpowers" },
  { "title": "Omniscient Reader's Viewpoint", "imageLink": "https://meo.comick.pictures/p7j8l.jpg", "type": "Manhwa | 200", "desc": "9/10", "author": "Sing Shong (adapted by Sleepy-C, art by Redice Studio)", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Peak writing I love the concept of the reader powers and also Dokja is underrated af", "tags": "adventure action fantasy drama system superpowers" },
  { "title": "The Boxer", "imageLink": "https://meo.comick.pictures/0xvRq.png", "type": "Manhwa | 150", "desc": "9/10", "author": "JH", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "Peak story as someone who knows nothing about boxing. Lowkey inspirational", "tags": "sports action" },
  { "title": "Operation: True Love", "imageLink": "https://meo.comick.pictures/L03pa.jpg", "type": "Manhwa | 100", "desc": "8.5/10", "author": "Kkokkalee (art by Dledumb)", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Good love triangle but Eunhyeok you fucking threw wtf", "tags": "romance drama slice-of-life school-life system" },
  { "title": "Return of the Blossoming Blade", "imageLink": "https://meo.comick.pictures/mprkk.jpg", "type": "Manhwa | 200", "desc": "8.5/10", "author": "Biga (adapted from the novel by Plum)", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "This has to be my favorite murim read I love Chung Myung he's so snarky", "tags": "historical fantasy comedy action murim reincarnation" },
  { "title": "Weak Hero", "imageLink": "https://meo.comick.pictures/kov2z.jpg", "type": "Manhwa | 300", "desc": "8.5/10", "author": "Seopass & Razen", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments": "Surprisingly good for a korean high school bully situation thing and there are so many OP references :D", "tags": "action drama slice-of-life school-life" },
  { "title": "Solo Leveling", "imageLink": "https://meo.comick.pictures/v8kZna.jpg", "type": "Manhwa | 200", "desc": "8.5/10", "author": "Chugong (adapted by Dubu/Redice Studio)", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "", 
    "comments": "Lowk best one if you wanna get started reading. Its the frankenstein of dungeon/level up system manhwas", "tags": "action adventure fantasy mystery system reincarnation superpowers" },
  { "title": "Days of Hana", "imageLink": "https://meo.comick.pictures/rZj1p.jpg", "type": "Manhwa | 100", "desc": "8.5/10", "author": "Seokwoo", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Its lowkey human and a furry but I it was soooo sad and I cried too much reading it", "tags": "romance drama action mystery school-life" },
  { "title": "The Ember Knight", "imageLink": "https://meo.comick.pictures/d5pdn.jpg", "type": "Manhwa | 100", "desc": "7.5/10", "author": "Studio Inus & LICO", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "I love a weak MC that pretends and somehow things work out, this one kinda faded tho", "tags": "fantasy action drama mystery" },
  { "title": "My Gently Raised Beast", "imageLink": "https://meo.comick.pictures/451bz.jpg", "type": "Manhwa | 100", "desc": "7.5/10", "author": "Early Flower (art by Teava)", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Now this is good royalty romance its so cute and there are cats", "tags": "romance drama fantasy royalty" },
  { "title": "#Killstagram", "imageLink": "https://meo.comick.pictures/DDqYZ.jpg", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Ryoung", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "", 
    "comments": "Art style is a lil strange but I loved the thriller part and the twist is so sad", "tags": "horror thriller action mystery" },
  { "title": "Shotgun Boy", "imageLink": "https://meo.comick.pictures/arqYv.jpg", "type": "Manhwa | 50", "desc": "8/10", "author": "Carnby Kim & Hongpil", "dateOfRelease": "2021", "status": "Completed", 
    "summary": "", 
    "comments": "Prequel to Sweet Home, personally I think it's slightly worse. Read this after though", "tags": "sci-fi horror mystery thriller drama action school-life survival" },
  { "title": "The Horizon", "imageLink": "https://meo.comick.pictures/d5odz.jpg", "type": "Manhwa | 30", "desc": "7.5/10", "author": "JH", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "", 
    "comments": "That one scene killed me omg I can't believe I cried from a story less than fifty chapters", "tags": "thriller mystery" },
  { "title": "Unreachable Girl", "imageLink": "https://meo.comick.pictures/x6p.png", "type": "Manhwa | 50", "desc": "7/10", "author": "Jangbi (art by Gyeol)", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "I love this trope but the girl pmo sometimes. Also like the author, might reread sometime soon", "tags": "romance comedy drama slice-of-life school-life" }, 
  { "title": "Nice to Meet You", "imageLink": "https://k07.mbwww.org/thumb/W600/ampi/6b5/6b5fab4bf0f036e86d1a1f4561283c00612af2c7_600_960_58945.jpeg", "type": "Manhwa | 100", "desc": "6/10", "author": "Wishroomness", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "", 
    "comments": "Also cute love story but I can't believe who she settled for bro", "tags": "romance drama slice-of-life school-life" },
  { "title": "Pyramid Game", "imageLink": "https://meo.comick.pictures/DGnEY.png", "type": "Manhwa | 50", "desc": "5.5/10", "author": "Dalgonyak", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Pretty good psychological popularity game type with bullying, though I think the show would be better", "tags": "thriller drama mystery school-life" },
  { "title": "It's Mine", "imageLink": "https://meo.comick.pictures/bqNe4.jpg", "type": "Manhwa | 100", "desc": "7/10", "author": "LuckS (Studio Lico)", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Being hot does not excuse being a stalker bro", "tags": "romance mystery thriller drama school-life" },
  { "title": "Bastard", "imageLink": "https://meo.comick.pictures/p1Do0.jpg", "type": "Manhwa | 100", "desc": "7/10", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "", 
    "comments": "Kind of creepy and MC is like a loser, its more psychological", "tags": "horror thriller mystery romance" },
  { "title": "Flawed Almighty", "imageLink": "https://meo.comick.pictures/2rDdL.png", "type": "Manhwa | 50", "desc": "6.5/10", "author": "Naver Webtoon Author (Exact name unknown)", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "It's a cool concept but it fell off and got boring. ", "tags": "action mystery drama" },
  { "title": "Mosquito War", "imageLink": "https://meo.comick.pictures/876oD.jpg", "type": "Manhwa | 50", "desc": "6.5/10", "author": "Lee Hyunmin", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "Same author but this one is more confusing and I don't like the 'determination of humanity' ahh", "tags": "thriller sci-fi fantasy action survival" },
  { "title": "Remarried Empress", "imageLink": "https://meo.comick.pictures/jgnvQ.jpg", "type": "Manhwa | 150", "desc": "6/10", "author": "Alphatart (art by Sumpul)", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "", 
    "comments": "Ehh its alright but imo they took too long to get remarried and afterwards it just got boring", "tags": "romance historical fantasy drama royalty" },
  { "title": "Lookism", "imageLink": "https://meo.comick.pictures/g6X10W.jpg", "type": "Manhwa | 450", "desc": "7/10", "author": "Taejun Park", "dateOfRelease": "2014", "status": "Ongoing", 
    "summary": "", 
    "comments": "Art style improvement arc jeez. Its a funny concept and the characters are actually so well written", "tags": "romance comedy action slice-of-life school-life" },
  { "title": "One Day, Suddenly, Seoul Is", "imageLink": "https://meo.comick.pictures/67Q1B.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Soo Ho", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Nice standard zombie apocalypse read. Art is a little creepy and story is meh, but enjoyable still", "tags": "horror thriller action drama sci-fi survival" },
  { "title": "Revelations of Youth", "imageLink": "https://meo.comick.pictures/vRyXNJ.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Yuns (Art by Kim Soo-young)", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "The romance is soooo cute and the k*ss scenes are great. Kinda got lost in the plot tho", "tags": "romance drama slice-of-life school-life" },
  { "title": "Villain With A Crush", "imageLink": "https://meo.comick.pictures/bJEBy.jpg", "type": "Manhwa | 100", "desc": "7.5/10", "author": "Do Ara", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "Art is yummy and I like the styles of both leads. Hilarious situation but I can't see it ending well", "tags": "fantasy romance drama comedy superpowers" },
  { "title": "Tomb Raider King", "imageLink": "https://meo.comick.pictures/8QlXe.jpg", "type": "Manhwa | 400", "desc": "7.5/10", "author": "Yoonz (Redice Studio)", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "Kinda ORV copy?? It's different enough since MC is like an asshole and doesn't care for his friends", "tags": "action adventure fantasy system" },
  { "title": "The Greatest Estate Developer", "imageLink": "https://meo.comick.pictures/mnWxYo.jpg", "type": "Manhwa | 150", "desc": "9.5/10", "author": "Lee Hyunmin & Kim Soji", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "This might be my biggest recommendation its so good omfg. I literally cried when I caught up bro this is so peak. ", "tags": "comedy action adventure fantasy historical reincarnation system royalty superpowers" },
  { "title": "Mercenary Enrollment", "imageLink": "https://meo.comick.pictures/rKold.jpg", "type": "Manhwa | 150", "desc": "7.5/10", "author": "YC & Rak Hyun", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Dropped cuz boring but its still good quality. Don't like MCs that are too nonchalant tho", "tags": "action drama school-life" },
  { "title": "The Ki Sisters", "imageLink": "https://meo.comick.pictures/Nrq8pm.jpg", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Hwarang", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "The facial expressions are so funny and the story is like heartwarming", "tags": "comedy drama slice-of-life" },
  { "title": "SSS Class Revival Hunter", "imageLink": "https://meo.comick.pictures/YO4qX.jpg", "type": "Manhwa | 150", "desc": "7.5/10", "author": "Shin Noah (art by Bill K)", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "I should get back to this one but I think I was burnt out on powerscaling system genre. Still seems promising tho", "tags": "action fantasy reincarnation system superpowers" },
  { "title": "Special Civil Servant", "imageLink": "https://meo.comick.pictures/oam1Z4.jpg", "type": "Manhwa | 100", "desc": "8/10", "author": "Na Yoonseok", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Why is he kinda...giving Denji from CSM...like the fanart of him is kinda wild....", "tags": "fantasy historical action drama thriller superpowers" },
  { "title": "Revenge of the Baskerville Bloodhound", "imageLink": "https://meo.comick.pictures/N6n5Xz.jpg", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Zec", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Another standard magic reincarnation similar to TBATE, but I stopped reading after the harem allegations", "tags": "drama action fantasy adventure superpowers reincarnation" },
  { "title": "Life of a Quack Healer", "imageLink": "https://meo.comick.pictures/gO4E8-s.jpg", "type": "Manhwa | 50", "desc": "6.5/10", "author": "Dubi & Lico", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Not anything notable, smart MC but he's a little too cold and doctor-y for me. Dentist flashbacks iykyk", "tags": "drama fantasy superpowers system" },
  { "title": "Untouchable", "imageLink": "https://meo.comick.pictures/kRXjbJ.jpg", "type": "Manhwa | 150", "desc": "6.5/10", "author": "massstar", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "", 
    "comments": "", "tags": "romance slice-of-life drama" },
  { "title": "Maybe Meant To Be", "imageLink": "https://meo.comick.pictures/2NRb7Z.png", "type": "Manhwa | 50", "desc": "6.5/10", "author": "Taejun Park", "dateOfRelease": "2022", "status": "Completed", 
    "summary": "", 
    "comments": "", "tags": "romance slice-of-life comedy" },
  { "title": "Villain To Kill", "imageLink": "https://meo.comick.pictures/v8pMmy.jpg", "type": "Manhwa | 100", "desc": "6.5/10", "author": "D.P & Min Wook So", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "", "tags": "fantasy action superpowers reincarnation system" },
  { "title": "Genius Archer's Livestreaming", "imageLink": "https://meo.comick.pictures/5pq0ep.png", "type": "Manhwa | 50", "desc": "7/10", "author": "Ha Johan", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "I mean solid read, I randomly found it on the trending part but theres nothing special so far", "tags": "sports adventure system" },
  { "title": "Inso's Law", "imageLink": "https://meo.comick.pictures/ERoWe.jpg", "type": "Manhwa | 150", "desc": "7/10", "author": "Yoo Seo Jung", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "", 
    "comments": "Uhhh reverse harem?? I literally couldn't pick a side and I lowkey think FL is leading them on...", "tags": "romance drama slice-of-life school-life reincarnation" },
  { "title": "He Can't Be This Dumb", "imageLink": "https://meo.comick.pictures/KYQN4.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Yuto", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Funny concept but I literally cannot get over the guy's personality its so bad. Maybe because he's dumb..", "tags": "comedy romance drama royalty" },
  { "title": "Famous Restaurant", "imageLink": "https://meo.comick.pictures/ez28bX.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Yoo Rin", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "Good thriller ig but a little short. Kinda disappointed there wasn't a bigger twist but wtv", "tags": "thriller drama mystery" },
  { "title": "Dreaming Freedom", "imageLink": "https://meo.comick.pictures/gqyJR.jpg", "type": "Manhwa | 50", "desc": "8/10", "author": "Pilgyoung", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Insane lead^2 they're both so unhinged it's perfect. Good makeout scenes too *smirks*", "tags": "romance drama thriller school-life superpowers" },
  { "title": "Surviving the Game as a Berserker", "imageLink": "https://meo.comick.pictures/Zq2Yv.jpg", "type": "Manhwa | 100", "desc": "6.5/10", "author": "Jin Seolwoo (art by Hong Daeui)", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Not really a big fan of the guy and the body proportions look funny. Interesting plot tho", "tags": "action fantasy mystery adventure reincarnation system" },
  { "title": "Eleceed", "imageLink": "https://meo.comick.pictures/zlzOj.jpg", "type": "Manhwa | 250", "desc": "8.5/10", "author": "Son Jeho & ZHENA", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments": "Bro I love all the cats referenced in this they're so cute. Also really funny and comforting.", "tags": "comedy action sci-fi slice-of-life school-life superpowers" },
  { "title": "Our Secret Alliance", "imageLink": "https://meo.comick.pictures/pw1v3.jpg", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Miryang & Toyou's Dream", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Aww cute secret romance, but got boring after a while (hmmm)", "tags": "romance slice-of-life drama school-life" },
  { "title": "Dead Mansion", "imageLink": "https://meo.comick.pictures/rxakd2.png", "type": "Manhwa | 100", "desc": "7/10", "author": "Kim Yongki", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Interesting plot certainly but the power scaling was too unrealistic", "tags": "action mystery thriller" },
  { "title": "Leviathan", "imageLink": "https://meo.comick.pictures/mndwRX.jpg", "type": "Manhwa | 100", "desc": "9/10", "author": "Lee Gyeonghoon & Kim Joonshik", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "I absolutely loved this one. The art is genuinely amazing. AoT underwater literally and the fights were good", "tags": "thriller horror action adventure drama mystery sci-fi survival" },
  { "title": "Nano Machine", "imageLink": "https://meo.comick.pictures/wNEdM.jpg", "type": "Manhwa | 200", "desc": "7.5/10", "author": "Han Joongwueol & Geumgangbulgoe (art by Jeong Hanjung)", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Above average murim but bro literally gets carried by his personal AI. Didn't read too far into this one", "tags": "action sci-fi historical murim system superpowers" },
  { "title": "Lost in the Cloud", "imageLink": "https://prodimage.images-bn.com/pimages/9798893739459_p0_v7_s1200x630.jpg", "type": "Manhwa | 100", "desc": "8/10", "author": "Beck (art by 39)", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "Hehe, different type of romance if you know what I mean. Probably awakened something in me...", "tags": "romance slice-of-life drama thriller school-life" },
  { "title": "Surviving the Apocalypse", "imageLink": "https://meo.comick.pictures/7yONmN.png", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Yoonsoo", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Kinda confused about plot but this one created the best apocalypse atmosphere like it got me worried for mc", "tags": "thriller horror action sci-fi mystery survival" },
  { "title": "How to Use a Returner", "imageLink": "https://meo.comick.pictures/rnmk2.png", "type": "Manhwa | 50", "desc": "7/10", "author": "Jeon Sunwoo (art by 935)", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Got boring and I didn't like the attempted relationships but MC is so sly and cheeky it makes up for it", "tags": "action fantasy drama adventure system reincarnation superpowers royalty" },
  { "title": "The Hunter's Gonna Lay Low", "imageLink": "https://meo.comick.pictures/qYrLy8.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Gugyeong (art by Guksu)", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Didn't read far but kinda giving ORV couple. I think this was the next part of my awakening lmao", "tags": "comedy action drama fantasy system superpowers" },
  { "title": "Survive Romance", "imageLink": "https://meo.comick.pictures/17eDB.png", "type": "Manhwa | 100", "desc": "7/10", "author": "Lee Yone", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Genre change really hit hard and exceeded my expectations. Really interesting story", "tags": "romance drama action mystery thriller horror sci-fi survival reincarnation school-life" },
  { "title": "The Genius Who Sees Through The World", "imageLink": "https://meo.comick.pictures/oam5nk.jpg", "type": "Manhwa | 50", "desc": "6/10", "author": "Dr. Solo", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Don't remember much but it was fun seeing autistic guy notice things", "tags": "drama mystery" },
  { "title": "Pick Me Up", "imageLink": "https://meo.comick.pictures/7yKyBe.png", "type": "Manhwa | 50", "desc": "7/10", "author": "Gingming", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "IK this is highly rated but I lowkey can't make it past 100 chaps. Maybe just me but its a slow start", "tags": "action adventure fantasy thriller system reincarnation superpowers" },
  { "title": "Blink Master of the Magic Academy", "imageLink": "https://meo.comick.pictures/8yK0b5.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Serim (art by Ccong)", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Aight concept. Got sick of magic academy reads though", "tags": "action adventure fantasy school-life system reincarnation superpowers" },
  { "title": "On the Way to Meet Mom", "imageLink": "https://meo.comick.pictures/pR6rRx.jpg", "type": "Manhwa | 50", "desc": "8/10", "author": "Yun Kyoung", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Mori is literally so cute and I love the parent dynamics. Also the backgrounds and worldbuilding are gorgeous", "tags": "fantasy comedy drama mystery slice-of-life" },
  { "title": "Infinite Mage", "imageLink": "https://meo.comick.pictures/e1887.jpg", "type": "Manhwa | 100", "desc": "7.5/10", "author": "Kwon Ohjin (art by Kim Chungil)", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "", 
    "comments": "Love the science references in magic, this is one of the few that isn't afraid to combine both", "tags": "fantasy action drama school-life superpowers royalty" },
  { "title": "Myst, Might, Mayhem", "imageLink": "https://meo.comick.pictures/Nrqr3o.jpg", "type": "Manhwa | 50", "desc": "8/10", "author": "Whale", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "", 
    "comments": "Supposed prequel to Nano Machine, but I like this MC soooo much more cuz he's not afraid to be insane lol", "tags": "drama action historical fantasy mystery murim superpowers" },
  { "title": "Legend of the Northern Blade", "imageLink": "https://meo.comick.pictures/GkoXk.jpg", "type": "Manhwa | 200", "desc": "7/10", "author": "Hae-Min (art by Woo-Gak)", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "Honestly not as peak as ppl said it was. Art style takes a bit to get used to but ehhh", "tags": "adventure action historical mystery murim" },
  { "title": "All Rounder", "imageLink": "https://meo.comick.pictures/WD2Y2.jpg", "type": "Manhwa | 200", "desc": "7/10", "author": "unknown", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "Cool apocalypse concept but mc is a little too op and it just became solo leveling again...", "tags": "action thriller horror drama sci-fi survival system superpowers" },
  { "title": "Tower of God", "imageLink": "https://meo.comick.pictures/X8xWBz.jpg", "type": "Manhwa | 600", "desc": "7.5/10", "author": "S.I.U.", "dateOfRelease": "2010", "status": "Ongoing", 
    "summary": "", 
    "comments": "I tried to get myself to read this so many times but the art is so old in the beginning and I get so confused w/ story", "tags": "mystery fantasy action adventure comedy drama system superpowers" },
  { "title": "I'm Not That Kind of Talent", "imageLink": "https://meo.comick.pictures/dk2Kz.jpg", "type": "Manhwa | 100", "desc": "8/10", "author": "Denphy & Emong", "dateOfRelease": "2022", "status": "Ongoing (Hiatus)", 
    "summary": "", 
    "comments": "It was funny at the start but then it got political n I didn't like any of the human characters", "tags": "fantasy action drama comedy royalty" },
  { "title": "DICE", "imageLink": "https://meo.comick.pictures/b2r76.png", "type": "Manhwa | 400", "desc": "8/10", "author": "Yun Hyunseok", "dateOfRelease": "2013", "status": "Completed", 
    "summary": "", 
    "comments": "It was mid in the beginning bit holy improvement arcs. The story actually became better and not ragebaiting", "tags": "action sci-fi drama romance system school-life superpowers" },
  { "title": "The God of High School", "imageLink": "https://meo.comick.pictures/v8pqJb.png", "type": "Manhwa | 570", "desc": "6.5/10", "author": "Yongje Park", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "", 
    "comments": "Fighting manhwa but I didn't like the characters nor the art style. Strategy>Combat", "tags": "action drama school-life" },
  
  { "title": "The Beginning After the End", "imageLink": "https://meo.comick.pictures/DLyNQ.jpg", "type": "Webtoon | 200", "desc": "7.5/10", "author": "TurtleMe (art by Fuyuki23)", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments": "Slow ahh start but holyyyy the art gets so good I didn't even notice its not a manhwa. Highly recommend", "tags": "fantasy action adventure romance reincarnation superpowers royalty" },
  { "title": "Castle Swimmer", "imageLink": "https://meo.comick.pictures/1K6bD.jpg", "type": "Webtoon | 150", "desc": "7.5/10", "author": "Wendy Lian Martin", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "", 
    "comments": "Spoiler: they're gay but its cute (contains fish)", "tags": "romance fantasy comedy drama" },
  { "title": "Unordinary", "imageLink": "https://meo.comick.pictures/aOBbOK.jpg", "type": "Webtoon | 300", "desc": "8/10", "author": "uru-chan", "dateOfRelease": "2016", "status": "Ongoing", 
    "summary": "", 
    "comments": "Weak hero but he's actually strong. I reread this one multiple times and I might catch up again.", "tags": "action sci-fi drama school-life superpowers" },
  { "title": "Cursed Princess Club", "imageLink": "https://m.media-amazon.com/images/I/81Bj9pG4T9L.jpg", "type": "Webtoon | 150", "desc": "7.5/10", "author": "LambCat", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "", 
    "comments": "My actual first webtoon this was the one my friend recommended. Actually really good story as well", "tags": "fantasy romance comedy slice-of-life drama fantasy royalty" },
  { "title": "My Deepest Secret", "imageLink": "https://murderingmedia.wordpress.com/wp-content/uploads/2021/04/53359671._uy1122_ss1122_-e1618366280858.jpg", "type": "Webtoon | 100", "desc": "7/10", "author": "Hanza Art", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "It's a cute romance story but I thought the twist was kinda wild, love the artstyle tho", "tags": "drama mystery thriller romance school-life" },
  { "title": "Homesick", "imageLink": "https://swebtoon-phinf.pstatic.net/20210608_280/1623106223810Jjdjd_JPEG/1Homesick_mobile_landingpage.jpg?type=crop540_540", "type": "Webtoon | 50", "desc": "6.5/10", "author": "Ms. Freaky", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "Cool artstyle ig but the story is kinda shallow and mid", "tags": "drama sci-fi action thriller mystery survival" },
  { "title": "Brass and Sass", "imageLink": "https://static.usagi.one/uploads/pics/01/29/755.jpg", "type": "Webtoon | 50", "desc": "6.5/10", "author": "Antlerella", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "", 
    "comments": "There are better romances there and also ew band kids ", "tags": "romance comedy slice-of-life drama school-life" },
  { "title": "School Bus Graveyard", "imageLink": "https://meo.comick.pictures/X8X76M.png", "type": "Webtoon | 100", "desc": "7/10", "author": "JackieE", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "", 
    "comments": "Its alright as a teen story but I don't really find it exciting compared to others. Also I got spoiled :(", "tags": "thriller action drama mystery school-life survival" },
  { "title": "Morgana and Oz", "imageLink": "https://meo.comick.pictures/P0dSACHe0ZkHX.webp", "type": "Webtoon | 50", "desc": "6/10", "author": "Meryl Patton", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "", 
    "comments": "Honestly I think I might have underrated it but really nothing significant happened. Cute couple", "tags": "romance comedy fantasy" },
  { "title": "I'm The Grim Reaper", "imageLink": "https://prodimage.images-bn.com/pimages/9781974739080_p0_v2_s1200x630.jpg", "type": "Webtoon | 100", "desc": "6/10", "author": "Jeo Seongmin", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "", 
    "comments": "", "tags": "thriller mystery drama sci-fi system superpowers" },
  { "title": "Purple Hyacinth", "imageLink": "https://meo.comick.pictures/87djn.jpg", "type": "Webtoon | 200", "desc": "6.5/10", "author": "Ephemerys", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "", 
    "comments": "", "tags": "mystery drama historical superpowers" },
  { "title": "I Love Yoo", "imageLink": "https://i.redd.it/g2ecyjfker961.jpg", "type": "Webtoon | 250", "desc": "6.5/10", "author": "Quimchee", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "", 
    "comments": "Slowwwww burn oh my god just get somewhere pleeease. #JusticeForDieter", "tags": "drama romance comedy" },


//UNREAD ONES
{ "title": "+99 Reinforced Wooden Stick", "imageLink": "https://meo.comick.pictures/vvRrl.jpg", "type": "Manhwa | 150", "desc": "", "author": "Hongsil", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "4 Cut Hero", "imageLink": "https://meo.comick.pictures/k8bGz.jpg", "type": "Manhwa | 250", "desc": "", "author": "Gojira-kun", "dateOfRelease": "2014", "status": "Ongoing (Hiatus)" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "A Disaster-Class Hero Has Returned", "imageLink": "https://meo.comick.pictures/nEzBB.jpg", "type": "Manhwa | 100", "desc": "", "author": "Unknown", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "A Sunny Night Walk", "imageLink": "https://meo.comick.pictures/YEfF2FGMQhjlI.jpeg", "type": "Manhwa | 50", "desc": "", "author": "Nada & Shinryo", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" } ,
{ "title": "The Archmage's Restaurant", "imageLink": "https://meo.comick.pictures/jx802M.jpg", "type": "Manhwa | 100", "desc": "", "author": "Unknown", "dateOfRelease": "Unknown", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Academy's Undercover Professor", "imageLink": "https://meo.comick.pictures/Q7egY.jpg", "type": "Manhwa | 150", "desc": "", "author": "Unknown", "dateOfRelease": "Unknown", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" } ,
{ "title": "Afterlife Diner", "imageLink": "https://meo.comick.pictures/X8X1mp.jpg", "type": "Manhwa | 50", "desc": "", "author": "Lee Kangjin", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" } ,
{ "title": "Annarasumanara", "imageLink": "https://meo.comick.pictures/v6dE7.jpg", "type": "Manhwa | 150", "desc": "", "author": "Yi Su‑ji", "dateOfRelease": "2014", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Back To Chanbi", "imageLink": "https://meo.comick.pictures/jxXENM.jpg", "type": "Manhwa | 50", "desc": "", "author": "KKUMTOON", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Beastburn", "imageLink": "https://meo.comick.pictures/j5dwa.jpg", "type": "Manhwa | 50", "desc": "", "author": "Yoon Seon Saeng", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Beastly Things", "imageLink": "https://meo.comick.pictures/nR2b33.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kim Tae‑Hee", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Beware The Villainess", "imageLink": "https://meo.comick.pictures/Z8nglJ.jpg", "type": "Manhwa | 150", "desc": "", "author": "Soda Ice (art by Blue Canna)", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Book Eater", "imageLink": "https://meo.comick.pictures/KvzL5.jpg", "type": "Manhwa | 150", "desc": "", "author": "Theodore Miller (Adapted)", "dateOfRelease": "2023", "status": "Hiatus" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Bones", "imageLink": "https://meo.comick.pictures/Lylob7.jpg", "type": "Manhwa | 50", "desc": "", "author": "unknown", "dateOfRelease": "2025", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Bunny And Her Boys", "imageLink": "https://meo.comick.pictures/waMGX.png", "type": "Manhwa | 50", "desc": "", "author": "Nieun", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Checkmate", "imageLink": "https://meo.comick.pictures/0EDqal.jpg", "type": "Manhwa | 100", "desc": "", "author": "Tan", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Cheese In The Trap", "imageLink": "https://meo.comick.pictures/XW4Ng.jpg", "type": "Manhwa | 150", "desc": "", "author": "Soonkki", "dateOfRelease": "2010", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Child Of The Sheath", "imageLink": "https://meo.comick.pictures/j80dL.jpg", "type": "Manhwa | 50", "desc": "", "author": "unknown", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Shadow Of the Supreme", "imageLink": "https://meo.comick.pictures/qYrwxX.jpg", "type": "Manhwa | 50", "desc": "", "author": "unknown", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Chiller", "imageLink": "https://meo.comick.pictures/OgnZb.png", "type": "Manhwa | 50", "desc": "", "author": "unknown", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Return Of The War God", "imageLink": "https://meo.comick.pictures/ezXNQ6.png", "type": "Manhwa | 150", "desc": "", "author": "Toika", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Conquering The Academy With Just A Sashimi Knife", "imageLink": "https://meo.comick.pictures/3Kp47O.jpg", "type": "Manhwa | 40", "desc": "", "author": "unknown", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Couple Breaker", "imageLink": "https://meo.comick.pictures/kRxnkg.jpg", "type": "Manhwa | 70", "desc": "", "author": "Seokwoo", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Damn Reincarnation", "imageLink": "https://meo.comick.pictures/2JmlB.png", "type": "Manhwa | 100", "desc": "", "author": "Jang Sung-Lak", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Villains Are Destined To Die", "imageLink": "https://meo.comick.pictures/KmqOr.jpg", "type": "Manhwa | 140", "desc": "", "author": "Gwon Gyeoeul", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Debuff Master", "imageLink": "https://meo.comick.pictures/aOX64z.jpg", "type": "Manhwa | 50", "desc": "", "author": "unknown", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Demon X Angel Can't Get Along", "imageLink": "https://meo.comick.pictures/eWl1Z.jpg", "type": "Manhwa | 40", "desc": "", "author": "Hee Wook", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Demonic Master Of Mount Kunlun", "imageLink": "https://meo.comick.pictures/WrpyQ.jpg", "type": "Manhwa | 40", "desc": "", "author": "unknown", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Devil Returns To School Days", "imageLink": "https://meo.comick.pictures/0GJ1m.jpg", "type": "Manhwa | 90", "desc": "", "author": "Jin Hye", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Disciple Of The Holy Sword", "imageLink": "https://meo.comick.pictures/xLKWg.jpg", "type": "Manhwa | 30", "desc": "", "author": "unknown", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Abnormal Immortal Record Of Spooky Daoist", "imageLink": "https://meo.comick.pictures/Z8nmYv.png", "type": "Manhwa | 30", "desc": "", "author": "Yunh", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Doom Breaker", "imageLink": "https://meo.comick.pictures/3o2j7.jpg", "type": "Manhwa | 110", "desc": "", "author": "Blue Deep", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "The Genius Medicinal Mage", "imageLink": "https://meo.comick.pictures/a5wYQ.png", "type": "Manhwa | 90", "desc": "", "author": "Jokyung", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Dungeon Odyssey", "imageLink": "https://meo.comick.pictures/aWE40.jpg", "type": "Manhwa | 60", "desc": "", "author": "Yoo Heonhwa", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Ending Maker", "imageLink": "https://meo.comick.pictures/BRxQK.jpg", "type": "Manhwa | 70", "desc": "", "author": "Chwiryong", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Escape Devildom", "imageLink": "https://myanimelist.net/images/manga/3/270306.jpg", "type": "Manhwa | 30", "desc": "", "author": "unknown", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Eternally Regressing Knight", "imageLink": "https://meo.comick.pictures/d0XgoG.jpg", "type": "Manhwa | 150", "desc": "", "author": "Lee Hyunmin & Ga Nara", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Executioner", "imageLink": "https://meo.comick.pictures/Z8nyO3.jpg", "type": "Manhwa | 100", "desc": "", "author": "Keum Suk Gendry-kim", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Exorcism Records: Journey To The West", "imageLink": "https://meo.comick.pictures/g3No1.jpg", "type": "Manhwa | 80", "desc": "", "author": "Choi Kang‑Yong", "dateOfRelease": "2021", "status": "Hiatus" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Expelled Hero Is Too Strong", "imageLink": "https://meo.comick.pictures/kRxM23.jpg", "type": "Manhwa | 150", "desc": "", "author": "Jin Yoon‑Gyu", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Falling For Danger", "imageLink": "https://meo.comick.pictures/X206R7.jpg", "type": "Webtoon | 60", "desc": "", "author": "Choi Ha‑Ra", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Family Size", "imageLink": "https://meo.comick.pictures/zprpz.jpg", "type": "Manhwa | 50", "desc": "", "author": "Myeong‑Jin Lee", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "FFF-Class Trashero", "imageLink": "https://meo.comick.pictures/Q8Gn8.jpg", "type": "Manhwa | 200", "desc": "", "author": "Yong Wook Lee", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Fight Class 3", "imageLink": "https://meo.comick.pictures/onxGB.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kim Sung‑Ryong", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Fighters", "imageLink": "https://meo.comick.pictures/MZEJe.png", "type": "Manhwa | 80", "desc": "", "author": "Jae‑Hoon Jung", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
{ "title": "Finding Camellia", "imageLink": "https://meo.comick.pictures/qyq3X.jpg", "type": "Manhwa | 50", "desc": "", "author": "Kwun Jam‑Bo", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "" ,
"comments": "", "tags": "" },
    
]




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

//dark mode
  window.onload = function () {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  }
  function toggleMode() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

//random rec
document.addEventListener("DOMContentLoaded", () => {
  const randomBtn = document.getElementById("randomize-btn");

  if (randomBtn) {
    randomBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (!books || books.length === 0) {
        console.error("Book list is empty or undefined.");
        return;
      }
      const randomBook = books[Math.floor(Math.random() * books.length)];
      window.location.href = `single-recipe.html?title=${encodeURIComponent(randomBook.title)}`;
    });
  }
});

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

if (window.location.href.includes("recommendations")) {
  const homeBooks = document.getElementById("list");

  const getNumber = desc => {
  const match = String(desc).match(/([\d.]+)\s*\/\s*[\d.]+/);
    return match ? parseFloat(match[1]) : 0;
  };

  books.sort((a, b) => getNumber(b.desc) - getNumber(a.desc));

  books.forEach(book => {
    const atag = document.createElement("a");
    const imagetag = document.createElement("img");
    const h5tag = document.createElement("h5");
    const ptag = document.createElement("p");
    h5tag.innerText = book.title;
    ptag.innerText = `${book.type} | ${book.desc}`;
    imagetag.src = book.imageLink;
    imagetag.alt = "book";
    imagetag.className = "img recipe-img";
    atag.className = "recipe";
    atag.href = `single-recipe.html?title=${book.title}`;
    atag.appendChild(imagetag);
    atag.appendChild(h5tag);
    atag.appendChild(ptag);
    homeBooks.appendChild(atag);
  });
}

if (window.location.href.includes("single-recipe")){
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  const tagsList = document.getElementById('bookTags');

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

      book["tags"].split(" ").forEach(tag => {
        const tagLink = document.createElement("a");
        tagLink.href = `tag-template.html?genre=${tag}`;
        tagLink.innerText = tag.toLowerCase();
        tagLink.innerText[0].toUpperCase();

        tagsList.appendChild(tagLink);
      });

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

