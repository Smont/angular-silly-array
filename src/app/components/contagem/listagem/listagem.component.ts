import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listagem",

  templateUrl: "./listagem.component.html",
  styleUrls: ["./listagem.component.scss"]
})
export class ListagemComponent implements OnInit {
  contatos = [
    {
      id: "00",
      username: "patricia44",
      name: "Dr. Angela Brown",
      address: "2129 Joel Rapids\nLisahaven, NE 08609",
      birthdate: {
        $date: { $numberLong: "235600552000" }
      },
      email: "michaelespinoza@gmail.com"
    },
    {
      id: "01",
      username: "portermichael",
      name: "Lauren Clark",
      address: "1579 Young Trail\nJessechester, OH 88328",
      birthdate: {
        $date: {
          $numberLong: "341598359000"
        }
      },
      email: "briannafrost@yahoo.com"
    },
    {
      id: "02",
      username: "james75",
      name: "Christopher Gomez",
      address: "7322 Owens Inlet Apt. 688\nPort Leslie, OR 81893",
      birthdate: { $date: { $numberLong: "156860840000" } },
      email: "omolina@gmail.com"
    }
  ];

  ngOnInit(): void {}
}
