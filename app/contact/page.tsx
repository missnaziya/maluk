import { SectionTitle } from '@/components'
import ContactUs from '@/components/Contact'
import NewsLetterFooter from '@/components/NewsLetterfooter'
import React from 'react'

const page = () => {
  return (
    <div>  <SectionTitle title="Contact Us" path="Home | Contact" />

       <ContactUs />
        <NewsLetterFooter/>
    </div>
  )
}

export default page