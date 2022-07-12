import React from 'react'

const Project = ({ projectItem }) => {
    const { name, description, skills1, github, codesandbox, hrefer } = projectItem;

    return (
        <button className='probutton'>
            <a className='prolink' target="_blank" href={hrefer}>
                <div className="card">
                    <h2>{name}</h2>
                    <p className='detail'>{description}</p>
                    <div className="skillContainer">
                        {skills1.map(skill => (
                            <span className="skills">{skill}</span>
                        ))}
                    </div>
                    <span className="projectLink">
                        <a href={github}>
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733553.png"></img>
                        </a>
                    </span>
                    <span>
                        <a href={codesandbox}>
                            <img className='icon' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/iz3jx9mqvg387q6xlmur'></img>
                        </a>
                    </span>
                </div>
            </a>
        </button>
    )
}

export default Project