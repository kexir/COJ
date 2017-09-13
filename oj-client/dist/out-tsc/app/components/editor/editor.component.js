var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export var EditorComponent = (function () {
    function EditorComponent(collaboration, route, data) {
        this.collaboration = collaboration;
        this.route = route;
        this.data = data;
        this.languages = ['Java', 'C++', 'Python'];
        this.language = 'Java'; //default
        this.defaultContent = {
            'Java': "public class Example {\n      public static void main(String[] args) {\n          // Type your Java code here\n      }\n}",
            'C++': "#include <iostream>\nusing namespace std;\n    \u200B\nint main() {\n    // Type your C++ code here\n    return 0;\n}",
            'Python': "class Solution:\n        def example():\n            # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.Change(JSON.stringify(e));
            }
        });
        this.editor.getSession().getSelection().on("changeCursor", function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('cursor move ' + JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        this.collaboration.restoreBuffer();
    };
    //event socket.io collaborate
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode('ace/mode/' + this.language.toLocaleLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCode = this.editor.getValue();
        var data = {
            user_code: userCode,
            lang: this.language.toLowerCase()
        };
        console.log(data.user_code);
        console.log(data.lang);
        this.data.buildAndRun(data)
            .then(function (res) { _this.output = res.text; });
    };
    EditorComponent = __decorate([
        Component({
            selector: 'app-editor',
            templateUrl: './editor.component.html',
            styleUrls: ['./editor.component.css']
        }),
        __param(0, Inject('collaboration')),
        __param(2, Inject('data')), 
        __metadata('design:paramtypes', [Object, ActivatedRoute, Object])
    ], EditorComponent);
    return EditorComponent;
}());
//# sourceMappingURL=/Users/lyuqi/Downloads/BitTiger/week-by-week/test/oj-client/src/app/components/editor/editor.component.js.map