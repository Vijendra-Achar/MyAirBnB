import { Place } from './../../../services/place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-post-item',
  templateUrl: './my-post-item.component.html',
  styleUrls: ['./my-post-item.component.scss'],
})
export class MyPostItemComponent implements OnInit {

  @Input() myPost: Place;

  constructor() { }

  ngOnInit() { }

}
