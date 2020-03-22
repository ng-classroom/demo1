import { Component } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  body: string;

  constructor(private apiService: ApiService) {
    this.apiService.getPosts(1).subscribe(
      (res: any) => {
        this.title = res.title;
        this.body = res.body;
      }
    );
  }

}
