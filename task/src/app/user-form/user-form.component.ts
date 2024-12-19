// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray  } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }


  profileForm: FormGroup;

 constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      }),
      
      skills: this.fb.array([this.createSkill()]),
    });
  }

  get address() {
    return this.profileForm.get('address') as FormGroup;
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  createSkill():  FormGroup {
    return this.fb.group({
      skill: ['',Validators.required]  // Each skill is a form control, and it is required
    });
  }

  AddSkills(): void {
    this.skills.push(this.createSkill()); // Add new skill field
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index); // Removes a skill by index
  }

  

  onSubmit() {
    console.log("Skills Array", this.skills.value); 
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
   this.profileForm.reset();

  }
}
