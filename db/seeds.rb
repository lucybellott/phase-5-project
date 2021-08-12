# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "clearing data...."
User.destroy_all
Comment.destroy_all
Post.destroy_all



puts "seeding users..."
User.create(name: 'Rick Astley', 
username: "RickAstley", 
password_digest: "pass123", 
level: "standard", 
image: "https://s.yimg.com/os/creatr-uploaded-images/2021-02/572c4830-721d-11eb-bb63-96959c3b62f2")

User.create(name: 'Alf', 
username: "Alf01", 
password_digest: "pass123", 
level: "standard", 
image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/GordonShumway.png/220px-GordonShumway.png")

User.create(name: 'Tina Turner', 
username: "TinaTurner", 
password_digest: "pass123", 
level: "standard", 
image: "https://i.guim.co.uk/img/media/5afcbbfdebdd701a3ab16b34b36ff74d442ec528/0_490_2951_1771/master/2951.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=75496118f9df7c8fb776133c9f83425e")

User.create(name: 'Marty McFly', 
username: "MartyMcFly", 
password_digest: "pass123", 
level: "standard", 
image: "https://pbs.twimg.com/profile_images/115422070/mcfly_400x400.JPG")

User.create(name: 'Cher', 
username: "Cher01", 
password_digest: "pass123", 
level: "standard", 
image: "https://www.biography.com/.image/t_share/MTgwOTk0NDgzMTA4NzE3NjU2/gettyimages-1000567242.jpg")

User.create(name: 'Administrator', 
username: "Adm", 
password_digest: "pass123", 
level: "adm", 
image: "https://i.pinimg.com/originals/ea/ef/0f/eaef0f0758dd7e532c87227153a6bf6f.jpg")



puts "seeding posts..."

Post.create(user_id: User.ids.sample,
title: "Do the COVID-19 vaccines cause infertility?", 
category: "World",
image: "https://northernvirginiapediatrics.com/wp-content/uploads/Covid-19-vaccine-002.jpg",
claim: "I have received serveral messages on WhatsApp claiming that many nurses are not getting their COVID shots because it's known to cause infertility and the media is trying to hide it from us",
fact: "Evidence shows COVID-19 vaccines are safe for women who are pregnant and don’t cause infertility for women wanting to get pregnant.
During the clinical trials for COVID-19 vaccines, the same percentage of women who had been vaccinated as those who received placebos got pregnant after having been vaccinated.
Researchers have also monitored sperm counts for men who received the vaccines compared to those who did not. There’s no difference. Experts have also tested ovarian reserves and function before and after the vaccine and they also showed no difference.
Early on, we knew women could get pregnant (after getting COVID-19 vaccines) and nothing harmful was happening to them. Plenty of patients have gotten pregnant after getting vaccinated. ",
source_link: "https://www.uchealth.org/today/infertility-and-covid-19-vaccines-get-the-facts/"
)

Post.create(user_id: User.ids.sample,
title: "Posts Falsely Accuse U.S. Women’s Soccer Team of Disrespecting Veteran During Anthem",
category: "U.S.",
image: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/united-states-women-s-national-team-1625765264.jpg?crop=1.00xw:0.905xh;0,0.0951xh&resize=1200:*",
claim: "A Facebook page called Hold the Line posted an ESPN video of the national anthem alongside the caption, “WHAT A DISGRACE TO AMERICA! Members of the U.S. Women’s National Soccer Team turned their backs on Pete DuPré (a 98-year-old World War II veteran) while he played the National Anthem on his harmonica. Who agrees we need to keep the woke OUT of the Olympics??? #HoldTheLine.",
fact: "Before a July 5 match against Mexico, some members of the U.S. women’s soccer team turned toward the flag while a World War II veteran played the national anthem on his harmonica. But social media posts mischaracterized their actions by claiming they “turned their backs” on the veteran.
The U.S. Soccer Federation disputed the accusation that the players were disrespecting DuPre on Twitter, saying: ‘Some USWNT players were simply looking at the flag on a pole in one end of the stadium. The players all love Pete, thanked him individually after the game and signed a ball for him.’
Members of the USWNT who were not facing the war veteran performing the national anthem turned around to face the U.S. flag displayed at one end of the stadium.",
source_link: "https://www.reuters.com/article/factcheck-ussoccerwomen-flag/fact-check-members-of-the-u-s-womens-national-soccer-team-faced-flag-or-war-veteran-during-anthem-at-olympic-send-off-match-idUSL2N2OI2M0"
)

Post.create(user_id: User.ids.sample,
title: "Viral 'Photo' of Earth, Venus and Jupiter Seen From Mars Is a Computer Image",
category: "World",
image: "https://pbs.twimg.com/media/Eu7saWyXAAk-dlm?format=png&name=small",
claim: "On Feb. 21, a Facebook account called AstrophileDaily.com — which says it is ‘dedicated to sharing latest news in science, especially astronomy, physics and technology’ — shared an image which it claims to depict “Earth, Venus and Jupiter as seen from Mars.” The post has since amassed nearly 2,000 shares, and 3,000 reactions.
But the image and description are deceiving and did not come from the Mars Perseverance mission.",
fact: "The claim that the image is a real photo has been debunked numerous times. In 2012, author Phil Plait, writing for Discover Magazine, said the image was likely produced using some sort of planetarium software based on the fact the letters 'NE' are slightly visible in the bottom-left corner.
Plait said these referred to compass directions as in ‘northeast.’ Planetarium programs use these to let users know which direction they are facing.
The author claimed to have used planetarium software himself and found that in mid-2010 the planets would indeed have lined up in a way similar to the circulating image.
The exact origin of the image that is confusing social media users is unclear, but it dates back to at least 2012, when Tumblr user theweeklyansible posted it to their page. When users pointed out it was fake, the user apologized, and said: ‘If I had known I woulda looked into it more carefully. I'm sorry if you feel misled.’
The user said they believed that the original image came from George Takei's Facebook—the actor who famously played the Hikaru Sulu character in Star Trek.
Since last Thursday's landing, Perseverance has taken thousands of photos from the surface of Mars that are real, and they can all be viewed on NASA's website.",
source_link: "https://www.newsweek.com/earth-venus-jupiter-seen-mars-nasa-mars-perseverance-photo-fake-1571688"
)

Post.create(user_id: User.ids.sample,
title: "No, Biden didn't tweet about Coca-Cola 'cultural reappropriation'",
category: "U.S.",
image: "https://pbs.twimg.com/media/Eu9MYGTXEAACdYw?format=jpg&name=900x900",
claim: "The alleged tweet reads: ‘I’m proud to see Coca-Cola educate their staff in cultural reappropriation. The disconnect is because the way white people talk leaving minorities confused. Black people communicate a certain way and me and my staff know how those kinds of people talk and it’s time white people learn to do the same #justforthetasteofit #dietcoke.’",
fact: "Reuters found no record of this tweet. A keyword search of ‘Coca-Cola’ or ‘Coca Cola’ in Biden’s timeline brought no results. Politwoops, a project by ProPublica that archives deleted tweets from politicians, also shows no record of the alleged tweet, indicating it was likely fabricated .
The claim surges amid backlash towards Coca-Cola, after a video circulating online showed diversity training materials that included guidance that said ‘try to be less white.’",
source_link: "https://www.reuters.com/article/uk-factcheck-fake-biden-coca-cola/fact-check-fabricated-joe-biden-tweet-about-coca-cola-idUSKBN2AO2PP"
)

Post.create(user_id: User.ids.sample,
title: "Can garlic cure Coronavirus?",
category: "World",
image: "https://images.news18.com/ibnlive/uploads/2020/03/WhatsApp-Image-2020-03-05-at-10.57.44.jpeg?impolicy=website&width=0&height=0",
claim: "The WhatsApp message claims that an 'old Chinese doctor' had found a cure to coronavirus, and that's one bowl of garlic. ",
fact: "The WHO has clearly specified that there is no scientific evidence to study this. Bad news for those hoarding garlic cloves to fight off the virus. Just like vampires, the humble garlic has no effect on a virus that has already claimed millions of lives around the world.
Their website states ‘Garlic is a healthy food that may have some antimicrobial properties. However, there is no evidence from the current outbreak that eating garlic has protected people from the new coronavirus.’",
source_link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#garlic"
)

Post.create(user_id: User.ids.sample,
title: "Is There Such a Thing as a Sugar High? Does sugar really make you hyper?",
category: "World",
image: "https://www.contracttesting.com/wp-content/uploads/2016/06/70018-candy-jars.jpg",
claim: "The notion that sugar might make children behave badly first appeared in the medical literature in 1922. But the idea did not capture the public’s imagination until Dr. Ben Feingold’s best-selling book, 'Why Your Child Is Hyperactive' was published in 1975.",
fact: "
In the mid-70s, stimulant drugs such as Ritalin and amphetamine were becoming popular for the treatment of attention deficit hyperactivity disorder. For parents who were concerned about drug side effects, the possibility of controlling hyperactivity by eliminating sugar proved to be an enticing, almost irresistible, prospect.
Some studies supported the theory. They suggested that high sugar diets caused spikes in insulin secretion, which triggered adrenaline production and hyperactivity. But the data were weak and were soon questioned by other scientists.
An extraordinarily rigorous study settled the question in 1994. Writing in the New England Journal of Medicine, a group of scientists tested normal preschoolers and children whose parents described them as being sensitive to sugar. Neither the parents, the children nor the research staff knew which of the children were getting sugary foods and which were getting a diet sweetened with aspartame and other artificial sweeteners. Urine was tested to verify compliance with the diets. Nine different measures of cognitive and behavioral performance were assessed, with measurements taken at five-second intervals.
The study concluded that sugar does not affect children’s behavior or cognitive function. An editorial that accompanied the study put a fine point on that conclusion, stating ‘there is no evidence that sugar alone can turn a child with normal attention into a hyperactive child.’ One year later, an analysis that gathered data from all published studies on the subject reached the same conclusion.",
source_link: "https://www.nytimes.com/2020/02/21/well/eat/is-there-such-a-thing-as-a-sugar-high.html"
)



puts "seeding comments..."

Comment.create([
  {
    content: "I'm definitely sharing this one!",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  },
  {
    content: "My aunt just shared this on facebook yesterday",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  },
  {
    content: "My dad literally still believes this is true",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  },
  {
    content: "Hilarious but obviously fake",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  },
  {
    content: "Oh damn I fell for that one lol",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  },
  {
    content: "People really come up with some cray stuff",
    user_id: User.ids.sample,
    post_id: Post.ids.sample
  }
])

puts "Done seeding!"
