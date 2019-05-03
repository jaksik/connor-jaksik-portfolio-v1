import React from "react"
import SkillRow from "./skill-row"
import data from "../data/skill-data.json"
import { Container } from 'reactstrap'

const skillContainer = () => (
            <Container>
                <h2 style={{ textAlign: `center`, marginBottom: `25px` }}>Technical Skills</h2>
                {data.map(category => (
                   <SkillRow title={category.title} items={category.items}/>
                ))}
            </Container>
)

export default skillContainer