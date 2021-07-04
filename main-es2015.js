(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\College-final-year-project\latest-git\foodie-admin-panel\src\main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/orders', title: 'Orders', icon: 'nc-cart-simple', class: '' },
    { path: '/category', title: 'Category', icon: 'nc-bullet-list-67', class: '' },
    { path: '/products', title: 'Products', icon: 'nc-basket', class: '' },
    { path: '/users', title: 'Users', icon: 'nc-single-02', class: '' },
];
let SidebarComponent = class SidebarComponent {
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "550G":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "5My1":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "Pqk8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");






let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: "https://food-order-system-backend.herokuapp.com/api/",
    baseUrl: 'https://food-order-system-backend.herokuapp.com/'
};


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");






let NavbarModule = class NavbarModule {
};
NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "pG9d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/rest-api.service */ "n6ga");






let LoginComponent = class LoginComponent {
    constructor(router, restApiService) {
        this.router = router;
        this.restApiService = restApiService;
        this.email = '';
        this.password = '';
        this.isLoading = false;
    }
    ngOnInit() {
    }
    onLogin() {
        const params = {
            email: this.email,
            password: this.password
        };
        this.isLoading = true;
        this.restApiService.login(params).then(res => {
            this.isLoading = false;
            if (res && res.code === 200) {
                const { data } = res;
                if (data.user.role === 'A') {
                    localStorage.setItem('admin', JSON.stringify(data));
                    this.router.navigateByUrl('/dashboard');
                }
            }
            else {
            }
        }).catch(err => {
            this.isLoading = false;
            console.log('err: ', err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"]])
], LoginComponent);



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");






let NavbarComponent = class NavbarComponent {
    constructor(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        if (titlee === '/profile') {
            return 'Profile';
        }
        return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }
    onLogout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["navbar-cmp", { static: false },] }]
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AdminLayoutComponent = class AdminLayoutComponent {
    ngOnInit() { }
};
AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminLayoutComponent);



/***/ }),

/***/ "Pqk8":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "550G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let FixedPluginComponent = class FixedPluginComponent {
    constructor() {
        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
    }
    changeSidebarColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    }
    changeSidebarActiveColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarActiveColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
        }
    }
    ngOnInit() { }
};
FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FixedPluginComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VuO1":
/*!***********************************************!*\
  !*** ./src/app/services/api/configuration.ts ***!
  \***********************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");

class ApiConfiguration {
    constructor() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.signup = 'signup';
        this.socialLogin = 'social/login';
        this.signin = 'signin';
        this.users = 'users';
        this.category = 'category';
        this.products = 'products';
        this.product = 'product';
        this.orders = 'orders';
        this.stats = 'stats';
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "5My1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _services_api_configuration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api/configuration */ "VuO1");
/* harmony import */ var _services_api_api_call_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api/api-call.service */ "f61G");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/rest-api.service */ "n6ga");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutes"]),
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"]
        ],
        providers: [
            _services_api_configuration__WEBPACK_IMPORTED_MODULE_13__["ApiConfiguration"],
            _services_api_api_call_service__WEBPACK_IMPORTED_MODULE_14__["ApiCallService"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_16__["RestApiService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");


const AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "jQpT");





let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "f61G":
/*!**************************************************!*\
  !*** ./src/app/services/api/api-call.service.ts ***!
  \**************************************************/
/*! exports provided: ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration */ "VuO1");





