import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IPost } from './../post.model';
import { PostsService } from './../post.sevice';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<IPost>();

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    // const post: IPost = { title: form.value.title, content: form.value.content };
    // this.postCreated.emit(post);

    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
