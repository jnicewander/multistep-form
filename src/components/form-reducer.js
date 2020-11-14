// TODO: After base functionality works, test modifying switch statement to see if it can all be done in one
// this is probably very useful for conditional forms though. Actually test that first.

export const DefaultForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  companyName: '',
  checkboxOne: '',
  checkboxTwo: '',
  checkboxThree: '',
  checkboxFour: '',
  skipNextStep: 'No',
  question1: '',
  question2: '',
  question3: '',
  question4: '',
}

export const FormReducer = (form, { type, payload }) => {
  switch(type) {
    case 'STEP_ONE':
      return {
        ...form,        
        ...payload,
      }
    case 'STEP_TWO':
      return {
        ...form,
        ...payload,
      }
    case 'STEP_THREE':
      return {
        ...form,
        ...payload,
      }
    case 'STEP_FOUR':
      return {
        ...form,
        ...payload,
      }
    default:
      return form
  }
}