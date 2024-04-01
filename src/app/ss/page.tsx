import Form from '@/components/form'
import CreateInsightForm from '@/components/forms/insight/create-insight'
import DescriptionForm from '@/components/forms/insight/description'
import LocationForm from '@/components/forms/insight/location'
import PartnerForm from '@/components/forms/insight/partners'
import React from 'react'

const page = () => {
  return (
    <Form>
        <CreateInsightForm />
        <LocationForm />
        <DescriptionForm />
        <PartnerForm />
    </Form>
  )
}

export default page