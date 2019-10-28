import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logo: string = './assets/images/logo.png'
width: number;
alt: string;
height: number;
title: string = "Media media"
  constructor() { }


  ngOnInit() {
    this.width = 100;
    this.height = 60;
    this.alt = "Foto van een img"
    

  }

}
