import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

jojo: string[]= ["josuke"];

mostrarJojo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarJojo(){
    this.mostrarJojo = !this.mostrarJojo
    

  }





}
