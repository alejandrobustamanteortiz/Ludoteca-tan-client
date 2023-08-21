import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category.service';
import {MatDialog} from '@angular/material/dialog'
import { CategoryEditComponent } from '../category-edit/category-edit.component';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
      this.categoryService.getCategories().subscribe(
        categories => this.dataSource.data = categories
      );
  }

  createCategory(){
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      this.ngOnInit();
    });
  }

  editCategory(category: Category){
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {category: category}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    }); 
  }

}

