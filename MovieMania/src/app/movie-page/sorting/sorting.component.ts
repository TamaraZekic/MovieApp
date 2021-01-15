import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  @Input() sortDirectionInput: string;
  @Output() changeSortValueEmiter = new EventEmitter();
  sortingValue: string;
 

  constructor() { }

  ngOnInit(): void {
  }

  changeSort(){
    this.changeSortValueEmiter.emit({"sort" : this.sortingValue, "page": 1});

  }

  changeSortDirection(){
    if(this.sortDirectionInput=="asc"){
      this.changeSortValueEmiter.emit({"sortDirection" : "desc", "page": 1});
    }
    else{
      this.changeSortValueEmiter.emit({"sortDirection" : "asc", "page": 1});
    }
  }

}
