import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../../ReactJs/styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../../ReactJs/prismCode';
import GitLogo from "../../../assets/git_imgs.PNG"


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const redesign = {
  height: 350,
  width: 600
}

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})



class ComSkils extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
              <h3>1. 3 things to remember to Stop Wasting Time in life.</h3>
              Don't compromise, The mind is expert in tricking us it will always create excuses one excuse
              will lead to the other until we will hear it all and still remain the same. Don't make excuses.
              <br/>
              Make it a commitment as somebody said when you are interested in something. You do it when you 
              like, When you are commited to something you do whether you like or you don't like. 
              <br/>
              <br/>
              One traveler writes in his book, he was traveling in Africa and he came across a cannibal (नरभक्षक) tribe (जनजाति).
              These cannibals, they eat humans. He was astonished (आश्चर्यचकित) that, one of the tribes men had been educated in 
              America. He said after American english education. You still eat human flesh (माँस), then what is the 
              difference. That cannibal said, "The difference is earlier i used to eat it with my fingers, now i 
              eat it with knife and fork". 
              <br/>
              That's not much of a difference, is it? What does it count for? 
              It's so easy for our mind to make excuses. You know, I could not do it because the bord went over the 
              head. 
              <br/>
              <br/>
              There's an inspiring story about awareness from the japanese tradition. There has been 
              a great sword fencer called Ram. His father was also a great sword fencer, but his father trained the other 
              sons and he gave up on this guy that you are no good. 
              <br/>
              Nevertheless (फिर भी), Ram went to another the greatest 
              swordman of the land and he said, "Will you teach me this?" That master said, "I will, but you will do 
              exactly as i say, and you will not use your intellect." Ram said, "All right." Start cleaning the vessels 
              of the monastery (मठ). Ram Started cleaning the vessels. Then he had to cook, and then he had to clean the room,
              and get the water from the river. And this went on and on and on. One year went by, second year went by.
              He Started getting disappointed. There is no talking as well of the sword fencing i had come to learn it and 
              there is no question about it. I only clean vessels and take care of the house. A third year went by.
              <br/>
              <br/>
              Finally, that master, he came from behind one day Ram was cleaning a vessel he wacked him . Ahh! 
              He said, "Be careful. Henceforth (अब से) I can come and hit you at any time. He said all right. Now he Started 
              developing his awareness and this master would come and whack him at any time. Slowly, slowly he Started
              getting more and more alert until he would be able to gaze (निगाहें) and judge and dodge (चकमा). Until his awareness 
              developed even more when the merest (झील) whiff (एहसास), and he would turn around and probably catch the stick or something.
              The master said, "Now you are ready. Now i will teach you sword fencing.
              <br/>
              <br/>
              " So it's a question of being 
              completely aware. Don't make excuses. He is pretty stricy (कठोर). He says irrespective of time, place, 
              circumstance make it like a universal vow (व्रत). Make it a commitment. When you are interested in something, 
              You do it when you like. When you are commitment to something, you do it whether you like or you don't like.
              That's the kind of commitment he is demanding. Don't make compromises. This will require tremendous awareness.
              You know the opposite of awareness is carelessness. The devotees have their own way of being aware.
              Be aware of the presence of God. 
              <br/>
              <br/>
              Maharajji says 'Be aware that God and Guru are with you and watching you all the time.'
              This kind of carelessness require a great motivation and a great dedication. You need to have complete lack 
              of carelessness and complete application to the task. This will come, when you have a strong why. A strong 
              reason motivating you. And the biggest reason motivating us is that the human form is a golden chance for the 
              salvation of the soul. If we don't utilize it, we will go back. 'Aji sahab, you are a human being in this life 
              what are you going to become in your next life?'. 'Ji, I am going to become a dhobi ka gadha.'
              My God! After the human being you're becoming a dhobi ka gadha? You've gone that down? Yes, I did not 
              utilize the chance i had. The oppertunity is tremendous (अद्भुत), but the time span (अवधि) is limited. And that time is 
              slipping out of our hands. You know, like you lift up sand on the beach and you find it is slipping out until 
              nothing is left so also is human life. We think I've got so many years, but without realizing it one by one the 
              years go by. 
              <br/>
              <br/>
              It was only a few years ago that you passed out of collage. It was only a few more years before 
              that you entered school as a little child. How quickly the time has gone by. How quickly 2020 went by. Half of 2022 
              has also disappeared and it's never going to come back. Did we make the best use of it? One moment that we wasted
              is one moment lost forever. 
              <br/>
              <br/>
              Mahatma said, What is the biggest loss in life? That moment which you don't utilize
              in remembering Shri Krishna. And why don't we utilize? Carelessness We know what we are supposed to do, but we 
              don't do it because of carelessness. That carelessness makes us waste, squander (गंवाना) the oppertunity. That is why to 
              implement this we need to motivate ourselves. You see, when the motivation is there, the most challenging thing 
              becomes easy and when the motivation is not there, the smallest difficulty seems like an unassailable (अभेद्य) wall.
              This motivation has to come, in other words, a deep hunger. 
              <br/>
              <br/>
              Guru has said three special graces (गौरव) of God. The first is the human form.
              Everybody here has got that grace. The second is the guidance of the saints. That also we have got. The third is hunger.
              Hunger for the Ultimate Goal. You all have got it to a certain extent, that's why you have come here. 
              But that one grace needs to be enhanced. (बढ़ाया) In other word, the hunger has to be deepened. The deeper the hunger, 
              the harder we shall endeavor (प्रयास) the more careful we will be. 
            <br/>
            <br/>

            <h3>2. 3 UNTOLD Powers of a 100% Focussed Mind.</h3>
            The goal of life is to attain the Supreme Lord. This can only happen when our mind attains complete
            and absolute absorption in the divine (दिव्य). And that can be done by developing the ability for concentration.
            Razor sharp focus is one of the most powerful mental faculties that we can possess. Take a look at the 
            power of laser beams. They are energized by a few watts of energy and they contain just light rays.
            But because of the intensity of the focus, they are used for drilling holes in diamonds that are amongst 
            the hardest things on this planet. 
            <br/>
            In contrast (अंतर), is the sun. It emits billions of kilowatts of light energy
            to the earth every minute. And yet you can conveniently walk under the sunlight with a light umbrella on 
            your head without getting burnt. So what is the difference b/w ordinary sunlight and laser beams? It lies in the 
            intensity of the focus. 
            <br/>
            <br/>
            Likewise (वैसे ही), is the focus in stream engines. Now, water vapor evaporates in hundreds of 
            tons from lakes, stream, seas and oceans. It does not burn anyone, but the water vapor when it is focused 
            in the piston of the stream engine, and brought to bear with intensity in that railway engine it empowers it 
            to pull thousands of tons of steel and iron at hurtling speeds on those railway tracks. That is the power of focus.
            Similarly, if we can develop mental focus, we can bring intensity to any physical or intellectual work that we perform.
            Focus declutter (अव्यवस्था) our mind. 
            <br/>
            <br/>
            If you have had the experience of driving a car in a rain-storm, you will be aware how it blurs
            up vision. That is way cars come with the feature of vipers for retaining clarity. Likewise, to make good decision 
            in life. we need to declutter our mind from the distraction all around us. And that can be done by developing the 
            ability for concentration. Just as an artist did  in the time of Mahant. This great sage went from Dakshineswar to 
            Kolkata to participate in the ratha yatra of Lord Jagarnath. He reached late and the chariot had passed by.
            He asked a shopkeeper, "Has the ratha of Lord Jagarnath gone by from here?" The shopkeeper was a painter. He said, 
            "No, not yet." The neighboring shopkeeper corrected him. "Why are you telling lies to such a big Mahatma?
            It went by a couple of hours ago." The pinter said, "I never saw it." His neibhbor said, "Never mind, you 
            must have heard the jkankj, the manjira, the mridangas the drums?" The painter said, "I never heard anything."
            Mahatma was astonished. He sat there in meditation and realizd this painter is telling the truth. He came out 
            of his meditation and touched his feet and said, "The world calls me a mahatma, but your mind is so incredibly (अविश्वसनीय रूप से) 
            focused you were so absorbed in your painting that the whole procession (जुलूस) went by with hundreds of people
            and you did not come to know." That is how focus declutters our mind, and it enhances (बढ़ाता है) our ability to understand.
            <br/>
            <br/>
            So for example, when you sit in a class listening to a talk or a lecture, the more you focus, the better is 
            your comprehension (समझना). And if the focus is diffused, the mind wanders away. Your ability to understand also 
            gets affected. Try this experiment early in the morning when you wake up, use that first one hour to learn 
            some new subject. You will discover your brain is working like sponge and it has 400% efficiency compared 
            to doing the same activity in the evening when the mind is cluttered by the daily exposure. So that is how 
            focus enhances our ability to understand. Focus is also necessary for learning new skills. These require 
            bringing our mental and intellectual abilities to bear upon mastering an art. 
            <br/>
            <br/>
            Sunil Gavaskar one of the 
            greatest batsmen in the world ever, the one who broke Bradman's record for the maximum number of Test centuries 
            which stood at 29. Sunil Gavaskar scored 34 Test centuries and his record was subsequently (बाद में) broken again, 
            but he was asked What is the secret of your virtuoso (कलाप्रवीण व्यक्ति) batting? He said, "My ability to focus. I keep my 
            eyes on the ball." Focus also helps us enhance our mental state. 
            <br/>
            <br/>
            Usually we let thoughts happens to us 
            as reactions to events in the environment. But when we have focus, we can then choose the feelings that 
            we wish to harbor (बंदरगाह). And this frees us, us from the clutches of the mind. We feel better about ourselves 
            and can take charge of our life. And finally, focus can help us attain God. Let's read about it from my 
            latest book, The goal of life is to attain the Supreme Lord. This can only happen when our mind attains
            complete and absolute absorption in the divine. The Gita states, just as a lamp in a windless place does 
            not flicker (झिलमिलाहट), so the disciplined mind of a yogi remains steady in meditation on the Supreme. When the mind 
            restrained from material activities becomes still in the practice of Yog, then the yogi is able to behold (देखो) 
            the soul through the purified mind, and he rejoices in inner joy. In that joyous state of yog called Samadhi,
            one experiences supreme, boundless, divine bliss. And thus situated one never deviates from the eternal truth.
            Gita says Despite the benefits of focus, we find that we are besieged by absent mindedness. We suffer 
            from the shattered (बिखर) focus syndrome. Our mind has this propensity (झुकाव), this novelty bias (पक्षपात), and therefore we'll 
            have to work hard to enhance our concentration. We learn how to do that in the next couple of weeks.
            <br/>
            <br/>

            <h3>3. Control your Mind in 21 Days - How it Works.</h3>
            This mind of ours, If it is controlled it will become our best friend. Lift ourself by the power of our mind.
            Do not degrade (नीचा) ourself.
            The mind is a place of its own and in itself can make Heaven out of Hell or Hell out of Heaven. These were the 
            words of John Milton, a weatern philosopher. And how true they are! We may possess (धारण करना) Money, Fame, Power yet, If 
            we have not learnt to Master our Mind. We will not experience the Happiness and fulfillment That we are searching
            for in our life.
            <br/>
            <br/>
             Consider the example of one of the richest persons in history, Howard. He had so much of wealth!
            Amongst his many businesses, he became a film producer in Hollywood, and developed a reputation for being a 
            playboy who went out with many famous heroines. However, by the age of 45 his phobia for germs became an 
            obsession (जुनून). While he felt he was free of germs, he always feared being attacked by them from the outside. 
            His servants had elaborate rituals they had to follow, like washing their hands multiple times and covering them 
            with paper tissues, when they served him food. He himself washed his hands until he literally bled. And he would 
            cover his feet in tissue bags. If he came to know that any of his servants had fallen sick, he would get his whole 
            wardrobe burnt to free himself from the possiblity of germs. He became a recluse (वैरागी) and practically met nobody apart from 
            his closest sick. The last two decades of his life, he spent staying in hotels in the city. Finally, when he died 
            at the age of 70, he had practically imprisoned himself from the world physically, and mentally he was incarcerated (बंदी)
            in his own dungeon (तहखाने). 
            <br/>
            Here was someone who possessed so much of fame, money and power, and yet, he was miserable (दुखी), not 
            for lack of external opulences (ऐश्वर्य) but merely (सिर्फ़) because he had not learnt "How to master his own thoughts and inner machinery".
            
            <br/>
            <br/>
            On the other hand, let me give an example of somebody else who had practically nothing and yet is leading such a rich 
            existence! This lady name is rita. She was born in a poor region of Jharkhand in the district of ranchi. When she was 
            six years old, she used to take her family's buffalos for grazing. And while the buffalos were immersed in the lake,
            rita, she would go to school and get beaten up by her teachers for comming late. When she returned to get the buffalos,
            the neighboring farmers would beat her because the buffalos had gone into their field. When she was merely 10 years old,
            her poor parents married her off to a 21-year old. She had three children from that husband. 
            <br/>
            <br/>

            When she was expecting for the 
            fourth time, she got involved as an activist (कार्यकर्ता). The local mafia were using the women to lift cow dung. It was like the cow 
            dung mafia. She informed of these activities to the collector. And the collector, when he took action, the mafia got annoyed.
            So they incited (उकसाया) her husband, telling him that she had an affair with one of them. Now, the husband became so annoyed, he beat 
            his wife and then thinking her to be dead he threw her into the cowshed. There a cow protected her. And she delivered her fourth 
            child. She cut the umbilical cord with a stone. She took the baby to her parent's home, they refused to take her. Now, she knew 
            she could not return. She wanted to commit suicide. She was about to throw herself on the railway track, when she 
            heard the wailing of an old hungry man. She went to provide him solace (सांत्वना) and food and then realized that if she can help others,
            she can find meaning and purpose in her life. To stay away from molestation (छेड़छाड़), she was residing in graveyards. And she was 
            taking grain and cooking it on the funeral pyres that were lit there. Once again she was about to commit suicide.
            But seeing the homeless hungry children on the footpaths, she decided to take care of a few of them and started begging to 
            sustain them. 
            <br/>
            <br/>

            Slowly, her efforts grew larger, and she created an orphanage and became known as the mother of the orphans.
            In order to ensure no bias towards her own child, she gave that child away in an orphanage. Now, people came to know of her 
            wonderful efforts, and they started supporting her until she raised more and more children, many of them became graduates, 
            post graduates and even phDs. Her own children came to know and they helped in her efforts. 
            <br/>
            <br/>

            She says the most amazing 
            moment was when her husband regretted (खेद व्यक्त किया) and he came to her broken and dilapidated (उबड खाबड) for shelter, very lovingly like a mother 
            she offered him shelter and she says he is my naughtiest child. This the mother of orphans, is a blazing (प्रज्वलन) example of someone
            who externally was facing such hardships, but lifted her own thoughts, enriched (समृद्ध) her own mind to lend such a wonderful life.
            <br/>
            <br/>
            
            That is why i say there is a huge difference between the quality of your living and the quality of your life. The quality of 
            your living is determined by the external opulence (अधिकता). The quality of our life is determined by our inner thousands. Our vedic scriptures 
            have repeatedly emphasized (पर बल दिया) the importance of the mind.Two thousands year ago, the first original jagatguru in Indian history,
            he said, asking the question, "Who shall conquer the world?" and the answer he provides himself, That person who has conquered 
            his or her own mind. two thousands years after, He says, "Look, whatever spiritual practice you engage in, do ensure that you are purifing
            your mind because "Bondage & Liberation (बंधन और मुक्ति) will both be determined by the state of our mind." 
            <br/>
            <br/>

            There are those who have learnt 
            to master their mind. Very easily, any negative thoughts or emotions that enter, they reject them as unproductive and worthless.
            And they choose to delve (तल्लीन) on thoughts that are beneficial, that are uplifting and sublime. They tap into the inner inspiration 
            to lead enriched lives. 
            <br/>
            <br/>

            On the other hand are those who are slaves of their mind. They don't realize the gap between the environment 
            and their mind because they have never thought of controlling it, and hence, they feel victimized by the circumstances, 
            the situations outside, the behaviours of others. Consequently (फलस्वरूप), they ride the roller coaster of their emotions. God has given 
            us all many resources to lead the life we choose to. The primary amongst these is the inner machinery, called the mind.
            <br/>
            <br/>
            
            How many people listening to this video are blind? Most of us have these two eyes, with the help of which we can relish (स्वाद)
            the beauty of the sunset at the beach, the grace (कृपा) of the eagle in flight, the glory of the mountains and the valleys in the 
            Himalayas. We all have ears by which we are hearing any lecture. And you can relish the mirth (प्रमोद) of children and laughter,
            the rustling (सरसराहट) of the leaves by the wind, and the chirping (चहचहाहट) of the birds. All of us have got this body This tremendous machinery
            that we have, what is missing? Our inablity to control the inner machinery, called the mind. 
            <br/>
            <br/>
            
            That is why in the Gita Lord Krishna said,
            "Arjun, this mind of yours, if it is controlled, it will become your best friend. But if it is uncontrolled, it will be your 
            worst enemy." So Arjun, Shri Krishna says, Lift yourself by the power of your mind, Do not degrade yourself."    
            <br/>
            <br/>

            <h3>4. How to Face Obstacles and Difficulties in Life.</h3>
            A service engineer in New York checked his email one evening and found a requisition (मांग) from a company in apple, Delhi, 
            for him to come the next day to repair the machine they had purchased. The other email was from a client in Bangalore,
            insisting (जोर) that their plant had come to a standstill (ठहराव) and he definitely had to report there the next day for repairing the 
            machine. He went to sleep pondering (विचार) what was to be done. Next morning, there was one message from ACL, Mumbai, saying that 
            if he did not report there as soon as possible, they would cancel the order. This man munched (कुतरना) his breakfast, gathered his 
            stuff (सामग्री), walked out of his house, and waved a taxi. The taxi driver came and said, "Sir, where should i take you?" The man 
            said, "Take me anywhere. i don't care. I have got problems everywhere." 
            <br/>
            <br/>
            
            Isn't that very often the way life is? When problems
            are an unavoidable part of life we need to have a solution for handling them.We are going to discuss how to face obstacles (बाधाएं)
            and Difficulties, without allowing them to rob our Happiness. 
            <br/>
            <br/>

            One girl went to college for the first time and began staying in 
            the hostel dormitory (छात्रावास). Three months after she had been there, she wrote a letter to her mother. 
            The letter read, "Mommy, I need to confess (अपराध स्वीकार करना). One month after I had been in the hostel, I made a mistake. I stole a 100rs from 
            my roommate, and with that, I rented a motorcycle. Unfortunately, I had an accident and collided into a lamppost because of which 
            my thighbone (जांघ की हड्डी) broke. But, mommy, there was nothing much to worry about. Because a handsome doctor 
            living down the lane, he took me in his home and nursed me. And, mommy, I want you to know that we have fallen in love 
            and decided to get married. The only problem is there is a disease that is showing up in the blood test. I hope it gets resolved 
            before the child pops out. 
            <br/>
            <br/>

            The mother who was reading that note was horrified. what is happening to my darling daughter?
            However, the letter concluded, actually, mommy, none of this is true. The only thing that has happened is I have gotten an 'F' 
            in Calculus. I wanted you to see it in the proper perspective. You see it was just an F. It was not the end of the world.
            The problem could have been far bigger. 
            <br/>
            <br/>

            In the same way when we do have problems falling upon us, the first thing to do is to 
            step back "Place the problem in it's proper perspective (परिप्रेक्ष्य)" Is it really as big as my mind is making it out to be? And then
            we will realize that there are people who have far bigger problems. And the one we are facing is really not as serious as it seems.
            Problems are a part of the journey of life. If you climb a mountain, how is the road going to be? Uphill, naturally.
            Similarly, if you are progressing in life it is only to be expected that problems will come. 
            <br/>
            <br/>

            I am reminded of a cartoon i saw.
            One man was changing the punctured wheel of his car. His little son was sitting inside and the son was asking, "Papa, why is this 
            happening to us?" The father had responded, "Son, this is not a TV channel that we can switch it. This is life. Difficulties and 
            Hardships will come "Learn to anticipate (पूर्वानुमान करना) problems" It is said - In bosing, the punch that knocks one out, is not the hardest one 
            but the one that was not anticipated. So put your problem in its proper perspective, gather your courage, enhance your inner strength 
            and face it bravely. Today, take this as your homework. The problems that you are facing think, are they really as big 
            as your mind is making them out to be? Put them in there place and tomorrow we will meet again to understand how we can learn and 
            actually grow and benefit. from the problems in our life.
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(ComSkils));