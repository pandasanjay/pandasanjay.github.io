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
                <p>My name is <b>Sanjay Panda</b> and I am a <b>Full stack developer</b> from London, UK.</p>
                <p>Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web and cloud.</p>
                <p>Feel free to <a href="mailto:contact@sanjaypanda.com">contact</a> me for any project that you might have in mind.</p>
                <p className="social-link">
                    <a href="https://www.linkedin.com/in/pandasanjay/" alt="linkedin" title="Linkedin" className="fa fa-linkedin"> </a>
                    <a href="https://github.com/pandasanjay" alt="github" title="Github" className="fa fa-git"> </a>
                    <a href="https://stackoverflow.com/users/1770277/sanjay?tab=profile" alt="stack overflow" title="Stack Overflow" className="fa fa-stack-overflow"> </a>
                    <a href="https://medium.com/@panda.sanjay18" alt="Medium" title="Medium" className="fa fa-medium"> </a>
                </p>
            </div>
        </SidePanel>
    )
}