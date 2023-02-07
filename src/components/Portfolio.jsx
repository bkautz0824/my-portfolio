import React from 'react';
import portfolio from '../data/portfolio.json';
import { Document, Page } from 'react-pdf';
import { Button } from '@mui/material'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import '@fontsource/bangers'
import NavBar from './NavBar'
import {    
  AboutMeContainer,
  PortfolioContainer, 
  HeaderContainer, 
  ProjectContainer,
  ResumeContainer,
  ContactContainer,
  ProjectItem,
  ProjectImage,
  ProjectItemText,
  BottomContainer1,
  BottomContainer2
} from '../styles/portfolio'
import ResumeDisplay from './ResumeDisplay';


const Header = () => {
  return (
    <HeaderContainer>
      
      <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}} 
        transition={{ duration: 1.5}}
        whileHover={{ color:'white', borderBottom:'1px solid white'}}
      >Bennett Kautz</motion.h1>
   
      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}} 
        transition={{ duration: 1.5, delay:1}}
      >Full Stack Developer</motion.p>

    </HeaderContainer>
  );
};

const Contact = () => {
  return (
    <ContactContainer
      initial={{ opacity:0}} 
      whileInView={{ opacity:1}}>
      
        <h2>Contact</h2>
        <p>You can contact me by email at bennettkautz@gmail.com</p><br/>
        <SocialIcon url="https://www.linkedin.com/in/bennett-kautz-187241158/"/>
        <SocialIcon url="https://github.com/bkautz0824"/>
      
     
     
    </ContactContainer>
  )
};

const Resume = () => {
  const [isClicked, setIsClicked] = React.useState(false)

  const toggleResume = () => {
    setIsClicked(!isClicked)
  }
  return(
  <ResumeContainer>
  <h2>Resume</h2>
    <Button 
    onClick={toggleResume}
    variant="contained"
    color='success'
    >
      Click to View Resume
    </Button>
  {isClicked ? 
   (
   <div>
   <ResumeDisplay/>


  </div>
  )
  
  : null}
</ResumeContainer>)
}

const Projects = () => {
 

  const spring = {
    type: "spring",
    damping: 80,
    duration: 1
    // stiffness: 100
  }  


  return (
    <ProjectContainer 
      initial={{ 
        opacity:0,
      //   // height: "500px",
      //   width: "100px",
      //   // margin: 50,
      //   // padding: 50
        zIndex: 0

      }} 
      whileInView={{ 
        opacity:1,
        // height: "1200px",
        width: "auto",
        zIndex: 1
      }}
      transition={spring}
      >
      <motion.h2 
        // whileInView={{color: "#90EE90"}} 
        // transition={{ duration: 7}}
      >
        Projects
      </motion.h2>
     
          {
          
          portfolio && portfolio.map((item) =>{ 

          return(
            
           <ProjectItem
          //  transition={spring}
          //  initial={{
          //   width: "0px"
          //  }}
          //   whileInView={{
          //     width:"80%",
          //   }}
           >
            
              <ProjectImage 
                src={require(`../${item.imgUrl}`)}
                // transition={spring}
                // initial={{
                //  width: "0px"
                // }}
                //  whileInView={{
                //    width:"80%",
                //  }}
              />
            
              <ProjectItemText
                
              >
                <motion.h1
                  // animate={{color: "white", x:0}} 
                  // initial={{x: -2500}} 
                  // transition={{  duration: 5}}
                >{item.title}</motion.h1>
                <p>{item.description}</p>
                <SocialIcon url={item.github} whileHover={{scale: 1.2}}  />
              </ProjectItemText>
            </ProjectItem>)
          })
          
          }

      
    </ProjectContainer>
  );
};


const AboutMe = () => {


  return(
    <AboutMeContainer>

    </AboutMeContainer>

  )
}


const Portfolio = () => {



  return (
    <PortfolioContainer>
      {/* <Particle/> */}
      <NavBar />
      <Header />
      <Projects />
      <BottomContainer1>
        <Resume />
      </BottomContainer1>
      <BottomContainer2>
        <Contact /> 
      </BottomContainer2>
     
    </PortfolioContainer>
  );
};

export default Portfolio;
