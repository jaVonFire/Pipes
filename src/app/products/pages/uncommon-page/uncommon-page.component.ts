import { Component } from '@angular/core';
import { interval, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Javier';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural & Slice
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Javier','Eduardo','Melissa','Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue & JSON

  public person = {
    name: 'Javier',
    age: 17,
    address: 'Satander, Girón'
  }

  // Async Pipe
  public mySObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
    )

  public promiseValue: Promise<string> = new Promise( (resolve,rej)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
  })

}
