import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersGQL, UsersQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-dr',
  templateUrl: './dr.page.html',
  styleUrls: ['./dr.page.scss'],
})
export class DrPage implements OnInit {

  users: Observable< UsersQuery['allDoctor']['edges']>;
  constructor(private usergql: UsersGQL) { }

  ngOnInit() {
    this.users = this.usergql.watch().valueChanges.pipe(map(result => result.data.allDoctor.edges));
  }

}
