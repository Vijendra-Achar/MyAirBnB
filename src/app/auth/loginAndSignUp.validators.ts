import { AbstractControl, ValidationErrors } from '@angular/forms';

export class loginAndSignUp {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static confirmPassword(group: AbstractControl): ValidationErrors | null {
        const passwordControl = group.get('password');
        const rePasswordControl = group.get('reTypedPassword');

        if (passwordControl.value === rePasswordControl.value) {
            return null;
        }
        return { passwordMismatch: true };
    }
}