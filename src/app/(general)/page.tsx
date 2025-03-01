import Contact from '@/components/Contact/Contact'
import Introduction from '@/components/Introduction/Introduction'
import Section from '@/components/ProjectSection/Section'
import Services from '@/components/ServicesInformation/Services'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      {/* Introduction */}
      <Introduction />
      {/* Services Information */}
      <Services />
      {/* Projects show case */}
      <Section />
      {/* Contact From */}
      <Contact />
    </div>
  )
}

export default HomePage