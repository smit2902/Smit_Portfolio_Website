// import uniqid from 'uniqid'
import React from 'react'

const Skills = ({ SkillItem }) => {
  const { name, hrefer } = SkillItem;

  return (
    <a className='skilink' target="_blank" href={hrefer}>
      <button className='skibutton'>
        {/* <span> */}
            {name}
        {/* </span> */}
        </button>
      </a>
    
  )
}

export default Skills
