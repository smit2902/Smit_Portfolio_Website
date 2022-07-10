import React from 'react';
import Project from './Project';
import './style.css' 

const projectData = [{
    hrefer:"https://1n52td.csb.app/",
    name:"Project 1",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
},
{
    hrefer:"https://ln330k.csb.app/",
    name:"Project 2",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
},
{
    hrefer:"https://vshr7y.csb.app/",
    name:"Project 3",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills: ['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
},
];

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    )
}

export default ProjectContainer