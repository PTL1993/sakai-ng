import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'League Selector',
                items: [
                    { label: 'English Premier Leauge', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'English Championship', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Spanish La Liga', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Italian Serie A', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] }
                ]
            },
            {
                label: 'More Information',
                items: [
                    {
                        label: 'About', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
                    },
                ]
            }
        ];
    }
}
