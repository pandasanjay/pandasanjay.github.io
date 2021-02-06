import React from "react"
import { Badge } from "reactstrap"

export default ({ skills }) => {
  return (
    <div>
      {skills.map(skill => (
        <Badge href="#">{skill}</Badge>
      ))}
    </div>
  )
}
