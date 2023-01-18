import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mgt-user';

  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
ngOnInit() {

}
}
