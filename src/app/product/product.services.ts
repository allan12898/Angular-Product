import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {IProduct} from './product'
import { Observable } from 'rxjs';

@Injectable()

export class ProductServices{
    url: string = 'assets/products.json'
    constructor(private http: HttpClient) {}

    getProduct() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url)
    }
    
}