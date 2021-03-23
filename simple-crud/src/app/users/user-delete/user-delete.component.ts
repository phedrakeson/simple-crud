import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  private id: string | null = this.route.snapshot.paramMap.get('id');
  public dados: User = {} as User;


  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersService.getUserByID(this.id).subscribe(res => {
      this.dados = res.data;
    });
  }

  removerUsuario(): void {
    this.usersService.deleteUser(this.id).subscribe(() => {
      alert('Removido com sucesso!');
    });
  }

}
