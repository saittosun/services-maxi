import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('a server status changed, new status: ' + status);
  }
  constructor() { }
}
