import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { collection, setDoc, doc, getDocs, getFirestore, getDocFromServer } from "firebase/firestore";
// const db = getFirestore();
@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private db: AngularFirestore) { }

  addDataService(collection, data) {
    return this.db.collection(collection).add(data);
  }

  getDataService() {
    return this.db.collection("TestCollection1").snapshotChanges();
  }
  
}
