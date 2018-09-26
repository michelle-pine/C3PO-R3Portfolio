import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoModalServiceService {
  public text:string = "";
  public title:string = "";
  public show:boolean = false;
  constructor() { }
}
