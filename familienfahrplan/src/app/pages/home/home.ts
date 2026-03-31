import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";
import { Problem } from "./sections/problem/problem";
import { WhatYouGet } from "./sections/what-you-get/what-you-get";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Problem, WhatYouGet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
