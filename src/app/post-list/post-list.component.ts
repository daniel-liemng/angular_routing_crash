import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Post 1', content: 'Post content 1' },
    { id: 2, title: 'Post 2', content: 'Post content 2' },
    { id: 3, title: 'Post 3', content: 'Post content 3' },
    { id: 4, title: 'Post 4', content: 'Post content 4' },
  ];

  page: any;
  orderedBy: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      console.log(value);
      this.page = value.get('page');
      this.orderedBy = value.get('orderedBy');
    });
  }
}
