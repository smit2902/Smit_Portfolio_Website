import React from 'react'

const Project = ({ projectItem }) => {
    const { name, description, skills, github, linkedIn, hrefer } = projectItem;

    return (
        <button className='probutton'>
            <a className='prolink' target="_blank" href={hrefer}>
                <div className="card">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="skillContainer">
                        {skills.map(skill => (
                            <span className="skills">{skill}</span>
                        ))}
                    </div>
                    <span className="projectLink">
                        <a href={github}>
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733553.png"></img>
                        </a>
                    </span>
                    <span>
                        <a href={linkedIn}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/128/145/145807.png'></img>
                        </a>
                    </span>
                </div>
            </a>
        </button>
    )
}

export default Project