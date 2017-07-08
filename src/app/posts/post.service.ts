import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.baseUrl)
      .map(response => (response.json() as Post[]));
  }
  add(post: Post) {
    return this.http.post(this.baseUrl, post)
      .map(response => (response.json() as Post));
  }

}
