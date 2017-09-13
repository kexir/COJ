var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export var InputService = (function () {
    function InputService() {
        this.inputSubjects$ = new BehaviorSubject('');
    }
    InputService.prototype.changeInput = function (term) {
        this.inputSubjects$.next(term);
    };
    InputService.prototype.getInput = function () {
        return this.inputSubjects$.asObservable();
    };
    InputService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], InputService);
    return InputService;
}());
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/services/input.service.js.map