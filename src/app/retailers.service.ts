import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {

  private apiUrl = 'https://spillas.in/api/UserRegistration/GetCustomerDetails';

  
  constructor(private http: HttpClient) {}

  getCustomerDetails(): Observable<any> {
    const requestBody = {
      reatilerID: 9834,
      fromdate: new Date().toISOString(),
      todate: new Date().toISOString(),
      compID: 0,
      roleID: 0,
      promotorID: 0,
      seniorID: 0,
      customerID: 0,
      imeNo: "string"
    };

    return this.http.post<any>(this.apiUrl, requestBody);
  }
}
