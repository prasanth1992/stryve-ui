(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-access-module"],{

/***/ "./src/app/access/access-route.module.ts":
/*!***********************************************!*\
  !*** ./src/app/access/access-route.module.ts ***!
  \***********************************************/
/*! exports provided: AccessRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRouting", function() { return AccessRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/access/login/login.component.ts");


var loginRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
    //  { path: '**', component: PageErrorComponent }
];
var AccessRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(loginRoutes);


/***/ }),

/***/ "./src/app/access/access.module.ts":
/*!*****************************************!*\
  !*** ./src/app/access/access.module.ts ***!
  \*****************************************/
/*! exports provided: AccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessModule", function() { return AccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _access_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-route.module */ "./src/app/access/access-route.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/access/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_access_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/access.services */ "./src/app/core/access.services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccessModule = /** @class */ (function () {
    function AccessModule() {
    }
    AccessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _access_route_module__WEBPACK_IMPORTED_MODULE_1__["AccessRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            ],
            providers: [_core_access_services__WEBPACK_IMPORTED_MODULE_4__["AccessServices"]],
            exports: []
        })
    ], AccessModule);
    return AccessModule;
}());



/***/ }),

/***/ "./src/app/access/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/access/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.chat-body {\n  height: 100%;\n  margin: 0;\n}\n\n.topDiv{\nheight:15%;\nposition: relative;\nbackground-color: #3B5998 ;\n\n}\n\n.full-height {\n  position: relative;\n  height: 75%;\n  background-color: #3B5998 ;\n  overflow-y:scroll\n}\n\n.bellowDiv{\n  position: relative;\n  height:10%;\n  background-color: #3B5998 ;\n\n}"

/***/ }),

/***/ "./src/app/access/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/access/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-body\">\n<div class=\"topDiv text-center\" #chatheader>\n  <img style=\"width: 25%;\" src=\"https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-aging-neuroscience.png\"\n  />\n</div>\n<div #chatmessages class=\"full-height\">\n  <!-- <p class=\"message received\" *ngFor=\"let items of str\">{{items.text}}</p> -->\n  <!-- <p class=\"message sent\" *ngFor=\"let item of items\">{{item}}</p> -->\n  <div #messages *ngFor=\"let outputtext of TotalMessages; let last = last\">\n    <p class=\"message received\" *ngIf=\"outputtext.location==undefind\">{{outputtext.text}}</p>\n    <p class=\"message sent\" *ngIf=\"outputtext.location\">{{outputtext.text}}</p>\n    <span class=\"text-center\" style=\"display: -webkit-inline-box;\"   *ngIf=\"outputtext.text.indexOf('Let’s head on over to Discover and start our first Journey')>-1\">\n      <img style=\"width: 10%;\" (click)=\"imageRoute()\" \n      src=\"https://image.ibb.co/heFT89/217a68f197094258ffdfcd34c9882e15.png\" /></span>\n    \n  </div>\n\n  </div>\n\n\n    <div class=\"bellowDiv text-center\"  #chatfooter>\n   <textarea style=\"margin-bottom: 0;\n   height: 100%;\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"></textarea>\n    </div>\n    </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/access/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/access/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_UserServices, elementRef, router) {
        this._UserServices = _UserServices;
        this.elementRef = elementRef;
        this.router = router;
        this.showContent = false;
        this.items = [];
        this.showRocket = false;
        this.hideInput = true;
        this.TotalMessages = [];
        this.NextTotalMessages = [];
        this.bindingVar = '';
        this.sentmessage = '';
    }
    LoginComponent.prototype.fadeIn = function () {
        this.bindingVar = 'fadeIn';
    };
    LoginComponent.prototype.fadeOut = function () {
        this.bindingVar = 'fadeOut';
    };
    LoginComponent.prototype.toggle = function () {
        this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
    };
    // @HostListener('window:resize', ['$event'])
    //     onResize(event?) {
    //       this.screenHeight = window.innerHeight;
    //       console.log("screen height fisrt",this.screenHeight);
    //       this.viewHeight = this.elementView.nativeElement.offsetHeight;
    //       console.log("chatheader",this.viewHeight);
    //       this.chatviewHeight = this.elementView.nativeElement.offsetHeight;
    //       console.log("chatfooter",this.chatviewHeight);
    //       this.chatheight=this.viewHeight + this.chatviewHeight;
    //       console.log(this.chatheight);
    //       this.chatheight= this.screenHeight - this.chatheight;
    //       console.log("chat height",this.chatheight);
    //       let chatheight= this.chatheight;
    //         return chatheight;
    //     }
    LoginComponent.prototype.ngOnInit = function () {
        this.getText();
        this.getScreenHeight();
        this.scrollToBottom();
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    LoginComponent.prototype.scrollToBottom = function () {
        try {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    LoginComponent.prototype.getScreenHeight = function (event) {
        this.mobHeight = (window.screen.height);
        console.log(this.mobHeight);
        this.viewHeightHeader = this.elementView.nativeElement.offsetHeight;
        console.log("chatheader", this.viewHeightHeader);
        this.chatviewHeightFooter = this.elementViewFooter.nativeElement.offsetHeight;
        console.log("chatfooter", this.chatviewHeightFooter);
        this.chatheight = this.viewHeightHeader + this.chatviewHeightFooter;
        console.log(this.chatheight);
        this.chatheight = this.mobHeight - this.chatheight;
        console.log(this.chatheight);
        var chatheight = this.chatheight;
        return chatheight;
    };
    LoginComponent.prototype.imageRoute = function () {
        console.log("image Route");
        this.router.navigate(['../dashboard']);
    };
    LoginComponent.prototype.getText = function () {
        var _this = this;
        this._UserServices.getText(_models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]).subscribe(function (data) {
            setTimeout(function () { _this.str = data; }, 4000);
            _this.TotalMessages = _this.TotalMessages.concat(data);
            // for(var i=0;i<=data.length;i++){
            //   this.str = data[i].text;
            // }
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.items.push(this.sentmessage);
        console.log(this.items);
        this.TotalMessages.push({ "text": this.sentmessage, "location": "local" });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('params', this.sentmessage);
        console.log(params.toString());
        var dataParams = params.toString();
        console.log("dataparams", dataParams);
        this.sentmessage = "";
        this._UserServices.InputText(dataParams).subscribe(function (data) {
            console.log(data, "recived data .....");
            _this.outputText = data;
            console.log("checkingText", _this.outputText);
            var imageFind = false;
            for (var i = 0; i < data.length; i++) {
                //this.TotalMessages[i];
                if (data[i]['text'] == 'Let’s head on over to Discover and start our first Journey') {
                    console.log("true");
                    _this.TotalMessages.push(data[i]);
                    imageFind = true;
                    //  this.showRocket = true;
                    //this.hideInput = false;
                }
                if (imageFind == false) {
                    _this.TotalMessages.push(data[i]);
                }
                else {
                    if (data[i]['text'] != 'Let’s head on over to Discover and start our first Journey') {
                        _this.NextTotalMessages.push(data[i]);
                    }
                    console.log("NextMessages", _this.NextTotalMessages);
                }
            }
            //this.TotalMessages = this.TotalMessages.concat(data);
            //    for (let i = 0; i < data.length; i++) {
            //     let text = this.outputText[i].text;
            // console.log("********* start *******");
            // console.log(text);
            // console.log("********* end *******");
            // }
            // for(var i=0;i<=data.length;i++){
            //   this.str = data[i].text;
            // }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatheader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatfooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "elementViewFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "getScreenHeight", null);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login-page",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/access/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/access/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_core_user_services__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=access-access-module.js.map