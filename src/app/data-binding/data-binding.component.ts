import { Component,  OnInit,   } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  nome: String = "Richard"
  valorDigitado: string = ""
  isMouseOver: boolean = false;
  url: String ="https://img.freepik.com/vetores-gratis/bola-de-futebol-realista-isolada-de-vetor-sobre-o-branco_1284-41932.jpg?w=2000"
  esconderTexto: boolean = true;

  getValor() {
  return 1;
  }
  clique(){
  alert('Você digitou:'+ this.valorDigitado);
  }
  onKeyUp(event: KeyboardEvent){
  this.valorDigitado = (<HTMLInputElement> event.target).value;
  }
  onMouseOver(){
  this.isMouseOver = true;
  }
  onMouseOut(){
  this.isMouseOver = false;
  }



constructor() { }
ngOnInit(): void {
}


}


