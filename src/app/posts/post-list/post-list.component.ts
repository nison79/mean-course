import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input() posts: Post[] = [
    // { title: 'First Post', content: 'The is the content of the post' },
    // { title: 'Second Post', content: 'The is the content of the post' },
    // { title: 'Third Post', content: 'The is the content of the post' },
  ];
  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string){
    this.postsService.deletePost(postId)
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
