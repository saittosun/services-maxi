import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);
  }


  ngOnInit(): void {
  }

}
