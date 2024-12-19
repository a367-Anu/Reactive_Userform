// import { CommonModule, } from '@angular/common';
import { Component, } from '@angular/core';
// import { DUMMY_USERS } from './dummy';

import { UserFormComponent } from './user-form/user-form.component';
import { NewformComponent } from './newform/newform.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent,NewformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

// getImagePath(user: any): string {
//   return 'assets/users/' + user.avatar;
// }
// USERS=DUMMY_USERS;
// USERS = [
//   {
//     id: 'u1',
//     name: 'Jasmine Washington',
//     avatar: 'user-1.jpg',
//   },
//   {
//     id: 'u2',
//     name: 'Emily Thompson',
//     avatar: 'user-2.jpg',
//   },
//   {
//     id: 'u3',
//     name: 'Marcus Johnson',
//     avatar: 'user-3.jpg',
//   },
//   {
//     id: 'u4',
//     name: 'David Miller',
//     avatar: 'user-4.jpg',
//   },
//   {
//     id: 'u5',
//     name: 'Priyanshu Patel',
//     avatar: 'user-5.jpg',
//   },
//   {
//     id: 'u6',
//     name: 'Arjun Singh',
//     avatar: 'user-6.jpg',
//   },

// ];
}
