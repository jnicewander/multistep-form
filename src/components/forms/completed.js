import React from 'react'

const Completed = ({ form }) => {
  return (
    <div>
      <h1>Success!</h1>
      <p>
        Thank you, <b>{`${form.firstName} ${form.lastName}`}</b>{' '}
      </p>
      <p>Someone from Grand Rapids Tech will reach out to you soon to discuss your new website!</p>
    </div>
  )
}
export default Completed