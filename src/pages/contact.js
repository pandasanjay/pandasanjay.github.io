import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PortfolioSideBar from '../components/PortfolioSideBar'
import SkillsSideBar from '../components/SkillsSideBar'
import ContactForm from '../components/ContactForm'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Sanjay" keywords={[`Sanjay`,`contact`, `Fullstack developer`]} />
    <div className="flex flex-col lg:flex-row">
      <PortfolioSideBar />
      <div className="w-full lg:w-2/3 mx-auto p-4">
        <ContactForm />
      </div>
      <SkillsSideBar />
    </div>
  </Layout>
)

export default ContactPage