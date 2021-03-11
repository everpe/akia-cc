import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit 
{
  public categories: Category[] = [];

  public noticeData = {
    title: '',
    description: '',
    imagen: '',
    category_id: 0
  };
  
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void 
  {
    this.categoryService.listAllCategories().subscribe((data: any) => {
      this.categories = data.categories;
      console.log(data);
    });
  }

}
