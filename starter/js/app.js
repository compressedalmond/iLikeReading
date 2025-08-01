const books = [
  { "title": "One Piece", "imageLink": "https://meo.comick.pictures/3MzEO.png", "type": "Manga | 1150", "desc": "9.5/10", "author": "Eiichiro Oda", "dateOfRelease": "1997", "status": "Ongoing",
     "summary": "As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer 'Red-Haired' Shanks. But Luffy's life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary 'One Piece,' said to be the greatest treasure in the world...", 
     "comments": "MY FAVORITE MANGA OAT! Ik its over 1000 chaps but I legitamately wish it was longer. Carried me through covid", "tags": "action adventure fantasy comedy superpowers" },
  { "title": "Dr. Stone", "imageLink": "https://meo.comick.pictures/0ZoyRk.jpg", "type": "Manga | 240", "desc": "9.5/10", "author": "Riichirō Inagaki & Boichi", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he’s not alone! His science-loving friend Senku’s been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!", 
    "comments": "I absolutely love this one. It has just the right amount of science and story and it made me cry several times", "tags": "mystery action sci-fi adventure fantasy"},
  { "title": "Spy x Family", "imageLink": "https://meo.comick.pictures/pVDV1.jpg", "type": "Manga | 120", "desc": "9/10", "author": "Tatsuya Endo", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "The master spy codenamed <Twilight> has spent his days on undercover missions, all for the dream of a better world. But one day, he receives a particularly difficult new order from command. For his mission, he must form a temporary family and start a new life?! ", 
    "comments": "Cute story and art and I love the concept", "tags": "comedy slice-of-life romance drama school-life historical"},
  { "title": "One Punch Man", "imageLink": "https://meo.comick.pictures/lalkm.jpg", "type": "Manga | 200", "desc": "9/10", "author": "ONE & Yūsuke Murata", "dateOfRelease": "2012", "status": "Ongoing", 
    "summary": "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.", 
    "comments": "Funny trope and s2 is so exciting to read. Better work than Mob Psycho", "tags":"action fantasy sci-fi" },
  { "title": "Jujutsu Kaisen", "imageLink": "https://meo.comick.pictures/KrgKwn.jpg", "type": "Manga | 270", "desc": "7.5/10", "author": "Gege Akutami", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "For some strange reason, Yuji Itadori, despite his insane athleticism would rather just hang out with the Occult Club. However, he soon finds out that the occult is as real as it gets when his fellow club members are attacked! Meanwhile, the mysterious Megumi Fushiguro is tracking down a special-grade cursed object, and his search leads him to Itadori…", 
    "comments": "It had potential in the beginning until literally every single good character died", "tags": "action thriller drama superpowers" },
  { "title": "Berserk", "imageLink": "https://meo.comick.pictures/zgyM3.jpg", "type": "Manga | 380", "desc": "7.5/10", "author": "Kentaro Miura (& Studio Gaga)", "dateOfRelease": "1989", "status": "Ongoing", 
    "summary": "Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, and also vengeance against the man who branded him as an unholy sacrifice. Aided only by his titanic strength gained from a harsh childhood lived with mercenaries, a gigantic sword, and an iron prosthetic left hand, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity.", 
    "comments": "Number one griffith hater omfg he but also the story gets dark fast", "tags":"thriller horror mystery action fantasy historical drama survival" },
  { "title": "Tokyo Revengers", "imageLink": "https://meo.comick.pictures/pVVbv.jpg", "type": "Manga | 280", "desc": "7/10", "author": "Ken Wakui", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "Takemichi is a 26-year-old unemployed virgin who learns that the girl he dated in middle school, the only girl he ever dated, has died. Then, after an accident he finds himself in a time leap back to his middle school years. He vows to change the future and save the girl, and to do that he aims to rise to the top of the Kanto region's most brutal delinquent gang.", 
    "comments": "Cool concept and I'll admit I cried more than I should've but gets repetitive like bro Mikey pls retire alr", "tags":"action drama slice-of-life mystery" },
  { "title": "Attack on Titan", "imageLink": "https://meo.comick.pictures/8Dm1d.jpg", "type": "Manga | 140", "desc": "8.5/10", "author": "Hajime Isayama", "dateOfRelease": "2009", "status": "Completed", 
    "summary": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of Titans. Flash forward to the present and the southern district of Shinganshina has not seen a Titan in over 100 years.", 
    "comments":"Peak writing and foreshadowing holyyy. Not a big fan that literally everyone I liked died though", "tags": "historical action adventure thriller fantasy survival" },
  { "title": "Rent-a-Girlfriend", "imageLink": "https://meo.comick.pictures/xXG3O.jpg", "type": "Manga | 390", "desc": "4.5/10", "author": "Reiji Miyajima", "dateOfRelease": "2017", "status": "Ongoing", 
    "summary": "In today's Japan, “rental” services can deliver an afternoon with a “friend,” a “parent,” even a fake girlfriend! After a staggering betrayal by his girlfriend, hapless freshman Kazuya gets just desperate enough to give it a try. But he quickly discovers how complicated it can be to “rent” an emotional connection, and his new “girlfriend,” who’s trying to keep her side hustle secret, will panic when she finds out her real life and Kazuya’s are intertwined in surprising ways! Family, school, and life all start to go wrong, too…", 
    "comments": "Meh, I didn't get far cuz this seemed like a gooner read and I couldn't stand MC", "tags":"romance slice-of-life drama" },
  { "title": "Blue Lock", "imageLink": "https://meo.comick.pictures/Z8nqbl.jpg", "type": "Manga | 320", "desc": "9/10", "author": "Muneyuki Kaneshiro & Yusuke Nomura", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Yoichi Isagi lost the opportunity to go to the national high school championships because he passed to his teammate who missed instead of shooting himself. Isagi is one of 300 U-18 strikers chosen by Jinpachi Ego, a man who was hired by the Japan Football Association after the 2018 FIFA World Cup, to guide Japan to winning the World Cup by destroying Japanese football. Ego's plan is to isolate the 300 strikers into a prison-like institution called 'Blue Lock', in order to create the world's biggest 'egotist'/striker, which has been lacking in Japanese football.", 
    "comments": "I don't know shit about soccer and I can enjoy this. I like how it's more psychological than sporty lmao", "tags":"sports drama action" },
  { "title": "Naruto", "imageLink": "https://meo.comick.pictures/7rX2v.jpg", "type": "Manga | 700", "desc": "7.5/10", "author": "Masashi Kishimoto", "dateOfRelease": "1999", "status": "Completed", 
    "summary": "Twelve years ago, the powerful Nine-Tailed Demon Fox attacked the ninja village of Konohagakure. The demon was quickly defeated and sealed into the infant Naruto Uzumaki, by the Fourth Hokage who sacrificed his life to protect the village. Now Naruto is the number one knucklehead ninja who's determined to become the next Hokage and gain recognition by everyone who ever doubted him!", 
    "comments": "Personally not a big naruto fan (I think its the worst of the big three) don't come after me pls", "tags":"action adventure comedy drama fantasy superpowers" },
  { "title": "My Hero Academia", "imageLink": "https://meo.comick.pictures/ddz1G.jpg", "type": "Manga | 430", "desc": "8.5/10", "author": "Kohei Horikoshi", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as 'quirks', which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. Yet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High.", 
    "comments":"Surprisingly good and got way darker than I thought. The art becomes so good, but too much plot armor", "tags": "action comedy drama sci-fi school-life superpowers" },
  { "title": "Hunter x Hunter", "imageLink": "https://meo.comick.pictures/a0pPE.jpg", "type": "Manga | 410", "desc": "7.5/10", "author": "Yoshihiro Togashi", "dateOfRelease": "1998", "status": "Ongoing", 
    "summary": "Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other men. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.", 
    "comments":"After chimera ant arc imo manga got worse. There were literally PARAGRAPHS on each page pmo", "tags": "action adventure drama comedy mystery fantasy superpowers" },
  { "title": "Hell's Paradise", "imageLink": "https://meo.comick.pictures/wrv9a.jpg", "type": "Manga | 130", "desc": "8/10", "author": "Yuji Kaku", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "Gabimaru the Empty, a former ninja assassin feared as a heartless husk of a man, spends his days on death row wondering when an executioner skilled enough to so much as harm him will arrive, as he thinks nothing of seeing an end to his meaningless existence… Or so he thought. Then the lady executioner, Asaemon the Beheader, rekindles his hope with an astounding proposition. If he ever wishes to see his beloved wife again, he must embark under the auspices of the shogunate on a perilous voyage to the mysterious mystic island said to house the elixir of immortality. ", 
    "comments":"I really really liked the enemy designs. Element system weakness was also cool but too many deaths :(", "tags": "thriller action adventure fantasy mystery" },
  { "title": "The Promised Neverland", "imageLink": "https://meo.comick.pictures/W8zwp0.jpg", "type": "Manga | 180", "desc": "8.5/10", "author": "Kaiu Shirai & Posuka Demizu", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "At Grace Field House, life couldn't be better for the orphans! Though they have no parents, together with the other kids and a kind 'Mama' who cares for them, they form one big, happy family. There is only one rule they must obey: do not leave the orphanage. But one day, two top-scoring orphans, Emma and Norman, venture past the gate and unearth the horrifying reality behind their entire existence: they are all livestock, and their orphanage is a farm to cultivate food for a mysterious race of demons.", 
    "comments":"More promising but ending was rushed in anime. Loved learning about the monster backstory though", "tags": "adventure fantasy sci-fi horror thriller mystery" },
  { "title": "Bleach", "imageLink": "https://meo.comick.pictures/O8bqW6.jpg", "type": "Manga | 680", "desc": "7.5/10", "author": "Tite Kubo", "dateOfRelease": "2001", "status": "Completed", 
    "summary": "Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hollow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family, but much to her surprise, Ichigo absorbs every last drop of her energy.", 
    "comments":"I got up to saving rukia arc then got bored. Maybe I'll give it another change again but idk", "tags": "action adventure drama comedy fantasy superpowers" },
  { "title": "Mashle: Magic and Muscles", "imageLink": "https://meo.comick.pictures/B8rBnJ.jpg", "type": "Manga | 160", "desc": "7.5/10", "author": "Hajime Komoto", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "This is a world of magic where magic is used for everything. But deep in the forest exists a young man who spends his time training and bulking up. He can't use magic, but he enjoys a peaceful life with his father. But one day, his life is put in danger! Will his muscular body protect him from the magic users who are out to get him?", 
    "comments":"Comfort manga? I find the concept hilarous and there are a bunch of funny scenes", "tags": "comedy action fantasy school-life superpowers" },
  { "title": "Black Clover", "imageLink": "https://meo.comick.pictures/vakBe.jpg", "type": "Manga | 380", "desc": "7/10", "author": "Yūki Tabata", "dateOfRelease": "2015", "status": "Completed", 
    "summary": "As children, Asta and Yuno promised that they would compete against each other to see who would become the next Emperor Magus. However, as they grew up, some differences between them became plain. Yuno was a genius with magic, with amazing power and control, while Asta could not use magic at all, and tried to make up for his lack by training physically. When they received their Grimoires at age 15, Yuno got a spectacular book with a four-leaf clover, while Asta received nothing at all. However, when Yuno was threatened, the truth about Asta's power was revealed, he received a five-leaf clover Grimoire, a 'black clover'!", 
    "comments":"Wow another special MC with special MC priviledges and op powers. But good worldbuilding ig", "tags": "action adventure comedy mystery fantasy superpowers" },
  { "title": "Chainsaw Man", "imageLink": "https://meo.comick.pictures/4ejkEY.jpg", "type": "Manga | 210", "desc": "7.5/10", "author": "Tatsuki Fujimoto", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Broke young man + chainsaw dog demon = Chainsaw Man! The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers! ", 
    "comments":"They did my boy Denji so dirty bro. The story is pretty good though and I liked the war devil", "tags": "thriller mystery action drama sci-fi superpowers" },
  { "title": "Demon Slayer", "imageLink": "https://meo.comick.pictures/MLbGQa.jpg", "type": "Manga | 200", "desc": "8/10", "author": "Koyoharu Gotouge", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family! In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the demon who ruined his life.", 
    "comments":"Good storyline but I thought there was too much plot armor at the end. Anime animations are crazy though", "tags": "thriller mystery action adventure comedy fantasy historical" },
  { "title": "Tokyo Ghoul", "imageLink": "https://meo.comick.pictures/aYZWz.jpg", "type": "Manga | 140", "desc": "6.5/10", "author": "Sui Ishida", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "Lurking within the shadows of Tokyo are frightening beings known as 'ghouls,' who satisfy their hunger by feeding on humans once night falls. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh.", 
    "comments":"I don't really like the story but the ghouls are aura farming so much", "tags": "sci-fi thriller action fantasy mystery superpowers" },
  { "title": "Food Wars!", "imageLink": "https://meo.comick.pictures/JE47p.jpg", "type": "Manga | 320", "desc": "8/10", "author": "Yūto Tsukuda & Shun Saeki", "dateOfRelease": "2012", "status": "Completed", 
    "summary": "Yukihira Souma's dream is to become a full-time chef in his father's restaurant and surpass his father's culinary skill. But just as Yukihira graduates from middle schools his father, Yukihira Jouichirou, closes down the restaurant to cook in America. Although downtrodden, Souma's fighting spirit is rekindled by a challenge from Jouichirou which is to survive in an elite culinary school where only 10% of the students graduate. Can Souma survive?", 
    "comments":"Underrated af the competition arcs are so good as long as you ignore the strange parts", "tags": "comedy slice-of-life drama school-life" },
  { "title": "The Hero Is Overpowered but Overly Cautious", "imageLink": "https://meo.comick.pictures/wEvAD.jpg", "type": "Manga | 40", "desc": "6.5/10", "author": "Light Tuchihi", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "The story begins when the goddess Ristarte summons a hero to help her clear the hard-mode video game–like world. The hero, Seiya, is exceptional in every way, but he is incredibly cautious. He does things like buy three sets of armor (one to wear, a spare, and a spare for the spare) and go full power against weak slimes (just in case).", 
    "comments":"Alright, good plot twist ig but the story was lacking and I did not care for the side characters", "tags": "fantasy adventure comedy drama reincarnation" },
  { "title": "Death Note", "imageLink": "https://meo.comick.pictures/AKkv7.jpg", "type": "Manga | 110", "desc": "7.5/10", "author": "Tsugumi Ohba & Takeshi Obata", "dateOfRelease": "2003", "status": "Completed", 
    "summary": "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. High school student and prodigy Light Yagami stumbles upon the Death Note and tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be. ", 
    "comments":"TS had so much potential but then it got so boring when L died and I was so lost :(", "tags": "thriller mystery drama" },
  { "title": "Kaiju No.8", "imageLink": "https://meo.comick.pictures/NrqGdo.jpg", "type": "Manga | 130", "desc": "7/10", "author": "Naoya Matsumoto", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "Kafka hopes to one day keep his pact with his childhood friend Mina to join the Japan Defense Force and fight by her side. But while she’s out neutralizing kaiju as Third Division captain, Kafka is stuck cleaning up the aftermath of her battles. When a sudden rule change makes Kafka eligible for the Defense Force, he decides to try out for the squad once more. There's just one problem. He's made the Defense Force's neutralization list under the code name Kaiju No. 8.", 
    "comments":"Ok story and concept but its too generic. Modern AoT much?", "tags": "action drama thriller sci-fi superpowers" },
  { "title": "Undead Unluck", "imageLink": "https://meo.comick.pictures/vobwa.jpg", "type": "Manga | 240", "desc": "7/10", "author": "Yoshifumi Tozuka", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "As an UNLUCKY girl prepares to face her death, an UNDEAD who desperately wants to die appears before her! Vicious, violent and buck naked!", 
    "comments":"Unique concept and cute interactions. I should honestly get back to this one I think it ends well", "tags": "comedy action drama superpowers" },
  { "title": "Delicious in Dungeon", "imageLink": "https://meo.comick.pictures/Q76Da.jpg", "type": "Manga | 100", "desc": "6.5/10", "author": "Ryoko Kui", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "After his sister is devoured by a dragon and losing all their supplies in a failed dungeon raid, Laios and his party are determined to save his sister before she gets digested. Completely broke and having to resort to eating monsters as food, they meet a dwarf who will introduce them to the world of Dungeon Meshi - delicious cuisine made from ingredients such as the flesh of giant bats, walking mushrooms, or even screaming mandrakes.", 
    "comments":"Honestly not for me but I can see it being a really nice comfort manga", "tags": "comedy adventure fantasy" },
  { "title": "Kindergarten Wars", "imageLink": "https://meo.comick.pictures/1vOxkR.jpg", "type": "Manga | 110", "desc": "7/10", "author": "You Chiba", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "Welcome to Kindergarten Noir, an exclusive school catering to children of the global elite! Rita, one of the teachers, has been on the hunt for a boyfriend but has had absolutely zero luck so far. One day, an assassin comes after one of the children... and he's totally dreamy?! Dive into this action-packed rom-com as it unfolds inside the world’s 'safest' kindergarten!", 
    "comments":"Not much to say tbh. Got lost in the plot somewhere but its funny", "tags": "comedy action slice-of-life drama" },
  { "title": "Tomodachi Game", "imageLink": "https://meo.comick.pictures/dGBbQR.png", "type": "Manga | 130", "desc": "9/10", "author": "Mikoto Yamaguchi & Yuki Sato", "dateOfRelease": "2013", "status": "Completed", 
    "summary": "Katagiri Yuichi believes that friends are more important than money, but he also knows the hardships of not having enough funds. He works hard to save up in order to go on the high school trip, because he has promised his four best friends that they will all go together. However, after the class's money is all collected, it is stolen! Soon afterward, the five of them are kidnapped, and wake up in a strange room with a character from a short-lived anime. Apparently, one of them has entered them into a 'friendship game' in order to take care of their massive debt.", 
    "comments":"This was genuinely so good I always think about tomodachi game I wish I could read it for the first time again", "tags": "thriller drama mystery" },
  { "title": "Assassination Classroom", "imageLink": "https://meo.comick.pictures/ky4zP.jpg", "type": "Manga | 180", "desc": "8.5/10", "author": "Yūsei Matsui", "dateOfRelease": "2012", "status": "Completed", 
    "summary": "In the blink of an eye, the night sky is forever changed when, with a great explosion, the moon is blasted into a permanent crescent. Confronting the governments of the world, a yellow tentacled monster boasts that it was the one responsible for the catastrophe, and in a year's time, it will do the same to Earth. Zooming around at Mach 20, the creature makes a peculiar demand: a teaching position at the prestigious Kunugigaoka Junior High School. Desperate to keep the creature in one place, the government agrees, and so the students of Class 3-E find themselves faced with an impossible task—assassinate the creature responsible for destroying the moon.", 
    "comments":"Bro the ending was so sad I took like two days to grieve. Character development goes crazy", "tags": "action comedy sci-fi slice-of-life school-life" },
  { "title": "The Apothecary Diaries", "imageLink": "https://meo.comick.pictures/r2ODo.png", "type": "Manga | 80", "desc": "7.5/10", "author": "Natsu Hyūga & Nekokurage", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Maomao, a young woman trained in the art of herbal medicine, is forced to work as a lowly servant in the inner palace. Though she yearns for life outside its perfumed halls, she isn’t long for a life of drudgery! Using her wits to break a “curse” afflicting the imperial heirs, Maomao attracts the attentions of the handsome eunuch Jinshi and is promoted to attendant food taster. But Jinshi has other plans for the erstwhile apothecary, and soon Maomao is back to brewing potions and…solving mysteries?!", 
    "comments":"I like maomao but only her. The connection between cases is really cool though", "tags": "historical adventure comedy romance drama mystery" },
  { "title": "Sakamoto Days", "imageLink": "https://meo.comick.pictures/MRr4E.jpg", "type": "Manga | 220", "desc": "7/10", "author": "Yuto Suzuki", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen. But one day...he fell in love! Retirement, marriage, fatherhood and then... Sakamoto gained weight! The chubby guy who runs the neighborhood store is actually a former legendary hitman! Can he protect his family from danger?", 
    "comments":"Mostly in this for nagumo cuz I saw edits of him but anyways....fun story but a little far-fetched", "tags": "action comedy drama slice-of-life" },
  { "title": "Phantom Busters", "imageLink": "https://meo.comick.pictures/w7py8M.jpg", "type": "Manga | 20", "desc": "7/10", "author": "Neo Shoco", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "High school freshman Eugene Korekishi is an honor student with zero psychic powers who does not believe in ghosts! However, his high school life takes an unexpected turn when he meets a maverick boy named Mogari Shishikuno, who exorcises ghosts by eating them!", 
    "comments":"Didn't get too far into this but the characters are really cool. Not sure how it can get much better though", "tags": "comedy adventure slice-of-life mystery school-life superpowers" },
  { "title": "Haikyu!!", "imageLink": "https://meo.comick.pictures/O8kRNO.jpg", "type": "Manga | 400", "desc": "8/10", "author": "Haruichi Furudate", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "Shoyo Hinata is out to prove that in volleyball you don’t need to be tall to fly! Ever since he saw the legendary player known as “the Little Giant” compete at the national volleyball finals, Shoyo Hinata has been aiming to be the best volleyball player ever! Who says you need to be tall to play volleyball when you can jump higher than anyone else?", 
    "comments":"I thought timeskip was a little too fast-paced but this was so fun to read and I cried a little too much", "tags": "sports action comedy school-life" },
  { "title": "Made in Abyss", "imageLink": "https://meo.comick.pictures/10BWD.jpg", "type": "Manga | 70", "desc": "7/10", "author": "Akihito Tsukushi", "dateOfRelease": "2012", "status": "Ongoing", 
    "summary": "The enormous cave system, known as the Abyss, is the last unexplored place in the world. Generations of bold adventurers have been drawn by the cryptic depths of the Abyss. In course of time those brave enough to explore the dangerous pit came to be known as 'Delvers.' In Orth, the town at the edge of the Abyss, there lives a little orphan named Riko, who dreams of becoming as great a delver as her mother was and solving the great mystery of the pit. One day, exploring the murky depths, she stumbles upon a little boy who turns out to be a robot... ", 
    "comments":"Story is good, but the author is a little bit sick in the head cuz why are there naked children ", "tags": "drama fantasy mystery thriller adventure" },
  { "title": "Gachiakuta", "imageLink": "https://meo.comick.pictures/GXZxr7.jpg", "type": "Manga | 150", "desc": "7/10", "author": "Kei Urana", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "A slum where criminals' descendants live... People beyond the border look down and discriminate them as 'tribal people.' Rudo, an orphan boy, lives in the slum with his foster parent, Legt, and makes a living using his extraordinary physical abilities. However, one day, he was accused for a crime he didn't commit., and is thrown into the abyss which even the slum people fear.", 
    "comments":"Also didn't get very far cuz MC got a little irrelevant but the design and drip goes really hard", "tags": "action adventure sci-fi superpowers" },
  { "title": "Dandadan", "imageLink": "https://meo.comick.pictures/w7X6q7.jpg", "type": "Manga | 200", "desc": "7.5/10", "author": "Yukinobu Tatsu", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "Ghosts, monsters, aliens, teen romance, battles...and the kitchen sink! This series has it all! Takakura, an occult maniac who doesn't believe in ghosts, and Ayase, a girl who doesn't believe in aliens, try to overcome their differences when they encounter the paranormal! This manga is out of this world!", 
    "comments": "I read this at nighttime and it makes me feel high. Very cute cast of characters.", "tags": "mystery sci-fi romance comedy fantasy thriller school-life superpowers" },

  { "title": "Sweet Home", "imageLink": "https://meo.comick.pictures/Goko6.jpg", "type": "Manhwa | 140", "desc": "9.5/10", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "After an unexpected family tragedy, a reclusive high school student is forced to leave his home -- only to face something much scarier: a reality where monsters are trying to wipe out humanity. Now he must fight alongside a handful of reluctant heroes to try and save the world before it's too late.", 
    "comments": "Also highly recommend, this is the one that got me into manhwas bro I love Carnby Kim", "tags": "sci-fi action drama thriller horror mystery survival superpowers" },
  { "title": "Omniscient Reader's Viewpoint", "imageLink": "https://meo.comick.pictures/p7j8l.jpg", "type": "Manhwa | 270", "desc": "9/10", "author": "Sing Shong (adapted by Sleepy-C, art by Redice Studio)", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "Dokja was an average office worker whose sole interest was reading his favorite web novel 'Three Ways to Survive the Apocalypse.' But when the novel suddenly becomes reality, he is the only person who knows how the world will end. Armed with this realization, Dokja uses his understanding to change the course of the story, and the world, as he knows it.", 
    "comments": "Peak writing I love the concept of the reader powers and also Dokja is underrated af", "tags": "adventure action fantasy drama system superpowers" },
  { "title": "The Boxer", "imageLink": "https://meo.comick.pictures/0xvRq.png", "type": "Manhwa | 120", "desc": "9/10", "author": "JH", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "Having suffered ruthless bullying for the better part of his life, 17-year-old Yu has become emotionally numb and dissociated from reality, no longer able to act like a normal human being. Although he possesses the exceptional talent to dodge punches, Yu prefers to let his perpetrators beat him down as he finds no meaning in his survival. An unimaginable talent without rivalry. Will it prove itself to be a blessing or a curse?", 
    "comments": "Peak story as someone who knows nothing about boxing. Lowkey inspirational", "tags": "sports action" },
  { "title": "Operation: True Love", "imageLink": "https://meo.comick.pictures/L03pa.jpg", "type": "Manhwa | 110", "desc": "8.5/10", "author": "Kkokkalee (art by Dledumb)", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "It's hard dating someone who won't give you the time of day. Su-ae Shim knows that better than anyone, having dated her indifferent boyfriend, Minu Kang, for years. She sometimes wishes she could be more like her charismatic stepsister, Ra-im, who seems to have it all. But life takes a turn for the weird when Su-ae discovers Jellypop, a sentient flip phone, in her locker. Jellypop has a lot to say about her love life, especially as Su-ae drifts further away from Minu and finds herself running into Minu’s friend, Eunhyeok.", 
    "comments": "Good love triangle but Eunhyeok you fucking threw wtf", "tags": "romance drama slice-of-life school-life system" },
  { "title": "Return of the Blossoming Blade", "imageLink": "https://meo.comick.pictures/mprkk.jpg", "type": "Manhwa | 150", "desc": "8.5/10", "author": "Biga (adapted from the novel by Plum)", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "Chung Myung, The 13th Disciple of the Mount Hua Sect, One of the 3 Great Swordsmen, Plum Blossom Sword Saint, defeated Chun Ma, who has brought destruction and disarray onto the world. After the battle, he breathes his last breath on top of the headquarter mountain of the Heavenly Demon Sect. He is reborn after 100 years in the body of a child. ……What? The Mount Hua Sect has fallen? What kind of nonsense is that!? ", 
    "comments": "This has to be my favorite murim read I love Chung Myung he's so snarky", "tags": "historical fantasy comedy action murim reincarnation" },
  { "title": "Weak Hero", "imageLink": "https://meo.comick.pictures/kov2z.jpg", "type": "Manhwa | 270", "desc": "8.5/10", "author": "Seopass & Razen", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "Once the bullies target you, it’s game over. The school is run by tyrants whose favorite hobby is tormenting the weakest kids in class. But then Gray arrived. This mysterious new student threatens to dismantle the established order. He may be small in stature, but his calculative and brutal fighting leaves unsuspecting opponents lying on the floor begging for mercy. Now the school's toughest bullies have to scramble to take down this new and unusual hero.", 
    "comments": "Surprisingly good for a korean high school bully situation thing and there are so many OP references :D", "tags": "action drama slice-of-life school-life" },
  { "title": "Solo Leveling", "imageLink": "https://meo.comick.pictures/v8kZna.jpg", "type": "Manhwa | 200", "desc": "8.5/10", "author": "Chugong (adapted by Dubu/Redice Studio)", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "In a world where hunters—human warriors who possess supernatural abilities—must battle deadly monsters to protect all mankind from certain annihilation, a notoriously weak hunter named Sung Jin-woo finds himself in a seemingly endless struggle for survival. One day, after narrowly surviving an overwhelmingly powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and in turn, gives him the unique ability to level up in strength. ", 
    "comments": "Lowk best one if you wanna get started reading. Its the frankenstein of dungeon/level up system manhwas", "tags": "action adventure fantasy mystery system reincarnation superpowers" },
  { "title": "Days of Hana", "imageLink": "https://meo.comick.pictures/rZj1p.jpg", "type": "Manhwa | 110", "desc": "8.5/10", "author": "Seok-Woo", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "A werewolf love for a human girl In a cold winter, little girl Hana and her family found a boy covered in blood, the boy is a werewolf baby. They picked up the boy, named him Haru, treated him and accepted him as a family member. A human girl and a werewolf boy who grew up over time. From now on their story begins.", 
    "comments": "Its lowkey human and a furry but I it was soooo sad and I cried too much reading it", "tags": "romance drama action mystery school-life" },
  { "title": "The Ember Knight", "imageLink": "https://meo.comick.pictures/d5pdn.jpg", "type": "Manhwa | 200", "desc": "7.5/10", "author": "Studio Inus & LICO", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "When Nagyunn’s twin brother, Najin, is murdered before his very eyes, he vows to avenge his brother’s death by assuming Najin’s identity. But although the two may look alike, when it comes to fighting, Nagyunn lacks the talent and skill his brother possessed. In order to successfully execute his plot for revenge, Nagyunn resolves to train himself to become the prodigious knight-in-training his brother once was.", 
    "comments": "I love a weak MC that pretends and somehow things work out, this one kinda faded tho", "tags": "fantasy action drama mystery" },
  { "title": "My Gently Raised Beast", "imageLink": "https://meo.comick.pictures/451bz.jpg", "type": "Manhwa | 100", "desc": "7.5/10", "author": "Early Flower (art by Teava)", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "Blondina is living a real-life Cinderella story. After growing up poor and enduring a difficult childhood, she discovers that she is a princess of the Ates empire. However, her estranged father and half-siblings give her the cold shoulder when she moves into the palace, and Blondina must keep a low profile. That all changes when she befriends Amon, a cat-like creature with mysterious intentions. For years, creatures like Amon and humans have struggled to live in harmony. Can Blondina and Amon’s friendship bring peace, or will it deepen the rift between their people?", 
    "comments": "Now this is good royalty romance its so cute and there are cats", "tags": "romance drama fantasy royalty" },
  { "title": "Killstagram", "imageLink": "https://meo.comick.pictures/DDqYZ.jpg", "type": "Manhwa | 40", "desc": "7.5/10", "author": "Ryoung", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "Remi Do has everything—she's super pretty, has the best brand sponsorships on social media, and gets 10,000 likes within seconds of posting a selfie. Oh, and she also has a serial-killing stalker following her every move.", 
    "comments": "Art style is a lil strange but I loved the thriller part and the twist is so sad", "tags": "horror thriller action mystery" },
  { "title": "Shotgun Boy", "imageLink": "https://meo.comick.pictures/arqYv.jpg", "type": "Manhwa | 70", "desc": "8/10", "author": "Carnby Kim & Hongpil", "dateOfRelease": "2021", "status": "Completed", 
    "summary": "While running for his life in the woods, bullying victim Gyuhwan stumbles upon a shotgun and just enough shells for his classmates. It’s a recipe for disaster. But fate takes an unexpected turn when he returns to find his classmates under attack by brain-eating creatures. Now, the only thing that stands in the way of their ravenous feast is a boy with a shotgun.", 
    "comments": "Prequel to Sweet Home, personally I think it's slightly worse. Read this after though", "tags": "sci-fi horror mystery thriller drama action school-life survival" },
  { "title": "The Horizon", "imageLink": "https://meo.comick.pictures/d5odz.jpg", "type": "Manhwa | 20", "desc": "7.5/10", "author": "JH", "dateOfRelease": "2016", "status": "Completed", 
    "summary": "Two children unexpectedly meet in the midst of war. After running away from the chaos, they come across a long empty road. With no adults to rely on, the two strangers, now become friends, walk alongside each other to see what's at the end of the road. All they hope is to keep being able to move forward. Just what kind of trials and tragedy awaits them during their journey for survival?", 
    "comments": "That one scene killed me omg I can't believe I cried from a story less than fifty chapters", "tags": "thriller mystery" },
  { "title": "Unreachable Girl", "imageLink": "https://meo.comick.pictures/x6p.png", "type": "Manhwa | 100", "desc": "7/10", "author": "Jangbi (art by Gyeol)", "dateOfRelease": "2022", "status": "Completed", 
    "summary": "Han Tae-Woong is a financially unstable high school student trying to support his single mother. His dream is to become a bodyguard after he graduates. He is destined to cross paths with Kim Gavin, the granddaughter of Korea's richest chairman. Since she is stuck in a trashy high school, she gets continuously bullied. Thus, Tae-Woong is hired by her grandmother's company to protect her. The issue lies in her HATING when others invade her privacy. ", 
    "comments": "I love this trope but the girl pmo sometimes. Also like the author, might reread sometime soon", "tags": "romance comedy drama slice-of-life school-life" }, 
{ "title": "Nice to Meet You", "imageLink": "https://k07.mbwww.org/thumb/W600/ampi/6b5/6b5fab4bf0f036e86d1a1f4561283c00612af2c7_600_960_58945.jpeg", "type": "Manhwa | 80", "desc": "6/10", "author": "Wishroomness", "dateOfRelease": "2018", "status": "Completed", 
    "summary": "A ditsy university student Mew finds a lost student card. Instead of doing the sensible thing, Mew decides to let fate take the wheel and try something silly. Little did she know, she would be confronting the owner of the card, Daze who has some things to say about what she did. Did Mew make the biggest mistake of her life? or the best decision of her life?", 
    "comments": "Also cute love story but I can't believe who she settled for bro", "tags": "romance drama slice-of-life school-life" },
  { "title": "Pyramid Game", "imageLink": "https://meo.comick.pictures/DGnEY.png", "type": "Manhwa | 100", "desc": "5.5/10", "author": "Dalgonyak", "dateOfRelease": "2022", "status": "Completed", 
    "summary": "In the 5th period, on the last Thursday of every month, a vicious ranking game begins. Will the transfer student, Sung Sooji be able to survive in this terrifying classroom?", 
    "comments": "Pretty good psychological popularity game type with bullying, though I think the show would be better", "tags": "thriller drama mystery school-life" },
  { "title": "It's Mine", "imageLink": "https://meo.comick.pictures/bqNe4.jpg", "type": "Manhwa | 160", "desc": "7/10", "author": "LuckS", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "There’s nothing that Yohan Do doesn’t know about his crush, Dajeong. Where she sits in class, works after school... and even where she lives. But unable to approach her, he watches her every move from afar and will do anything to protect her. Anything.", 
    "comments": "Being hot does not excuse being a stalker bro", "tags": "romance mystery thriller drama school-life" },
  { "title": "Bastard", "imageLink": "https://meo.comick.pictures/p1Do0.jpg", "type": "Manhwa | 90", "desc": "7/10", "author": "Carnby Kim & Youngchan Hwang", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "Children that are unfriendly or unfair to their parents are called bastards. Jin is an average high school student and lives with his father, known as a very gentle and friendly person, CEO of a successful company. Even so, Jin suffers bullying in school because of his fragile appearance, a glass eye and quiet personality. He also has a dark secret that no one knows: he is the accomplice of a serial killer, His dad.", 
    "comments": "Kind of creepy and MC is like a loser, its more psychological", "tags": "horror thriller mystery romance" },
  { "title": "Flawed Almighty", "imageLink": "https://meo.comick.pictures/2rDdL.png", "type": "Manhwa | 120", "desc": "6.5/10", "author": "Carnby Kim, Song Rae-Hyeon", "dateOfRelease": "2023", "status": "Completed", 
    "summary": "Do good or go to hell. The conditions of his new curse seem simple enough for once-hopeful hoodlum Jeonji Kim. Or so it seems when his perky guardian angel shows up on his doorstep one day and heals his limp. But will simply going through the motions of helping people be enough to appease a petty god with a grudge?", 
    "comments": "It's a cool concept but it fell off and got boring. ", "tags": "action mystery drama" },
  { "title": "Mosquito War", "imageLink": "https://meo.comick.pictures/876oD.jpg", "type": "Manhwa | 50", "desc": "6.5/10", "author": "Jeong Ji-Hoon", "dateOfRelease": "2021", "status": "Completed", 
    "summary": "After a genetic mutation, mosquitoes have become the strongest predator on the planet. Will mankind be able to fight back?", 
    "comments": "Same author but this one is more confusing and I don't like the 'determination of humanity' ahh", "tags": "thriller sci-fi fantasy action survival" },
  { "title": "Remarried Empress", "imageLink": "https://meo.comick.pictures/jgnvQ.jpg", "type": "Manhwa | 220", "desc": "6/10", "author": "Alphatart, Sumpul", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "Navier was the perfect Empress and a masterful administrator and regent for the empire; however, she and the Emperor were not lovers, and the Emperor wanted a wife, not a colleague. And so, he sought a concubine and placed a secretly ambitious slave girl beside him. That was fine, as she was willing to allow him his concubine of choice… until Navier heard the Emperor promised the slave girl the Empress' position. After much agonizing, Navier decided to marry the king of the neighboring kingdom.", 
    "comments": "Ehh its alright but imo they took too long to get remarried and afterwards it just got boring", "tags": "romance historical fantasy drama royalty" },
  { "title": "Lookism", "imageLink": "https://meo.comick.pictures/g6X10W.jpg", "type": "Manhwa | 560", "desc": "7/10", "author": "Park Tae Joon", "dateOfRelease": "2014", "status": "Ongoing", 
    "summary": "Park Hyung-Seok is an unattractive loner who wakes up in a different body. Now tall, handsome, and cooler than ever in his new form, Hyung-Seok aims to achieve everything he couldn't before. How far will he go to keep his body... and his secrets? ", 
    "comments": "Art style improvement arc jeez. Its a funny concept and the characters are actually so well written", "tags": "romance comedy action slice-of-life school-life" },
  { "title": "One Day, Suddenly, Seoul Is", "imageLink": "https://meo.comick.pictures/67Q1B.jpg", "type": "Manhwa | 50", "desc": "7/10", "author": "Park Chang-geun", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "Yeon-woo is on a school trip to Seoul, and is excited thinking that he can finally get along with his one classmate, So-yeon, whom he has a crush on. However, during this time, unidentified cells appeared in front of Yeon-woo’s class, who were sightseeing in Seoul. The mutant cells manifestation quickly turns Yeon-woo and his classmates’ school trip into hell as anyone who comes into contact with the cells will become a hideous monster that wants to consume anything with flesh...!", 
    "comments": "Nice standard zombie apocalypse read. Art is a little creepy and story is meh, but enjoyable still", "tags": "horror thriller action drama sci-fi survival" },
  { "title": "Revelation of Youth", "imageLink": "https://meo.comick.pictures/vRyXNJ.jpg", "type": "Manhwa | 110", "desc": "7/10", "author": "Hanseo", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Lim Chungah is a highschool student whose household got swindled by her own trusted uncle. With her parents leaving in pursuit of finding her uncle, she is temporarily left alone to live in her uncle's empty house. HOWEVER, what if Chungah's family weren't the only ones duped by her uncle's con? Enter the Millenium Adventist Church, the biggest cult in their community and one of her uncle's scam victims. Lim Chungah finds herself cohabitating with Kim Yohan, the cult leader's one and only son.", 
    "comments": "The romance is soooo cute and the k*ss scenes are great. Kinda got lost in the plot tho", "tags": "romance drama slice-of-life school-life" },
  { "title": "Villain With A Crush", "imageLink": "https://meo.comick.pictures/bJEBy.jpg", "type": "Manhwa | 120", "desc": "7.5/10", "author": "Seyoon", "dateOfRelease": "2021", "status": "Completed", 
    "summary": "A world where special police exist to deal with criminals with unique abilities. An unreasonable villain comes to Han Doryeong, the strongest special police officer who was spending peaceful days! But something’s wrong with this criminal? The worst villain who loves the strongest hero, “Park Rosa’s” crazy love story.", 
    "comments": "Art is yummy and I like the styles of both leads. Hilarious situation but I can't see it ending well", "tags": "fantasy romance drama comedy superpowers" },
  { "title": "Tomb Raider King", "imageLink": "https://meo.comick.pictures/8QlXe.jpg", "type": "Manhwa | 410", "desc": "7.5/10", "author": "Yoonz (Redice Studio)", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "The God’s Tombs started to appear around the world. Due to the relics within these tombs, many were able to wield these legendary powers for themselves, while others became enslaved to these users. However, a Tomb Raider appears with the purpose of robbing these relics. The Tomb Raider King. This is the story of a revived Tomb Raider who will do whatever he can to claim all the tombs and relics for himself!", 
    "comments": "Kinda ORV copy?? It's different enough since MC is like an asshole and doesn't care for his friends", "tags": "action adventure fantasy system" },
  { "title": "The Greatest Estate Developer", "imageLink": "https://meo.comick.pictures/mnWxYo.jpg", "type": "Manhwa | 200", "desc": "9.5/10", "author": "Moon Baek Kyung, Lee Hyunmin, Kim Hyun-Soo", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "When civil engineering student Suho Kim falls asleep reading a fantasy novel, he wakes up as a character in the book. Suho is now in the body of Lloyd Frontera, a lazy noble who loves to drink, and whose family is in a mountain of debt. Using his engineering knowledge, Suho designs inventions to avert the terrible future that lies in wait for him.", 
    "comments": "This might be my biggest recommendation, it's so good omfg. I literally cried when I caught up bro this is so peak. ", "tags": "comedy action adventure fantasy historical reincarnation system royalty superpowers" },
  { "title": "Mercenary Enrollment", "imageLink": "https://meo.comick.pictures/rKold.jpg", "type": "Manhwa | 250", "desc": "7.5/10", "author": "YC & Rak Hyun", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be reunited with his family in Korea, where food and shelter are plenty and everything seems peaceful. But Ijin will soon learn that life as a teenager is a whole other feat of survival. ", 
    "comments": "Dropped cuz it's boring but it's still good quality. Don't like MCs that are too nonchalant tho", "tags": "action drama school-life" },
  { "title": "The Ki Sisters", "imageLink": "https://meo.comick.pictures/Nrq8pm.jpg", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Bumbae", "dateOfRelease": "2022", "status": "Completed", 
    "summary": " Welcome… to the house of the Ki sisters: Jang-nyeo, Sal-gyo, Jae-rim, and Jenny. Homeschooled and raised in isolation, the four sisters and their inadvertently menacing demeanor may strike terror into the faint-hearted, but don’t judge a book by its cover: the youngest, Jenny Ki, is a scary-- I mean, starry-eyed hopeless romantic who’s out to find love! The problem is… everything she knows about love is from romance novels. Will Jenny put the Ki in “kiss” or “kill”?", 
    "comments": "The facial expressions are so funny and the story is like heartwarming", "tags": "comedy drama slice-of-life" },
  { "title": "SSS Class Revival Hunter", "imageLink": "https://meo.comick.pictures/YO4qX.jpg", "type": "Manhwa | 150", "desc": "7.5/10", "author": "Shin Noah, Bill K", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "In the mysterious, RPG dungeon-like Tower, Gongja Kim lives a mundane existence, envying all the star hunters. One day, his wish for more is granted with a legendary skill to copy others’ abilities… at the cost of his life. Before he can make sense of it, he’s killed by the #1 hunter, the Flame Emperor! But this activates his skill and now he’s copied a new one, the ability to travel back in time upon death.", 
    "comments": "I should get back to this one but I think I was burnt out on the powerscaling system genre. Still seems promising tho", "tags": "action fantasy reincarnation system superpowers" },
  { "title": "Special Civil Servant", "imageLink": "https://meo.comick.pictures/oam1Z4.jpg", "type": "Manhwa | 50", "desc": "8/10", "author": "Kwon Sora, Seo Jaewon, Baesaem", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "Socially-awkward Maru Han bombs his fifth attempt at getting a dream job in the civil service. But after a strange creature attacks him in the mountains, he finds himself recruited into the Special Civil Service for the Ministry of Environment. This secret organization is dedicated to fighting nachal, human-devouring demons who appear in clouds of yellow dust.", 
    "comments": "Why is he kinda...giving Denji from CSM...like the fanart of him is kinda wild....", "tags": "fantasy action drama thriller superpowers" },
  { "title": "Revenge of the Baskerville Bloodhound", "imageLink": "https://meo.comick.pictures/N6n5Xz.jpg", "type": "Manhwa | 120", "desc": "7.5/10", "author": "Seol Arang", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Despite being the shunned illegitimate son of the brood, Vikir served his family faithfully, only to meet his untimely demise at his father’s hands. But when he is inexplicably reborn with a second chance at life, Vikir, armed with the memories and knowledge of his past, swears to rise above the pack and take his revenge.", 
    "comments": "Another standard magic reincarnation similar to TBATE, but I stopped reading after the harem allegations", "tags": "drama action fantasy adventure superpowers reincarnation" },
  { "title": "Life of a Quack Healer", "imageLink": "https://meo.comick.pictures/gO4E8-s.jpg", "type": "Manhwa | 110", "desc": "6.5/10", "author": "Nayen, 14 strokes", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "One day, Seunghyeon Kang woke up to find himself in an unfamiliar world, on the continent of Azeul. At that moment, a status window pops up: [Your class is Healer?] Wait, but he doesn’t have a single healing skill?! And so begins the life of a quack Healer who can’t cast Heal as he struggles to find a way back to his home!", 
    "comments": "Not anything notable, smart MC but he's a little too cold and doctor-y for me. Dentist flashbacks iykyk", "tags": "drama fantasy superpowers system" },
  { "title": "Untouchable", "imageLink": "https://meo.comick.pictures/kRXjbJ.jpg", "type": "Manhwa | 140", "desc": "6.5/10", "author": "massstar", "dateOfRelease": "2014", "status": "Completed", 
    "summary": "Sia Lee is a modern-day vampire who absorbs energy from humans by touching them instead of drinking their blood. She has been desperate to touch Jiho since the day he moved in next door—but he's a germaphobe. Will Sia best his mysophobia and touch Jiho?", 
    "comments": "Hahahaha…no one is untouchable around me……I'm sorry", "tags": "romance slice-of-life drama" },
  { "title": "Maybe Meant To Be", "imageLink": "https://meo.comick.pictures/2NRb7Z.png", "type": "Manhwa | 120", "desc": "6.5/10", "author": "Damcho, Honey Skein", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "‘How long have I been laying down at home…?’ Han Jia, who is turning 32 this year, suffers because of the pressure given by people around her that keep telling her to get married. Around the same time, Jin Mincheol, her childhood friend who came to Jia’s hometown for holiday, is having the same problem. Then, the two people got married just like that. Now that they have married….. ‘Huh? We match each other more than I thought?’", 
    "comments": "Cute romance trope iirc but honestly the ML isn't that good looking. Maybe I just don't like glasses", "tags": "romance slice-of-life comedy" },
  { "title": "Villain To Kill", "imageLink": "https://meo.comick.pictures/v8pMmy.jpg", "type": "Manhwa | 190", "desc": "6.5/10", "author": "EunJi, Pupin", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "There are two kinds of people with special abilities: villains, who are driven by their evil desires, and psykers, who pursue justice and work against villains. Cassian Lee is a very powerful psyker with a good heart. But one day, when he visits his friend in Greece, things take a wrong turn. Following an unexpected chain of events, Cassian ends up in the body of a Korean high school boy... who has just become a villain!", 
    "comments": "I thought this concept was pretty cool back then but now its kinda overused. Still a good supervillain story tho", "tags": "fantasy action superpowers reincarnation system" },
  { "title": "Genius Archer's Livestreaming", "imageLink": "https://meo.comick.pictures/5pq0ep.png", "type": "Manhwa | 50", "desc": "7/10", "author": "CarroToon, Buzil, Mung Mung Kim", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Former archery prodigy Yoo Sanghyun was destined for greatness until an injury forced him to quit. Frustrated, he leaves it all behind to pursue game streaming. Leveraging his incredible archery skills and the charm of his noob character, he quickly rises to fame as 'Almond.' Now, he's determined to dominate the gaming world, but will his virtual success translate into something greater in real life?", 
    "comments": "I mean solid read, I randomly found it on the trending part but there's nothing special so far", "tags": "sports adventure system" },
  { "title": "Inso's Law", "imageLink": "https://meo.comick.pictures/ERoWe.jpg", "type": "Manhwa | 250", "desc": "7/10", "author": "A Hyeon, Yu Han-ryeo", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "Your average student Ham Dan-I, whose hobby was reading internet novels, wakes up and finds a beautiful, novel-like heroine. But even in the world of fantasy novels, her role is no different. Stuck as the childhood friend of the heroine, her normal everyday life comes to an end, becoming more twisted by her strong character.", 
    "comments": "Uhhh reverse harem?? I literally couldn't pick a side and I lowkey think FL is leading them on...", "tags": "romance drama slice-of-life school-life reincarnation" },
  { "title": "He Can't Be This Dumb", "imageLink": "https://meo.comick.pictures/KYQN4.jpg", "type": "Manhwa | 90", "desc": "7/10", "author": "Han Ji-hye", "dateOfRelease": "2022", "status": "Completed", 
    "summary": "Renowned for its exclusivity, only the children of Korea’s elite can attend International Island High. But when Kang Doha, an ordinary girl from an average family, is given a lucky chance to enroll, she’s thrust into an unfamiliar world of money and power. Despite trying to fly under the radar, she somehow ends up in the same dorm as Rowoon, the most popular guy in school! He seems to have it all, but when it comes to girls, he’s completely clueless.", 
    "comments": "Funny concept but I literally cannot get over the guy's personality it's so bad. Maybe because he's dumb..", "tags": "comedy romance drama royalty" },
  { "title": "Famous Restaurant", "imageLink": "https://meo.comick.pictures/ez28bX.jpg", "type": "Manhwa | 30", "desc": "7/10", "author": "Mingyu", "dateOfRelease": "2021", "status": "Completed", 
    "summary": " Despite being unemployed, In-Gong lies to his high school friends that he’s the owner of a MatJib, a term for a well-regarded local restaurant. To save face, In-Gong resolves to make this lie a reality and purchases an old, desolate restaurant. Business is struggling until one day he discovers an unknown seasoning left by the foreigner that lives above his shop, which immediately causes things to turn around. If only he had known just what that seasoning truly was…", 
    "comments": "Good thriller ig but a little short. Kinda disappointed there wasn't a bigger twist but wtv", "tags": "thriller drama mystery" },
  { "title": "Dreaming Freedom", "imageLink": "https://meo.comick.pictures/gqyJR.jpg", "type": "Manhwa | 170", "desc": "8/10", "author": "2L", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Jungmin Choi is severely bullied in high school because of a fallout with her childhood best friend Joohyun Ha. Her only solace comes from tormenting Joohyun in her ‘lucid dreams’ where no one can disturb her. One day, she meets a mysterious man in her lucid dream who offers her to get revenge on the people tormenting her…", 
    "comments": "Insane lead^2 they're both so unhinged it's perfect. Good makeout scenes too *smirks*", "tags": "romance drama thriller school-life superpowers" },
  { "title": "Surviving the Game as a Barbarian", "imageLink": "https://meo.comick.pictures/Zq2Yv.jpg", "type": "Manhwa | 110", "desc": "6.5/10", "author": "Han Tae-soo, Jung Yun-kang", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "After spending nine years on Dungeon and Stone, the role-playing game that no player has ever beaten, Lee Hansoo finally reaches the dungeon of the final boss. As soon as he opens the gate, however, he suddenly sees a message that says his tutorial has been completed and finds himself in the body of Bjorn Yandel, a real barbarian within the game.", 
    "comments": "Not really a big fan of the guy and the body proportions look funny. Interesting plot tho", "tags": "action fantasy mystery adventure reincarnation system" },
  { "title": "Eleceed", "imageLink": "https://meo.comick.pictures/zlzOj.jpg", "type": "Manhwa | 360", "desc": "8.5/10", "author": "Son Jeho & ZHENA", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Jiwoo is a kind-hearted young man who harnesses the lightning quick reflexes of a cat to secretly make the world a better place – one saved little child or foster pet at a time. Kayden is a secret agent on the run, who finds himself stuck in the body of a …um… decidedly fat old fluffy cat. Together, armed with Jiwoo’s super powers and Kayden’s uber-smarts, they’re out to fight those forces who would let evil rule this world.", 
    "comments": "Bro I love all the cats referenced in this they're so cute. Also really funny and comforting.", "tags": "comedy action sci-fi slice-of-life school-life superpowers" },
  { "title": "Our Secret Alliance", "imageLink": "https://meo.comick.pictures/pw1v3.jpg", "type": "Manhwa | 70", "desc": "7.5/10", "author": "Cakenyam", "dateOfRelease": "2022", "status": "Completed", 
    "summary": "Two model students 'Yoon Sae' and 'Kim Jaeha' have created an alliance in order to reassure their controlling parents and live freely. To avoid getting caught, they start a fake relationship!", 
    "comments": "Aww cute secret romance, but got boring after a while (hmmm)", "tags": "romance slice-of-life drama school-life" },
  { "title": "Dead Mansion", "imageLink": "https://meo.comick.pictures/rxakd2.png", "type": "Manhwa | 50", "desc": "7/10", "author": "Byung Jan, Haetae, Park Man-Sa", "dateOfRelease": "2017", "status": "Ongoing", 
    "summary": "Children - pure, innocent, and ready for a new beginning with their foster parents. But here at the Dead Mansion, those seemingly innocent features become lethal assets. Our orphans are schooled under the finest instructors, ensuring they meet your highest expectations and are sure to impress. However, these guardian angels come with a steep price tag. Perfection, after all, is a cruel mistress.", 
    "comments": "Interesting plot certainly but the power scaling was too unrealistic", "tags": "action mystery thriller" },
  { "title": "Leviathan", "imageLink": "https://meo.comick.pictures/mndwRX.jpg", "type": "Manhwa | 220", "desc": "9/10", "author": "Lee Gyuntak, Ooyama Takumi", "dateOfRelease": "2021", "status": "Completed", 
    "summary": " For 70 years, unrelenting rain fell, ultimately submerging the entire planet. Having lost their land, humanity's survival now depends on life at sea. The once-dominant species that ruled the Earth is no more. Sea creatures, mutated into grotesque beings known as 'leviathans,' now pose a deadly threat to human life. As the world teeters on the brink of collapse, two siblings, Bota and Rita, must navigate a dangerous new reality filled with monstrous threats, human conflict, and the destruction of the environment.", 
    "comments": "I absolutely loved this one. The art is genuinely amazing. AoT underwater literally and the fights were good", "tags": "thriller horror action adventure drama mystery sci-fi survival" },
  { "title": "Nano Machine", "imageLink": "https://meo.comick.pictures/wNEdM.jpg", "type": "Manhwa | 270", "desc": "7.5/10", "author": "Hanjung Wolya, Great H", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "After being held in disdain and having his life put in danger, an orphan from the Demonic Cult, Cheon Yeo-Woon, has an unexpected visit from his descendant from the future who inserts a nano machine into Cheon Yeo-Woon's body, which drastically changes Cheon Yeo-Woon's life after its activation. ", 
    "comments": "Above average murim but bro literally gets carried by his personal AI. Didn't read too far into this one", "tags": "action sci-fi historical murim system superpowers" },
  { "title": "Lost in the Cloud", "imageLink": "https://prodimage.images-bn.com/pimages/9798893739459_p0_v7_s1200x630.jpg", "type": "Manhwa | 130", "desc": "8/10", "author": "Paskim", "dateOfRelease": "2021", "status": "Completed", 
    "summary": "Skylar has a secret hobby - taking photos of his crush, Chan-il. But when Cirrus stumbles upon Skylar's cloud storage with its impressive collection of Chan-il's photos, things escalate pretty quickly. At first confident his secret is safe with Cirrus, Skylar continuously finds himself in compromising situations, making him question Cirrus' true motives", 
    "comments": "Hehe, different type of romance if you know what I mean. Probably awakened something in me...", "tags": "romance slice-of-life drama thriller school-life" },
  { "title": "Surviving the Apocalypse", "imageLink": "https://meo.comick.pictures/7yONmN.png", "type": "Manhwa | 50", "desc": "7.5/10", "author": "Song", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "A boy was locked in a basement and trained his entire life. His deranged father, the one who confined him, declared, ‘The Apocalypse is coming.’ Now, armed with the training and survival skills he had honed over years of practice, he must survive the impending apocalypse.", 
    "comments": "Kinda confused about plot but this one created the best apocalypse atmosphere like it got me worried for mc", "tags": "thriller horror action sci-fi mystery survival" },
  { "title": "How to Use a Returner", "imageLink": "https://meo.comick.pictures/rnmk2.png", "type": "Manhwa | 150", "desc": "7/10", "author": "Heulgsujeo", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Giyoung's suddenly thrown into a game of life and death. Not only that, but he's also the player with the lowest stats. Still, he's got one skill on his side: the ability to read other players' status! He finds the opportunity of his life when he discovers that Hyunsung is a returner to this world. Now all Giyoung has to do is stick next to Hyunsung and game his way out of this tutorial.", 
    "comments": "Got boring and I didn't like the attempted relationships but MC is so sly and cheeky it makes up for it", "tags": "action fantasy drama adventure system reincarnation superpowers royalty" },
  { "title": "The Hunter's Gonna Lay Low", "imageLink": "https://meo.comick.pictures/qYrLy8.jpg", "type": "Manhwa | 40", "desc": "7/10", "author": "Magma, Baek Sam, Lee Gong", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "Hunter Cha Euijae, sent to seal a rift over the West Sea, was flung out after closing it. When he regained consciousness, he found himself in a garbage dump — eight years in the future. Starving, he stumbled into a hangover soup restaurant and realized the world had changed. Instead of the looming apocalypse, the future is oddly peaceful, leaving Cha Euijae feeling empty. Deciding to leave his hunter days behind, he chooses to work part-time at the restaurant. But his quiet new life takes a turn when he meets a mysterious figure in a gas mask…", 
    "comments": "Didn't read far but kinda giving ORV couple. I think this was the next part of my awakening lmao", "tags": "comedy action drama fantasy system superpowers" },
  { "title": "Survive Romance", "imageLink": "https://meo.comick.pictures/17eDB.png", "type": "Manhwa | 100", "desc": "7/10", "author": "Lee Yeon", "dateOfRelease": "2020", "status": "Completed", 
    "summary": "Chaerin leads a blissful and comfortable life as the lead in a romance novel. She only has eyes for the male lead, Jeha, to the point where all the extras are literal black shadows. But then, one day, her story suddenly switches genres.", 
    "comments": "Genre change really hit hard and exceeded my expectations. Really interesting story", "tags": "romance drama action mystery thriller horror sci-fi survival reincarnation school-life" },
  { "title": "The Genius Who Sees Through The World", "imageLink": "https://meo.comick.pictures/oam5nk.jpg", "type": "Manhwa | 30", "desc": "6/10", "author": "Jeong Yong", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "As a child, Shin Woo-jin was kidnapped and locked away in a warehouse, forced to live as a slave. But against all odds, he was rescued and finally stepped into the outside world. Though free, Woo-jin wasn’t like other children. He had an extraordinary gift—the ability to read people. By observing the smallest facial expressions and unconscious gestures, he could see through their thoughts, emotions, and intentions with near-perfect accuracy. Like a profiler, like a modern-day Sherlock, Woo-jin learned to navigate the world, one observation at a time.", 
    "comments": "Don't remember much but it was fun seeing an undiagnosed guy notice things", "tags": "drama mystery" },
  { "title": "Pick Me Up", "imageLink": "https://meo.comick.pictures/7yKyBe.png", "type": "Manhwa | 160", "desc": "7/10", "author": "Hermod, U-Ne Cho", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "1-Star heroes are just fodder for learning a boss' attack patterns. That was Seojin Han's philosophy when playing the notoriously difficult game Pick Me Up. But after being transported into the game as one of those 1-star heroes, he's got no choice but to rise in rank and defeat the player controlling him and his party.", 
    "comments": "IK this is highly rated but I lowkey can't make it past 100 chaps. Maybe just me but its a slow start", "tags": "action adventure fantasy thriller system reincarnation superpowers" },
  { "title": "Blink Master of the Magic Academy", "imageLink": "https://meo.comick.pictures/8yK0b5.jpg", "type": "Manhwa | 60", "desc": "7/10", "author": "Eunmilhi, Seoyu", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "In the game Aether World, Baek Yuseol is considered the most useless character because he can't use magic like everyone else. His only skill, Blink, is a short-range teleportation ability most players consider worthless. But when he's tasked with reaching the game's true ending, Baek Yuseol decides to use his unconventional skill to achieve this impossible goal. Can this so-called 'trash' character outsmart his powerful peers, form unlikely alliances, and ultimately master the game?", 
    "comments": "Aight concept. Got sick of magic academy reads though", "tags": "action adventure fantasy school-life system reincarnation superpowers" },
  { "title": "On the Way to Meet Mom", "imageLink": "https://meo.comick.pictures/pR6rRx.jpg", "type": "Manhwa | 30", "desc": "8/10", "author": "Gomyang", "dateOfRelease": "2024", "status": "Completed", 
    "summary": "Mori, a child found by a rescue team in an abandoned house, wakes up in a shelter. While adapting to an unfamiliar life, one day, he begins to be looked after with unconditional love from a mysterious sponsor... And then Mori learns about the existence of a 'mom' when a close friend leaves with hers. The child starts to wonder about the sponsor: ‘Could this person... be my mom?’", 
    "comments": "Mori is literally so cute and I love the parent dynamics. Also the backgrounds and worldbuilding are gorgeous", "tags": "fantasy comedy drama mystery slice-of-life" },
  { "title": "Infinite Mage", "imageLink": "https://meo.comick.pictures/e1887.jpg", "type": "Manhwa | 130", "desc": "7.5/10", "author": "Themis, Kiraz, Kimchi Woo", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "After Sirone was abandoned in a stable, he was found by a family of hunters and raised in a loving home. Despite the hardships of the peasant life, he learned how to read from a young age and became obsessed with books, especially ones on the history of magic. One day, he has an unlikely encounter with a mage and learns how to enter the 'spirit zone,' the first step to learning how to use magic.", 
    "comments": "Love the science references in magic, this is one of the few that isn't afraid to combine both", "tags": "fantasy action drama school-life superpowers royalty" },
  { "title": "Myst, Might, Mayhem", "imageLink": "https://meo.comick.pictures/Nrqr3o.jpg", "type": "Manhwa | 80", "desc": "8/10", "author": "Hanjung Wolya", "dateOfRelease": "2023", "status": "Ongoing", 
    "summary": "All Jeong wants is a second chance -- for revenge! His grandfather’s gruesome death has transformed him into the bloodthirsty and ruthless Scythe Demon. He will stop at nothing until he has killed the man responsible. Yet rage and determination alone are not enough. He must train in martial arts if he ever wants to stand a chance against such a formidable foe.", 
    "comments": "Supposed prequel to Nano Machine, but I like this MC soooo much more cuz he's not afraid to be insane lol", "tags": "drama action historical fantasy mystery murim superpowers" },
  { "title": "Legend of the Northern Blade", "imageLink": "https://meo.comick.pictures/GkoXk.jpg", "type": "Manhwa | 200", "desc": "7/10", "author": "Hae-Min, Woo-Gak", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "As the world was plunged into darkness due to the Silent Night, martial arts masters gathered to form the “Northern Heavenly Sect”. Thanks to it, people found peace and tranquility again. Over time, however, martial arts masters began plotting against the Northern Heavenly Sect seeing the sect as a threat due to its immense power. Eventually, this leads to the death of the sect leader, Jin Kwan-Ho, and the destruction of the sect with him", 
    "comments": "Honestly not as peak as ppl said it was. Art style takes a bit to get used to but ehhh", "tags": "adventure action historical mystery murim" },
  { "title": "All Rounder", "imageLink": "https://meo.comick.pictures/WD2Y2.jpg", "type": "Manhwa | 100", "desc": "7/10", "author": "Hong-Sil, Kim Dae-Hoon", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "A world full of zombies. But this apocalypse... is it worth trying?! [Skills can be 'transferred' from experts.] Mental care, wooden construction, heavenly magic, animal communication, mechanical engineering, performance, etc.. There is so much to learn!", 
    "comments": "Cool apocalypse concept but mc is a little too op and it just became solo leveling again...", "tags": "action thriller horror drama sci-fi survival system superpowers" },
  { "title": "Tower of God", "imageLink": "https://meo.comick.pictures/X8xWBz.jpg", "type": "Manhwa | 650", "desc": "7.5/10", "author": "S.I.U.", "dateOfRelease": "2010", "status": "Ongoing", 
    "summary": "Twenty-Fifth Bam has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated. Somehow, Bam manages to open the door to the Tower. Now, he will go any distance to see Rachel again even if it means dying.", 
    "comments": "I tried to get myself to read this so many times but the art is so old in the beginning and I get so confused w/ story", "tags": "mystery fantasy action adventure comedy drama system superpowers" },
  { "title": "I'm Not That Kind of Talent", "imageLink": "https://meo.comick.pictures/dk2Kz.jpg", "type": "Manhwa | 90", "desc": "8/10", "author": "Denphy, Meona", "dateOfRelease": "2022", "status": "Ongoing", 
    "summary": "A talented individual who is respected by many and welcomed anywhere? Not at all! A bloodthirsty battle fanatic who knows no defeat? Couldn’t be further from the truth! In reality, Deon Hart is a sickly human who coughs up blood from receiving the tiniest bit of stress and gets sunburns from standing in the sun for ten minutes. But due to an unfortunate misunderstanding, he becomes ‘Demon Arut,’ the notorious 0th Corps Commander of the demon army and the demon king’s joker. ", 
    "comments": "It was funny at the start but then it got political n I didn't like any of the human characters", "tags": "fantasy action drama comedy royalty" },
  { "title": "DICE", "imageLink": "https://meo.comick.pictures/b2r76.png", "type": "Manhwa | 390", "desc": "8/10", "author": "Yun Hyunseok", "dateOfRelease": "2013", "status": "Completed", 
    "summary": "Dongtae is rock bottom in everything. Looks, grades, life, everything. But all that might change. If you could change your life by playing a game, would you?", 
    "comments": "It was mid in the beginning but holy improvement arcs. The story actually became better and not ragebaiting", "tags": "action sci-fi drama romance system school-life superpowers" },
  { "title": "The God of High School", "imageLink": "https://meo.comick.pictures/v8pqJb.png", "type": "Manhwa | 570", "desc": "6.5/10", "author": "Yongje Park", "dateOfRelease": "2011", "status": "Completed", 
    "summary": "While an island half-disappearing from the face of the earth, a mysterious organization is sending out invitations for a tournament to every skilled fighter in the world. If you win you can have ANYTHING you want. They're recruiting only the best to fight the best and claim the title of The God of High School! ", 
    "comments": "Fighting manhwa but I didn't like the characters nor the art style. Strategy>Combat", "tags": "action drama school-life" },

{ "title": "The Beginning After the End", "imageLink": "https://meo.comick.pictures/DLyNQ.jpg", "type": "Webtoon | 200", "desc": "7.5/10", "author": "TurtleMe, Fuyuki23", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Reincarnated into a new world filled with magic and monsters, King Grey has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.", 
    "comments": "Slow ahh start but holyyyy the art gets so good I didn't even notice it's not a manhwa. Highly recommend I love TBATE", "tags": "fantasy action adventure romance reincarnation superpowers royalty" },
  { "title": "Castle Swimmer", "imageLink": "https://meo.comick.pictures/1K6bD.jpg", "type": "Webtoon | 170", "desc": "7.5/10", "author": "Wendy Lian Martin", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "What happens when your entire life is ruled by a prophecy. Such is the story of two young sea creatures. One believed to be a guiding light for his people, a Beacon who will lead them to a bright, prosperous future. The other is a teenage prince for who’s destiny is to KILL the Beacon so that HIS own people might thrive. ", 
    "comments": "Spoiler: they're gay but its cute (contains fish)", "tags": "romance fantasy comedy drama" },
  { "title": "unOrdinary", "imageLink": "https://meo.comick.pictures/aOBbOK.jpg", "type": "Webtoon | 300", "desc": "8/10", "author": "uru-chan", "dateOfRelease": "2016", "status": "Ongoing", 
    "summary": "Nobody paid much attention to John – just a normal teenager at a high school where the social elite happen to possess unthinkable powers and abilities. But John’s got a secret past that threatens to bring down the school’s whole social order – and much more.", 
    "comments": "Weak hero but he's actually strong. I reread this one multiple times and I might catch up again.", "tags": "action sci-fi drama school-life superpowers" },
  { "title": "Cursed Princess Club", "imageLink": "https://m.media-amazon.com/images/I/81Bj9pG4T9L.jpg", "type": "Webtoon | 150", "desc": "7.5/10", "author": "LambCat", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "Meet Gwendolyn – living proof that princesses don’t always have it all. See, although she lives in a castle and her father is the King, Gwendolyn isn’t like a movie princess, or even a fairy-tale princess. She’s got a big heart, but isn’t particularly attractive and doesn’t have a Disney-quality singing voice. But one night, she accidentally stumbles upon the twisted world of the Cursed Princess Club, and her life will never be the same.", 
    "comments": "My actual first webtoon this was the one my friend recommended. Actually really good story as well", "tags": "fantasy romance comedy slice-of-life drama fantasy royalty" },
  { "title": "My Deepest Secret", "imageLink": "https://murderingmedia.wordpress.com/wp-content/uploads/2021/04/53359671._uy1122_ss1122_-e1618366280858.jpg", "type": "Webtoon | 100", "desc": "7/10", "author": "Hanza Art", "dateOfRelease": "2019", "status": "Completed", 
    "summary": "Having a handsome, kind and caring boyfriend like Elios means the world to Emma. Even a look at him makes her heart flutter. But little does she know about a secret that lies deep in their relationship. What is the said secret?", 
    "comments": "It's a cute romance story but I thought the twist was kinda wild, love the artstyle tho", "tags": "drama mystery thriller romance school-life" },
  { "title": "Homesick", "imageLink": "https://swebtoon-phinf.pstatic.net/20210608_280/1623106223810Jjdjd_JPEG/1Homesick_mobile_landingpage.jpg?type=crop540_540", "type": "Webtoon | 50", "desc": "6.5/10", "author": "Ms. Freaky", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "Rayne woke up with no memories of the apocalypse. Samael is just... a delinquent, who happened to find Rayne at a rooftop. They both ended up making a deal in order to survive in a world where cannibalistic monsters roam.", 
    "comments": "Cool artstyle ig but the story is kinda shallow and mid", "tags": "drama sci-fi action thriller mystery survival" },
  { "title": "School Bus Graveyard", "imageLink": "https://meo.comick.pictures/X8X76M.png", "type": "Webtoon | 100", "desc": "7/10", "author": "Red", "dateOfRelease": "2018", "status": "Ongoing", 
    "summary": "Ashlyn is a loner in high school with no friends. But when a fateful visit to a haunted house causes her and her classmates to see monsters at night, she'll be forced to forge bonds to survive.", 
    "comments": "Its alright as a teen story but I don't really find it exciting compared to others. Also I got spoiled :(", "tags": "thriller action drama mystery school-life survival" },
  { "title": "Morgana and Oz", "imageLink": "https://meo.comick.pictures/P0dSACHe0ZkHX.webp", "type": "Webtoon | 70", "desc": "6/10", "author": "Miyuli", "dateOfRelease": "2020", "status": "Ongoing", 
    "summary": "What happens when a struggling witch meets an angsty vampire? Either love or war. Morgana belongs to a long line of witches, and Oz to the rival vampire clan. After a chance encounter… and maybe a few stray spells… these two need to find a way to work together, or risk all-out war between coven and clan.", 
    "comments": "Honestly I think I might have underrated it but really nothing significant happened. Cute couple", "tags": "romance comedy fantasy" },
  { "title": "I'm The Grim Reaper", "imageLink": "https://prodimage.images-bn.com/pimages/9781974739080_p0_v2_s1200x630.jpg", "type": "Webtoon | 210", "desc": "6/10", "author": "Graveweaver", "dateOfRelease": "2021", "status": "Ongoing", 
    "summary": "On earth there are bad people, and then there are REALLY BAD people. If you’re one of the latter, you don’t just get sent to Hell, you get sent to Hell and get assigned a job collecting the souls of some of the worst people on Earth. Such is the career path of a young woman named Scarlet, who dies and is delivered down to the fiery underworld only to find herself in an entry level position as…The Grim Reaper!", 
    "Commen ts": "", "tags": "thriller mystery drama sci-fi system superpowers" },
  { "title": "Purple Hyacinth", "imageLink": "https://meo.comick.pictures/87djn.jpg", "type": "Webtoon | 160", "desc": "6.5/10", "author": "Ephemerys, Sophism", "dateOfRelease": "2019", "status": "Ongoing", 
    "summary": "Her ability to detect lies has made her an outstanding officer of the law – despite being haunted by her inability to save the ones she loved from a gruesome fate many years ago. Now, she uses her powerful gift to defend the defenseless at any cost – even if it means teaming up with a deadly assassin to fight evil in a world gone mad.", 
    "comments": "", "tags": "mystery drama historical superpowers" },
  { "title": "I Love Yoo", "imageLink": "https://i.redd.it/g2ecyjfker961.jpg", "type": "Webtoon | 250", "desc": "6.5/10", "author": "Quimchee", "dateOfRelease": "2017", "status": "Ongoing", 
    "summary": "Dogged by pain and misfortune from the very beginning, Shin-Ae decides she wants nothing to do with people nor anything to do with romance. Although content with her unsocial, boring, loveless existence, her lifestyle is challenged after she ruins an unsuspecting strangers' clothes.", 
    "comments": "Slowwwww burn oh my god just get somewhere pleeease. #JusticeForDieter", "tags": "drama romance comedy" },
  { "title": "LUMINE", "imageLink": "https://m.media-amazon.com/images/I/81CRNauCzmL._UF1000,1000_QL80_.jpg", "type": "Webtoon | 180", "desc": "7/10", "author": "Emma Krogell", "dateOfRelease": "2017", "status": "Completed", 
    "summary": "A runaway werewolf, Lumine, meets a witch boy named Kody and is being hired to work as his bodyguard. Lumine, being determined to befriend Kody, tries everything to get Kody to trust him, while Kody tries to keep Lumine away from him.", 
    "comments": "I used to love this one the little dog form was so cute, and I lowkey reread this too many times", "tags": "drama mystery action fantasy" },


{ "title": "+99 Reinforced Wooden Stick", "imageLink": "https://meo.comick.pictures/vvRrl.jpg", "type": "Manhwa | 150", "desc": "", "author": "Hong-sil, Jiperi", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Welcome to “Chrono Life,” a virtual reality game where only the strongest survive. Ji-u logs in to “Chrono Life,” only to be ignored and ridiculed by the other players for his lack of experience, crappy items, and being an overall noob. But when he upgrades his wooden stick to the max reinforcement level of +99, Ji-u realizes he has the power to split continents and slay armies of thousands in just one swing." ,
"comments": "", "tags": "" },
{ "title": "4 Cut Hero", "imageLink": "https://meo.comick.pictures/k8bGz.jpg", "type": "Manhwa | 250", "desc": "", "author": "Gojira-kun", "dateOfRelease": "2014", "status": "Completed" ,
"summary": "The Hero has defeated the Demon King! But the Princess he meant to save turned out to be a Prince. NEETdom, here he comes, but a life of relaxation surrounded by animes is a pretty sweet deal. Unfortunately, he gets caught up in millennia old legends, curses, and a twisted plot involving multiple Kingdoms and many dragons. Through and through, though, he'll follow a path of whimsy, even if that involves him palling it up with 'villains'." ,
"comments": "", "tags": "" },
{ "title": "A Disaster-Class Hero Has Returned", "imageLink": "https://meo.comick.pictures/nEzBB.jpg", "type": "Manhwa | 140", "desc": "", "author": "SAN.G, HEATS", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "For twenty long years, the thirteenth saint Lee Geon was trapped inside the Tower of Demons after being backstabbed by twelve of his allies. These twelve 'saints' were warriors chosen by the twelve Zodiac gods to defeat mysterious monsters called 'calamities' that were massacring the planet. Though no god had chosen Geon as a saint, he became the mightiest of them all, which made him a hero... and a target. But now, Geon has brawled his way out of the tower, and he's back stronger than ever. All that's left is to exact brutal payback on each of the saints, but none of these powerful beings will go down without a fight." ,
"comments": "", "tags": "" },
{ "title": "A Sunny Night Walk", "imageLink": "https://meo.comick.pictures/YEfF2FGMQhjlI.jpeg", "type": "Manhwa | 80", "desc": "", "author": "Nada & Shinryo", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "Hyun Jihwan is an aspiring musician who can teleport. One day, he takes a trip to Germany on a whim, and is discovered by Nigel Ernst Kerne. Ever since that fateful encounter, Jihwan begins to frequently visit Nigel, who showers him with good hospitality and affection in return. But as the visits become more frequent and Nigel begins to want more of him, Jihwan isn't sure if this unique double life can go on." ,
"comments": "", "tags": "" } ,
{ "title": "The Archmage's Restaurant", "imageLink": "https://meo.comick.pictures/jx802M.jpg", "type": "Manhwa | 100", "desc": "", "author": "chassi, Bad Boys", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "A young aspiring chef suddenly finds himself in a world of war, dragons, and magic. These two worlds couldn’t be further apart... or could they? Who says you can’t open a restaurant in a fantasy realm? I mean, what could possibly go wrong?" ,
"comments": "", "tags": "" },
{ "title": "Academy's Undercover Professor", "imageLink": "https://meo.comick.pictures/Q7egY.jpg", "type": "Manhwa | 130", "desc": "", "author": "sayren, Tana, WAG", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Machiavelli and Gerrard are just one of the many names the new professor of Ceoren Academy uses to disguise his identity - and now he can add one more to his list, Professor Ludger Cherish. The real Ludger Cherish dies on board a train during a terrorist attack, making him the perfect target for a new identity. Little does the new professor know, Ludger Cherish was involved in something deep and secret." ,
"comments": "", "tags": "" } ,
{ "title": "Afterlife Diner", "imageLink": "https://meo.comick.pictures/X8X1mp.jpg", "type": "Manhwa | 90", "desc": "", "author": "ASSAM, Hyung Sangjun, Hwajeong", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "’I was given a building as an inheritance?’ From a nobody who does all kinds of odd jobs and lived a hard life, he was given a chance to become a landlord right in the middle of Gangnam! But, the condition for this inheritance is to ‘operate a restaurant for 5 years. ‘Moreover, I can sense a chill down my spine thanks to the weird customers that came in for today’s store opening……Do I really just need to prepare food?’" ,
"comments": "", "tags": "" } ,
{ "title": "Annarasumanara", "imageLink": "https://meo.comick.pictures/v6dE7.jpg", "type": "Manhwa | 30", "desc": "", "author": "Ha Il-Kwon", "dateOfRelease": "2010", "status": "Completed" ,
"summary": "A rumor goes around school about an abandoned amusement park and a magician who lives there that can make someone disappear for good. Yoon Ah-ee, a girl struggling to feed her sister and herself everyday will experience her life change as she meets a mysterious magician." ,
"comments": "", "tags": "" },
{ "title": "Back To Chanbi", "imageLink": "https://meo.comick.pictures/jxXENM.jpg", "type": "Manhwa | 50", "desc": "", "author": "Jang Sawhee", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Gyeono Kang, a lucky high schooler, used to enjoy the mutual love he shared with the prettiest girl in his class, Chanbi Baek. She was always all about him until an accident wiped her memories of the past year, and just like that, she no longer had feelings for him. But what about Gyeono, whose heart still beats for her? Is it even possible to win her back?" ,
"comments": "", "tags": "" },
{ "title": "Beastburn", "imageLink": "https://meo.comick.pictures/j5dwa.jpg", "type": "Manhwa | 70", "desc": "", "author": "Yoon Seon Saeng", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "Cha Hyeon-seong was a boy who had a life full of pain and suffering. One day, he was murdered by beasts of unknown origin, yet he was resurrected and awakened from his death. In front of him was Son Ga-young, a hunter going after him and the beasts. After this began Hyeon-seong’s struggle for survival in the middle of a constant battle between the two groups - the humans and the beasts." ,
"comments": "", "tags": "" },
{ "title": "Beastly Things", "imageLink": "https://meo.comick.pictures/nR2b33.jpg", "type": "Manhwa | 20", "desc": "", "author": "Kim Tae‑Hee", "dateOfRelease": "2025", "status": "Ongoing" ,
"summary": "In a world where werewolves coexist with humans, Han Ji-woo, the only daughter of the werewolf clan leader, encounters the nation’s son, actor Cheon Yu-seung. But… what on earth is this guy? Why does an ordinary celebrity make the power of wolves stronger?" ,
"comments": "", "tags": "" },
{ "title": "Beware The Villainess", "imageLink": "https://meo.comick.pictures/Z8nglJ.jpg", "type": "Manhwa | 130", "desc": "", "author": "Soda Ice, Blue Canna", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "After an accident, a modern-day college student awakens as the story’s villainess, Melissa Foddebrat. She’s far from anyone’s favorite, but she IS the daughter of the duke. Determined to live it up, this new Melissa is doing things her way — antiquated society, be damned! All idiots, prepare to step aside or perish!" ,
"comments": "", "tags": "" },
{ "title": "Book Eater", "imageLink": "https://meo.comick.pictures/KvzL5.jpg", "type": "Manhwa | 110", "desc": "", "author": "MKR, CREW EASTWOOD", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Theodore Miller knows everything about magic… except how to use it. Just as he’s about to flunk out of Berghen Academy, Theo chances upon a grimoire named “Gluttony” that manifests as a magic-hungry creature on his hand. The more magical texts and artifacts Gluttony consumes, the more powerful Theo becomes, quickly making him the academy’s star student. Sure, he now lives under constant threat of being eaten by an insatiable parasite, but Theo is finally on his way to becoming a real wizard." ,
"comments": "", "tags": "" },
{ "title": "Bones", "imageLink": "https://meo.comick.pictures/Lylob7.jpg", "type": "Manhwa | 30", "desc": "", "author": "Igeon, Museonmin", "dateOfRelease": "2025", "status": "Ongoing" ,
"summary": "Kang Jihyoung,wanted to become a hunter for his mother. However, his bullies put his mother into a vegetative state. He tried to take revenge but was thoroughly crushed and trapped...The boy who lost everything became a beast and began his hunt." ,
"comments": "", "tags": "" },
{ "title": "Bunny And Her Boys", "imageLink": "https://meo.comick.pictures/waMGX.png", "type": "Manhwa | 50", "desc": "", "author": "Nieun", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "Bunny, as a freshman in university, experiences the worst first relationship of her life. Handsome guys were a no to her before, but when she finally decides to accept her natural instinct of liking handsome men, 5 of them appear in her life! But the question is who will turn out to be a shitty car and who will turn out to be a Mercedes-benz? Tune in to find out!" ,
"comments": "", "tags": "" },
{ "title": "Checkmate", "imageLink": "https://meo.comick.pictures/0EDqal.jpg", "type": "Manhwa | 60", "desc": "", "author": "Tan", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "When he was just a student, Soohyun, ranked second, felt envious of the perfect Eunsung. Although he tried catching Eunsung, his soul aflame with passion, it wasn’t enough, and he lost all his motivation upon graduation. As time passed, Soohyun forgot everything. However, when he saw Eunsung collapse for the first time, he felt extreme pleasure. With his obsession for Eunsung rekindling, he has a desire to see him fall even further in front of him…" ,
"comments": "", "tags": "" },
{ "title": "Cheese In The Trap", "imageLink": "https://meo.comick.pictures/XW4Ng.jpg", "type": "Manhwa | 300", "desc": "", "author": "Soon-Ki", "dateOfRelease": "2010", "status": "Completed" ,
"summary": "Having returned to college after a year long break, Hong Sul, a hard-working over-achiever, inadvertently got on the wrong side of a suspiciously perfect senior named Yoo Jung. From then on, her life took a turn for the worse - and Sul was almost certain it was all Jung's doing. So why is he suddenly acting so friendly a year later?" ,
"comments": "", "tags": "" },
{ "title": "Child Of The Sheath", "imageLink": "https://meo.comick.pictures/j80dL.jpg", "type": "Manhwa | 100", "desc": "", "author": "Hyung-Min Kim", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "Bira is a kid who loves fishing, living and wandering in the wilderness with his dwarf grandfather. One day, his grandfather tells Bira to wait for him at the Northern part of the forest and disappears. Bira waits for many years living in forest while befriending a family of bears and staying away from humans, just as his grandfather had warned him to do. By chance he meets and saves Tanyu's life and later becomes friends with him. Upon hearing his friend going on a dangerous mission, Bira leaves the forest for the world outside to save his Tanyu." ,
"comments": "", "tags": "" },
{ "title": "Shadow Of the Supreme", "imageLink": "https://meo.comick.pictures/qYrwxX.jpg", "type": "Manhwa | 60", "desc": "", "author": "Ubilam, ELGAR", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Yangcheon Ku, born to the virtuous House of Ku of Sanseo, the Little Star and next Head of House. Status: The world’s most hated demonic martial artist. Cause of death: Defeated during the Virtuous-Demonic War, tortured upon capture. Or so he thought. Moments after dying in the arms of his childhood friend, the Heavenly Sword herself, Seol-ah Wi, he finds himself back in the past. Already things have changed, but is it enough to ensure his second chance at life doesn’t end with the same regrets?" ,
"comments": "", "tags": "" },
{ "title": "Return Of The War God", "imageLink": "https://meo.comick.pictures/ezXNQ6.png", "type": "Manhwa | 130", "desc": "", "author": "Myosu, Leopeu", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "The worst talent that no one can compete with. Unstoppable Demon God, Dan Uhyeon. A thousand years after being sealed for the misdeed. A thousand years was enough to get rid of Dan Uhyeon's sense of superiority. A world that has changed, solitude with no one knows, and the only thing left is despondency and emptiness. A little girl who appeared in front of Dan Uhyeon lost her purpose and will to live aimlessly, Hwa Somi. For a girl who seems to have nowhere to lean on, Dan Uhyeon feels the same and gradually begins to open the door of his mind." ,
"comments": "", "tags": "" },
{ "title": "Conquering The Academy With Just A Sashimi Knife", "imageLink": "https://meo.comick.pictures/3Kp47O.jpg", "type": "Manhwa | 50", "desc": "", "author": "GMAN", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Chef Kim, Korea's legendary sashimi master, is transported into the world of Bles sing M, a mobile game he once played. But instead of being a hero, he finds himself as Geomma Kang, a mere background extra. Forced into a new life, Geomma discovers a new power: the Blessing of the Blade God. Now, to survive in this game-like world, he must slice through challenges and enemies alike." ,
"comments": "", "tags": "" },
{ "title": "Couple Breaker", "imageLink": "https://meo.comick.pictures/kRxnkg.jpg", "type": "Manhwa | 80", "desc": "", "author": "Maeng-Kee, Taegeon", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "Scrap the boring, run-of-the-mill dating show! Lovers gather together to test the strength of their love. One lover seeks revenge on their swapped lover, one couple seeks fame and another seeks to test their love. Spicy lover’s revenge set in an ultra-popular hit dating entertainment show!" ,
"comments": "", "tags": "" },
{ "title": "Damn Reincarnation", "imageLink": "https://meo.comick.pictures/2JmlB.png", "type": "Manhwa | 80", "desc": "", "author": "Kiki, Mogma, Park Jeong Yeol", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "When the warrior Hamel sacrifices himself to protect his rival Bermut Lionhart, he makes Bermut vow to vanquish the last of the demon kings. Reincarnated with his memories 300 years later, he is shocked to find that not only are the demon kings still alive, but that he has been reborn as Eugene Lionhart, a member of his former rival’s bloodline! Now, as Eugene comes of age, he must train to prove himself as a Lionhart and eliminate the remaining demon kings once and for all." ,
"comments": "", "tags": "" },
{ "title": "Villains Are Destined To Die", "imageLink": "https://meo.comick.pictures/KmqOr.jpg", "type": "Manhwa | 180", "desc": "", "author": "Gwon Gyeoeul", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "Penelope Eckart reincarnated as the adopted daughter of Duke Eckart and the villainess of a reverse harem dating sim. The problem is, she entered the game at its hardest difficulty, and no matter what she does, death awaits her at every ending! Before the 'real daughter' of Duke Eckart appears, she must choose one of the male leads and reach a happy ending in order to survive. But the two brothers always pick a fight with her over every little thing, as well as a crazy crown prince, whose routes all lead to death. But somehow, the favourability meters of the male leads increase the more she crosses the line with them!" ,
"comments": "", "tags": "" },
{ "title": "Debuff Master", "imageLink": "https://meo.comick.pictures/aOX64z.jpg", "type": "Manhwa | 50", "desc": "", "author": "Dam Hwa Gong", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Han Tae-Sung thought he was talented in video games and dreamt of turning his life around through BNW. But he would soon realize that life was not as easy as he thought it was. He’s betrayed by his comrades, hunted down by his enemies, and even chased by debts in real life. He lost everything in the blink of an eye and was thrown down a pit of despair. What stood in his way? Talent, wealth, connections, and luck. There was simply no way he could win against those born differently no matter how much he struggled." ,
"comments": "", "tags": "" },
{ "title": "Demon X Angel Can't Get Along", "imageLink": "https://meo.comick.pictures/eWl1Z.jpg", "type": "Manhua | 130", "desc": "", "author": "Fei Luo Mao", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "Demons and angels are natural enemies that have grown tired of fighting each other. In order to coexist peacefully, they decided to arrange a marriage between the two races! If the pair can't get along within the one-year trial period, the marriage will be dissolved. This is how Jiacheng (Demon) and Yu Shanshan (Angel) became the chosen 'lucky' pair for the marriage. Sharing the goal of divorce, the two began their lives of ‘happy’ cohabitation!" ,
"comments": "", "tags": "" },
{ "title": "Demonic Master Of Mount Kunlun", "imageLink": "https://meo.comick.pictures/WrpyQ.jpg", "type": "Manhwa | 50", "desc": "", "author": "Constellation", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "The True Heavenly Demon served as the young leader of the Demonic Cult for 100 years because his father, the Cult leader, lived a long life. However, after inheriting the Cult Leader’s position, which he did not desire, he died after just one year. But when he woke up, he was now a baby! He was abandoned on the roadside, but he was picked up by a Taoist from Kunlun, a sect belonging to the justice faction. That’s when he became Jung Gwang, the youngest pupil of Jung Jabae. As he died of natural causes, he didn’t have any grudge. He was more curious about a life with warm relationships among people instead of a bloody one. He couldn’t enjoy his previous life because he was busy cleaning up his father’s mess, so shouldn’t he live for himself this time?" ,
"comments": "", "tags": "" },
{ "title": "Devil Returns To School Days", "imageLink": "https://meo.comick.pictures/0GJ1m.jpg", "type": "Manhwa | 90", "desc": "", "author": "Siwon, Team The Zeke", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "Good grades, good looks, and a bit of a sense of justice - Kim Hyun-sung has it all. But one day before graduation, Kim Hyun-sung is thrown off a rooftop and is put into a coma. After a decade of living a hellish existence with only his hearing and consciousness alive and unable to die, he suddenly returns to the day the bullying began." ,
"comments": "", "tags": "" },
{ "title": "Disciple Of The Holy Sword", "imageLink": "https://meo.comick.pictures/xLKWg.jpg", "type": "Manhwa | 140", "desc": "", "author": "MKR, ELDO", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Though Leon has years' worth of training in swordsmanship, it's still not enough to defeat his rival at the royal academy, Lionel. That is until one day, the holy sword Elsyd appears and names Leon as his chosen hero and new pupil. The young swordmaster didn't expect the holy sword's instruction to be easy, but now Elsyd is even trying to teach him how to... see? If Leon can manage to endure this, will he finally be strong enough to beat the privileged Lionel and earn his place in the world?" ,
"comments": "", "tags": "" },
{ "title": "Abnormal Immortal Record Of Spooky Daoist", "imageLink": "https://meo.comick.pictures/Z8nmYv.png", "type": "Manhua | 50", "desc": "", "author": "Yuewen Manhua", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "High school student Li Huowang possesses an ability: whenever he closes his eyes, he enters a bizarre cultivation world. In that strange world, he is captured by someone who calls him “Master” and is made into a living medicine—a human cauldron that could be turned into a pill at any moment. In the real world, however, Li Huowang is a mentally ill patient living in a psychiatric hospital, unable to attend school. The doctors tell him that the bizarre cultivation world is nothing but a hallucination." ,
"comments": "", "tags": "" },
{ "title": "Doom Breaker", "imageLink": "https://meo.comick.pictures/3o2j7.jpg", "type": "Manhwa | 100", "desc": "", "author": "Blue Deep", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Zephyr is the last human fighting evil in a world abandoned by the gods. When he is killed in battle by Tartarus, the god of destruction, all hope for humanity seems lost. But Zephyr's fate is not sealed - the gods who find his battles entertaining have gifted him a second chance at life, as he is sent ten years into the past, back to when he was a slave instead of the most powerful human alive." ,
"comments": "", "tags": "" },
{ "title": "The Genius Medicinal Mage", "imageLink": "https://meo.comick.pictures/a5wYQ.png", "type": "Manhwa | 50", "desc": "", "author": "Geul Geun Yook", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Renoc was supposed to be a video game character, so giving him a dying body in exchange for extreme magical prowess felt reasonable. However, when his creator wakes up inside Renoc's body, it doesn't feel like a game anymore! His life in the game is unbearable until he discovers the mysterious drug Vyper, which gives him the strength to wield his magic to its full potential. As Renoc walks a fine line with the drug that could save or destroy him, can he find a way to survive in this new world?" ,
"comments": "", "tags": "" },
{ "title": "Dungeon Odyssey", "imageLink": "https://meo.comick.pictures/aWE40.jpg", "type": "Manhwa | 120", "desc": "", "author": "Son Min-woo, Glumph", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "When the war between the aboveground and underground ended, humanity was joined by so-called 'dungeon babies,' those gifted with supernatural abilities and an obsession with the labyrinths below ground. Despite being a dungeon baby, Kim Jinwoo suppressed his instincts, choosing to live an ordinary life as a guide and caring for his family. But when an expedition goes wrong and he somehow ends up becoming the new owner of a labyrinth, he discovers that he cannot ignore his instincts forever..." ,
"comments": "", "tags": "" },
{ "title": "Ending Maker", "imageLink": "https://meo.comick.pictures/BRxQK.jpg", "type": "Manhwa | 70", "desc": "", "author": "Chwiryong", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "After ‘outboxer009’ wakes up in the body of Yuder Bayel from Legend of Heroes 2, he soon discovers that his rival ‘sandstorm’ has also entered the game world as Cordelia Chace. These top-two-ranked old pros come to realize that navigating this game world is much harder than just pointing and clicking. With the apocalyptic conclusion of the game looming before them, they'll have to combine his quick wit, her foul mouth, and both their gamer mindsets to make a new, less cataclysmic ending." ,
"comments": "", "tags": "" },
{ "title": "Escape Devildom", "imageLink": "https://myanimelist.net/images/manga/3/270306.jpg", "type": "Manhwa | 90", "desc": "", "author": "MooMen", "dateOfRelease": "2017", "status": "Completed" ,
"summary": "Past the grey desert and across the ocean lay the demon lands. Bloodthirsty and savage, they've waged war with the humans since anyone can remember. And seated on his throne, behind castle walls and royal guards, sits the demon king. At least, that's what everyone thinks. And if Merlin ever wants to see his brother again, he'd better make sure everyone goes on believing he's the demon king." ,
"comments": "", "tags": "" },
{ "title": "Eternally Regressing Knight", "imageLink": "https://meo.comick.pictures/d0XgoG.jpg", "type": "Manhwa | 70", "desc": "", "author": "Lee Hyunmin, SOULPUNG, Ganala", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Is dying repeatedly a blessing? Enkrid's life-long dream of becoming a knight looked to be forever out of reach, until one day he died... and woke up at the beginning of that same day! Now that he has unlimited chances to train and engage in mortal combat, just how far can he go?" ,
"comments": "", "tags": "" },
{ "title": "Executioner", "imageLink": "https://meo.comick.pictures/Z8nyO3.jpg", "type": "Manhwa | 50", "desc": "", "author": "Park Bumjin, Lee Je Hwan", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Villains who couldn't kill him when he was a hero and put him in prison. Now he is a prison guard and carries out executions with his own hands." ,
"comments": "", "tags": "" },
{ "title": "Exorcism Records: Journey To The West", "imageLink": "https://meo.comick.pictures/g3No1.jpg", "type": "Manhua | 80", "desc": "", "author": "DENGANG", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "A journey to exorcise all demons told with paintings…It's like a remake of Journey to the West." ,
"comments": "", "tags": "" },
{ "title": "Expelled Hero Is Too Strong", "imageLink": "https://meo.comick.pictures/kRxM23.jpg", "type": "Manhwa | 70", "desc": "", "author": "GGULEOM, Blue Cliff", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "’Yu Ji-han, you're useless.’With those harsh words, Yu Ji-han, a dedicated member of the prestigious guild Keroes and the elite Kim Hyun-tae Party, is abruptly expelled. After seven years of service, he's left with a meager severance pay of 10 million won. But Yu Ji-han possesses a unique ability - 'Sampling' - which allows him to see probabilities." ,
"comments": "", "tags": "" },
{ "title": "Falling For Danger", "imageLink": "https://meo.comick.pictures/X206R7.jpg", "type": "Webtoon | 20", "desc": "", "author": "Dolce Soup", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Hale Windsor was a renowned hitman until he was betrayed and lost the love of his life. With nothing left to live for, he begins a war of revenge on the very organization he used to work for. That is, until he meets Marine, a girl who brings color back into his black and white existence." ,
"comments": "", "tags": "" },
{ "title": "Family Size", "imageLink": "https://meo.comick.pictures/zprpz.jpg", "type": "Manhwa | 20", "desc": "", "author": "Nam Jieun", "dateOfRelease": "2014", "status": "Completed" ,
"summary": "The daily shenanigans of the manhwa artist's family of six!" ,
"comments": "", "tags": "" },
{ "title": "FFF-Class Trashero", "imageLink": "https://meo.comick.pictures/Q8Gn8.jpg", "type": "Manhwa | 170", "desc": "", "author": "Farnar, kkangmu", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "Hansoo Kang was an average boy living in the normal world when he was suddenly summoned to Fantasia, a fantasy world run by demons! Deemed the Chosen Hero, he’s spent the last ten years building himself up to defeat the lord of Fantasia - which turned out to be a piece of cake. As he eagerly awaits his return to the real world, the “god” of Fantasia appears and throws a wrench in his plan: a report card that reveals there’s more to being a hero than just might." ,
"comments": "", "tags": "" },
{ "title": "Fight Class 3", "imageLink": "https://meo.comick.pictures/onxGB.jpg", "type": "Manhwa | 100", "desc": "", "author": "2hakkk", "dateOfRelease": "2017", "status": "Ongoing" ,
"summary": "A world in which Korea is the global capital of combat sports. At Nam-Il High School where the best and most talented students of martial arts reside, Jiu Ji-Tae suddenly finds himself thrust into their midst despite being a total weakling. By neutralizing his physical shortcomings through jiu-jitsu, can he rise to the top of the fight classes?" ,
"comments": "", "tags": "" },
{ "title": "Fighters", "imageLink": "https://meo.comick.pictures/MZEJe.png", "type": "Manhwa | 80", "desc": "", "author": "Yoma", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "The Genius Fighter Jason Kim. However his winning streak ended with an accident during a match, and he couldn’t use his left arm anymore. After defeat, he quit the pro scene and returned to hometown, but life is just hard to live quietly for such a fighter. He’s getting involved in endless fights, regardless of his will.." ,
"comments": "", "tags": "" },
{ "title": "Finding Camellia", "imageLink": "https://meo.comick.pictures/qyq3X.jpg", "type": "Manhwa | 140", "desc": "", "author": "Jin Soye, Kong Bokyung", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "Her life was nothing but lies. Camellia was just 12 when she was taken away from her mother in the slums and forced to live as the son of an aristocratic family. But under the layers of secrets and lies, she never forgets. She continues to struggle to be her true self again, to reclaim the life of Camellia." ,
"comments": "", "tags": "" },
{ "title": "For My Derelict Favorite", "imageLink": "https://meo.comick.pictures/MLb5EQ.png", "type": "Manhwa | 110 ", "desc": "", "author": "Ryuho", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "I entered my favorite romantic fantasy novel! I may be a commoner, but I'm rich beyond belief. I quietly watched the romance of the main characters in the original novel, assuming I would go back to reality after reaching the novel's ending... However, even after the ending, I am still stuck in this world! As a result, I learned the behind-the-scenes stories that I didn't want to know. My favorite second male lead, Kaelus, died. Living in poverty without him, I eventually became ill and died as well. I thought I would return to reality, but I went back in time instead.",
"comments": "", "tags": "" },
{ "title": "Barbarian Quest", "imageLink": "https://meo.comick.pictures/Q7LY0.jpg", "type": "Manhwa | 100", "desc": "", "author": "Baeksu Noble", "dateOfRelease": "2022", "status": "Competed" ,
"summary": "When Urich's daring attempt to venture near the ominous Sky Mountains with his friends gets him kidnapped, he learns that there is a new world that exists beyond his own.After a hellish fight with his attackers, he frees himself and sets off on a journey to explore this new realm. There, he encounters allies and enemies alike, each meeting helping him learn more about the civilization and grow as a warrior." ,
"comments": "", "tags": "" },
{ "title": "Ghost Blade", "imageLink": "https://meo.comick.pictures/KYoQK.jpg", "type": "Manhua | 40", "desc": "", "author": "WLOP", "dateOfRelease": "2014", "status": "Ongoing" ,
"summary": "Long, long ago in Neraland, the pious humans built a great tower to show respect to their Goddess Nera. Goddess Nera was deeply moved by human piety; to reward them, she opened a door at the top of the tower. This ethereal door connected to another world; it was known as Heaven's Eye." ,
"comments": "", "tags": "" },
{ "title": "Goblin’s Night", "imageLink": "https://meo.comick.pictures/p64M1l.jpg", "type": "Manhwa | 100", "desc": "", "author": "Moonshik, Dool", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Once every 666 years, a ceremony is held to select the king of Yokai and each Yokai in this world possesses one entry ticket for it. And Choi Si-woo is, in fact, a hybrid of a human and a goblin, inheriting the blood of an extinct goblin. Among the goblin folk, only Choi Si-woo possesses the entry ticket. As the sole survivor inheriting the blood of a goblin, the adventure of the half-monster boy, Choi Si-woo, begins." ,
"comments": "", "tags": "" },
{ "title": "God Of Bath", "imageLink": "https://meo.comick.pictures/axmL5.jpg", "type": "Manhwa | 30", "desc": "", "author": "Ha Il-Kwon", "dateOfRelease": "2011", "status": "Completed" ,
"summary": "Heo Se is a 23-year-old young man. He graduated from a junior college with a degree in design, but he couldn't find a job. He finally borrowed money from a loan shark and could not pay back his debt. Heo Se is then chased by the loan shark who wants to put him on a deep-sea fishing vessel. At that moment, he sees a hot spring theme park named 'Geumjatang.' To hide from the loan shark he goes into 'Geumjatang.' There, he meets an old man known as President. The President pays Heo Se's debt and forces Heo Se to work as a scrubber at the bathhouse." ,
"comments": "", "tags": "" },
{ "title": "Golden‑Haired Elementalist", "imageLink": "https://meo.comick.pictures/DGDgY.jpg", "type": "Manhwa | 110", "desc": "", "author": "Geulbi, Domac", "dateOfRelease": "2019", "status": "Completed" ,
"summary": "I thought I was dead, but when I woke up, I was reincarnated as a nobleman's daughter?! The only thing I did in the seventeen years of my first life was studying. Now that I'm alive again, I won't live just to study! The second life of an ordinary middle school girl with a slightly strange personality, Jeanie Crowell, begins an unstoppable journey on this continent!" ,
"comments": "", "tags": "" },
{ "title": "Gosu", "imageLink": "https://meo.comick.pictures/ENeJG.png", "type": "Manhwa | 230", "desc": "", "author": "RYU Ki-Woon", "dateOfRelease": "2015", "status": "Completed" ,
"summary": "A young man set forth to avenge his master, a once powerful martial artist who was betrayed by his own men and barely escaped with his life. Armed with his master's supreme martial art techniques, he is ready to bring terror and wreak havoc among the murim. But before he even got started, he learns that the ones who had betrayed his master are already dead… Erm, so what happens now?" ,
"comments": "", "tags": "" },
{ "title": "Guard Pass", "imageLink": "https://meo.comick.pictures/5pMgRB.png", "type": "Manhwa | 150", "desc": "", "author": "Oh Son Do Son", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "While Se-Jun Im settles things with his fists, his best friend, Ha-Jin Seo, eats and breathes grappling. Together, they fend off bullies on their school campus, but everything changes after a fight that sets Se-Jun on a mission to hold those responsible accountable for their crimes. What began as a schoolroom brawl quickly turns into a fight for justice and truth as Se-Jun hits the streets looking for any leads as to what happened on that fateful day." ,
"comments": "", "tags": "" },
{ "title": "Happily Ever Afterwards", "imageLink": "https://meo.comick.pictures/m3we.jpg", "type": "Manhwa | 90", "desc": "", "author": "Hwang Dotol, Jeongseo", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "What would you do if you were reborn as a character from your favorite romance novel? For Peony, an avid fan of The Song of Askar, the answer is simple: Marry her favorite character, of course! Reincarnated as the princess of the Kingdom of Garten, Peony is determined to marry Richt, the second male lead of The Song of Askar and former prince of the Fairspren Empire, who was banished to an inhospitable land after the novel’s happy ending." ,
"comments": "", "tags": "" },
{ "title": "Hardcore Leveling Warrior", "imageLink": "https://meo.comick.pictures/B5KXq.jpg", "type": "Manhwa | 320", "desc": "", "author": "Kim Sehoon", "dateOfRelease": "2016", "status": "Completed" ,
"summary": "Known as Hardcore Leveling Warrior, Gong Won-Ho is the #1 player of the world's biggest game, Lucid Adventure. But when a mysterious player kills Ethan and forces his character back to level 1, he will do anything to get back on top. New friends and old foes, as well as mysterious forces and his own dark past, will follow him as he does his best to take back what was once his!" ,
"comments": "", "tags": "" },
{ "title": "Heavenly Sword's Grand Saga", "imageLink": "https://meo.comick.pictures/exxe6.png", "type": "Manhwa | 40", "desc": "", "author": "Eunyoul", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "There are people in the world that think they are the ‘chosen’ of the heavens. It’s been decades since chaos and strife among heroes ensued because of those people. A certain disciple who has six masters has been entrusted with the fate of the central plains. “If you guys are the heavens, then I’m the sword that’ll pierce the heavens.” That was what he’d resolved to do… No one mentioned he was fat, though! In any case, now that he’s here, he’ll need to save the… world… Damn it, lose some weight first." ,
"comments": "", "tags": "" },
{ "title": "Hectopascal", "imageLink": "https://meo.comick.pictures/kdvvZy.jpg", "type": "Manhwa | 100", "desc": "", "author": "Beopeoling", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "What will you do if a suit with a briefcase full of money presents himself in front of you? For Park Hanjun, a high schooler beaten down to the ground in an alley, the answer has been set in stone for a while: be true to his heart once more, unleash those simmering knuckles, and beat the shit out of anyone standing in his way to his revenge." ,
"comments": "", "tags": "" },
{ "title": "Hellper", "imageLink": "https://meo.comick.pictures/XWGmM.jpg", "type": "Manhwa | 190", "desc": "", "author": "Sakk", "dateOfRelease": "2011", "status": "Completed" ,
"summary": "An action fantasy manga that takes place in both this life and the next, featuring the boss of the guard tribe that protects the city, Jang Gwang Nam." ,
"comments": "", "tags": "" },
{ "title": "Her Summon", "imageLink": "https://meo.comick.pictures/0wvyY.jpg", "type": "Manhwa | 120", "desc": "", "author": "Park Jin-Joon", "dateOfRelease": "2018", "status": "Completed" ,
"summary": "One day, as Jin-Kyung was no-lifing as usual, he was summoned to ‘Another World’, and came face-to-face with a bright-eyed, hopeful Summoner… Interestingly enough, in the world that Jin-Kyung was summoned to, his Social Anxiety Disorder disappeared, and he was also able to wield immense power, and became the strongest summoned being there ever was!!" ,
"comments": "", "tags": "" },
{ "title": "Hero's Diner", "imageLink": "https://meo.comick.pictures/DZ4Nk.png", "type": "Manhwa | 80", "desc": "", "author": "Shin Hyun Beom", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Stinky tofu, durian, surstromming’s era is over. Have you heard? Cooking that’s so bad that you could die on the spot! But my skill is increasing!? Tera, whose cooking boasts the best(?) taste in all dimensions, through the bravest yoo seungwoo’s help, has come to peaceful(?) earth. Endure it! if you eat it and don’t die, your level will go up! and then on behalf of me, protect the earth!" ,
"comments": "", "tags": "" },
{ "title": "Hero Has Returned", "imageLink": "https://meo.comick.pictures/g1Qql.jpg", "type": "Manhwa | 160", "desc": "", "author": "Narack, Fungback", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "After saving one world, warrior Kim Minsu returns to Earth only to find that he’s lost everything… so he decides to destroy the world he used to call home. In his rampage, he kills teenager Jeongsu Park and his family. But instead of dying normally, Jeongsu is transported to another world, where he finds that he’s now a warrior himself. After killing the demon king of this alternate world and honing his skills as a warrior, Jeongsu returns to earth, hell-bent on revenge against Minsu." ,
"comments": "", "tags": "" },
{ "title": "Hero Killer", "imageLink": "https://meo.comick.pictures/mXEX4.jpg", "type": "Manhwa | 230", "desc": "", "author": "Beolkkul", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "The world is in constant turmoil, with constant wars breaking out between Heroes and Villains. Gifted with supernatural abilities, one lone girl sets out on a bloody path for revenge against the injustices of the world she lives in. With the constant clashes between titans, no one is safe." ,
"comments": "", "tags": "" },
{ "title": "Viral Hit", "imageLink": "https://meo.comick.pictures/m2EYY.jpg", "type": "Manhwa | 220", "desc": "", "author": "Park Tae Joon, Kim Junghyun", "dateOfRelease": "2019", "status": "Completed" ,
"summary": "Good for nothing Yoo Hobin is always bullied by students who feel superior to him, yet he ignores them as his life is all too difficult already. However, an unintentional incident ends up turning his life around. He became famous through a viral video that he didn't even intend to upload! Everything is perfect! He instantly becomes famous and starts earning money from the accidental video he uploaded." ,
"comments": "", "tags": "" },
{ "title": "How To Win My Husband Over", "imageLink": "https://meo.comick.pictures/7Lbbe.jpg", "type": "Manhwa | 120", "desc": "", "author": "Nyangiwa Hyangshinlo", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "I thought I'd finally escaped my hellish life when I died in an airplane crash, but I fell into another nightmare when I awoke as Rudbeckia de Borgia, a minor villain from a historical novel destined to die at the hands of her husband, Iske van Omerta. Surviving with the dysfunctional Borgia family is hard enough, but now I have to marry the man who will kill me! " ,
"comments": "", "tags": "" },
{ "title": "How To Refuse The Route", "imageLink": "https://meo.comick.pictures/2NvQlJ.jpg", "type": "Manhwa | 60", "desc": "", "author": "Honey Trap, Saessak", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "In the ultimate dating game mayhem, Jerry Route's virtual love life takes center stage! Battling fainting spells due to his feeble stats, Jerry's three brothers crank up the competition for his affection. Enter the swoon-worthy crown prince Karyan and the fourth prince Ilya, who both vie for Jerry's attention. It's a hilarious, heart-fluttering quest as Jerry dodges the overprotective antics of friends and family, navigating the game while encountering an amusing array of characters." ,
"comments": "LMAOOOOO", "tags": "" },
{ "title": "How To Survive As A Maid In A Horror Game", "imageLink": "https://meo.comick.pictures/qY1lLR.jpg", "type": "Manhwa | 70", "desc": "", "author": "Kim Yomnyom", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Adrian Caesar von de Paltzgraf, the successor to the Paltzgraf Family. He is hailed as an angel in this world, but only I knew that the serial murders and murder attempts happening in the area which everyone was talking about were all committed by a young, good-looking gentleman. I am the only one who knows. I was the only one who transmigrated into the world of this ridiculous horror game." ,
"comments": "", "tags": "" },
{ "title": "Lord Of The Apocalypse", "imageLink": "https://meo.comick.pictures/oa66Rr.png", "type": "Manhua | 60", "desc": "", "author": "Pictoral Society", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "The end of the world is coming, and human beings have awakened their superpowers and fought against the monsters in the towers. However, there is a strongest BOSS sitting at the highest point of the tower - Demon King Jiu Ming. He is an insurmountable barrier for humans. One after another, the brave men always thought that they were the protagonists in the story, but the halo of the protagonists never came to them." ,
"comments": "", "tags": "" },
{ "title": "I Became The Game's Biggest Villain", "imageLink": "https://meo.comick.pictures/5pgdbj.png", "type": "Manhua | 120", "desc": "", "author": "Blackbird Club", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "This is an extremely difficult game. If you don’t have enough abilities, you won’t be able to escape!" ,
"comments": "", "tags": "" },
{ "title": "I Became The Tyrant Of A Defense Game", "imageLink": "https://meo.comick.pictures/2Jjxm.png", "type": "Manhwa | 140", "desc": "", "author": "Ryuen Garam, Ha Jung", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Streamer extraordinaire Mr. Gamer Geek is sucked into the world of Protect the Empire by some mysterious figure and thrust into Prince Ash's body! Ash now realizes that every click and command he had mindlessly sent out had real, gruesome costs - including his teammates' lives that he sacrificed for the sake of victory. To make up for his previous actions, Ash promises to keep his whole team alive this time while using his wits and knowledge to survive the hellish onslaught of monsters." ,
"comments": "", "tags": "" },
{ "title": "Author Of My Own Destiny", "imageLink": "https://meo.comick.pictures/zRLQz.jpg", "type": "Manhwa | 130", "desc": "", "author": "Winter Leaf, Purik, Jeokbal", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Evil mage Fiona Green was destined to die at the hands of the protagonist couple in The Emperor and the Saint. That is until the story’s author became Fiona herself! Though mistreated, cast out by her pompous family, and thrown into the battle at Heylon, Fiona is determined to use her magic for good. But things take a rather unexpected turn when she rescues the male lead, Siegren, turning him from foe to friend…" ,
"comments": "", "tags": "" },
{ "title": "I Can See Your Stats!", "imageLink": "https://meo.comick.pictures/3QzmE.jpg", "type": "Manhwa | 70", "desc": "", "author": "Carpexd", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "An estate to manage, a lover to tame. Following the gruesome death of his family, mage Eyra inherits the Solath Estate and becomes a lord overnight, only to discover that he can suddenly see the stats of everyone he meets. Enter Yanu, a dashing jack-of-all-trades who seems hell-bent on distracting him from his newfound duties..." ,
"comments": "", "tags": "" },
{ "title": "I Got The Weakest Class, Dragon Tamer?", "imageLink": "https://meo.comick.pictures/jx3wxk.jpg", "type": "Manhua | 150", "desc": "", "author": "Gui Qi Shuang Dao", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Combining reality with a gaming world where ferocious beasts roam freely, filled with numerous mysteries and dungeons. In order to defend against the onslaught of these beasts, everyone undergoes class transfers and crazily levels up. On the day of his transfer, Lu Fan becomes a hidden class – Dragon Tamer. However, due to the immense strength of dragons, it is deemed impossible for anyone to tame them, earning Dragon Tamer the reputation of being the most useless class." ,
"comments": "", "tags": "" },
{ "title": "I Grow Stronger By Eating", "imageLink": "https://meo.comick.pictures/5YXkJ.jpg", "type": "Manhwa | 100", "desc": "", "author": "Frost Mourne, Kitaeon", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "Known as “Pet Shop,” Mr. Kim has the unique ability to absorb the skills of the creatures he eats. One day, Pet Shop is mysteriously transported to a magical world full of orcs, trolls, and monsters. A new world, new chow, and new skills. Now Pet Shop is determined to become the most powerful creature in the world. Follow his epic climb to the top of the food chain." ,
"comments": "", "tags": "" },
{ "title": "Your Ultimate Love Rival", "imageLink": "https://meo.comick.pictures/nrNyq.jpg", "type": "Manhwa | 90", "desc": "", "author": "Sol Leesu, SaJeog", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "Naturally charming, Irene attracts women like a magnet, even when she doesn't mean to. Enter her best friend, Claudia, who refuses to marry any of her three suitors because of her affection for Irene. As a result, these powerful and mentally unstable men declare Irene as their rival in love and threaten her life. She knows none of them deserves to be with Claudia, but she doesn't want to die! To save both her friend and herself, Irene must prove she's their ultimate rival, but will she succeed?" ,
"comments": "", "tags": "" },
{ "title": "For My Derelict Favorite", "imageLink": "https://meo.comick.pictures/MLb5EQ.png", "type": "Manhwa | 110 ", "desc": "", "author": "Ryuho", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "I entered my favorite romantic fantasy novel! I may be a commoner, but I'm rich beyond belief. I quietly watched the romance of the main characters in the original novel, assuming I would go back to reality after reaching the novel's ending... However, even after the ending, I am still stuck in this world! As a result, I learned the behind-the-scenes stories that I didn't want to know. My favorite second male lead, Kaelus, died. Living in poverty without him, I eventually became ill and died as well. I thought I would return to reality, but I went back in time instead.",
"comments": "", "tags": "" },
{ "title": "Barbarian Quest", "imageLink": "https://meo.comick.pictures/Q7LY0.jpg", "type": "Manhwa | 100", "desc": "", "author": "Baeksu Noble", "dateOfRelease": "2022", "status": "Competed" ,
"summary": "When Urich's daring attempt to venture near the ominous Sky Mountains with his friends gets him kidnapped, he learns that there is a new world that exists beyond his own.After a hellish fight with his attackers, he frees himself and sets off on a journey to explore this new realm. There, he encounters allies and enemies alike, each meeting helping him learn more about the civilization and grow as a warrior." ,
"comments": "", "tags": "" },
{ "title": "Ghost Blade", "imageLink": "https://meo.comick.pictures/KYoQK.jpg", "type": "Manhua | 40", "desc": "", "author": "WLOP", "dateOfRelease": "2014", "status": "Ongoing" ,
"summary": "Long, long ago in Neraland, the pious humans built a great tower to show respect to their Goddess Nera. Goddess Nera was deeply moved by human piety; to reward them, she opened a door at the top of the tower. This ethereal door connected to another world; it was known as Heaven's Eye." ,
"comments": "", "tags": "" },
{ "title": "Goblin’s Night", "imageLink": "https://meo.comick.pictures/p64M1l.jpg", "type": "Manhwa | 100", "desc": "", "author": "Moonshik, Dool", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Once every 666 years, a ceremony is held to select the king of Yokai and each Yokai in this world possesses one entry ticket for it. And Choi Si-woo is, in fact, a hybrid of a human and a goblin, inheriting the blood of an extinct goblin. Among the goblin folk, only Choi Si-woo possesses the entry ticket. As the sole survivor inheriting the blood of a goblin, the adventure of the half-monster boy, Choi Si-woo, begins." ,
"comments": "", "tags": "" },
{ "title": "God Of Bath", "imageLink": "https://meo.comick.pictures/axmL5.jpg", "type": "Manhwa | 30", "desc": "", "author": "Ha Il-Kwon", "dateOfRelease": "2011", "status": "Completed" ,
"summary": "Heo Se is a 23-year-old young man. He graduated from a junior college with a degree in design, but he couldn't find a job. He finally borrowed money from a loan shark and could not pay back his debt. Heo Se is then chased by the loan shark who wants to put him on a deep-sea fishing vessel. At that moment, he sees a hot spring theme park named 'Geumjatang.' To hide from the loan shark he goes into 'Geumjatang.' There, he meets an old man known as President. The President pays Heo Se's debt and forces Heo Se to work as a scrubber at the bathhouse." ,
"comments": "", "tags": "" },
{ "title": "Golden‑Haired Elementalist", "imageLink": "https://meo.comick.pictures/DGDgY.jpg", "type": "Manhwa | 110", "desc": "", "author": "Geulbi, Domac", "dateOfRelease": "2019", "status": "Completed" ,
"summary": "I thought I was dead, but when I woke up, I was reincarnated as a nobleman's daughter?! The only thing I did in the seventeen years of my first life was studying. Now that I'm alive again, I won't live just to study! The second life of an ordinary middle school girl with a slightly strange personality, Jeanie Crowell, begins an unstoppable journey on this continent!" ,
"comments": "", "tags": "" },
{ "title": "Gosu", "imageLink": "https://meo.comick.pictures/ENeJG.png", "type": "Manhwa | 230", "desc": "", "author": "RYU Ki-Woon", "dateOfRelease": "2015", "status": "Completed" ,
"summary": "A young man set forth to avenge his master, a once powerful martial artist who was betrayed by his own men and barely escaped with his life. Armed with his master's supreme martial art techniques, he is ready to bring terror and wreak havoc among the murim. But before he even got started, he learns that the ones who had betrayed his master are already dead… Erm, so what happens now?" ,
"comments": "", "tags": "" },
{ "title": "Guard Pass", "imageLink": "https://meo.comick.pictures/5pMgRB.png", "type": "Manhwa | 150", "desc": "", "author": "Oh Son Do Son", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "While Se-Jun Im settles things with his fists, his best friend, Ha-Jin Seo, eats and breathes grappling. Together, they fend off bullies on their school campus, but everything changes after a fight that sets Se-Jun on a mission to hold those responsible accountable for their crimes. What began as a schoolroom brawl quickly turns into a fight for justice and truth as Se-Jun hits the streets looking for any leads as to what happened on that fateful day." ,
"comments": "", "tags": "" },
{ "title": "Happily Ever Afterwards", "imageLink": "https://meo.comick.pictures/m3we.jpg", "type": "Manhwa | 90", "desc": "", "author": "Hwang Dotol, Jeongseo", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "What would you do if you were reborn as a character from your favorite romance novel? For Peony, an avid fan of The Song of Askar, the answer is simple: Marry her favorite character, of course! Reincarnated as the princess of the Kingdom of Garten, Peony is determined to marry Richt, the second male lead of The Song of Askar and former prince of the Fairspren Empire, who was banished to an inhospitable land after the novel’s happy ending." ,
"comments": "", "tags": "" },
{ "title": "Hardcore Leveling Warrior", "imageLink": "https://meo.comick.pictures/B5KXq.jpg", "type": "Manhwa | 320", "desc": "", "author": "Kim Sehoon", "dateOfRelease": "2016", "status": "Completed" ,
"summary": "Known as Hardcore Leveling Warrior, Gong Won-Ho is the #1 player of the world's biggest game, Lucid Adventure. But when a mysterious player kills Ethan and forces his character back to level 1, he will do anything to get back on top. New friends and old foes, as well as mysterious forces and his own dark past, will follow him as he does his best to take back what was once his!" ,
"comments": "", "tags": "" },
{ "title": "Heavenly Sword's Grand Saga", "imageLink": "https://meo.comick.pictures/exxe6.png", "type": "Manhwa | 40", "desc": "", "author": "Eunyoul", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "There are people in the world that think they are the ‘chosen’ of the heavens. It’s been decades since chaos and strife among heroes ensued because of those people. A certain disciple who has six masters has been entrusted with the fate of the central plains. “If you guys are the heavens, then I’m the sword that’ll pierce the heavens.” That was what he’d resolved to do… No one mentioned he was fat, though! In any case, now that he’s here, he’ll need to save the… world… Damn it, lose some weight first." ,
"comments": "", "tags": "" },
{ "title": "Hectopascal", "imageLink": "https://meo.comick.pictures/kdvvZy.jpg", "type": "Manhwa | 100", "desc": "", "author": "Beopeoling", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "What will you do if a suit with a briefcase full of money presents himself in front of you? For Park Hanjun, a high schooler beaten down to the ground in an alley, the answer has been set in stone for a while: be true to his heart once more, unleash those simmering knuckles, and beat the shit out of anyone standing in his way to his revenge." ,
"comments": "", "tags": "" },
{ "title": "Hellper", "imageLink": "https://meo.comick.pictures/XWGmM.jpg", "type": "Manhwa | 190", "desc": "", "author": "Sakk", "dateOfRelease": "2011", "status": "Completed" ,
"summary": "An action fantasy manga that takes place in both this life and the next, featuring the boss of the guard tribe that protects the city, Jang Gwang Nam." ,
"comments": "", "tags": "" },
{ "title": "Her Summon", "imageLink": "https://meo.comick.pictures/0wvyY.jpg", "type": "Manhwa | 120", "desc": "", "author": "Park Jin-Joon", "dateOfRelease": "2018", "status": "Completed" ,
"summary": "One day, as Jin-Kyung was no-lifing as usual, he was summoned to ‘Another World’, and came face-to-face with a bright-eyed, hopeful Summoner… Interestingly enough, in the world that Jin-Kyung was summoned to, his Social Anxiety Disorder disappeared, and he was also able to wield immense power, and became the strongest summoned being there ever was!!" ,
"comments": "", "tags": "" },
{ "title": "Hero's Diner", "imageLink": "https://meo.comick.pictures/DZ4Nk.png", "type": "Manhwa | 80", "desc": "", "author": "Shin Hyun Beom", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Stinky tofu, durian, surstromming’s era is over. Have you heard? Cooking that’s so bad that you could die on the spot! But my skill is increasing!? Tera, whose cooking boasts the best(?) taste in all dimensions, through the bravest yoo seungwoo’s help, has come to peaceful(?) earth. Endure it! if you eat it and don’t die, your level will go up! and then on behalf of me, protect the earth!" ,
"comments": "", "tags": "" },
{ "title": "Hero Has Returned", "imageLink": "https://meo.comick.pictures/g1Qql.jpg", "type": "Manhwa | 160", "desc": "", "author": "Narack, Fungback", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "After saving one world, warrior Kim Minsu returns to Earth only to find that he’s lost everything… so he decides to destroy the world he used to call home. In his rampage, he kills teenager Jeongsu Park and his family. But instead of dying normally, Jeongsu is transported to another world, where he finds that he’s now a warrior himself. After killing the demon king of this alternate world and honing his skills as a warrior, Jeongsu returns to earth, hell-bent on revenge against Minsu." ,
"comments": "", "tags": "" },
{ "title": "Hero Killer", "imageLink": "https://meo.comick.pictures/mXEX4.jpg", "type": "Manhwa | 230", "desc": "", "author": "Beolkkul", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "The world is in constant turmoil, with constant wars breaking out between Heroes and Villains. Gifted with supernatural abilities, one lone girl sets out on a bloody path for revenge against the injustices of the world she lives in. With the constant clashes between titans, no one is safe." ,
"comments": "", "tags": "" },
{ "title": "Viral Hit", "imageLink": "https://meo.comick.pictures/m2EYY.jpg", "type": "Manhwa | 220", "desc": "", "author": "Park Tae Joon, Kim Junghyun", "dateOfRelease": "2019", "status": "Completed" ,
"summary": "Good for nothing Yoo Hobin is always bullied by students who feel superior to him, yet he ignores them as his life is all too difficult already. However, an unintentional incident ends up turning his life around. He became famous through a viral video that he didn't even intend to upload! Everything is perfect! He instantly becomes famous and starts earning money from the accidental video he uploaded." ,
"comments": "", "tags": "" },
{ "title": "How To Win My Husband Over", "imageLink": "https://meo.comick.pictures/7Lbbe.jpg", "type": "Manhwa | 120", "desc": "", "author": "Nyangiwa Hyangshinlo", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "I thought I'd finally escaped my hellish life when I died in an airplane crash, but I fell into another nightmare when I awoke as Rudbeckia de Borgia, a minor villain from a historical novel destined to die at the hands of her husband, Iske van Omerta. Surviving with the dysfunctional Borgia family is hard enough, but now I have to marry the man who will kill me! " ,
"comments": "", "tags": "" },
{ "title": "How To Refuse The Route", "imageLink": "https://meo.comick.pictures/2NvQlJ.jpg", "type": "Manhwa | 60", "desc": "", "author": "Honey Trap, Saessak", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "In the ultimate dating game mayhem, Jerry Route's virtual love life takes center stage! Battling fainting spells due to his feeble stats, Jerry's three brothers crank up the competition for his affection. Enter the swoon-worthy crown prince Karyan and the fourth prince Ilya, who both vie for Jerry's attention. It's a hilarious, heart-fluttering quest as Jerry dodges the overprotective antics of friends and family, navigating the game while encountering an amusing array of characters." ,
"comments": "LMAOOOOO", "tags": "" },
{ "title": "How To Survive As A Maid In A Horror Game", "imageLink": "https://meo.comick.pictures/qY1lLR.jpg", "type": "Manhwa | 70", "desc": "", "author": "Kim Yomnyom", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Adrian Caesar von de Paltzgraf, the successor to the Paltzgraf Family. He is hailed as an angel in this world, but only I knew that the serial murders and murder attempts happening in the area which everyone was talking about were all committed by a young, good-looking gentleman. I am the only one who knows. I was the only one who transmigrated into the world of this ridiculous horror game." ,
"comments": "", "tags": "" },
{ "title": "Lord Of The Apocalypse", "imageLink": "https://meo.comick.pictures/oa66Rr.png", "type": "Manhua | 60", "desc": "", "author": "Pictoral Society", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "The end of the world is coming, and human beings have awakened their superpowers and fought against the monsters in the towers. However, there is a strongest BOSS sitting at the highest point of the tower - Demon King Jiu Ming. He is an insurmountable barrier for humans. One after another, the brave men always thought that they were the protagonists in the story, but the halo of the protagonists never came to them." ,
"comments": "", "tags": "" },
{ "title": "I Became The Game's Biggest Villain", "imageLink": "https://meo.comick.pictures/5pgdbj.png", "type": "Manhua | 120", "desc": "", "author": "Blackbird Club", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "This is an extremely difficult game. If you don’t have enough abilities, you won’t be able to escape!" ,
"comments": "", "tags": "" },
{ "title": "I Became The Tyrant Of A Defense Game", "imageLink": "https://meo.comick.pictures/2Jjxm.png", "type": "Manhwa | 140", "desc": "", "author": "Ryuen Garam, Ha Jung", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "Streamer extraordinaire Mr. Gamer Geek is sucked into the world of Protect the Empire by some mysterious figure and thrust into Prince Ash's body! Ash now realizes that every click and command he had mindlessly sent out had real, gruesome costs - including his teammates' lives that he sacrificed for the sake of victory. To make up for his previous actions, Ash promises to keep his whole team alive this time while using his wits and knowledge to survive the hellish onslaught of monsters." ,
"comments": "", "tags": "" },
{ "title": "Author Of My Own Destiny", "imageLink": "https://meo.comick.pictures/zRLQz.jpg", "type": "Manhwa | 130", "desc": "", "author": "Winter Leaf, Purik, Jeokbal", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Evil mage Fiona Green was destined to die at the hands of the protagonist couple in The Emperor and the Saint. That is until the story’s author became Fiona herself! Though mistreated, cast out by her pompous family, and thrown into the battle at Heylon, Fiona is determined to use her magic for good. But things take a rather unexpected turn when she rescues the male lead, Siegren, turning him from foe to friend…" ,
"comments": "", "tags": "" },
{ "title": "I Can See Your Stats!", "imageLink": "https://meo.comick.pictures/3QzmE.jpg", "type": "Manhwa | 70", "desc": "", "author": "Carpexd", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "An estate to manage, a lover to tame. Following the gruesome death of his family, mage Eyra inherits the Solath Estate and becomes a lord overnight, only to discover that he can suddenly see the stats of everyone he meets. Enter Yanu, a dashing jack-of-all-trades who seems hell-bent on distracting him from his newfound duties..." ,
"comments": "", "tags": "" },
{ "title": "I Got The Weakest Class, Dragon Tamer?", "imageLink": "https://meo.comick.pictures/jx3wxk.jpg", "type": "Manhua | 150", "desc": "", "author": "Gui Qi Shuang Dao", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Combining reality with a gaming world where ferocious beasts roam freely, filled with numerous mysteries and dungeons. In order to defend against the onslaught of these beasts, everyone undergoes class transfers and crazily levels up. On the day of his transfer, Lu Fan becomes a hidden class – Dragon Tamer. However, due to the immense strength of dragons, it is deemed impossible for anyone to tame them, earning Dragon Tamer the reputation of being the most useless class." ,
"comments": "", "tags": "" },
{ "title": "I Grow Stronger By Eating", "imageLink": "https://meo.comick.pictures/5YXkJ.jpg", "type": "Manhwa | 100", "desc": "", "author": "Frost Mourne, Kitaeon", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "Known as “Pet Shop,” Mr. Kim has the unique ability to absorb the skills of the creatures he eats. One day, Pet Shop is mysteriously transported to a magical world full of orcs, trolls, and monsters. A new world, new chow, and new skills. Now Pet Shop is determined to become the most powerful creature in the world. Follow his epic climb to the top of the food chain." ,
"comments": "", "tags": "" },
{ "title": "Your Ultimate Love Rival", "imageLink": "https://meo.comick.pictures/nrNyq.jpg", "type": "Manhwa | 90", "desc": "", "author": "Sol Leesu, SaJeog", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "Naturally charming, Irene attracts women like a magnet, even when she doesn't mean to. Enter her best friend, Claudia, who refuses to marry any of her three suitors because of her affection for Irene. As a result, these powerful and mentally unstable men declare Irene as their rival in love and threaten her life. She knows none of them deserves to be with Claudia, but she doesn't want to die! To save both her friend and herself, Irene must prove she's their ultimate rival, but will she succeed?" ,
"comments": "", "tags": "" },
{ "title": "I Killed An Academy Player", "imageLink": "https://meo.comick.pictures/NrRrxm.png", "type": "Manhwa | 80", "desc": "", "author": "Salam Sallyeo, Girin Geurin", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Being a character of your favorite game is great! Sure, he’s just a minor NPC, but Corin knows this game like the back of his hand. With his knowledge and the main player Sihu’s abilities, everything’s going smoothly - until Corin discovers Sihu’s been murdering innocent NPCs and stealing their items. Horrified but powerless to stop him, Corin awaits the end of the game - only for Sihu to mysteriously fail at the last mission." ,
"comments": "", "tags": "" },
{ "title": "I Raised A Black Dragon", "imageLink": "https://meo.comick.pictures/R8EZoq.jpg", "type": "Manhwa | 70", "desc": "", "author": "Dalseul, Sottan", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "The witch, Eleanor Asil, has fifteen previous convictions. And the transmigrator, Noah Park, had no intentions of being involved in the novel’s original plot of the dragon beheading the villainess. With that thought in mind, she abandoned her titles as The Wicked Witch and sought to live a long and peaceful life. So she heads down to the countryside wrought with deep remorse for all her misdeeds. And all should be happy… or so she thought." ,
"comments": "", "tags": "" },
{ "title": "I Tamed My Ex-Husband's Mad Dog", "imageLink": "https://meo.comick.pictures/zylwq.jpg", "type": "Manhwa | 110", "desc": "", "author": "Cheolmu Jangmi, Jagyum", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "From the moment she had foreseen her death, Reinhardt continued to repeat her final wish. When she came to her senses, she found herself at her father's funeral fifteen years earlier. Back to when she had been divorced by Crown Prince Mikael Alanquez, the reason why her father lost his life. As revenge, Reinhardt stabbed the Crown Prince’s leg. And as a consequence, she was exiled to a faraway territory. While she was on her rough journey, she encountered someone unexpected… The dirty, pitiful kid she picked up, in the previous time-line, was not only a war hero, but the emperor's illegitimate child — the 'mad dog' whom her ex-husband had tamed." ,
"comments": "", "tags": "" },
{ "title": "I Was Mistaken As A Monstrous Genius Actor", "imageLink": "https://meo.comick.pictures/oa6JN4.jpg", "type": "Manhwa | 60", "desc": "", "author": "Jungseong Manyeo", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "One day, Kang Woo-jin suddenly gains the ability to enter a subspace when he reads a script or scenario, and to become the character himself through the subspace. And then, at an audition location where he followed his friend, he happened to show the acting he experienced through the subspace…?" ,
"comments": "", "tags": "" },
{ "title": "I Shall Master This Family", "imageLink": "https://meo.comick.pictures/b5k7e.jpg", "type": "Manhwa | 200", "desc": "", "author": "Ant Studio, Kim Roah, Gammon", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "I've reincarnated as Firentia Lombardy, the illegitimate daughter of the wealthiest and most influential family in the Empire. I thought I was all set to have a comfortable and luxurious life… but it wasn't long before my beloved father died, my relatives kicked me out, and our family went bankrupt!! To add insult to injury, I was hit by a carriage one day… but my despair was only temporary. When I opened my eyes, I found that I'd traveled back in time to when I was 7 years old!" ,
"comments": "", "tags": "" },
{ "title": "I Will Become The Villain's Poison Taster", "imageLink": "https://meo.comick.pictures/x7G8EO.jpg", "type": "Manhwa | 80", "desc": "", "author": "Nemolaming, Jagalchikon", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "After dying in a car accident, an office worker finds herself reincarnated as Giselle Rozevin, a villain doomed to be poisoned while awaiting a death sentence. Although many assassins try to poison her, they all end up failing! In fact, the poisons Giselle ingests actually taste… good?! Can Giselle leverage this ability to survive her new surroundings?" ,
"comments": "", "tags": "" },
{ "title": "The Creator Is On Hiatus", "imageLink": "https://meo.comick.pictures/v4NYq.jpg", "type": "Manhwa | 120", "desc": "", "author": "Kim Eui Sun", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "My name is Yu Il-shin, and I'm a shitty, third-rate novelist. My name might be 'Only God' in Korean, but don't actually pray to me. It's just a name. This one random day, I finally got my wish of awakening... but my ability is kind of strange. I'm able to connect to a small world through my smartphone, where the weak ants worship me as god!" ,
"comments": "", "tags": "" },
{ "title": "The Villainess Is Retiring", "imageLink": "https://meo.comick.pictures/ez3vLL.jpg", "type": "Manhwa | 80", "desc": "", "author": "Kim Daham", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "I was flustered to find out that I had signed a life contract with a demon just to start a fire but to think that I’d be responsible for relieving his desires! The bickering romance between a big puppy demon and a small villainess lady!" ,
"comments": "", "tags": "" },
{ "title": "I'm A Middle Schooler Becoming The Demon Lord", "imageLink": "https://meo.comick.pictures/r6xbG.jpg", "type": "Manhwa | 40", "desc": "", "author": "38", "dateOfRelease": "2017", "status": "Ongoing" ,
"summary": "Fifteen-year old demon prince, Myoung Seong Joon. To become the demon lord he attended a middle school in the human realm and started the maturity ritual." ,
"comments": "", "tags": "" },
{ "title": "I'm The Fated Villain", "imageLink": "https://meo.comick.pictures/ywl4M.jpg", "type": "Manhua | 270", "desc": "", "author": "Heavenly Villain, Ejutsu Anime", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Immediately after Gu Changge realized he had transgressed into a fantasy world, the world's protagonist, and fortune's chosen, vowed to take revenge on him. Envied by all, not only is the female lead head over heels for him, but he's also treated as a distinguished guest wherever he goes. Fortunately, Gu Changge's prestige and power are superior to everyone else's, so shouldn't it be easy to trample on a mere fortune's choice?" ,
"comments": "", "tags": "" },
{ "title": "I'm Gonna Annihilate This Land", "imageLink": "https://meo.comick.pictures/jxXpGk.jpg", "type": "Manhwa | 50", "desc": "", "author": "shaimel, SAN.G", "dateOfRelease": "2025", "status": "Ongoing" ,
"summary": "There was once the worst Skeleton Demon King who even gave the gods headaches. But he was deceived by the gods and sealed. ‘Oh my, little dear Saint, have you woken up?’ Did he become a Saint? And even the son of a nobleman in the Holy Empire that feeds the gods? Then if he destroys this country, won’t the gods also be destroyed?" ,
"comments": "", "tags": "" },
{ "title": "If AI Ruled The World", "imageLink": "https://meo.comick.pictures/yxKEo.png", "type": "Manhwa | 50", "desc": "", "author": "Pogo, Hoopa", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "Korea succeeded in developing cutting-edge AI. However, over the next 100 years, the world welcomed AI as its leader." ,
"comments": "Hmm?? Sounds kinda…. familiar", "tags": "" },
{ "title": "If You Touch My Little Brother, You're All Dead!", "imageLink": "https://meo.comick.pictures/eW0nE.jpg", "type": "Manhwa | 70", "desc": "", "author": "Cheolmu Jangmi", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "One day, she woke up from bed and opened her eyes to realise she has transmigrated into the BL novel Asterion's Starry Blue Night. The protagonist of a crazy story who killed himself on the verge of death. I've become that protagonist's older sister... Rosalite! The issue is that if and when my brother, Asterion, dies, the system will automatically revert me back to the sixteen-year-old Rosalite! That is why I must protect my brother from a plethora of other assholes in order to avert infinite regression! " ,
"comments": "Haven’t even read and I’m sensing uhhh… sister complex", "tags": "" },
{ "title": "Insector", "imageLink": "https://meo.comick.pictures/e1mBL.jpg", "type": "Manhwa | 80", "desc": "", "author": "macabim", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Humans are no longer at the top of the food chain. The creatures known as “Insectors” hide amongst us, using their supernatural insectile powers to prey upon humans. Miseong, a seemingly ordinary high school student, is also secretly an Insector. But unlike others of his kin, he directs his powers not at humans, but at Insectors instead." ,
"comments": "", "tags": "" },
{ "title": "Into The Light Once Again", "imageLink": "https://meo.comick.pictures/l23e0.jpg", "type": "Manhwa | 110", "desc": "", "author": "Tika Tika, Yuya", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "I was falsely accused of attempting to kill my younger sister, who was worshipped as a holy maiden. There was not a single person who believed in me, nor was there a person who stood up for me. Not even my blood-related family. I was fourteen years old, and it was winter. I, who was Edenbell's Fourth Princess, was miserably beheaded in front of the masses. After the end of my death, I awoke and what came was..." ,
"comments": "", "tags": "" },
{ "title": "Jakdu", "imageLink": "https://meo.comick.pictures/R82kaZ.jpg", "type": "Manhwa | 50", "desc": "", "author": "232, Pogo", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Kwon Yong-jin, a protagonist who doesn’t believe in superstitions, experiences unbelievable events right after his 16th birthday." ,
"comments": "", "tags": "" },
{ "title": "Judge And Executioner", "imageLink": "https://meo.comick.pictures/BKmwK.png", "type": "Manhwa | 70", "desc": "", "author": "Kim Soong-nyeong", "dateOfRelease": "2022", "status": "Completed" ,
"summary": "Shin, a serial murderer, has shaken the entire nation of South Korea to its core. Jihu Seo, who lost his father to Shin’s evil deeds, meets another victim: Duseok Kim, a former detective who also had his family murdered by Shin. Duseok vows to turn Jihu into a human weapon to exact revenge on Shin - in prison, with his bare hands." ,
"comments": "", "tags": "" },
{ "title": "Jungle Juice", "imageLink": "https://meo.comick.pictures/Lz1jo.jpg", "type": "Manhwa | 170", "desc": "", "author": "Youn In-Wan, Juder", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "Jang Suchan is an extraordinary college student at the top of the social food chain. But underneath the perfect façade, he hides a pair of insect wings that suddenly grew when he used a mysterious bug spray called 'Jungle Juice.' Suchan's life crumbles when he bares his wings to the world to save someone's life. When all hope seems lost, Suchan stumbles upon a hidden world of insect humans where everyone is accepted for what they are." ,
"comments": "", "tags": "" },
{ "title": "The Dawn To Come", "imageLink": "https://meo.comick.pictures/Yr16X4.jpg", "type": "Manhwa | 70", "desc": "", "author": "Woo Jihye, Kang Ki", "dateOfRelease": "2023", "status": "Completed" ,
"summary": "School is home to judgmental eyes and a source of abuse. But that's okay because Junyeong Yun found an abandoned home where she could study to her heart's content. Unfortunately, soon after, Beomjin Kwon, the town's most notorious delinquent, has also begun using the home to catch up on sleep. As the two are forced to coexist, they come to learn about their reasons for avoiding others." ,
"comments": "", "tags": "" },
{ "title": "Kalli The Champion", "imageLink": "https://meo.comick.pictures/ZXgN7x.jpg", "type": "Manhwa | 110", "desc": "", "author": "Baeksu Noble, El Macho, U130", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "After giving up his dream as a boxer, Park Kang-tae joined a gang. He was well-known inside the gang but got killed in the end. He had one regret when he died - giving up his dream as a boxer. Did God know about his regret? In a world, where boxing exists in the form of pugilist games, Park Kang-tae pursues his unfulfilled dream.",
"comments": "", "tags": "" },
{ "title": "Study Group", "imageLink": "https://meo.comick.pictures/Lz3pr.jpg", "type": "Manhwa | 290", "desc": "", "author": "Hyungwook Shin", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "Gamin Yoon, a 17 year old student, goes to a school known to harbor future criminals. Stuck in a carnivorous environment where only the strongest survive, he struggles to get good grades to enter a 4 year university. But, will he be able to study well enough to enter university, or will he get involved in the unending fights around the school?",
"comments": "", "tags": "" },
{ "title": "Kill The Hero", "imageLink": "https://meo.comick.pictures/Dl6Mp.jpg", "type": "Manhwa | 150", "desc": "", "author": "D-Dart", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "After he’s killed by the righteous leader of his own guild, Woojin gets a chance to start over. This time he’s not interested in saving the world from monsters — he’s got his sights set on revenge! His high-level kills quickly garner him notoriety among the game plebs, while boosting his stats as he masterminds his way closer to the top. But there's something no one can figure out: whose side he’s playing for.",
"comments": "", "tags": "" },
{ "title": "Killer Peter", "imageLink": "https://meo.comick.pictures/Dv5jxL.jpg", "type": "Manhwa | 100", "desc": "", "author": "Kim Jung-Hyun", "dateOfRelease": "2023", "status": "Ongoing",
"summary": "After devoting his life to the crime organization, Glory Club, Peter retires his status as a legendary killer and spends his remaining days running a quiet used bookstore. But after being ambushed and nearly killed one day by the very organization he dedicated his life to, Peter finds his body magically reverted back to its teenage years! Now that Peter is back to his peak physique, he sets out to settle the score with Glory Club!",
"comments": "", "tags": "" },
{ "title": "L.A.G.", "imageLink": "https://meo.comick.pictures/jqZak.png", "type": "Manhwa | 110", "desc": "", "author": "Hyun Ahm, Apiro", "dateOfRelease": "2022", "status": "Ongoing",
"summary": "L.A.G, an unknown space where humans use abilities or skills through awakening, monsters appear on each floor and room, and missions are given accordingly. The goal here is to reach the bottom. The protagonist repeats death and life countless times in the unknown space L.A.G. However, in this life, he has the ability to own unlimited passive skills and finally has a chance to escape there. However, unlike what he has been through so far, he will not know an inch of the future as L.A.G continues to change.",
"comments": "", "tags": "" },
{ "title": "Latna Saga", "imageLink": "https://meo.comick.pictures/EL8qe.png", "type": "Manhwa | 260", "desc": "", "author": "YKB, SOON Q", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "After being recently discharged from military service and just drifting through life, Hanbin Ryu is suddenly transported to another world. However, his “guide line,” the system bestowed upon him to help with his survival and growth, was filled with errors, causing him to be stuck in the tutorial stage for over 20 years. When he is finally released from this personal hell, he finds everyone has turned against otherworlders like him. ",
"comments": "", "tags": "" },
{ "title": "Legend Of An Asura - The Poison Dragon", "imageLink": "https://meo.comick.pictures/kKJ3v.jpg", "type": "Manhwa | 130", "desc": "", "author": "Jin Jagang", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "The mighty Medicine Faction has fallen to the evil hands of the Venom Clan. As they travel across the land, taking out each clan under the faction, Zhen Ziqiang becomes a test subject for the Elder of the Venom Clan. After being injected with various poisons, Ziqiang rises from the depths of hell as an Asura. Full of anger, he escapes and begins to plan his revenge as the sole survivor of his faction. Now, his goal is to destroy the entire Poison Faction and give them a taste of their own venom!",
"comments": "", "tags": "" },
{ "title": "Legendary Blacksmith's Vengeance", "imageLink": "https://meo.comick.pictures/54JREj.png", "type": "Manhwa | 80", "desc": "", "author": "Next Level Studio", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Having lost his ranked account to a hacker, Kang Yoohan wants to get even. Assuming his lost equipment was sold, he’s hoping that as blacksmith Zig, it will come back to him through repairs and lead him to the hacker. After breaking many swords, however, he finds this is no walk in the park. Thankfully, he’s able to see cracks in the equipment and enemies that show their vital points to make or break them!",
"comments": "", "tags": "" },
{ "title": "Legendary Ranker's Comeback", "imageLink": "https://meo.comick.pictures/R5LNR.jpg", "type": "Manhwa | 50", "desc": "", "author": "Team Potato Scone 6", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "One day, the dungeon apocalypse game, Dream Side, turned to reality. Having just completed University, I was stuck inside the elevator while delivering packages when a blue screen appeared before me, along with a monster! As I used to be the number 1 ranker of that game, I destroyed the extremely difficult tutorial and continued playing the game like an elite player…",
"comments": "", "tags": "" },
{ "title": "Lethal Romance", "imageLink": "https://meo.comick.pictures/0NExq.jpg", "type": "Manhwa | 50", "desc": "", "author": "Grrr", "dateOfRelease": "2020", "status": "Completed" ,
"summary": "A woman who is like a martial arts manhwa character ‘Yubi’. A man who is like a shoujo manhwa character ‘Shinwoo’. The two who are used to living in their own genres won't easily fall for each other! Will they be able to achieve a happy ending according to the standard of manhwa?!",
"comments": "", "tags": "" },
{ "title": "Life Completely Ruined", "imageLink": "https://i.pinimg.com/736x/f5/0a/59/f50a59887ecd97fd755f832d5626edef.jpg", "type": "Manhwa | 50", "desc": "", "author": "Park Tae Joon, Jun Sunwook", "dateOfRelease": "2019", "status": "Completed" ,
"summary": "21-year-old Jang AnCheol has been on fast-track to success when he is cursed by a classmate he had bullied 3 years ago in high school. Now placed in the loser's body he had bullied 3 years ago, he is tasked with stopping 4 “Life Completely Ruined” incidents as well as rehabilitating his past self in order to undo the curse. How will he navigate his way through his past self and his cronies' torments?",
"comments": "", "tags": "" },
{ "title": "Master Of Lightning Knives", "imageLink": "https://meo.comick.pictures/YBX7O.jpg", "type": "Manhwa | 210", "desc": "", "author": "OZOO, Ryuhon, Awin", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "A young orphan was alone in the world until he met the master of a secret form of martial arts. To learn these otherworldly techniques, he will need to endure years of his sadistic teacher’s grueling and weird training. But why does he have to do laundry, cook meals, or play instruments to learn martial arts anyway?! If he can survive long enough (and if his massive ego doesn’t get in the way), he just might be able to wield the unstoppable lightning knives.",
"comments": "", "tags": "" },
{ "title": "Living As The Enemy Prince", "imageLink": "https://meo.comick.pictures/qNW5NM.jpg", "type": "Manhwa | 70", "desc": "", "author": "Ja Seo Hyeon", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Killed in battle while defending his country, Bern wakes up in the body of the enemy prince, Kalian, and vows to avenge his people. But between taming an abusive half-brother and surviving his mother's deadly web of intrigue, sweet revenge seems to slip further beyond his grasp at every turn.",
"comments": "", "tags": "" },
{ "title": "Love Advice From The Great Duke Of Hell", "imageLink": "https://meo.comick.pictures/NrkKL1.jpg", "type": "Manhwa | 130", "desc": "", "author": "Unfins", "dateOfRelease": "2018", "status": "Completed" ,
"summary": "The girl of your dreams barely knows you exist. Your friends can’t help. Your family is clueless. So where do you turn for love advice? Who can provide you with that essential assistance for the lovelorn? If you’re average everyday teenager Paul, you summon a powerful demon from deep in the recesses of Hell and frankly, hope for the best.",
"comments": "", "tags": "" },
{ "title": "Love Bullet", "imageLink": "https://meo.comick.pictures/GXZyNZ.jpg", "type": "Manga | 10", "desc": "", "author": "inee", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Since the dawn of humanity, those who have never experienced love and meet an untimely end are granted a second chance at life as Cupids by the Goddess of Love. Present day Cupids have traded in their bow and arrow for modern firearms, but their mission remains the same: find suitable lovers for their targets and make them fall in love!",
"comments": "", "tags": "" },
{ "title": "Love Letter From The Future", "imageLink": "https://meo.comick.pictures/YgYB3v.png", "type": "Manhwa | 30", "desc": "", "author": "yeohan, HOTAWE", "dateOfRelease": "2025", "status": "Ongoing" ,
"summary": "Ian Percus, a third-year student from the Academy's swordship department, wakes up one morning to find a flip calendar on his desk and a letter he doesn't remember receiving. The letter contains a cryptic message: ‘If we don't protect the future, the world will perish.’ When he goes to the Academy, he finds out that, unbeknownst to him, a week has passed and that during that time, he defeated a previously undefeated junior. At first, Ian is skeptical, but as the events described in the letter begin to unfold, he gradually starts to believe what is written.",
"comments": "", "tags": "" },
{ "title": "Magic Emperor", "imageLink": "https://meo.comick.pictures/8yKane.jpg", "type": "Manhua | 730", "desc": "", "author": "Ye Xiao, Wuer Manhua", "dateOfRelease": "2019", "status": "Ongoing" ,
"summary": "Because he had the heritage of the ancient Demonic Emperor, Demonic Emperor Zhuo Yifan met the misfortune of being betrayed and killed by his trusted disciple. After being reborn, his cultivation went back to zero and he was trapped by a heart demon, given no choice but to become the housekeeper of the Luo Family's lone eldest miss. From being a Magic Emperor to being an insignificant housekeeper, how would he get along with his 'heart demon eldest miss' and what power would he gain in order to lead himself and the declining family to rise back to the peak of the continent!",
"comments": "", "tags": "" },
{ "title": "The Last Adventurer", "imageLink": "https://meo.comick.pictures/Jn760B.jpg", "type": "Manhwa | 80", "desc": "", "author": "D-Dart", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "In the Era of Adventure kickstarted by the spawning of Gates, marked by absolute hopelessness, destitute, desperation, and despair, everyone had given up their hope and lost their courage to continue fighting - except one adventurer that refused to go down until his last breath. As the history of adventurers was forced to come to an end, the Last Adventurer returned to where this story all began.",
"comments": "", "tags": "" },
{ "title": "Legend Of Sayu", "imageLink": "https://meo.comick.pictures/YgEp2M.jpg", "type": "Manhwa | 220", "desc": "", "author": "Ugak", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Breathing does not guarantee everyone’s alive! Dan Sa Yu, a descendant of Goryeo, greatly reprimands the Central District for the sake of his friend whom he treasures the most. He reigns every battle! No one could stop him! Cheonpo Armed Forces. The greatest martial arts of Goryeo! The legend of Cheonpo Armed Forces lives on while the history of the King of War unfolds!",
"comments": "", "tags": "" },
{ "title": "Miss Not-So-Sidekick", "imageLink": "https://meo.comick.pictures/o5zjr.jpg", "type": "Manhwa | 140", "desc": "", "author": "Ellianyang", "dateOfRelease": "2017", "status": "Completed" ,
"summary": "Hyejung loved to read to escape her daily stress. But that's before she woke up inside the bizarre world of her favorite novel! Instead of the main heroine who courts three eligible men, she is now Latte Ectrie - a minor villain that everyone hates?! One way or another, it's a chance to live out her most beloved storyline, with popcorn in hand to watch all the drama! Taking charge of the narrative takes on a whole new meaning!",
"comments": "", "tags": "" },
{ "title": "Monster Login", "imageLink": "https://meo.comick.pictures/vydro.jpg", "type": "Manhwa | 40", "desc": "", "author": "WHYNOTME Productions", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Lee Jinhyuk has enjoyed his decade-long reign as Cornsilk, the undefeated number one PVP player in virtual reality game 'The Abyss.' But with the sequel 'Abyss World' resetting all players as newbies, Jinhyuk accepts a sudden sweet deal from his Abyss Studios developer half-brother Jinho to log in as the infamous boss monster Black Knight.",
"comments": "", "tags": "" },
{ "title": "Moon Slayer", "imageLink": "https://meo.comick.pictures/v6rNx7.jpg", "type": "Manhua | 80", "desc": "", "author": "Col, Eihei Studio", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "After becoming a boss in the game, I began hiding within the players whilst uncovering the secrets of the game world. In order to become the only king, I have decided to resort to every conceivable means to change this world. Guilds? Players? Bosses? They are all stepping stones to achieve my goal. I will be slaying everything “Illusory Moon” has brought upon the world.",
"comments": "", "tags": "" },
{ "title": "Moon You", "imageLink": "https://meo.comick.pictures/vGxMl.jpg", "type": "Manhwa | 70", "desc": "", "author": "Jo Seok", "dateOfRelease": "2016", "status": "Completed" ,
"summary": "Earth perished. I am alone on the moon. A fantasy chic gag that crosses the tidal universe!!",
"comments": "", "tags": "" },
{ "title": "Mr. Devourer, Please Act Like A Final Boss", "imageLink": "https://meo.comick.pictures/BLwWqE.png", "type": "Manhwa | 90", "desc": "", "author": "Reltree", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "The Primordial Core’s an unconquerable dungeon, the lair of the most powerful monster ever to exist, the Original Monster, the incarnation of evil — Swallow... who happens to be a lazy boss monster who just wants to sleep. Taking care of this lazy bum is Renee, a homunculus maid whose obsession with Swallow knows no bounds. At this point, the only one keeping the dungeon running is Patrick, the last brain cell of the bunch — and he’s a skeleton!",
"comments": "", "tags": "" },
{ "title": "Murim Login", "imageLink": "https://meo.comick.pictures/3okvO.jpg", "type": "Manhwa | 230", "desc": "", "author": "ZeRo Big, Jang Cheol Byeok", "dateOfRelease": "2020", "status": "Ongoing" ,
"summary": "Large numbers of monsters come out the gate which is the boundary of the world. After many sacrifices, people won the fight against monsters through their awakening. Jin Taekyung is alive as an 'F class hunter' which is the lowest level. After Jin has a hard time, he gets an old capsule then he goes into the capsule that is the martial heroes' world. And the game system gives him special abilities, he starts growing up to become the best martial hero.",
"comments": "", "tags": "" },
{ "title": "Murim Rpg Simulation", "imageLink": "https://meo.comick.pictures/xwx4X.jpg", "type": "Manhwa | 140", "desc": "", "author": "Hyung Geun Cho", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "A scout in the infamous Demon Cult, Seolhwi is on a routine patrol when his squad unexpectedly encounters a fearsome master of the Mount Hua Sect, the sworn enemies of the Demon Cult. Without warning, the Mount Hua Cult master slaughters the entire squad. As Seolhwi lies dying, lamenting years of service to the cult with nothing to show for it, he is suddenly faced with a video game prompt, asking if he would like to start again. Given the opportunity to start over and make different choices, Seolhwi vows to survive and become stronger so he can rise to the top of the Demon Cult.",
"comments": "", "tags": "" },
{ "title": "My Bias Gets On The Last Train", "imageLink": "https://meo.comick.pictures/0Z57Lm.jpg", "type": "Manhwa | 40", "desc": "", "author": "Jixksee", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "College student Lee Yeowoon works late and takes the last train every night. Each time, he runs into Shin Haein, a woman carrying a guitar. As if by chance, as if by fate, the two keep meeting and discover that their favorite artist is the indie musician ‘Long Afternoon.’ They gradually grow closer and so the story began.",
"comments": "", "tags": "" },
{ "title": "My Eternal Reign", "imageLink": "https://meo.comick.pictures/w8Oaj7.png", "type": "Manhwa | 50", "desc": "", "author": "OTCL", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "The world was suddenly attacked by a dungeon phenomenon. Mankind was able to overcome this disaster due to the Awakeners who could control the Gate Cards that had appeared along with the dungeons. In the midst of that, Okita Hikaru, someone who was barely able to qualify as an Awakener, was being oppressed by the Elite Awakeners in a company that dealt with dungeon capturing as a business. One day, after he was driven to the brink of death by a fierce dungeon monster and a despicable betrayal, Okita obtained a power beyond what humans could comprehend, one that allowed him to infinitely manipulate Gate Cards.",
"comments": "", "tags": "" },
{ "title": "My Inventory Is Abnormal", "imageLink": "https://meo.comick.pictures/EOm5XG.jpg", "type": "Manhwa | 70", "desc": "", "author": "Sigyeyeol", "dateOfRelease": "2024", "status": "Ongoing" ,
"summary": "Yuujun Shin, a wealthy crypto investor, spends his time mastering a little-known game and purchasing all the best perks to dominate. When the game unexpectedly merges with reality, Yuujun finds himself in the game world with access to his massive virtual inventory. Now, with his amassed power and resources, he is more than ready to navigate this new reality...or is he?",
"comments": "", "tags": "" },
{ "title": "My Reason To Die", "imageLink": "https://meo.comick.pictures/aOXjNK.jpg", "type": "Manhwa | 100", "desc": "", "author": "Yuju", "dateOfRelease": "2021", "status": "Completed" ,
"summary": "Ji-o’s luck runs out when she gets injured before the tryouts for the national taekwondo team. In the middle of facing what seems to be the biggest crisis of her life, she meets Gyeol, a mysterious boy who changes her life forever. He’s the definition of a bad boy with a good heart, and she finds herself unable to resist his charms. However, she might be playing with fire as he’s someone who’s involved with the wrong crowd. Is falling for Gyeol worth the risk?",
"comments": "", "tags": "" },
​​{ "title": "My School Life Pretending To Be A Worthless Person", "imageLink": "https://meo.comick.pictures/q0q6M.png", "type": "Manhwa | 120", "desc": "", "author": "Sand Fairy, Ppilippala", "dateOfRelease": "2022", "status": "Ongoing" ,
"summary": "The world discovered the essence of the human soul, Ideia, and found a way to materialize it. The stronger one's Ideia, the more power one has. In a society where hierarchy is determined by this power, F-Rank Park Jinsung has always been his school's punching bag. In reality, though, he is an S-Rank with extreme bloodlust, which he has been hiding to keep others safe.",
"comments": "", "tags": "" },
{ "title": "My Wife Is From A Thousand Years Ago", "imageLink": "https://meo.comick.pictures/w8J3WR.jpg", "type": "Manhua | 400", "desc": "", "author": "Yuewen Manhua", "dateOfRelease": "2022", "status": "Ongoing",
"summary": "Jiang He, a girl from the Tang Dynasty, traveled through a thousand years and appeared in front of Xu Qing. Fate brought together this love that spanned a thousand years. Everything the girl was familiar with has become history. Relatives, friends, and enemies have all been left behind 1,200 years ago. The boy is unreserved and leads the girl to start a new life. Pain, confusion, cheers, and laughter will remain in this new world.",
"comments": "", "tags": "" },
{ "title": "Nan Hao And Shang Feng", "imageLink": "https://meo.comick.pictures/mnW5ge.jpg", "type": "Manhua | 120", "desc": "", "author": "Brownie", "dateOfRelease": "2019", "status": "Ongoing",
"summary": "A comedy about two ordinary high school boys.",
"comments": "", "tags": "" },
{ "title": "Necromancer's Evolutionary Traits", "imageLink": "https://meo.comick.pictures/WN1gbB.png", "type": "Manhwa | 90", "desc": "", "author": "Kim Seong-Hoon, Jangjak", "dateOfRelease": "2023", "status": "Ongoing",
"summary": "After clearing the game Peccata for the twelfth time, Kim Jinhwan finds himself inside its world as Adrias Cromwell, a weak and cowardly character who always ends up dead! With six months left until he gets killed along with his master for practicing forbidden magic, Adrias starts training and gathering corpses to better his necromancy, determined to survive.",
"comments": "", "tags": "" },
{ "title": "Nerd Project", "imageLink": "https://meo.comick.pictures/BZ32Gy.png", "type": "Manhwa | 40", "desc": "", "author": "Geu Jyeo", "dateOfRelease": "2023", "status": "Ongoing" ,
"summary": "Luke is having a rough time in college, and his breakup with his girlfriend Stacy is not helping. This is all because of that nerdy stud, Andrew! If only Stacy didn’t obsess over Andrew’s dorky charms, then Luke wouldn’t have had to break their relationship off! To make matters worse, Luke is then forced to live in the same dorm room as Andrew! But with nowhere else to go and no money to his name, Luke resolves to make it his project to befriend Andrew, whether the nerd likes it or not!",
"comments": "", "tags": "" },
{ "title": "Ordeal", "imageLink": "https://meo.comick.pictures/4kOLMX.jpg", "type": "Webtoon | 140", "desc": "", "author": "Brent Bristol", "dateOfRelease": "2021", "status": "Ongoing" ,
"summary": "Che is just a human in a world full of superpowered ‘Kimyos’, but he's determined to become the greatest fighter to ever live. When his beloved mentor is murdered, Che swears vengeance and embarks on a mission to unmask the killer. But soon Che learns that the world of Kimyos is much larger than he ever imagined, and that he himself might be one -- the most powerful Kimyo on Earth, with the power of the sun itself.",
"comments": "", "tags": "" },

];


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

      if (book["tags"] !== ""){
        book["tags"].split(" ").forEach(tag => {
          const tagLink = document.createElement("a");
          tagLink.href = `tag-template.html?genre=${tag}`;
          tagLink.innerText = tag.toLowerCase();
          tagLink.innerText[0].toUpperCase();
          

          tagsList.appendChild(tagLink);
        });
      }
      

      if (Object.keys(window.localStorage).includes(book["title"])){
        window.localStorage.setItem(book["title"], "bookmarked")
        document.getElementById("bookmarkIcon").className = "fa fa-bookmark"
      }

      document.getElementById("bookmarkIcon").addEventListener("click", () => {
        if (Object.keys(window.localStorage).includes(book["title"])){
          window.localStorage.removeItem(book["title"])
          document.getElementById("bookmarkIcon").className = "far fa-bookmark"
        }else{
          window.localStorage.setItem(book["title"], "bookmarked")
          document.getElementById("bookmarkIcon").className = "fa fa-bookmark"
        }
      })

      return;
    }
  });

 
} 

if (window.location.href.includes("bookmarked")){
  books.forEach(book => {
    if (Object.keys(window.localStorage).includes(book["title"])){
      const master = document.getElementById("list");
      
      const atag = document.createElement("a");  
      atag.href=`single-recipe.html?title=${book["title"]}`
      const imagetag = document.createElement("img");  
      const h5tag = document.createElement("h5"); 
      const ptag = document.createElement("p");   
      h5tag.innerText = book["title"];
      ptag.innerText = `${book.type} | ${book.desc}`;
      imagetag.src=book["imageLink"]
      imagetag.alt="book"
      imagetag.className="img recipe-img"
      atag.className="recipe"
      atag.appendChild(imagetag)
      atag.appendChild(h5tag)
      atag.appendChild(ptag)
      master.appendChild(atag);
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

