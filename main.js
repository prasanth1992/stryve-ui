(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access/access.module": [
		"./src/app/access/access.module.ts",
		"access-access-module"
	],
	"./module/dashboard.module": [
		"./src/app/module/dashboard.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_screen_pageError_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-screen/pageError.component */ "./src/app/error-screen/pageError.component.ts");


// import { ImageUploaderComponent } from './modules/dashboard/imageuploader/imageuploader.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
var appRoutes = [
    //{ path:'dashboard', component:DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'access', loadChildren: "./access/access.module#AccessModule" },
    { path: 'dashboard', loadChildren: './module/dashboard.module#dashboardModule' },
    { path: '**', component: _error_screen_pageError_component__WEBPACK_IMPORTED_MODULE_1__["PageErrorComponent"] }
];
/*@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting{

}*/
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });
//export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { fadeAnimation } from './module/fadeAnimations.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _module_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/dashboard.module */ "./src/app/module/dashboard.module.ts");
/* harmony import */ var _app_error_screen_pageError_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/error-screen/pageError.component */ "./src/app/error-screen/pageError.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _request_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request.interceptor */ "./src/app/request.interceptor.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import {Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService} from "ng4-loading-spinner";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_error_screen_pageError_component__WEBPACK_IMPORTED_MODULE_6__["PageErrorComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                // AccessModuleInput,
                _module_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["dashboardModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                // Ng4LoadingSpinnerModule.forRoot(),
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRouting"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production }),
            ],
            providers: [_config_app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"], _http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _request_interceptor__WEBPACK_IMPORTED_MODULE_11__["RequestInterceptor"], multi: true }, _models_UserData__WEBPACK_IMPORTED_MODULE_13__["UserData"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfigService = /** @class */ (function () {
    function AppConfigService() {
        //staginghttp://localhost
        //apiEndpoint:string="http://185.6.181.138/HG";
        //apiEndpoint:string="http://stryve.com";
        this.apiEndpoint = "https://stryves.000webhostapp.com";
        // apiEndpoint:string="http://localhost/RetailerApp/retailer-app/index.php";
        // apiVersion:string="v1";
        // baseIP:string="";
        // urlReferrer:string="localhost:4200"
        // accessToken="5d44cf02-c00a-4b22-9f0e-0bcaf4b684b9";
        /*  production  */
        //apiEndpoint:string="";
        //baseIP:string="";
    }
    AppConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppConfigService);
    return AppConfigService;
}());



/***/ }),

/***/ "./src/app/core/access.services.ts":
/*!*****************************************!*\
  !*** ./src/app/core/access.services.ts ***!
  \*****************************************/
/*! exports provided: AccessServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessServices", function() { return AccessServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessServices = /** @class */ (function () {
    function AccessServices(_http, _appConfig) {
        this._http = _http;
        this._appConfig = _appConfig;
        this.pageApi = "/LoginController";
    }
    AccessServices.prototype.getLogin = function (data) {
        var url = this.pageApi + "/login";
        return this._http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._http.handleError));
    };
    AccessServices.prototype.setLogout = function (data) {
        var url = this.pageApi + "/signout";
        return this._http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._http.handleError));
    };
    AccessServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]])
    ], AccessServices);
    return AccessServices;
}());



/***/ }),

/***/ "./src/app/core/user.services.ts":
/*!***************************************!*\
  !*** ./src/app/core/user.services.ts ***!
  \***************************************/
/*! exports provided: UserServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServices", function() { return UserServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserServices = /** @class */ (function () {
    function UserServices(http, appConfig, userdata) {
        this.http = http;
        this.appConfig = appConfig;
        this.userdata = userdata;
        this.pageApi = "/stryve/stryve";
    }
    //image path
    // imagepath(data:any){
    //     const url: string = `${this.pageApi}/imagepath`;
    //     return this.http.post<any>(url,data).pipe(catchError(this.http.handleError));
    // }
    UserServices.prototype.getText = function (data) {
        //http://54.209.224.4/stryve/StryveDialogflow.php?params=hi
        var url = this.pageApi + "/StryveDialogflow.php?params=stryve";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.http.handleError));
    };
    UserServices.prototype.InputText = function (data) {
        //http://54.209.224.4/stryve/StryveDialogflow.php?params=hi
        var url = this.pageApi + "/StryveDialogflow.php?" + data;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.http.handleError));
    };
    UserServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"],
            _models_UserData__WEBPACK_IMPORTED_MODULE_1__["UserData"]])
    ], UserServices);
    return UserServices;
}());



/***/ }),