let ApiCallService = class ApiCallService extends _configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"] {
    constructor(http) {
        super();
        this.http = http;
        this.token = {};
        this.uploadSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        const token = localStorage.getItem('token');
        this.token = token ? token : null;
        // console.log('token', this.token);
    }
    setHeaderToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }
    getHeader() {
        return {
            headers: {
                Authorization: 'bearer ' + this.token
            }
        };
    }
    getData(subUrl, token = true) {
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            // console.log('data', request);
            this.http
                .get(request, token ? this.getHeader() : {})
                .subscribe(data => resolve(data), error => reject(error));
        });
    }
    postData(subUrl, data, token = true) {
        console.log('subUrl: ', subUrl);
        return new Promise((resolve, reject) => {
            // console.log('Token :', token);
            // console.log('Data :', JSON.stringify(data));
            const request = this.baseUrl + subUrl;
            this.http.post(request, data, token ? this.getHeader() : {})
                .subscribe(res => resolve(res), error => {
                console.log('Main Error :', error);
                reject(error);
            });
        });
    }
    putData(subUrl, data, token = true) {
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            this.http
                .put(request, data, token ? this.getHeader() : {})
                .subscribe(res => resolve(res), error => reject(error));
        });
    }
    deleteData(subUrl, token = true) {
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            this.http
                .delete(request, token ? this.getHeader() : {})
                .subscribe(res => resolve(res), error => reject(error));
        });
    }
    upload(file, url, token = true) {
        // console.log('url', url);
        return new Promise((resolve, reject) => {
            const uploadData = new FormData();
            uploadData.append('myFile', file, file.name);
            this.uploadSub.next(0);
            const request = this.http
                .post(url, uploadData, token ? Object.assign(Object.assign({}, this.getHeader()), { reportProgress: true, observe: 'events' }) : { reportProgress: true, observe: 'events' })
                .subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                    /* console.log('Upload Progress :', (event['loaded'] / event['total']) * 100 + '%'); */
                    console.log('Event :', event['loaded'], event['total']);
                    if (this.uploadSub.value !== null) {
                        this.uploadSub.next((event['loaded'] / event['total']) * 100);
                    }
                    else {
                        // Here Stop Uploading Request Manually
                        request.unsubscribe();
                    }
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                    resolve(event.body);
                }
            }, error => reject(error));
        });
    }
    deleteWithBody(subUrl, body) {
        const bodyBody = Object.assign({ body }, this.getHeader());
        console.log('bodyBody: ', bodyBody);
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            this.http
                .delete(request, bodyBody)
                .subscribe(res => resolve(res), error => reject(error));
        });
    }
    postDataWithImage(subUrl, data, token = true) {
        const form_data = new FormData();
        for (const key in data) {
            if (key === 'image') {
                form_data.append('image', data[key], data[key].name);
            }
            else {
                form_data.append(key, data[key]);
            }
        }
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            this.http.post(request, form_data, token ? this.getHeader() : {})
                .subscribe(res => resolve(res), error => {
                console.log('Main Error :', error);
                reject(error);
            });
        });
    }
    putWithImage(subUrl, data, token = true) {
        const form_data = new FormData();
        console.log('data: ', data);
        for (const key in data) {
            if (key && key === 'image') {
                form_data.append('image', data[key], data[key] && data[key].name);
            }
            else {
                form_data.append(key, data[key]);
            }
        }
        return new Promise((resolve, reject) => {
            const request = this.baseUrl + subUrl;
            this.http
                .put(request, form_data, token ? this.getHeader() : {})
                .subscribe(res => resolve(res), error => reject(error));
        });
    }
};
ApiCallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApiCallService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApiCallService);



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer> -->\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FooterComponent);



/***/ }),

/***/ "n6ga":
/*!**********************************************!*\
  !*** ./src/app/services/rest-api.service.ts ***!
  \**********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/api-call.service */ "f61G");



let RestApiService = class RestApiService {
    constructor(api) {
        this.api = api;
    }
    signUp(params) {
        return this.api.postData(this.api.signup, params);
    }
    login(params) {
        return this.api.postData(this.api.signin, params);
    }
    getUsers() {
        return this.api.getData(this.api.users);
    }
    getCategory() {
        return this.api.getData(this.api.category);
    }
    addCateogry(params) {
        return this.api.postData(this.api.category, params);
    }
    editCateogry(id, params) {
        return this.api.putData(this.api.category + '/' + id, params);
    }
    deleteCategory(id) {
        return this.api.deleteData(this.api.category + '/' + id);
    }
    getProducts() {
        return this.api.getData(this.api.products);
    }
    addProduct(data) {
        return this.api.postDataWithImage(this.api.product, data);
    }
    deleteProduct(id) {
        return this.api.deleteData(this.api.product + '/' + id);
    }
    editProduct(id, params) {
        return this.api.putWithImage(this.api.product + '/' + id, params);
    }
    getOrders() {
        return this.api.getData(this.api.orders);
    }
    getStats() {
        return this.api.getData(this.api.stats);
    }
};
RestApiService.ctorParameters = () => [
    { type: _api_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }
];
RestApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]])
], RestApiService);



/***/ }),

