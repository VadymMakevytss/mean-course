import { Component } from '@angular/core';
import { IPost } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: IPost[] = [];

  onPostAdded(post): void {
    this.storedPosts.push(post);
  }

}
