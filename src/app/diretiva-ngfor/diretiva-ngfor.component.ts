import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  Jojo = ["Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo",
  "Josuke Higashikata","Giorno Giovanna", "Jolyne Cujoh", "Johnny Joestar"];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < this.Jojo.length; i ++){
      let stand = this.Jojo[i];
    }
  }

}
