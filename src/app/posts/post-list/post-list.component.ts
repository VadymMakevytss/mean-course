import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPost } from '../post.model';
import { PostsService } from './../post.sevice';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   { title: 'First Post', content: 'This is first post content' },
  //   { title: 'Second Post', content: 'This is second post content' },
  //   { title: 'Third Post', content: 'This is third post content' }
  // ];

  // @Input() posts: IPost[] = [];
  posts: IPost[] = [];
  private postsSusbcription: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSusbcription = this.postsService.getpostUpdateListener().subscribe((posts: IPost[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSusbcription.unsubscribe();
  }

  onDelete(id: string): void {
    this.postsService.deletePost(id);
  }

}