/***/ "./src/app/error-screen/pageError.component.html":
/*!*******************************************************!*\
  !*** ./src/app/error-screen/pageError.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>404 Error!</h1>\n</div>"

/***/ }),

/***/ "./src/app/error-screen/pageError.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/error-screen/pageError.component.ts ***!
  \*****************************************************/
/*! exports provided: PageErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageErrorComponent", function() { return PageErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageErrorComponent = /** @class */ (function () {
    function PageErrorComponent() {
    }
    PageErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-error',
            template: __webpack_require__(/*! ./pageError.component.html */ "./src/app/error-screen/pageError.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageErrorComponent);
    return PageErrorComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpError } from './shared/models/httpError';
//import sessionStorage from './shared/session-storage';

//import { ToastsManager } from 'ng2-toastr';

var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(handler, 
    //private _toaster: ToastsManager,
    _appConfig) {
        var _this = _super.call(this, handler) || this;
        _this._appConfig = _appConfig;
        return _this;
    }
    HttpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"],
            _config_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]])
    ], HttpService);
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/models/UserData.ts":
/*!************************************!*\
  !*** ./src/app/models/UserData.ts ***!
  \************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserData = /** @class */ (function () {
    function UserData() {
    }
    UserData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserData);
    return UserData;
}());



/***/ }),

/***/ "./src/app/module/chatpage/Chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/module/chatpage/Chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.chat-body {\n  height: 100%;\n  margin: 0;\n}\n\n.app-BG{\n  height: 100%;\n  width: 100%;\n}\n\n.topDiv{\nheight:15%;\nposition: relative;\nbackground-color: #3B5998 ;\nz-index: 100;\n\n}\n\n.full-height {\n  position: relative;\n  height: 77%;\n  background-color: #3B5998 ;\n  overflow-y:scroll;\n  width:100%;\n}\n\n.bellowDiv{\n  position: relative;\n  height:8%;\n  background-color: #3B5998 ;\n\n}"

/***/ }),

