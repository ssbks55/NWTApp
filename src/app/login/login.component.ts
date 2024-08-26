import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  pin: string[] = ['', '', '', ''];
  pinControls = [0, 1, 2, 3];


  @ViewChildren('pinInput') pinInputs!: QueryList<ElementRef>;

  constructor(private router: Router) { }

  onPinInput(event: Event, index: number, inputElement: HTMLInputElement): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 1) {
      this.pin[index] = input.value.slice(-1);
    } else {
      this.pin[index] = input.value;
    }
    // Move focus to the next input if the current one is filled
    if (input.value && index < this.pinControls.length - 1) {
      const nextInput = this.pinInputs.toArray()[index + 1].nativeElement as HTMLInputElement;
      nextInput.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number, inputElement: HTMLInputElement): void {
    // Handle backspace to focus on the previous input
    if (event.key === 'Backspace' && index > 0 && inputElement.value === '') {
      const prevInput = this.pinInputs.toArray()[index - 1].nativeElement as HTMLInputElement;
      prevInput.focus();
    }
  }

  onSubmit(): void {
    const pinValue = this.pin.join('');
    console.log('PIN Submitted:', pinValue);
    this.router.navigate(['/dashboard']);
  }
}
