import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase-service.service';

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.page.html',
  styleUrls: ['./data-process.page.scss'],
})
export class DataProcessPage implements OnInit {

  constructor(private fs: FirebaseServiceService) { }

  ngOnInit() {
  }

  testClick() {
    console.log("test button clicked");
    const data = {
      first: "name",
      star: 2,
      testThird: "third"
    }
    this.fs.addDataService("NewCollection", data);
  }

  
}
