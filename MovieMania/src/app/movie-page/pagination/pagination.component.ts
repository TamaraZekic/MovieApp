import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number;
  @Input() pageSizeInput: number;
  @Output() emiterChangePage = new EventEmitter();

  activePage: number;
  pageCount: number;
  pages: number[];

  constructor() { }

  ngOnInit(): void {
    
    this.pageCount = Math.ceil(this.totalItems / this.pageSizeInput);
    this.pages = Array(this.pageCount);
    this.activePage = 1;
  }

  changePage(page){
    this.activePage = page;
    this.emiterChangePage.emit({"page": this.activePage});
    console.log(this.activePage);
    console.log(this.pageCount);
  }

}
