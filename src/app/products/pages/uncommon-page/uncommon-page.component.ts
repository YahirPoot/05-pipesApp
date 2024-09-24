import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

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

  //! --keyvalue pipe--
  public person = {
    name: 'Angel',
    age: 21,
    address: 'Timucuy, Yucatan, Mexico'
  }

  //! --async pipe--

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value  => console.log('Timer', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Yahirx  x ';
    }, 3500);
  })

}
