import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/observable';
import { Post } from '../post'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  post: Post = new Post();
  showForm = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostsList();
  }

  getPostsList() {
    this.postService.getPosts()
      .subscribe(response => (this.posts = response));
  }
  addPost(post: Post, valid: boolean) {
    if (valid) {
      this.postService.add(post)
        .subscribe(response => (this.posts.push(response)));
    }
  }

}
