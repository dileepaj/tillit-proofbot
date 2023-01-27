import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { timeout } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class VerificationServiceService {
  constructor(private http: HttpClient,private router: Router) {}
  private url: string = ""

  loadPage(url: string): Observable<any> {
    this.url=url;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "text/html, application/xhtml+xml, */*",
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      responseType: "text" as "json"
    };
    let a=this.http.get(url, httpOptions).pipe(catchError(this.handleError))
    return a
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
