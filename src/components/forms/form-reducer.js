// TODO: After base functionality works, test modifying switch statement to see if it can all be done in one
// this is probably very useful for conditional forms though. Actually test that first.

export const DefaultForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  companyName: '',
  questionsGroup1: {
    question1: '',
    question2: '',
  },
  questionsGroup2: {
    question3: '',
    question4: '',
  },
}

export const FormReducer = (form, { type, payload }) => {
  switch(type) {
    case 'USER_INFO':
      return {
        ...form,
        ...payload,
      }
    case 'QUESTIONS_GROUP_ONE':
      return {
        ...form,
        questionsGroup1: {
          ...form.questionsGroup1,
          ...payload,
        }
      }
    case 'QUESTIONS_GROUP_TWO':
      return {
        ...form,
        questionsGroup2: {
          ...form.questionsGroup2,
          ...payload,
        }
      }
    default:
      return form
  }
}