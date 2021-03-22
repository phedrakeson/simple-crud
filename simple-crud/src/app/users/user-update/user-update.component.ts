import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: string | null = this.route.snapshot.paramMap.get('id');
  request: RequestUpdate = {} as RequestUpdate;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersService.getUserByID(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      };
    });
  }

  atualizarUsuario() {
    this.usersService.updateUser(this.id, this.request).subscribe(res => {
      alert(`Atualizado as ${res.updatedAt} | Nome: ${res.name} Trabalho: ${res.job}`);
    })
  }

}
