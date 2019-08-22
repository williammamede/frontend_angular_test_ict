import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from './api.service';
import { Data } from './data';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'val1', 'val2'];
  data: Data[] = [];
  title = 'ICT Lab Test';

  constructor(private apiService: ApiService, private spinnerService: SpinnerService) {
   }
  ngAfterViewInit() {
    this.updateData();
  }

  updateData() {
    this.apiService.readData().subscribe((data: Data[]) => {
      this.data = data;
    });
  }

  myClick() {
    this.updateData();
  }
}
