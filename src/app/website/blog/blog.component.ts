import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  @Input() articles:Article[]=[];
  ngOnInit(): void {
  }



}
