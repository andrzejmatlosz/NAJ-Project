"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
var core_1 = require("@angular/core");
var about_service_1 = require("./about.service");
var router_1 = require("@angular/router");
var AboutComponent = (function () {
    function AboutComponent(aboutService, activatedRoute) {
        this.aboutService = aboutService;
        this.activatedRoute = activatedRoute;
    }
    AboutComponent.prototype.log = function () { };
    ;
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'myAbout',
        templateUrl: 'app/about/about.component.html',
        styleUrls: ['app/about/about.component.css']
    }),
    __metadata("design:paramtypes", [about_service_1.AboutService,
        router_1.ActivatedRoute])
], AboutComponent);
exports.AboutComponent = AboutComponent;
this.aboutService.getAbout().subscribe(function (open) {
    _this.aboutInfo.name = open.name;
    _this.aboutInfo.hours.monday = open.hours.monday;
    _this.aboutInfo.hours.tuesday = open.hours.tuesday;
    _this.aboutInfo.hours.wednesday = open.hours.wednesday;
    _this.aboutInfo.hours.thursday = open.hours.thursday;
    _this.aboutInfo.hours.friday = open.hours.friday;
    _this.aboutInfo.hours.saturday = open.hours.saturday;
    _this.aboutInfo.hours.sunday = open.hours.sunday;
});
console.log('spr');
console.log(aboutInfo);
//# sourceMappingURL=about.component.js.map