import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //! --i18nSelect--
  public name: string = 'Angel';
  public gender: 'male'| 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Maria';
    this.gender = 'female';
  }

  //! --i18nPlural--
  public clients: string[] = ['Angel', 'Maria', 'Pedro', 'Juan', 'Ana', 'Luis', 'Carlos', 'Fernando', 'Sofia', 'Lucia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deletedClient(): void {
    this.clients.shift();
  }

}
