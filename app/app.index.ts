import {Component,View,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {DataService} from './dataService/data.service';
import {CategoryInterface} from './dataService/data.interface';
import {ProductList} from './store/product.list';
import {CategoryList} from './store/category.list';
import {ProductDetail} from './store/productDetail.component';
import {Search} from './store/search.component';

@Component({
    selector : 'store-app'
})

@View({
        templateUrl : '/app/views/navigation.view.html',
        directives : [ROUTER_DIRECTIVES,Search]
})

@RouteConfig([
    {
        path: '/store',
        name : 'Products',
        component : ProductList,
        useAsDefault: true
    },
    {
        path:'/store/:productslug',
        name : 'ProductsDetail',
        component : ProductDetail
    }

])


export class Store implements OnInit{
    categories : CategoryInterface[];
    constructor(
        private _dataService : DataService
    ){}

    showNav(){
        this.toggleClass();
    }

    toggleClass(){
        this.addClass = !this.addClass;
    }

}



