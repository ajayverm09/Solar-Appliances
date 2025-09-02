import React from 'react'
import ContactBanner from '../Components/ContactBanner'
import ContactSection from '../Components/ContactAddress'
import ContactForm from '../Components/ContactForm'
import MoreSupport from '../Components/ContactSupport'

const Contact = () => {
  return (
    <div>
      <ContactForm/>
      <MoreSupport/>
      <ContactBanner/>
      <ContactSection/>
    </div>
  )
}

export default Contact
