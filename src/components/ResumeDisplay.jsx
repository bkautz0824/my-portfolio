import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`


let id = 0

const frontEnd = [
    {
        id: id++,
        skill: "React.js"
    },
    {
        id: id++,
        skill: "Redux"
    },
    {
        id: id++,
        skill: "Hooks"
    },
    {
        id: id++,
        skill: "Context API"
    },
    {
        id: id++,
        skill: "Jest"
    },
    {
        id: id++,
        skill: "Cypress"
    },
    {
        id: id++,
        skill: "Yup"
    },
    {
        id: id++,
        skill: "Axios"
    },
    {
        id: id++,
        skill: "JavaScript"
    },
    {
        id: id++,
        skill: "HTML"
    },
    {
        id: id++,
        skill: "CSS"
    },
    {
        id: id++,
        skill: "Ant Design"
    },
    {
        id: id++,
        skill: "Typescript"
    },
    {
        id: id++,
        skill: "React Native"
    },
    {
        id: id++,
        skill: "Styled Components"
    },

]
const backEnd = [
    {
        id: id++,
        skill: "Node.js"
    },
    {
        id: id++,
        skill: "Express"
    },
    {
        id: id++,
        skill: "SQL"
    },
    {
        id: id++,
        skill: "PostgreSQL"
    },
    {
        id: id++,
        skill: "Docker"
    },
    {
        id: id++,
        skill: "Python"
    },
    {
        id: id++,
        skill: "Git "
    },
    {
        id: id++,
        skill: "CLI"
    },
    {
        id: id++,
        skill: "GitHub"
    },
    {
        id: id++,
        skill: "Vercel"
    },
    {
        id: id++,
        skill: "Heroku"
    },
    {
        id: id++,
        skill: "Netlify"
    },
    {
        id: id++,
        skill: "PHP"
    },
    {
        id: id++,
        skill: "Mongo DB"
    },
    {
        id: id++,
        skill: "Firebase"
    },

]

function ResumeDisplay() {
    const [skills, setSkills] = React.useState(false)
    const [experience, setExperience] = React.useState(false)


    const handleSkills = () => {
        setSkills(!skills)
    }
  return (
    <div>
        <div>
           <h1>Bennett Kautz</h1>
            <h2>Full Stack Developer | Frontend Web Developer | Software Engineer</h2> 
            <p>BloomTech, Graduate, Full-Time Program, Full Stack Web Development</p> 
        </div>
        <motion.h2 
        onClick={handleSkills}
        whileHover={{scale: 1.2, color: 'forestgreen'}}
        >
            Skills
            {
                !skills && <p style={{fontSize:"10px"}}>(Click for Skills)</p>

            }
        </motion.h2>
       <SkillsContainer>
      
        <div>
        <h3>Frontend</h3>
            {
                skills && frontEnd.map((item) => {
                    
                    return (
                        <p key={item.id} style={{color: "white"}}>{item.skill}</p>
                    )
                })
            }
        </div>

        <div>
        <h3>Backend</h3>
            {
                 skills && backEnd.map((item) => {
                    
                    return (
                        <p key={item.id} style={{color: "white"}}>{item.skill}</p>
                    )
                })
            }
        </div>
       
       </SkillsContainer>

    </div>
  )
}

export default ResumeDisplay