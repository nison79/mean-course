import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [
    { title: 'First Post', content: 'The is the content of the post' },
    { title: 'Second Post', content: 'The is the content of the post' },
    { title: 'Third Post', content: 'The is the content of the post' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
