import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
autor:any= {nombres:'Luis Alejandro', apellidos:'Meneses'}
coautor:any= {nombres:'Luis Eduardo', apellidos:'Gasca y Henderson David'}

}
