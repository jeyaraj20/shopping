import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit {
  @ViewChild('nav')
  slider!: NgImageSliderComponent;
  name = 'Angular';

  // tslint:disable-next-line:object-literal-key-quotes
  imageObject = [] = [
    { image: 'assets/img/77.png', thumbImage: 'assets/img/77.png', title: 'Image One' },
  { image: 'assets/img/11a.png', thumbImage: 'assets/img/11a.png', alt: 'image six' },
  { image: 'assets/img/22b.jpg', thumbImage: 'assets/img/22b.jpg', alt: 'alt of image seven', title: 'Image Two' },
  { image: 'assets/img/2b.jpg', thumbImage: 'assets/img/2b.jpg' },
  { image: 'assets/img/1a.jpg', thumbImage: 'assets/img/1a.jpg' }

];
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getData(val: any){
    debugger;
    let selectedImg =this.imageObject[val]
    this.imageObject.slice(val-1,0)
    this.imageObject.push(selectedImg)
  }


}
