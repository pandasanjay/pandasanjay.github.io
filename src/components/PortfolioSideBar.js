import React from 'react'
import { withPrefix } from "gatsby"
import SidePanel from "../components/SidePanel";

export default () => {
    return (
        <SidePanel grid={{ md: 3, xl: 2 }} className="order-12 order-sm-12 order-md-1 order-xl-1 p-2 border-r border-slate-700">
            <div className="text-center">
                <img 
                    className="rounded-full mb-4 border-4 border-slate-300 dark:border-slate-700 mx-auto shadow-md w-32 h-32 object-cover" 
                    src={withPrefix('sanjay.jpg')} 
                    alt="Sanjay Panda" 
                />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4 mb-4">HELLO!</h2>
                <p className="mb-3 text-slate-700 dark:text-slate-300">My name is <span className="font-semibold">Sanjay Panda</span> and I am a <span className="font-semibold">Full stack developer</span> from London, UK.</p>
                <p className="mb-3 text-slate-700 dark:text-slate-300">Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web and cloud.</p>
                <p className="mb-3 text-slate-700 dark:text-slate-300">Feel free to <a href="mailto:contact@sanjaypanda.com" className="text-accent hover:text-accent-600">contact</a> me for any project that you might have in mind.</p>
                <div className="social-link flex justify-center space-x-4 mt-6">
                    <a href="https://www.linkedin.com/in/pandasanjay/" alt="linkedin" title="Linkedin" className="text-slate-600 dark:text-slate-400 hover:text-accent text-xl">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/pandasanjay" alt="github" title="Github" className="text-slate-600 dark:text-slate-400 hover:text-accent text-xl">
                        <i className="fa fa-git"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/1770277/sanjay?tab=profile" alt="stack overflow" title="Stack Overflow" className="text-slate-600 dark:text-slate-400 hover:text-accent text-xl">
                        <i className="fa fa-stack-overflow"></i>
                    </a>
                    <a href="https://medium.com/@panda.sanjay18" alt="Medium" title="Medium" className="text-slate-600 dark:text-slate-400 hover:text-accent text-xl">
                        <i className="fa fa-medium"></i>
                    </a>
                </div>
            </div>
        </SidePanel>
    )
}