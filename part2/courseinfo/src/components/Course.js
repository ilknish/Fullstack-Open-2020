import React from 'react'

const Part = ({part1}) => {
    return (
        <div>
            <p>{part1.name} {part1.exercises}</p>
        </div>
    )
}

const Course = ({courses}) => {
  
  return (
    <div>
      {courses.map((course,i) =>
        <div key={course.id}>  
          <Header head={course} />
          <Content content={course} />
          <Total total={course} />
        </div>
      )}  
    </div>    
  )
}


const Header = ({head}) => {
  
    return (
        <div>
            <h2>{head.name}</h2>
        </div>
    )
}

const Total = ({total}) => {
  
  const totals = 
    total.parts.reduce( (s, p) => s + p.exercises, 0)
  return (
      <div>
          <h3>total of {totals} exercies</h3>
      </div>
  )
}

const Content = ({content}) => {
    
    return (        
        <div>
            <ul>
              {content.parts.map((part) => 
                <li key={part.id}>
                  <Part part1={part} />
                </li>
              )}
            </ul>
        </div>
    )
}

export default Course