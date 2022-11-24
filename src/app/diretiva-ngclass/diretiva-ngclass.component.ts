import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

feliz: boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.feliz = !this.feliz
  }

  emo(){
    this.feliz = !this.feliz
}

}
