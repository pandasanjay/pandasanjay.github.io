import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "gatsby";

export default ({ className, headerCss, header, text, path }) => {
    const cssClass = ["border-0 rounded-0", "shadow"], headerCssClass = ["p-5", "p-sm-5", "p-md-5", "p-xl-5", "text-center", "shadow-sm"]
    if(className) cssClass.push(className)
    if(headerCss) headerCssClass.push(headerCss)
    return (
        <Card className={cssClass.join(" ")}>
            <CardHeader tag="h3" className={headerCssClass.join(" ")}>{header}</CardHeader>
            <CardBody>
                <div className="card-text" dangerouslySetInnerHTML={{__html: text}} />
                <Link to={path}>Explore</Link>
            </CardBody>
        </Card>
    )
}