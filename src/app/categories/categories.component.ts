import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: string[] = [];

  addCategory(newCategory: string) {
    if (newCategory && !this.categories.includes(newCategory)) {
      this.categories.push(newCategory);
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
  }

  ngOnInit() {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      this.categories = JSON.parse(savedCategories);
    }
  }
}
