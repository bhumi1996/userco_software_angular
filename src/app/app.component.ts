import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import * as $ from 'jquery';
import { HeaderComponent } from "./website/header/header.component";
import { FooterComponent } from "./website/footer/footer.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'user_co';
  constructor(private routes:ActivatedRoute){}
  ngOnInit(): void {
    this.routes.fragment.subscribe((data)=>{
      this.jumpsection(data);
    })
  }
  jumpsection(data: string | null) {
    if(data){
      document.getElementById(data)?.scrollIntoView({behavior:'smooth'});
    }
  }



}
