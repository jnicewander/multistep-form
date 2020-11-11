import React from 'react'

const Completed = ({ form }) => {
  return (
    <div>
      <h1>Success!</h1>
      <p>
        Thank you, <b>{`${form.firstName} ${form.lastName}`}</b>{' '}
      </p>
      <p>Someone from Multistep Form Corporation will reach out to you soon to discuss your form submission!</p>
    </div>
  )
}
export default Completed