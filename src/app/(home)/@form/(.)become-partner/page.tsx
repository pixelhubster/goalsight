import Form from '@/components/form'
import DescriptionForm from '@/components/forms/insight/description'
import LocationForm from '@/components/forms/insight/location'
import BecomePartner from '@/components/forms/partner/become-partner'
import FormContext from '@/components/hooks/useInput'
import Modal from '@/components/modal'
import React from 'react'

const page = () => {
  return (
    <Modal>
      <FormContext>
        <Form>
          <BecomePartner />
          <LocationForm />
          <DescriptionForm />
        </Form>
      </FormContext>
    </Modal>
  )
}

export default page