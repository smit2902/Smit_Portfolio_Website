// import uniqid from 'uniqid'
import React from 'react'

const Skills = ({ SkillItem }) => {
  const { name, hrefer } = SkillItem;

  return (
      <button className='skibutton'>
        <a className='skilink' target="_blank" href={hrefer}>
        {/* <span> */}
            {name}
        {/* </span> */}
      </a>
    </button>
  )
}

export default Skills
