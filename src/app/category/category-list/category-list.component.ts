import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private categoryService: CategoryService
  ){}

  ngOnInit(): void {
      this.categoryService.getCategories().subscribe(
        categories => this.dataSource.data = categories
      );
  }

}