/***/ "./src/app/module/chatpage/Chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/module/chatpage/Chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-body\">\n<div class=\"topDiv text-center\" #chatheader>\n  <img class=\"image\" src=\"https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-aging-neuroscience.png\"\n  />\n</div>\n<div #chatmessages class=\"full-height\"  [@listAnimation]=\"TotalMessages.length\">\n  <!-- <p class=\"message received\" *ngFor=\"let items of str\">{{items.text}}</p> -->\n  <!-- <p class=\"message sent\" *ngFor=\"let item of items\">{{item}}</p> -->\n  <div #messages *ngFor=\"let outputtext of TotalMessages; let last = last\">\n    <p class=\"message received\" *ngIf=\"outputtext.location==undefind\">{{outputtext.text}}</p>\n    <p class=\"message sent\" *ngIf=\"outputtext.location\">{{outputtext.text}}</p>\n\n    \n  </div>\n\n  </div>\n\n    <div class=\"bellowDiv text-center\" #chatfooter>\n\n        <span class=\"text-center\" style=\"display: -webkit-inline-box;\"  *ngIf=\"imageFind\">\n            <img class=\"rocket\" (click)=\"imageRoute()\" \n            src=\"https://image.ibb.co/heFT89/217a68f197094258ffdfcd34c9882e15.png\" /></span>\n             <!-- <input *ngIf=\"hideInput\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"> -->\n             <textarea *ngIf=\"hideInput\" style=\"margin-bottom: 0;\n             height: 100%;\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"></textarea>\n             \n            </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/module/chatpage/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/chatpage/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatComponent = /** @class */ (function () {
    function ChatComponent(_UserServices, elementRef, router, _userData) {
        this._UserServices = _UserServices;
        this.elementRef = elementRef;
        this.router = router;
        this._userData = _userData;
        this.showContent = false;
        this.items = [];
        this.showRocket = false;
        this.hideInput = true;
        this.TotalMessages = [];
        this.NextTotalMessages = [];
        this.bindingVar = '';
        this.imageFind = false;
        this.sentmessage = '';
    }
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
    ChatComponent.prototype.ngOnInit = function () {
        this.getText();
        this.getScreenHeight();
        this.scrollToBottom();
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.getScreenHeight = function (event) {
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
    ChatComponent.prototype.imageRoute = function () {
        console.log("image Route");
        this._userData.nextChat = this.NextTotalMessages;
        this.router.navigate(['../dashboard/home']);
    };
    ChatComponent.prototype.getText = function () {
        var _this = this;
        this._UserServices.getText(_models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]).subscribe(function (data) {
            _this.TotalMessages = _this.TotalMessages.concat(data);
            // for(var i=0;i<=data.length;i++){
            //   this.str = data[i].text;
            // }
        });
    };
    ChatComponent.prototype.submit = function () {
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
        this.hideInput = false;
        this._UserServices.InputText(dataParams).subscribe(function (data) {
            console.log(data, "recived data .....");
            _this.outputText = data;
            console.log("checkingText", _this.outputText);
            _this.hideInput = true;
            for (var i = 0; i < data.length; i++) {
                //this.TotalMessages[i];
                if (data[i]['text'] == 'Let’s head on over to Discover and start our first Journey') {
                    console.log("true");
                    _this.TotalMessages.push(data[i]);
                    _this.imageFind = true;
                    //  this.showRocket = true;
                    _this.hideInput = false;
                }
                if (_this.imageFind == false) {
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
    ], ChatComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatfooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "elementViewFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "getScreenHeight", null);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "chat-page",
            template: __webpack_require__(/*! ./Chat.component.html */ "./src/app/module/chatpage/Chat.component.html"),
            styles: [__webpack_require__(/*! ./Chat.component.css */ "./src/app/module/chatpage/Chat.component.css")],
            animations: [
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('listAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('800ms', [
                            Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_user_services__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/module/conversation/conversation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/module/conversation/conversation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.chat-body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.app-BG{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.topDiv{\r\nheight:15%;\r\nposition: relative;\r\nbackground-color: #3B5998 ;\r\nz-index: 100;\r\n\r\n}\r\n\r\n.full-height {\r\n  position: relative;\r\n  height: 77%;\r\n  background-color: #3B5998 ;\r\n  overflow-y:scroll;\r\n  width:100%;\r\n}\r\n\r\n.bellowDiv{\r\n  position: relative;\r\n  height:8%;\r\n  background-color: #3B5998 ;\r\n\r\n}\r\n\r\n.emoji{\r\n  padding: 0 0 0 20%;\r\n}\r\n\r\n.rangebar{\r\n  padding-top: 2%;\r\n}\r\n\r\n/*seekbar css*/\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 80%;\r\n  height: 15px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  background: #4CAF50;\r\n  cursor: pointer;\r\n}\r\n\r\n/* end of seekbar css*/"

/***/ }),

/***/ "./src/app/module/conversation/conversation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/module/conversation/conversation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-body\">\n  <div class=\"topDiv text-center\" #chatheader>\n    <img class=\"image\" src=\"https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-aging-neuroscience.png\"\n    />\n  </div>\n  <div #chatmessages class=\"full-height\"  [@listAnimation]=\"ConversationTotalMessages.length\">\n     <div class=\"rangebar\">\n        <input type=\"range\" min=\"1\" max=\"4\" class=\"slider\" >\n     </div>\n     <div class=\"row col-md-12\">\n       \n        <div class=\"col\"><i class=\"em em-anguished\"></i></div>\n        <div class=\"col\"><i class=\"em em-confused\"></i></div>\n        <div class=\"col\"><i class=\"em em-astonished\"></i></div>\n        <div class=\"col\"><i class=\"em em-smiley\"></i></div>\n      </div>\n    \n    <!-- <p class=\"message received\" *ngFor=\"let items of str\">{{items.text}}</p> -->\n    <!-- <p class=\"message sent\" *ngFor=\"let item of items\">{{item}}</p> -->\n    <div #messages *ngFor=\"let outputtext of ConversationTotalMessages; let last = last\">\n      <p class=\"message received\" *ngIf=\"outputtext.location==undefind\">{{outputtext.text}}</p>\n      <p class=\"message sent\" *ngIf=\"outputtext.location\">{{outputtext.text}}</p>\n  \n      \n    </div>\n  \n    </div>\n  \n      <div class=\"bellowDiv text-center\" #chatfooter>\n  \n          <span class=\"text-center\" style=\"display: -webkit-inline-box;\"  *ngIf=\"imageFind\">\n              <img class=\"rocket\" (click)=\"imageRoute()\" \n              src=\"https://image.ibb.co/heFT89/217a68f197094258ffdfcd34c9882e15.png\" /></span>\n               <!-- <input *ngIf=\"hideInput\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"> -->\n               <textarea *ngIf=\"hideInput\" style=\"margin-bottom: 0;\n               height: 100%;\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"></textarea>\n               \n              </div>\n      </div>\n  "

/***/ }),

/***/ "./src/app/module/conversation/conversation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/module/conversation/conversation.component.ts ***!
  \***************************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(_UserServices, elementRef, router, _userData) {
        this._UserServices = _UserServices;
        this.elementRef = elementRef;
        this.router = router;
        this._userData = _userData;
        this.showContent = false;
        this.items = [];
        this.showRocket = false;
        this.hideInput = true;
        this.TotalMessages = [];
        this.NextTotalMessages = [];
        this.FinalTotalMessages = [];
        this.ConversationTotalMessages = [];
        this.bindingVar = '';
        this.imageFind = false;
        this.sentmessage = '';
    }
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
    ConversationComponent.prototype.ngOnInit = function () {
        // this.getText();
        this.getScreenHeight();
        this.scrollToBottom();
        console.log(this._userData.newScreen, "converstion screen");
        this.ConversationTotalMessages = this._userData.newScreen;
    };
    ConversationComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ConversationComponent.prototype.scrollToBottom = function () {
        try {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ConversationComponent.prototype.getScreenHeight = function (event) {
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
    ConversationComponent.prototype.imageRoute = function () {
        console.log("image Route");
        this._userData.nextChat = this.NextTotalMessages;
        this.router.navigate(['../dashboard/home']);
    };
    ConversationComponent.prototype.submit = function () {
        var _this = this;
        this.items.push(this.sentmessage);
        console.log(this.items);
        this.ConversationTotalMessages.push({ "text": this.sentmessage, "location": "local" });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('params', this.sentmessage);
        console.log(params.toString());
        var dataParams = params.toString();
        console.log("dataparams", dataParams);
        this.sentmessage = "";
        this.hideInput = false;
        this._UserServices.InputText(dataParams).subscribe(function (data) {
            console.log(data, "recived data .....");
            _this.outputText = data;
            console.log("checkingText", _this.outputText);
            _this.hideInput = true;
            // for (var i = 0; i < data.length; i++) {
            //     //this.TotalMessages[i];
            //     if (data[i]['text'] == 'Let’s head on over to Discover and start our first Journey') {
            //         console.log("true");
            //         this.ConversationTotalMessages.push(data[i]);
            //         this.imageFind=true;
            //       //  this.showRocket = true;
            //         this.hideInput = false;
            //     }if(this.imageFind==false){
            //         this.ConversationTotalMessages.push(data[i]);
            //     }else{
            //         if (data[i]['text'] != 'Let’s head on over to Discover and start our first Journey') {
            //         this.ConversationTotalMessages.push(data[i]);
            //         }
            //         console.log("NextMessages",this.NextTotalMessages);
            //     }
            // }
            _this.ConversationTotalMessages = _this.ConversationTotalMessages.concat(data);
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
    ], ConversationComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatfooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConversationComponent.prototype, "elementViewFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConversationComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConversationComponent.prototype, "getScreenHeight", null);
    ConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "conversation-page",
            template: __webpack_require__(/*! ./conversation.component.html */ "./src/app/module/conversation/conversation.component.html"),
            styles: [__webpack_require__(/*! ./conversation.component.css */ "./src/app/module/conversation/conversation.component.css")],
            animations: [
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('listAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('800ms', [
                            Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_user_services__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/module/dashboard-route.ts":
/*!*******************************************!*\
  !*** ./src/app/module/dashboard-route.ts ***!
  \*******************************************/
/*! exports provided: DashboardRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRouting", function() { return DashboardRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/module/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/module/home/home.component.ts");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen/screen.component */ "./src/app/module/screen/screen.component.ts");
/* harmony import */ var _chatpage_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatpage/chat.component */ "./src/app/module/chatpage/chat.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./final/final.component */ "./src/app/module/final/final.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation/conversation.component */ "./src/app/module/conversation/conversation.component.ts");







var dashboardRoutes = [
    {
        path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        children: [
            {
                path: '',
                redirectTo: 'chat',
                pathMatch: 'full'
            }, {
                path: 'chat',
                component: _chatpage_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'screen',
                component: _screen_screen_component__WEBPACK_IMPORTED_MODULE_3__["ScreenComponent"]
            },
            {
                path: 'final',
                component: _final_final_component__WEBPACK_IMPORTED_MODULE_5__["FinalComponent"]
            },
            {
                path: 'conversation',
                component: _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_6__["ConversationComponent"]
            },
        ]
    }
];
var DashboardRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(dashboardRoutes);
//export const routingComponents = [StorelistComponent,ManagingUsersComponent,ManageRolesComponent];
/*
@NgModule({
    declarations: [
        DashboardComponent,
        chainlistComponent
    ],

    imports: [
        RouterModule.forChild(dashboardRoutes),
        
    ],
    providers: [],
    bootstrap: []
})

export class DashboardModule {
    
}*/ 


/***/ }),

/***/ "./src/app/module/dashboard.component.html":
/*!*************************************************!*\
  !*** ./src/app/module/dashboard.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div style=\"width: 100%;height: 100%;\" id=\"content\" class=\"app-BG\">\n        <router-outlet ></router-outlet>\n    </div>\n"

/***/ }),

/***/ "./src/app/module/dashboard.component.ts":
/*!***********************************************!*\
  !*** ./src/app/module/dashboard.component.ts ***!
  \***********************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_access_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/access.services */ "./src/app/core/access.services.ts");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { fadeAnimation } from "./fadeAnimations.component";
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, _accessService, _userData) {
        this.router = router;
        this._accessService = _accessService;
        this._userData = _userData;
        this.status = false;
    }
    DashboardComponent.prototype.addClass = function () {
        console.log("active addded");
        this.status = !this.status;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/module/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_access_services__WEBPACK_IMPORTED_MODULE_1__["AccessServices"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/module/dashboard.module.ts":
/*!********************************************!*\
  !*** ./src/app/module/dashboard.module.ts ***!
  \********************************************/
/*! exports provided: dashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardModule", function() { return dashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _dashboard_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-route */ "./src/app/module/dashboard-route.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/module/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_access_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/access.services */ "./src/app/core/access.services.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/module/home/home.component.ts");
/* harmony import */ var _screen_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screen/screen.component */ "./src/app/module/screen/screen.component.ts");
/* harmony import */ var _chatpage_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chatpage/chat.component */ "./src/app/module/chatpage/chat.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./final/final.component */ "./src/app/module/final/final.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversation/conversation.component */ "./src/app/module/conversation/conversation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import {  NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from "ng2-table/ng2-table"
//import { Ng2SmartTableModule } from 'ng2-smart-table';
var dashboardModule = /** @class */ (function () {
    function dashboardModule() {
    }
    dashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerModule"],
                _dashboard_route__WEBPACK_IMPORTED_MODULE_2__["DashboardRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBgeepqF19Lq0I2jhEWj88uafs55jmnFso&librarie'
                })
                //Ng2SmartTableModule 
                //NgTableComponent
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _screen_screen_component__WEBPACK_IMPORTED_MODULE_11__["ScreenComponent"],
                _chatpage_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                _final_final_component__WEBPACK_IMPORTED_MODULE_13__["FinalComponent"],
                _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_14__["ConversationComponent"],
            ],
            providers: [_core_user_services__WEBPACK_IMPORTED_MODULE_7__["UserServices"], _core_access_services__WEBPACK_IMPORTED_MODULE_9__["AccessServices"]],
            exports: []
        })
    ], dashboardModule);
    return dashboardModule;
}());



/***/ }),

