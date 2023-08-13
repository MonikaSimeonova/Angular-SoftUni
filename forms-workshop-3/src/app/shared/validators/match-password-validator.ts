import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  password1Value: string,
  password2Value: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup
    const pass1 = group.get(password1Value);
    const pass2 = group.get(password2Value);

    return pass1?.value === pass2?.value 
    ? null: {matchPasswordsValidator: true}
  };
}
