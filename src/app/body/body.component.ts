import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  private movielist = [
    {
      id: 'movie001',
      title: '复联3',
      date: '2018/05/11',
      rating: 4.7,
      casts: ['钢铁侠', '幻世', '格鲁特', '雷神']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
