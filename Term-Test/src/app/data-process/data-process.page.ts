import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase-service.service';
import { randomTermData } from '../../assets/sharedData/randomData';
@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.page.html',
  styleUrls: ['./data-process.page.scss'],
})
export class DataProcessPage implements OnInit {
  termData: any;
  constructor(private fs: FirebaseServiceService) {
    this.termData = randomTermData;
    console.log(this.termData);
  }

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
