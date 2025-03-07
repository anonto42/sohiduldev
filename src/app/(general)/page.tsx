import Form from '@/components/Contact/Form'
import Introduction from '@/components/Introduction/Introduction'
import Section from '@/components/ProjectSection/Section'
import Services from '@/components/ServicesInformation/Services'
import UsedTechnologies from '@/components/Techonologies/UsedTechnologies'
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
      {/* resent used technologies */}
      <UsedTechnologies />
      {/* Contact From */}
      <Form />
    </div>
  )
}

export default HomePage