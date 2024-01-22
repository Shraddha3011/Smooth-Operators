import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedItemsSubject = new BehaviorSubject<string[]>([]);
  selectedItems$ = this.selectedItemsSubject.asObservable();

  addItemToAccordion(item: string) {
    const currentItems = this.selectedItemsSubject.value;
    this.selectedItemsSubject.next([...currentItems, item]);
  }
}