/***/ "pG9d":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n\r\n  \r\n  /*---------------------------------------------*/\r\n\r\n\r\n  \r\n  a {\r\n      font-family: SourceSansPro-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n      transition: all 0.4s;\r\n      -webkit-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n  }\r\n\r\n\r\n  \r\n  a:focus {\r\n      outline: none !important;\r\n  }\r\n\r\n\r\n  \r\n  a:hover {\r\n      text-decoration: none;\r\n  }\r\n\r\n\r\n  \r\n  /*---------------------------------------------*/\r\n\r\n\r\n  \r\n  h1,h2,h3,h4,h5,h6 {\r\n      margin: 0px;\r\n  }\r\n\r\n\r\n  \r\n  p {\r\n      font-family: SourceSansPro-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n  }\r\n\r\n\r\n  \r\n  ul, li {\r\n      margin: 0px;\r\n      list-style-type: none;\r\n  }\r\n\r\n\r\n  \r\n  /*---------------------------------------------*/\r\n\r\n\r\n  \r\n  input {\r\n      outline: none;\r\n      border: none;\r\n  }\r\n\r\n\r\n  \r\n  textarea {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n\r\n\r\n  \r\n  textarea:focus, input:focus {\r\n    border-color: transparent !important;\r\n  }\r\n\r\n\r\n  \r\n  input::-webkit-input-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  input:-moz-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  input::-moz-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  input:-ms-input-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  textarea::-webkit-input-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  textarea:-moz-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  textarea::-moz-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  textarea:-ms-input-placeholder { color: #4b2354;}\r\n\r\n\r\n  \r\n  /*---------------------------------------------*/\r\n\r\n\r\n  \r\n  button {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n\r\n\r\n  \r\n  button:hover {\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n  \r\n  iframe {\r\n      border: none !important;\r\n  }\r\n\r\n\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ Utility ]*/\r\n\r\n\r\n  \r\n  .txt1 {\r\n    font-family: SourceSansPro-Regular;\r\n    font-size: 16px;\r\n    line-height: 1.4;\r\n    color: #999999;\r\n  }\r\n\r\n\r\n  \r\n  .txt2 {\r\n    font-family: SourceSansPro-Regular;\r\n    font-size: 16px;\r\n    line-height: 1.4;\r\n    color: #4b2354;\r\n  }\r\n\r\n\r\n  \r\n  .hov1:hover {\r\n    color: #4b2354;\r\n    text-decoration: underline;\r\n  }\r\n\r\n\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n\r\n\r\n  \r\n  .container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n  \r\n  .container-login100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(93,84,240,0.5);\r\n    pointer-events: none;\r\n  }\r\n\r\n\r\n  \r\n  .wrap-login100 {\r\n    width: 390px;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n  \r\n    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n\r\n  \r\n  /*==================================================================\r\n  [ Form ]*/\r\n\r\n\r\n  \r\n  .login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  \r\n  .login100-form-title {\r\n    display: block;\r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 30px;\r\n    color: #4b2354;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Input ]*/\r\n\r\n\r\n  \r\n  .wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n  }\r\n\r\n\r\n  \r\n  .input100 {\r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 16px;\r\n    color: #4b2354;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 62px;\r\n    background: transparent;\r\n    padding: 0 20px 0 23px;\r\n  }\r\n\r\n\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Focus Input ]*/\r\n\r\n\r\n  \r\n  .focus-input100 {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n    border-radius: 20px;\r\n    box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.4s;\r\n  }\r\n\r\n\r\n  \r\n  .input100:focus + .focus-input100 {\r\n    box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Button ]*/\r\n\r\n\r\n  \r\n  .container-login100-form-btn {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n  \r\n  .login100-form-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 160px;\r\n    height: 50px;\r\n    background-color: #bd59d4;\r\n    border-radius: 25px;\r\n  \r\n    font-family: SourceSansPro-SemiBold;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-transform: uppercase;\r\n    transition: all 0.4s;\r\n  \r\n    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n  }\r\n\r\n\r\n  \r\n  .login100-form-btn:hover {\r\n    background-color: #4b2354;\r\n    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n  }\r\n\r\n\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n\r\n  \r\n  .validate-input {\r\n    position: relative;\r\n  }\r\n\r\n\r\n  \r\n  .alert-validate .focus-input100 {\r\n    box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n  }\r\n\r\n\r\n  \r\n  .alert-validate::before {\r\n    content: attr(data-validate);\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    width: 100%;\r\n    min-height: 62px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    top: 0px;\r\n    left: 0px;\r\n    padding: 0 45px 0 22px;\r\n    pointer-events: none;\r\n  \r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 16px;\r\n    color: #fa4251;\r\n    line-height: 1.2;\r\n  }\r\n\r\n\r\n  \r\n  .btn-hide-validate {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 15px;\r\n    color: #fa4251;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    height: 62px;\r\n    top: 0px;\r\n    right: 23px;\r\n  }\r\n\r\n\r\n  \r\n  .rs1-alert-validate.alert-validate::before {\r\n    background-color: #fff;\r\n  }\r\n\r\n\r\n  \r\n  .true-validate::after {\r\n    content: \"\\f269\";\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 15px;\r\n    color: #57b846;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    height: 62px;\r\n    top: 0px;\r\n    right: 23px;\r\n  }\r\n\r\n\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ Social item ]*/\r\n\r\n\r\n  \r\n  .login100-social-item {\r\n    font-size: 25px;\r\n    color: #3b5998;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 5px;\r\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n\r\n  \r\n  .login100-social-item img {\r\n    width: 26px;\r\n  }\r\n\r\n\r\n  \r\n  .login100-social-item:hover {\r\n    color: #3b5998;\r\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ Responsive ]*/\r\n\r\n\r\n  \r\n  @media (max-width: 480px) {\r\n    .wrap-login100 {\r\n      padding-left: 15px;\r\n      padding-right: 15px;\r\n    }\r\n  }\r\n\r\n\r\n  \r\n  .p-b-37 {\r\n    padding-bottom: 37px;\r\n}\r\n\r\n\r\n  \r\n  .m-b-20{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n  \r\n  .validate-form{\r\n    padding: 55px;\r\n}\r\n\r\n\r\n  \r\n  .m-b-25{\r\n    margin-bottom: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7U0FDUzs7OztFQUlQLGdEQUFnRDs7OztFQUNoRDtNQUNJLGtDQUFrQztNQUNsQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLDRCQUE0QjtJQUM5Qix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOzs7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7Ozs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6Qjs7OztFQUVBLGdEQUFnRDs7OztFQUNoRDtNQUNJLFdBQVc7RUFDZjs7OztFQUVBO01BQ0ksa0NBQWtDO01BQ2xDLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVc7RUFDZjs7OztFQUVBO01BQ0ksV0FBVztNQUNYLHFCQUFxQjtFQUN6Qjs7OztFQUdBLGdEQUFnRDs7OztFQUNoRDtNQUNJLGFBQWE7TUFDYixZQUFZO0VBQ2hCOzs7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOzs7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7Ozs7RUFFQSxtQ0FBbUMsY0FBYyxDQUFDOzs7O0VBQ2xELHlCQUF5QixjQUFjLENBQUM7Ozs7RUFDeEMsMEJBQTBCLGNBQWMsQ0FBQzs7OztFQUN6Qyw4QkFBOEIsY0FBYyxDQUFDOzs7O0VBRTdDLHNDQUFzQyxjQUFjLENBQUM7Ozs7RUFDckQsNEJBQTRCLGNBQWMsQ0FBQzs7OztFQUMzQyw2QkFBNkIsY0FBYyxDQUFDOzs7O0VBQzVDLGlDQUFpQyxjQUFjLENBQUM7Ozs7RUFFaEQsZ0RBQWdEOzs7O0VBQ2hEO01BQ0ksd0JBQXdCO01BQ3hCLFlBQVk7TUFDWix1QkFBdUI7RUFDM0I7Ozs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7Ozs7RUFFQTtNQUNJLHVCQUF1QjtFQUMzQjs7OztFQUlBO2NBQ1k7Ozs7RUFDWjtJQUNFLGtDQUFr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InNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIEZPTlQgXSovXHJcblxyXG5cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLVJlZ3VsYXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGgxLGgyLGgzLGg0LGg1LGg2IHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgdWwsIGxpIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGlucHV0IHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjNGIyMzU0O31cclxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM0YjIzNTQ7fVxyXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM0YjIzNTQ7fVxyXG4gIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjNGIyMzU0O31cclxuICBcclxuICB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjNGIyMzU0O31cclxuICB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM0YjIzNTQ7fVxyXG4gIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM0YjIzNTQ7fVxyXG4gIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjNGIyMzU0O31cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgYnV0dG9uIHtcclxuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlmcmFtZSB7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgVXRpbGl0eSBdKi9cclxuICAudHh0MSB7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICBcclxuICAudHh0MiB7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGNvbG9yOiAjNGIyMzU0O1xyXG4gIH1cclxuICBcclxuICAuaG92MTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzRiMjM1NDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgbG9naW4gXSovXHJcbiAgXHJcbiAgLmNvbnRhaW5lci1sb2dpbjEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1sb2dpbjEwMDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5Myw4NCwyNDAsMC41KTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud3JhcC1sb2dpbjEwMCB7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIEZvcm0gXSovXHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjNGIyMzU0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIElucHV0IF0qL1xyXG4gIFxyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMCB7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1Cb2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0YjIzNTQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjNweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEZvY3VzIElucHV0IF0qL1xyXG4gIFxyXG4gIC5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBCdXR0b24gXSovXHJcbiAgLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkNTlkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgXHJcbiAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1TZW1pQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC41KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjUpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjUpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjIzNTQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC44KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjgpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjgpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC44KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEFsZXJ0IHZhbGlkYXRlIF0qL1xyXG4gIFxyXG4gIC52YWxpZGF0ZS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGVydC12YWxpZGF0ZSAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgyNTAsIDY2LCA4MSwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgyNTAsIDY2LCA4MSwgMC4xKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgyNTAsIDY2LCA4MSwgMC4xKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMjUwLCA2NiwgODEsIDAuMSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgyNTAsIDY2LCA4MSwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDAgNDVweCAwIDIycHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBcclxuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZhNDI1MTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4taGlkZS12YWxpZGF0ZSB7XHJcbiAgICBmb250LWZhbWlseTogTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmYTQyNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMjNweDtcclxuICB9XHJcbiAgXHJcbiAgLnJzMS1hbGVydC12YWxpZGF0ZS5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50cnVlLXZhbGlkYXRlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjI2OVwiO1xyXG4gICAgZm9udC1mYW1pbHk6IE1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNTdiODQ2O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBTb2NpYWwgaXRlbSBdKi9cclxuICBcclxuICAubG9naW4xMDAtc29jaWFsLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLXNvY2lhbC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLXNvY2lhbC1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBSZXNwb25zaXZlIF0qL1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLndyYXAtbG9naW4xMDAge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wLWItMzcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM3cHg7XHJcbn1cclxuLm0tYi0yMHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnZhbGlkYXRlLWZvcm17XHJcbiAgICBwYWRkaW5nOiA1NXB4O1xyXG59XHJcbi5tLWItMjV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");





let SidebarModule = class SidebarModule {
};
SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-login100\" style=\"background-image: url('../../../assets/img/bg-01.jpg');\">\n    \n    <div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n        <div class=\"login100-form validate-form\">\n            <span class=\"login100-form-title p-b-37\">\n                Sign In\n            </span>\n\n            <div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"Enter email\">\n                <input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"Enter email\" [(ngModel)]=\"email\" >\n                <span class=\"focus-input100\"></span>\n            </div>\n\n            <div class=\"wrap-input100 validate-input m-b-25\" data-validate = \"Enter password\">\n                <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Enter password\"  [(ngModel)]=\"password\">\n                <span class=\"focus-input100\"></span>\n            </div>\n\n            <div class=\"container-login100-form-btn\">\n                <button class=\"login100-form-btn\" (click)=\"onLogin()\">\n                  <span *ngIf=\"!isLoading\" >Sign In</span>  \n                  <div *ngIf=\"isLoading\"  class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                  </div>\n                </button>\n            </div>\n        </div>\n\n        \n    </div>\n</div>");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <!-- <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form> -->\n      <ul class=\"navbar-nav\">\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li> -->\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\n            <i class=\"nc-icon nc-single-02\"></i>\n            <p>\n            </p>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n            <a ngbDropdownItem href=\"javascript:void(0)\" (click)=\"onLogout()\">Logout</a>\n          </div>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Paper Dashboard Angular - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/main-logo.svg\">\n      </div>\n    </a>\n    <a href=\"#\" class=\"simple-text logo-normal\" style=\"    font-size: 14px;\n    \">\n      Food order system\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map