import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    Clicked() {
        this.router.navigate(['../t&c'], { relativeTo: this.activatedRoute })
    }

    Navigation() {
        this.router.navigate(['/navigation'])
    }

}
