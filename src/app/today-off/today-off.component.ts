import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-off',
  templateUrl: './today-off.component.html',
  styleUrls: ['./today-off.component.css']
})
export class TodayOffComponent implements OnInit {
  i: any;
  constructor() { }
  header = [
  {class: ' item ', menuName: ' Nuts & Shacks', img: 'assets/img/Nuts & Shacks.jpg'},
  {class: ' item ', menuName: 'Fresh Vegetables', img: 'assets/img/Fresh Vegetables.jpg'},
  {class: ' item ', menuName: 'Fresh Fruits', img: 'assets/img/banana.jpg'},
  {class: ' item ', menuName: 'Daily Essentials & Dairy', img: 'assets/img/Daily Essentials & Dairy.jpg'},
];
  data = [
    {class: ' item ', menuName: 'Beverages', img: 'assets/img/everages.jpg'},
    {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
    {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},
    {class: ' item ', menuName: 'Shampoo', img: 'assets/img/shampoo.jpg'}
    ];
    headers = [
      {class: ' item ', menuName: ' Nuts & Shacks', img: 'assets/img/Nuts & Shacks.jpg'},
      {class: ' item ', menuName: 'Fresh Vegetables', img: 'assets/img/Fresh Vegetables.jpg'},
      {class: ' item ', menuName: 'Fresh Fruits', img: 'assets/img/banana.jpg'},
      {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
      {class: ' item ', menuName: 'Daily Essentials & Dairy', img: 'assets/img/Daily Essentials & Dairy.jpg'},
    ];
      datas = [
        {class: ' item ', menuName: 'Beverages', img: 'assets/img/everages.jpg'},
        {class: ' item ', menuName: 'Herbel Cleaning', img: 'assets/img/Herbel Cleaning.jpg'},
        {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},
        {class: ' item ', menuName: 'Shampoo', img: 'assets/img/shampoo.jpg'},
        {class: ' item ', menuName: 'Diet-Friendly', img: 'assets/img/Diet-Friendly.jpg'},


        ];

  ngOnInit(): void {
  }
}

