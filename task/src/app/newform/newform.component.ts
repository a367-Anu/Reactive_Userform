import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray  } from '@angular/forms';
// import { HttpService } from '../http.service';

@Component({
  selector: 'app-newform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './newform.component.html',
  styleUrl: './newform.component.css'
})
export class NewformComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-z A-Z]+$')]], // Only string allowed
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10 digit number
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{12,20}$') // It contain letter, symbol and number
      ]],
      skills: this.fb.array([this.createSkill()]),//created skill array..
      // skills: ['', [Validators.required, Validators.pattern('^[a-zA-Z, ]+$')]], 
      addresses: this.fb.array([]) 
    });

    this.addAddress();
  }

//  ------Skill-----
  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  createSkill():  FormGroup {
    return this.fb.group({
      skill: ['', [Validators.required, Validators.pattern('^[a-zA-Z, ]+$')]] // Skills should be string..
    });
  }
  AddSkills(): void {
    this.skills.push(this.createSkill()); // Add new skill field
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index); // Removes a skill by index
  }


  // ---------adress-----=
  get addresses() {
    return (this.userForm.get('addresses') as FormArray);
  }


  addAddress() {
    const addressGroup = this.fb.group({
      type:['',Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // 6 digit pin code, only numbers
    });

    this.addresses.push(addressGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  // ----- submit---
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    } else {
      console.log('Form is not valid');
    }
    
  }

  // ---reset method----
  resetBuuton(){
    this.userForm.reset();
  }
}
