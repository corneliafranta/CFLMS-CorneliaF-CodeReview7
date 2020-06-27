import { Component, OnInit } from '@angular/core';
import { posts} from '../posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  posts = posts;

  increaseLikes(post) {
    post.likes++;
    post.buttonPressed++;
  }
  decreaseLikes(post) {
    post.likes--;
    post.buttonPressed--;
  }


  constructor() { }

  ngOnInit() {

  }

}

