import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(){}

  ngOnInit(): void {
      
  }

}

