import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Luke', 'Kevin', 'Sofia', 'Natalia'];
  public clientsMap = {
    '=0': 'clientes esperando.',
    '=1': 'cliente esperando.',
    '=2': 'clientes esperando.',
    'other': ' clientes esperando.'
  }

  eliminarCliente(): void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Luke',
    age: 46,
    address: 'Tatooine'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)
    )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })

}
