import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientDetails=[
    {
      clientId:10,firstname:"kotasai",lastname:'sai'
    },
    {
      clientId:11,firstname:"nagendra",lastname:'nag'
    },
    {
      clientId:12,firstname:"mavullingam",lastname:'mavullu'
    },
    {
      clientId:13,firstname:"peddintlamma",lastname:'peddi'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
