import React from "react"
import { Col } from "reactstrap"
const SidePanel = ({ children, right, grid = {}, className }) => {
  const cssClass = ["sidebar", "shadow"]
  if (right) cssClass.push("right")
  if (className) cssClass.push(className)
  return (
    <Col {...grid} className={cssClass.join(" ")}>
      <div className="sidebar-sticky">{children}</div>
    </Col>
  )
}

export default SidePanel
