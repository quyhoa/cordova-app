import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-scans',
  templateUrl: './scans.component.html',
  styleUrls: ['./scans.component.css']
})
export class ScansComponent implements OnInit {

  constructor(protected localStorage: LocalStorage) {
  }

  ngOnInit() {
      localStorage.setItem("username", "John");
      if(localStorage.getItem("LocalData") == "undefined" || localStorage.getItem("LocalData") == null){
          localStorage.setItem("LocalData", JSON.stringify([]));
      }
  }

  scan():void{
   //  cordova.plugins.barcodeScanner.scan(
   //      function (result) {
   //          if(!result.cancelled)
   //          {
   //              if(result.format == "QR_CODE")
   //              {
   //                  navigator.notification.prompt("Please enter name of data",  function(input){
   //                      var name = input.input1;
   //                      var value = result.text;
   //                      var data = localStorage.getItem("LocalData");
   //                      console.log(data);
   //                      data = JSON.parse(data);
   //                      data[data.length] = [name, value];
   //                      localStorage.setItem("LocalData", JSON.stringify(data));
   //                      alert("Done");
   //                  });
   //              }
   //          }
   //      },
   //      function (error) {
   //          alert("Scanning failed: " + error);
   //      }
   // );
  }
}
