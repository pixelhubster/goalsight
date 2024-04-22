import FormProvider from '@/components/context/form_context'
import Form from '@/components/form'
import CreateInsightForm from '@/components/forms/insight/create-insight'
import DescriptionForm from '@/components/forms/insight/description'
import LocationForm from '@/components/forms/insight/location'
import PartnerForm from '@/components/forms/insight/partners'
import FormContext from '@/components/hooks/useInput'
import Modal from '@/components/modal'
import React from 'react'

const page = () => {
  return (
    <Modal>
      <FormContext>
        <Form method={"createGoal"}>
          <CreateInsightForm />
          <LocationForm />
          <DescriptionForm />
          <PartnerForm />
        </Form>
      </FormContext>
    </Modal>
  )
}

export default page