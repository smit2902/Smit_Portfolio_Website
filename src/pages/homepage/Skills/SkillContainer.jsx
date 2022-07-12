import React from 'react';
import './style.css' 
import Skills from './Skills';

const SkillData = [{
    name: 'HTML',
    hrefer: 'https://www.w3schools.com/html/',
},
{
    name: 'CSS',
    hrefer: 'https://www.w3schools.com/css/default.asp',
},
{
    name: 'JavaScript',
    hrefer: 'https://www.w3schools.com/js/default.asp',
},
{
    name: 'C',
    hrefer: 'https://www.w3schools.com/c/index.php',
},
{
    name: 'C++',
    hrefer: 'https://www.w3schools.com/cpp/default.asp',
},
{
    name: 'Java',
    hrefer: 'https://www.w3schools.com/java/default.asp0',
},
{
    name: 'Python',
    hrefer: 'https://www.w3schools.com/python/default.asp',
}
  ];

  const SkillContainer = () => {
    return (
        <div className="skiContainer">
            {
                SkillData.map(SkillItem=>{
                    return <Skills SkillItem={SkillItem}/>
                })
            }
        </div>
    )
}

export default SkillContainer