import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public request: RequestCreate = {} as RequestCreate;
  public response: ResponseCreate = {} as ResponseCreate;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  public cadastrarUsuario(): void {
    this.usersService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }

}
