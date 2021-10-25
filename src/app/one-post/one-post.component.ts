import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  @Input() onepost: Post = {
    Title: "The one post!", 
    body: "One post to rule them all!"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
