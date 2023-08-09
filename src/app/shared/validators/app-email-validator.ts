import { ValidatorFn } from "@angular/forms";

export function appEmailValdator(): ValidatorFn {
    // const domainString = domains.join('|');
    const re = new RegExp(`^[^@]{6,}@gmail\.(bg | com)$`);

    return (control) => {
        return (control.value === '' || re.test(control.value)) ? null : { appEmailValdator: true };
    }
}