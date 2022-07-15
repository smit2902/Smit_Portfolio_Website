import React from 'react';
import Project from './Project';
import './style.css' 

const projectData = [{
    hrefer:"https://1n52td.csb.app/",
    name:"Digital Clock",
    description:"This is a digital clock made by using hooks-api of React also show days",
    skills1:['React','Javascript','Hooks'],
    github:"https://github.com/",
    codesandbox:"https://codesandbox.io/u/nayakyash2209"
},
{
    hrefer:"https://ln330k.csb.app/",
    name:"Button Game",
    description:"This is a one type of game in which You can click any of the 3 buttons out of 9 and if total goes greater than 10 you will win or you lose using React",
    skills1:['React','Javascript','States'],
    github:"https://github.com/",
    codesandbox:"https://codesandbox.io/u/nayakyash2209"
},
{
    hrefer:"https://vshr7y.csb.app/",
    name:"Git Api",
    description:"This is a one type of basic git api which can show you the details about the person whom you want to search",
    skills1: ['React','Git','Github'],
    github:"https://github.com/",
    codesandbox:"https://codesandbox.io/u/nayakyash2209"
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