import MaterialIcon from '@material/react-material-icon';
import * as React from 'react';

// third party apps
import FormField from '@components/FormField';
import { validate } from 'isemail';

// interfaces
import { EmailFieldProps } from '@components/EmailField/interfaces';

const EmailField: React.FunctionComponent<EmailFieldProps> = (props) => {
  const { type, validator, ...restProps } = props;

  const validateEmail = (value) => {
    if (!validate(value)) {
      throw new Error('Email is invalid');
    }
  };

  return (
    <FormField
      id="email"
      labelText="Email"
      type="text"
      leadingIcon={<MaterialIcon role="button" icon="email" initRipple={null}/>}
      aria-describedby="email-helper-text"
      required
      validator={validateEmail}
      {...restProps}
    />
  );
};

export default EmailField;
