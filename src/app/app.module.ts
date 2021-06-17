import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListagemComponent } from "./components/contagem/listagem/listagem.component";

@NgModule({
  declarations: [AppComponent, ListagemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
