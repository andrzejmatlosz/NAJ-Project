import { Component, OnInit } from '@angular/core';
import { AboutInfo } from './about.model';
import { AboutService } from './about.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'myAbout',
    templateUrl: 'app/about/about.component.html',
    styleUrls: [ 'app/about/about.component.css' ]
})
export class AboutComponent implements OnInit {
    public aboutInfo: AboutInfo;
    constructor(private aboutService: AboutService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit (): {
        console.log('spr1');
        this.aboutService.getAbout().subscribe(
                open => {this.aboutInfo.name = open.name;
                        this.aboutInfo.hours.monday = open.hours.monday;
                        this.aboutInfo.hours.tuesday = open.hours.tuesday;
                        this.aboutInfo.hours.wednesday = open.hours.wednesday;
                        this.aboutInfo.hours.thursday = open.hours.thursday;
                        this.aboutInfo.hours.friday = open.hours.friday;
                        this.aboutInfo.hours.saturday = open.hours.saturday;
                        this.aboutInfo.hours.sunday = open.hours.sunday;
                });
        console.log('spr');
        console.log(aboutInfo);
    }
}
