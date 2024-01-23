import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(url:string):Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getPocTreeDataWithMerkelTree(id: string): Observable<any> {
    return this.http.get(environment.blockchain.getPocTreeDataWithMerkletree + id).pipe(
      catchError(this.handleError)
    );
  }

  getPocTreeData(id: string): Observable<any> {
    return this.http.get(environment.blockchain.getPocTreeData + id).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    return throwError('test');
  }
}
