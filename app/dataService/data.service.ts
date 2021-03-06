import {Injectable,OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Statics} from './service.details';
import {Http, Response, Headers} from 'angular2/http';



@Injectable()
export class DataService implements OnInit{

    constructor(private http:Http){}

    fetchData(dataurl:string){
        var token = sessionStorage.getItem('access-token');
        return this.http.get(dataurl,{
            headers : new Headers({
                "Authorization" : "Bearer " + token
            })
        })
            .map(data => data.json().result)
            .catch(this.handleError)
    }

    getAllProducts(){
        return this.fetchData('https://api.molt.in/v1/products');
    }
    getProductDetail(slug:string){
        return this.fetchData('https://api.molt.in/v1/products?slug='+slug);
    }

    getProductByBrand(slug:string){
        return this.fetchData('https://api.molt.in/v1/products?brand.slug='+slug);
    }

    getCategories(){
        return this.fetchData('https://api.molt.in/v1/categories');
    }

    getFeatured(slug:string){
            return this.fetchData('https://api.molt.in/v1/products?collection.slug=featured-products');
    }

    getCategoryID(slug:string){
        return this.fetchData('https://api.molt.in/v1/categories/search?slug='+slug);

    }

    getProductByCategory(slug:string){
        return this.fetchData('https://api.molt.in/v1/products?category.slug='+slug);
    }

    getBrands(){
        return this.fetchData('https://api.molt.in/v1/brands');
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}
