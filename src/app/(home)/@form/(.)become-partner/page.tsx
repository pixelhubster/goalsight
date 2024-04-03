import Form from '@/components/form'
import DescriptionForm from '@/components/forms/insight/description'
import LocationForm from '@/components/forms/insight/location'
import BecomePartner from '@/components/forms/partner/become-partner'
import Modal from '@/components/modal'
import React from 'react'

const page = () => {
  return (
    <Modal>
      <Form>
        <BecomePartner />
        <LocationForm />
        <DescriptionForm />
      </Form>
    </Modal>
  )
}

export default page