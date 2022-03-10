import React from 'react'
import styled from 'styled-components'
import momtyleramanda from './../images/about/momtyleramanda.jpeg'

const About = () => {
  return (
    <S.Container>
      <S.AboutSection>
        <S.ImageContainer>
          {/* <S.MainImg src={momtyleramanda} alt='Tyler with his mom and best friend Amanda'/> */}
        </S.ImageContainer>
        <S.AboutMe>
          <S.Header>TL:DR</S.Header>
          In 2021 I lost my best friend Amanda to suicide.  Through the grief I am learning how fragile and important life and love are.
          I wanted to put myself in a better position in life so I started on the path of a Self-Taught Web Developer / Designer.
          I keep my life simple now, I go to the gym, spend time with my family, and work on improving my Development / Design skills
          every day.  Life will never stop moving for anything or anyone, but in the off chance I get to see her again, I want her to 
          be proud and happy of my life.  
          <br/>   
          <br/>   
          <S.Header>April 04, 2021 🌻</S.Header>
          <br/>
          Amanda took her life, after two years of loving, fighting, laughing,
          crying, happiness, and all the real stuff of life, she left.  I think about her
          every single day, and it pushes me in everything.  I am not a religious person,
          I feel we will never see each other again but I hope we do.  
          <br/><br/>
          <S.Header>"Hey Google, What is Grief?" 😵‍💫</S.Header>
          <br/>
          Months after she left, I drove out to Washington DC with my awesome brother Jacob.
          I was open with him about how the grieving process made me feel.  I told him I had
          cosidered leaving the world myself in search of her.  He made up a scenario in my head
          with some 'younger brother wise words'.  "What if when you die, you repeat this life over and over. . .
          You live through all that you just went through over and over forever." Hilarious but it worked.
          <br/><br/>
          <S.Header>Grief sucks 😥</S.Header>
          <br/>
          Going to the gym is what I did. I went a lot, not a lot, but A LOT.  I isolated myself from
          the world outside AND inside of work.  I had music drowning out the world for me almost constantly.
          I went back to playing video games too much like I did when I was a little kid but I needed to.
          <br/><br/>
          <S.Header>Keep moving 🧘🏽</S.Header>
          <br/>
          During all this I had picked up an old passion of mine from when I was in highschool, programming.
          I started studying at work on all my breaks, trying to teach myself how to become a software engineer.
          I realized that is a big step from working a nightshift factory job after a few months.
          I switched my focus over to an even OLDER passion of mine coming from when I was just 15 years old.
          I picked up Web Development in my brain and started watching tutorial after tutorial.
          <br/><br/>
          I started soley with the basics, HTML and CSS.  I felt so rusty but picked up the basics within a week or two.
          I started on Javascript for a month before I found out about something called a framework. REACT JS!
          It is an amazing tool, it is what I use to develop all my projects.  Since September of 2021 I have committed 
          1 - 10 hours nearly every day to keep learning. 
          <br/><br/>
          <S.Header>December 04, 1998 ☀️</S.Header>
          <br/>
          December is hard while being alone.  She left 4 days after my birthday, 8 months prior to December.  December 04, 1998 is the month she was born,
          aka her Birthday.  December 25th as most know, is Christmas, and one I would be spending alone with my cats.  Just days after that is New Years Eve,
          whom I had no one to spend time with.  Just me, myself, and I for all these days so I did something crazy.
          I quit my job without a notice.  Amanda always wanted me to quit, and I really wish I would have to be able to spend time with her.
          I was being mistreated in my mind, and I needed to focus on my health and my life.  I stopped showing up one day without saying goodbye
          to anyone.  It shocked everyone as I was friends (or friendly) with everyone.  I felt bad for leaving them like that
          but it was to make a point to myself.  I can't live an unhealthy like like that ever again.  No more wasting time for 'good money'.
          Time with family, myself, and my passions is what will give me what I am looking for.  I hold it as a promise to Amanda in hopes
          I do see her again, I want to be able to share a GOOD story instead of a sad, valueless story of my life.
          I will keep getting up, and I will do better for that promise to the both of us. 
          <br/><br/>
          <S.Header>February 14, 2022 ✈️</S.Header>
          <br/>
          I left Utah after living there for 15+ years for Spokane, WA.  I decided to move in with my family
          as I have been focusing extremely hard on keeping my mental and physical health in great condition.
          I have been out in Washington.  Every day I have been here I have been feeling better and better.
          I have been working on my Web Development skills constantly, day in and day out.  I go to the gym every
          (non-rest) day.  I am eating extremely well, being apart of my siblings and parents lifes.
          Turns out my younger brother (5yo) Easton had no idea I was his brother.  He thought I was a friend 😆
          I am doing really well and I want to keep this going.  My goal is to have a job or be freelancing before
          my birthday.  4 Days after is Amanda 1 year, and when I 'talk' to her, I want to give good news.  She may not be listening
          but it feels nice to speak to her on occasion.
          <br/><br/>
          Rest in peace Amanda
          <br/>
          <br/>
          Love and Happiness to all,
          <br/>
          Tyler James Lundin
        </S.AboutMe>
      </S.AboutSection>
    </S.Container>
  )
}

export default About

const S = {}

S.Container = styled.div`
    width: 100vw;
    height: 100vh;
`
S.AboutSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  display: grid;
  opacity: 1;
  background: rgba(30,30,30,1);
  @media (max-width: 650px) {
    grid-template-rows:1fr 1fr;
  }
  @media (min-width: 651px) {
    grid-template-columns: 1fr 2fr;
  }
`

S.MainImg = styled.img`
    height: 100%;
    @media (max-width: 750px) {
    
    }
`
S.ImageContainer = styled.div`
  width: 100%;
  background-image: url(${momtyleramanda});
  background-size:cover;
  background-position:top;
  background-repeat:no-repeat;
`
S.AboutMe = styled.div`
  font-family: 'arial';
  color: white;
  overflow-y: auto;
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
`
S.Header = styled.h2`
  font-family: 'roboto-slab';
`
