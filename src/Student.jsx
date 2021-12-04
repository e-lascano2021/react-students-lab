import React from 'react'
import Score from './Score'

const Student = (props) => {
  console.log("student1", props)
  return(
    <>
    <div className="student">
      <h1 className="Name">{props.name}</h1>
      <h2  className="Bio">{props.bio}</h2>
    </div>
      <Score scores={props.scores}/>
    </>
  )
}

export default Student