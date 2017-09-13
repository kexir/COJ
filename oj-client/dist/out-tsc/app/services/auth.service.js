// app/auth.service.ts
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
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export var Auth = (function () {
    function Auth(http) {
        this.http = http;
        // Configure Auth0
        this.clientId = 'dR9rcJP13IQQHVF1OVDCDwqM42Id25bZ';
        this.domain = 'bittiger503kexir.auth0.com';
        this.lock = new Auth0Lock(this.clientId, this.domain, {});
    }
    Auth.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Call the show method to display the widget.
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    Auth.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    Auth.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = "https://" + this.domain + "/dbconnections/change_password";
        var headers = new Headers({ 'content-type': 'application/json' });
        var body = {
            client_id: this.clientId,
            email: profile.email,
            connection: 'Username-Password-Authentication',
            json: true
        };
        this.http.post(url, body, headers)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    Auth.prototype.handleError = function (error) {
        console.log("error occurred", error);
        return Promise.reject(error.message || error);
    };
    Auth = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], Auth);
    return Auth;
}());
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/services/auth.service.js.map