/***/ "./src/app/module/final/final.component.css":
/*!**************************************************!*\
  !*** ./src/app/module/final/final.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-body {\r\n    height: 100%;\r\n    margin: 0;\r\n  }\r\n  .app-BG{\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .topDiv{\r\n  height:15%;\r\n  position: relative;\r\n  background-color: #ea85b9 ;\r\n  \r\n  }\r\n  .full-height {\r\n    position: relative;\r\n    height: 77%;\r\n    background-color: #ea85b9 ;\r\n    overflow-y:scroll\r\n  }\r\n  .bellowDiv{\r\n    position: relative;\r\n    height:8%;\r\n    background-color: #ea85b9 ;\r\n  \r\n  }"

/***/ }),

/***/ "./src/app/module/final/final.component.html":
/*!***************************************************!*\
  !*** ./src/app/module/final/final.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-body\">\n    <div class=\"topDiv text-center\" #chatheader>\n      <img class=\"image\" src=\"https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-aging-neuroscience.png\"\n      />\n    </div>\n    <div #chatmessages class=\"full-height\" [style.height]=\"chatheight + 'px'\" [@listAnimation]=\"FinalTotalMessages.length\">\n      <!-- <p class=\"message received\" *ngFor=\"let items of str\">{{items.text}}</p> -->\n      <!-- <p class=\"message sent\" *ngFor=\"let item of items\">{{item}}</p> -->\n      <div #messages *ngFor=\"let outputtext of LastTotalMessages\">\n        <p class=\"message received\" *ngIf=\"outputtext.location==undefind\">{{outputtext.text}}</p>\n        <p class=\"message sent\" *ngIf=\"outputtext.location\">{{outputtext.text}}</p>\n        \n      </div>\n      </div>\n    \n    \n        <div class=\"bellowDiv text-center\" #chatfooter>\n      <!--<input *ngIf=\"hideInput\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\">\n       --> </div>\n        </div>"

/***/ }),

