import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-configure-new-dashboard',
    templateUrl: './configure-new-dashboard.component.html',
    styleUrls: ['./configure-new-dashboard.component.scss']
})
export class ConfigureNewDashboardComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    previewDashboard() {
        this.router.navigate(['/navigation'])
    }

}
