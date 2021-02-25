import React from 'react'

const Resources = ({ resources }) => {
  return (
    <div>
      <React.Fragment>
        {resources.map((resource) => (
          <p key={resource.id}>{resource.title}</p>
        ))}
      </React.Fragment>
    </div>
  )
}

export default Resources
