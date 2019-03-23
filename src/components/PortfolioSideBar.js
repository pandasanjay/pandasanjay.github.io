import React from 'react'
import { withPrefix } from "gatsby"
import SidePanel from "../components/SidePanel";
import { Media } from 'reactstrap';
export default () => {
    return (
        <SidePanel grid={{ md: 3, xl: 2 }} className="order-12 order-sm-12 order-md-1 order-xl-1 p-2 border-right border-secondary">
                    <div className="text-center">
                        <Media object className="rounded-circle mb-2 img-thumbnail" src={withPrefix('sanjay.jpg')} alt="Generic placeholder image" />
                        <h2 className="mt-3 mb-3">HELLO!</h2>
                        <p>My name is <b>Sanjay Panda</b> and I am a <b>Full stack developer</b> from Odisha, India.</p>
                        <p>Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web.</p>
                        <p>Feel free to <a href="mailto:contact@sanjaypanda.com">contact</a> me for any project that you might have in mind.</p>
                        <p className="social-link">
                            <a href="https://www.linkedin.com/in/pandasanjay/" alt="linkedin" className="fa fa-linkedin"> </a>
                            <a href="https://github.com/pandasanjay" alt="github" className="fa fa-git"> </a>
                        </p>
                    </div>
        </SidePanel>
    )
}