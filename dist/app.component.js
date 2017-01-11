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
var core_1 = require('@angular/core');
var clientservice_1 = require('./clientservice');
var MyComponent = (function () {
    function MyComponent(_Service) {
        this._Service = _Service;
    }
    MyComponent.prototype.ngOnInit = function () {
        // this._Service.getdata().subscribe(
        //                    data => this.data = data.data)
    };
    MyComponent.prototype.add = function (name, lastname) {
        var _this = this;
        if (!name) {
            return;
        }
        this._Service.add(name, lastname)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return _this.error = error; });
    };
    MyComponent.prototype.get = function () {
        var _this = this;
        this._Service.getdata().subscribe(function (token) {
            console.log(token);
            _this.token = token;
        });
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n<ul *ngFor=\"let token of token\">\n \n<li>\nName:{{token.value.name|uppercase}}<br>\nLastname:{{token.value.lastname|lowercase}}\n<br>\n<button >Del</button>\n</li>\n</ul>\n<button type=\"submit\" (click)=\"get()\">GET</button>\n \n  <label>Name: <input #name /></label>\n  <label>lastname: <input #lastname /></label>\n<button (click)=\"add(name.value,lastname.value); \">Add</button>\n \n  \n  ",
            providers: [clientservice_1.ClientService]
        }), 
        __metadata('design:paramtypes', [clientservice_1.ClientService])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=app.component.js.map