/***/ "./src/app/module/final/final.component.ts":
/*!*************************************************!*\
  !*** ./src/app/module/final/final.component.ts ***!
  \*************************************************/
/*! exports provided: FinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalComponent", function() { return FinalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinalComponent = /** @class */ (function () {
    function FinalComponent(_UserServices, elementRef, router, _userData) {
        this._UserServices = _UserServices;
        this.elementRef = elementRef;
        this.router = router;
        this._userData = _userData;
        this.showContent = false;
        this.items = [];
        this.showRocket = false;
        this.hideInput = true;
        this.TotalMessages = [];
        this.LastTotalMessages = [];
        this.NextToTotalMessages = [];
        this.FinalTotalMessages = [];
        this.bindingVar = '';
    }
    FinalComponent.prototype.fadeIn = function () {
        this.bindingVar = 'fadeIn';
    };
    FinalComponent.prototype.fadeOut = function () {
        this.bindingVar = 'fadeOut';
    };
    FinalComponent.prototype.toggle = function () {
        this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
    };
    FinalComponent.prototype.ngOnInit = function () {
        //   this.getText();
        this.getScreenHeight();
        this.scrollToBottom();
        console.log(this._userData.finalChat, "Final Messages from Screen");
        this.FinalTotalMessages = this._userData.finalChat;
        this.redirect();
    };
    FinalComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    FinalComponent.prototype.scrollToBottom = function () {
        try {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    FinalComponent.prototype.getScreenHeight = function (event) {
        this.mobHeight = (window.screen.height);
        console.log(this.mobHeight);
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        console.log("chatheader", this.viewHeight);
        this.chatviewHeight = this.elementViewFooter.nativeElement.offsetHeight;
        console.log("chatfooter", this.chatviewHeight);
        this.chatheight = this.viewHeight + this.chatviewHeight;
        console.log(this.chatheight);
        this.chatheight = this.mobHeight - this.chatheight;
        console.log(this.chatheight);
        var chatheight = this.chatheight;
        return chatheight;
    };
    // imageRoute(){
    //     console.log("image Route");
    //     this.router.navigate(['../dashboard']);
    // }
    //video
    // <iframe width="853" height="480" src="https://www.youtube.com/embed/1ALQtdGDf84" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    //   getText() {
    //       this._UserServices.getText(UserData).subscribe(data => {
    //           setTimeout(() => { this.str = data }, 4000)
    //           this.TotalMessages = this.TotalMessages.concat(data);
    //           // for(var i=0;i<=data.length;i++){
    //           //   this.str = data[i].text;
    //           // }
    //       })
    //   }
    FinalComponent.prototype.redirect = function () {
        var _this = this;
        var watchVideo = false;
        for (var i = 0; i < this.FinalTotalMessages.length; i++) {
            //this.TotalMessages[i];
            if (this.FinalTotalMessages[i]['text'] == 'You’ll be surprised at how much he likes to get involved in your day-to-day thoughts.') {
                console.log("true");
                this.LastTotalMessages.push(this.FinalTotalMessages[i]);
                watchVideo = true;
                //  this.showRocket = true;
                this.hideInput = false;
            }
            if (watchVideo == false) {
                this.LastTotalMessages.push(this.FinalTotalMessages[i]);
            }
            else {
                if (this.FinalTotalMessages[i]['text'] != 'You’ll be surprised at how much he likes to get involved in your day-to-day thoughts.') {
                    this.NextToTotalMessages.push(this.FinalTotalMessages[i]);
                }
                console.log("To conversation", this.NextToTotalMessages);
                setTimeout(function (router) {
                    _this.router.navigate(['./dashboard/conversation']);
                }, 5000);
                this._userData.newScreen = this.NextToTotalMessages;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatheader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FinalComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatfooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FinalComponent.prototype, "elementViewFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FinalComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FinalComponent.prototype, "getScreenHeight", null);
    FinalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-final',
            template: __webpack_require__(/*! ./final.component.html */ "./src/app/module/final/final.component.html"),
            styles: [__webpack_require__(/*! ./final.component.css */ "./src/app/module/final/final.component.css")],
            animations: [
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('listAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('800ms', [
                            Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('900ms', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_user_services__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], FinalComponent);
    return FinalComponent;
}());



/***/ }),

/***/ "./src/app/module/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/module/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-body {\r\n    height: 100%;\r\n    margin: 0;\r\n  }\r\n  .app-BG{\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .topDiv{\r\n  height:15%;\r\n  position: relative;\r\n  background-color: #ea85b9 ;\r\n  \r\n  }\r\n  .full-height {\r\n    position: relative;\r\n    height: 77%;\r\n    background-color: #ea85b9 ;\r\n    overflow-y:scroll\r\n  }\r\n  .bellowDiv{\r\n    position: relative;\r\n    height:8%;\r\n    background-color: #ea85b9 ;\r\n  \r\n  }"

/***/ }),

/***/ "./src/app/module/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/module/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-body\">\r\n        <div class=\"topDiv text-center\" #chatheader>\r\n          <img class=\"image\" src=\"https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-aging-neuroscience.png\"\r\n          />\r\n        </div>\r\n        <div #chatmessages class=\"full-height\"  [@listAnimation]=\"LastTotalMessages.length\">\r\n          <!-- <p class=\"message received\" *ngFor=\"let items of str\">{{items.text}}</p> -->\r\n          <!-- <p class=\"message sent\" *ngFor=\"let item of items\">{{item}}</p> -->\r\n          <div #messages *ngFor=\"let outputtext of LastTotalMessages;\">\r\n            <p class=\"message received\" *ngIf=\"outputtext.location==undefind\">{{outputtext.text}}</p>\r\n            <p class=\"message sent\" *ngIf=\"outputtext.location\">{{outputtext.text}}</p>\r\n            <span class=\" chat-footer-home text-center \" style=\"display:flow-root;\"   *ngIf=\"outputtext.text.indexOf('Great')>-1\">\r\n               \r\n                <input type=\"button\" *ngIf=\"watchVideo\" class=\"btn btn-default\"  (click)=\"watchVideo()\" value=\"Watch Video\"/>\r\n              </span>\r\n          </div>\r\n          </div>\r\n        \r\n        \r\n            <div class=\"bellowDiv text-center\" #chatfooter>\r\n          <!-- <input *ngIf=\"hideInput\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"> -->\r\n          <textarea *ngIf=\"hideInput\" style=\"margin-bottom: 0;\r\n          height: 100%;\" class=\"form-control\" [(ngModel)]=\"sentmessage\" (keyup.enter)=\"submit()\" type=\"text\" placeholder=\"Default input\"></textarea>\r\n             \r\n        </div>\r\n            </div>"

/***/ }),

