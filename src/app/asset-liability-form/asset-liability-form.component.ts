import { Component } from '@angular/core';

@Component({
  selector: 'app-asset-liability-form',
  templateUrl: './asset-liability-form.component.html',
  styleUrls: ['./asset-liability-form.component.css']
})
export class AssetLiabilityFormComponent {
  items: any[] = [];
  categories: string[] = [];

  newItem = {
    title: '',
    category: '',
    value: '',
    color: '#f44336',
    type: 'liability'
  };

  ngOnInit() {
    const savedCategories = localStorage.getItem('categories');
    const savedItems = localStorage.getItem('items');
    
    if (savedCategories) {
      this.categories = JSON.parse(savedCategories);
    }
    
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  addItem() {
    if (this.newItem.title && this.newItem.category && this.newItem.value) {
      this.items.push({ ...this.newItem });
      localStorage.setItem('items', JSON.stringify(this.items));
      this.newItem = { title: '', category: '', value: '', color: '#f44336', type: 'liability' };
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
