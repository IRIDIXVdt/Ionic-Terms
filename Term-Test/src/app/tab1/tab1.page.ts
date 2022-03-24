import { Component } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loadedData: any;

  constructor(private fs: FirebaseServiceService) {
    this.loadTestData();
  }
  loadTestData() {
    const dataloadingSubrscription = this.fs.getDataService().subscribe((res) => {
      this.loadedData = res.map(
        e => {
          return {
            id: e.payload.doc.id,
            age: e.payload.doc.data()['Age'],
            gender: e.payload.doc.data()['Gender'],
          }
        })
        console.log('e loaded!', this.loadedData);
        dataloadingSubrscription.unsubscribe();
    })
  }

 
}










// 


