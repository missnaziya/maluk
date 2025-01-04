import { SectionTitle } from '@/components'
import Banner from '@/components/Banner'
import ContactUs from '@/components/Contact'
import NewsLetterFooter from '@/components/NewsLetterfooter'
import React from 'react'

const page = () => {
  return (
    <div>  
   <Banner bg="url('/bread-contact.jpg')" />

       <ContactUs />
        <NewsLetterFooter/>
    </div>
  )
}

export default page