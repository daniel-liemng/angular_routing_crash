import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular_routing';

  constructor(private router: Router) {}

  ngOnInit() {
    const obsTest$ = new Observable((observer) => {
      observer.next('RETURN FROM OBSERVABLE - 1');
      observer.next('RETURN FROM OBSERVABLE - 2');

      setTimeout(() => {
        observer.next('RETURN FROM OBSERVABLE - 288888');
      }, 5000);

      observer.next('RETURN FROM OBSERVABLE - 3');
    }).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    // this.router.navigate(['posts']);
    // this.router.navigate(['posts', 10, 'New']);
    this.router.navigate(['posts'], { queryParams: { isEdit: true } });
  }
}
