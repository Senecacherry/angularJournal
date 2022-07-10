import { Component, OnInit } from '@angular/core';
import { EntryDetails } from '../entry-details';
import { mockENTRIES } from '../mock-entries';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})

export class JournalEntryComponent implements OnInit {
//set mock entries array to variable
entry = mockENTRIES;

selectedEntry?: EntryDetails;

onSelect(entry: EntryDetails): void {
this.selectedEntry = entry;
}

  constructor() { }

  ngOnInit(): void {
  }

}
