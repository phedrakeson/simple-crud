import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'users/create', component: UserCreateComponent
  },
  {
    path: 'users/update/:id', component: UserUpdateComponent
  },
  {
    path: 'users/delete/:id', component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
