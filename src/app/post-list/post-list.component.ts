import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  mypostlist: Post[] = [
    {Title:"Hello", body: "This is a test post"},
    {Title: "Second Post", body: "Hello again this is another test post"}
  ];
  newpostTitle: string = '';
  newpostbody: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  DeletePost(mypost:Post){
    const newpostindex = this.mypostlist.indexOf(mypost);
    this.mypostlist.splice(newpostindex);
  }
  AddPost(){
    this.mypostlist.push({Title: this.newpostTitle, body: this.newpostbody})
  }
}
