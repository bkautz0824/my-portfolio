import styled from 'styled-components';
import { motion } from 'framer-motion'

export const PortfolioContainer = styled.div`
width: 100%;
height: auto;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
background-color: black;
/* z-index: 1; */
`;


export const HeaderContainer = styled.div`
width: 75%; 
height: 90vh;
align-items: center;
flex-direction: column;
display: flex;
margin-top: 5rem;
/* padding-top: 5rem; */
margin-bottom: 3rem;
padding-bottom: 1rem;
z-index: 1;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 6rem;
  color: forestgreen;
};
p{
  font-size: 2rem;
  color:forestgreen;
}
`


export const ProjectContainer = styled(motion.div)`
display: flex;
/* width: 100%; */
height: auto;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(black, #2F4E2F
, black);
margin: 2rem 2rem 5rem 2rem;
flex-direction: column;
padding: 0 .5rem;
/* z-index: 1; */
border: .25rem solid white;
border-style: outset;
border-radius: 2rem;
font-family: 'Courier New', Courier, monospace;
/* padding-top: 5rem; */
color: white;
h2{
color: #90EE90;
font-size: 3rem;
border-bottom: 2px solid silver;
}
`


export const ContactContainer = styled(motion.div)`
width: 20%;
height: auto;
justify-content: center;
align-items: center;
padding: 2rem 5rem;
margin: .5rem;
background-color: black;
color: silver;
z-index: 1;
display: flex;
flex-direction: column;

`
export const ResumeContainer = styled(motion.div)`
width: 50%;
height: auto;
justify-content: center;
align-items: center;
padding: 2rem 2rem;
margin: 2rem 0;
background-color: black;
color: silver;
z-index: 1;
display: flex;
flex-direction: column;
box-shadow: 2px;
`

export const BottomContainer1 = styled(motion.div)`
height:auto;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
`

export const BottomContainer2 = styled(motion.div)`
height: 1000px;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
`

// export const ContactContainer = styled.div`
// width: 50%;
// height: 50%;  

// `

// export const ResumeContainer = styled.div`
// width: 50%;
// height: 50%;
// `

export const ProjectItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:80%;
height: 100vh;
`

export const ProjectImage = styled(motion.img)`
min-width: 400px;
max-width: 500px;
height: auto;
padding: 1rem 5rem;
max-height: 400px;
`
export const ProjectItemText = styled(motion.div)`
width: auto;
height: 100%;

`


export const AboutMeContainer = styled(motion.div)`
width: 70%;
height: 800px;

`