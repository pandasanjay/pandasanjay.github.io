export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validateContactForm = (values) => {
  const errors = {};
  
  if (!values.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};