/***/ "./src/app/module/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/module/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
/* harmony import */ var _core_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/user.services */ "./src/app/core/user.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(_UserServices, elementRef, router, _userData) {
        this._UserServices = _UserServices;
        this.elementRef = elementRef;
        this.router = router;
        this._userData = _userData;
        this.showContent = false;
        this.items = [];
        this.showRocket = false;
        this.hideInput = true;
        this.TotalMessages = [];
        this.LastTotalMessages = [];
        this.NextToTotalMessages = [];
        this.bindingVar = '';
        //   getText() {
        //       this._UserServices.getText(UserData).subscribe(data => {
        //           setTimeout(() => { this.str = data }, 4000)
        //           this.TotalMessages = this.TotalMessages.concat(data);
        //           // for(var i=0;i<=data.length;i++){
        //           //   this.str = data[i].text;
        //           // }
        //       })
        //   }
        this.sentmessage = '';
    }
    HomeComponent.prototype.fadeIn = function () {
        this.bindingVar = 'fadeIn';
    };
    HomeComponent.prototype.fadeOut = function () {
        this.bindingVar = 'fadeOut';
    };
    HomeComponent.prototype.toggle = function () {
        this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
    };
    HomeComponent.prototype.ngOnInit = function () {
        //   this.getText();
        this.getScreenHeight();
        this.scrollToBottom();
        console.log(this._userData.nextChat, "last Messages");
        this.LastTotalMessages = this._userData.nextChat;
        console.log("LastTotalMessages", this.LastTotalMessages);
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomeComponent.prototype.scrollToBottom = function () {
        try {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    HomeComponent.prototype.getScreenHeight = function (event) {
        this.mobHeight = (window.screen.height);
        console.log(this.mobHeight);
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        console.log("chatheader", this.viewHeight);
        this.chatviewHeight = this.elementViewFooter.nativeElement.offsetHeight;
        console.log("chatfooter", this.chatviewHeight);
        this.chatheight = this.viewHeight + this.chatviewHeight;
        console.log(this.chatheight);
        this.chatheight = this.mobHeight - this.chatheight;
        console.log(this.chatheight);
        var chatheight = this.chatheight;
        return chatheight;
    };
    // imageRoute(){
    //     console.log("image Route");
    //     this.router.navigate(['../dashboard']);
    // }
    //video
    // <iframe width="853" height="480" src="https://www.youtube.com/embed/1ALQtdGDf84" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    HomeComponent.prototype.watchVideo = function () {
        this.router.navigate(['./dashboard/screen']);
        this._userData.toScreen = this.NextToTotalMessages;
    };
    HomeComponent.prototype.submit = function () {
        var _this = this;
        this.items.push(this.sentmessage);
        console.log(this.items);
        this.LastTotalMessages.push({ "text": this.sentmessage, "location": "local" });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('params', this.sentmessage);
        console.log(params.toString());
        var dataParams = params.toString();
        console.log("dataparams", dataParams);
        this.sentmessage = "";
        this.hideInput = false;
        this._UserServices.InputText(dataParams).subscribe(function (data) {
            console.log(data, "recived data .....");
            _this.outputText = data;
            console.log("checkingText", _this.outputText);
            _this.hideInput = true;
            var watchVideo = false;
            for (var i = 0; i < data.length; i++) {
                //this.TotalMessages[i];
                if (data[i]['text'] == 'Great!') {
                    console.log("true");
                    _this.LastTotalMessages.push(data[i]);
                    watchVideo = true;
                    //  this.showRocket = true;
                    _this.hideInput = false;
                }
                if (watchVideo == false) {
                    _this.LastTotalMessages.push(data[i]);
                }
                else {
                    if (data[i]['text'] != 'Great!') {
                        _this.NextToTotalMessages.push(data[i]);
                    }
                    console.log("NextToMessages", _this.NextToTotalMessages);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatheader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elementView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatfooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "elementViewFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatmessages'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "getScreenHeight", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/module/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/module/home/home.component.css")],
            animations: [
                Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('listAnimation', [
                    Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('600ms', [
                            Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms', Object(_node_modules_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_user_services__WEBPACK_IMPORTED_MODULE_3__["UserServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/module/screen/screen.component.css":
/*!****************************************************!*\
  !*** ./src/app/module/screen/screen.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/module/screen/screen.component.html":
/*!*****************************************************!*\
  !*** ./src/app/module/screen/screen.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"videos\">\n<video width=\"100%\"  key-controls controls  autoplay class=\"myVideo\" (ended)=\"vidEnded()\">\n    <source src=\"assets/video2.mp4\" type=\"video/mp4\">\n</video>\n</div>\n"

/***/ }),

/***/ "./src/app/module/screen/screen.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/screen/screen.component.ts ***!
  \***************************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserData */ "./src/app/models/UserData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScreenComponent = /** @class */ (function () {
    function ScreenComponent(router, _userData) {
        this.router = router;
        this._userData = _userData;
        this.id = 'qDuKsiwS5xw';
        this.NextToTotalMessages = [];
        this.FinalTotalMessages = [];
    }
    ScreenComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    ScreenComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    ScreenComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    ScreenComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    ScreenComponent.prototype.vidEnded = function () {
        var _this = this;
        console.log("video ends");
        this._userData.finalChat = this.FinalTotalMessages;
        console.log("FinalTotalMessages", this.FinalTotalMessages);
        console.log("fnal", this._userData.finalChat);
        setTimeout(function (router) {
            _this.router.navigate(['./dashboard/final']);
        }, 5000); //5s
    };
    ScreenComponent.prototype.ngOnInit = function () {
        console.log(this._userData.toScreen, "ScreenNextoTotalMessages");
        this.FinalTotalMessages = this._userData.toScreen;
    };
    ScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screen',
            template: __webpack_require__(/*! ./screen.component.html */ "./src/app/module/screen/screen.component.html"),
            styles: [__webpack_require__(/*! ./screen.component.css */ "./src/app/module/screen/screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], ScreenComponent);
    return ScreenComponent;
}());



/***/ }),

/***/ "./src/app/request.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/request.interceptor.ts ***!
  \****************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _models_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/UserData */ "./src/app/models/UserData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Pass untouched request through to the next request handler. */
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(_appConfig, _appConstants, _userData) {
        this._appConfig = _appConfig;
        this._appConstants = _appConstants;
        this._userData = _userData;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var baseUrl = this._appConfig.apiEndpoint;
        var reqNew = req.clone({
            url: baseUrl + req.url,
            headers: req.headers
                .append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
            //.append("Accept","application/json")              
            //.append("Authorization", authorization)
        });
        return next.handle(reqNew);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"], _config_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"], _models_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\xampp\htdocs\ramesh\Stryve\Stryve\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map