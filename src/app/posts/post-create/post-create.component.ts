import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  inputPost = '';
  newText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(): void {
    this.newText = this.inputPost;
  }

}
