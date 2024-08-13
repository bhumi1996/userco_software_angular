import { Component, Input, input } from '@angular/core';
import { Faq } from '../../model/faq';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  @Input() faqList:Faq[]=[];

}
