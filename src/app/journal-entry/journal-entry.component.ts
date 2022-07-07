import { Component, OnInit } from '@angular/core';
import { EntryDetails } from '../entry-details';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})

export class JournalEntryComponent implements OnInit {
entry: EntryDetails = {
  id: 1,
  title: 'Today is a good day!',
  post: 'we are keeping it short and sweet!' 
};

  constructor() { }

  ngOnInit(): void {
  }

}
