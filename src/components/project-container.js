import React from "react"
import { Link } from "gatsby"
import projects from "../data/project-data.json"

const projectContainer = () => (
    <>
        {projects.map(project => (
            <Link>
                <div>
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                </div>
            </Link>
        ))}
    </>
)

export default projectContainer