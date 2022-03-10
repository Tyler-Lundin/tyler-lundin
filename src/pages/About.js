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
          <span className='italics'>I won't give up, I will work hard, and I will be happy.</span>
          <br/>   
          <br/>   
          <S.Header>APRIL 04, 2021</S.Header>
          <br/>
          My best friend Amanda left the world after a difficult fight with Anxiety and Depression.  It shattered the hearts of everyone
          who knew her.  Her smile lit up the world, she will be missed.  
          <br/><br/>
          <S.Header>THANKS JAKE</S.Header>
          <br/>
          I drove out to Washington DC with my younger brother Jacob.
          On this drive I opened up with him.  We became closer than I felt we ever were before.  I told him I was struggling
          and had considered leaving the world to find Amanda.  It was a stray thought one night but I needed to be open.
          He gave me an interesting conversation on it.  His theoretical went something like "What if you left, and you had to repeat
          all those bad times over and over again.  No one knows what's next, so it very well could be something awful like that."
          It was funny to me, it put a smile on my face even though I thought it was all silly nonsense.  
          The time spent with him was a big help with my mental health.
          <br/><br/>
          <S.Header>"Hey Google, What is Grief?"</S.Header>
          <br/>
          Going to the gym is what I did. I went a lot, not a lot, but A LOT.  I isolated myself from
          the world outside AND inside of work.  Music drowned out the world for me on a regular basis.
          My emotions were extremely high and I was very sensitive, but I kept it all in around everyone.  
          I was learning about a full range of new emotions, it was DIFFICULT.  I focused on myself and my happiness
          more then I have ever done before.  It was a weird first 6 months.
          <br/><br/>
          <S.Header>I'VE GOT THIS </S.Header>
          <br/>
          I needed to move up and move on.  I was suffering with immense sadness, but I hadn't given up.
          I decided I was going to become a Web Developer.  I started studying whether it was at work or at home,
          I couldn't get enough of this new pathway I was opening up in my life.
          Studying and working on what I wanted to breathed passion and life into me.  All I did was work, study, and go to the gym.
          <br/><br/>
          <S.Header>DECEMBER 2021 </S.Header>
          <br/>
          Late November - I quit my job in preparation for a difficult month. <br/>
          December 04, 2021 - Happy birthday Amanda.  I spent the day alone.  <br/>
          December 25th, 2021 - Merry Christmas Amanda. I spent the day alone. <br/>
          December 31st, 2021 - Happy New Years Amanda. As you guessed, I spent the day alone. <br/>
          It was a tough month, but I remained persistant on maintaining my health and happiness.
          I stumbled many days, I missed the gym often, and I laid in bed too long, but I kept getting up.
          <br/><br/>
          <S.Header>FEBRUARY 14th, 2022</S.Header>
          <br/>
          After being in Logan, Utah for nearly 16 years of my life, I left.
          I only told a couple people I was leaving, it was exciting.  I rented a U-Haul with a trailer,
          and took my cats with all my belongings to Washington.  It was a fun drive, and I felt hopeful.  
          It felt like a very apparent 'new-chapter' in my life, which is where I am now.  I look forward
          to this year (2022), I am extremely hopeful.

          <br/><br/>
          Rest in peace Amanda
          <br/>
          <br/>
          Love and Happiness to all,
          <br/>
          Tyler James Lundin 👍🏼
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
  background: rgb(0, 190, 255);
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
  color: black;
  overflow-y: auto;
  padding: 20px;
  text-align: left  ;
  margin-bottom: 50px;
  .italics {
    font-style: italic;
  }
`
S.Header = styled.h2`
  font-family: 'le-havre';
  font-weight: 700;
  background: rgba(0,0,0,0.2);
`
