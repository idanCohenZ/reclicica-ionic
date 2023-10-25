import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {
  private formBuilder: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }
  createForm(): FormGroup {
    //this function supplies an object that will tell us which fields will be in the form
    //and how they will be validated
    //inside each field of the form there is:
    //fieldName: [initial value, [Validators]]
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
