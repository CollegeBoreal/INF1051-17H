import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  template: `
    <div class="jumbotron">

      <div *ngIf="user">
        <h2>{{ user.name }}</h2>
        <h4>{{ user.age }}</h4>

        <div class="form-group">
          <input type="text" [(ngModel)]="editName" class="form-control">
        </div>
        
        <div class="form-group">
          <input type="number" [(ngModel)]="editAge" class="form-control">
        </div>

        <div class="form-group text-center">
          <button (click)="cancel()" class="btn btn-danger">Cancel</button>
          <button (click)="save()" class="btn btn-success">Save</button>
        </div>
      </div>

    </div>
  `
})
export class DashboardUserDetailsComponent implements OnInit {
  user: User;
  editName: string;
  editAge:number;

  constructor(
    private service: UserService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach(params => {
      let username = params['username'];
      let age = params['age'];

      this.service.getUser(username).then(user => {
        this.user     = user;
        this.editName = user.name;
        this.editAge  = user.age;
      }); 
    });
  }

  save() {
    this.user.name = this.editName;
    this.user.age = this.editAge;
    this.router.navigate(['/dashboard/users']);
  }

  // dont save. navigate to /dashboard/users
  cancel() {
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log('i am navigating away');

    // if the editName !== this.user.name
    if (this.user.name !== this.editName && this.user.age !== this.editAge) {
      return window.confirm('Discard changes?');
    }

    return true;
  }

}