import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IPost } from './post.model';
// Could be added in app.module in providers array (two way);
@Injectable({ providedIn: 'root' })
export class PostsService {

  private posts: IPost[] = [];
  private postUpdated = new Subject<IPost[]>();

  getPosts(): IPost[] {
    return [...this.posts];
  }

  getpostUpdateListener() {
    return this.postUpdated.asObservable()
  }

  addPost(title: string, content: string): void {
    const post: IPost = { title, content };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
