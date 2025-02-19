// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// // import { environment } from '../environments/environment';
// import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataServiceService {
// environment = environment
//   constructor(private http: HttpClient) { }

//   // Generic GET request
//   get<T>(endpoint: string, params?: any): Observable<T> {
//     return this.http.get<T>(`${this.environment.apiUrl}${endpoint}`, { params });
//   }

//   // Generic POST request
//   post<T>(endpoint: string, data: any): Observable<T> {
//     return this.http.post<T>(`${this.environment.apiUrl}/${endpoint}`, data);
//   }

//   // Generic PUT request
//   put<T>(endpoint: string, id: string, data: any): Observable<T> {
//     return this.http.put<T>(`${this.environment.apiUrl}/${endpoint}/${id}`, data);
//   }

//   // Generic DELETE request
//   delete<T>(endpoint: string, id: string): Observable<T> {
//     return this.http.delete<T>(`${this.environment.}/${endpoint}/${id}`);
//   }
// }













import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  getRetailerData() {
      throw new Error('Method not implemented.');
  }
  apiUrl = environment.apiUrl
  fetchData: any;


  constructor(private http: HttpClient,) {
    console.log('API URL:', this.apiUrl); // Debugging log
  }

  get<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { params });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, data);
  }

  put<T>(endpoint: string, id: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}/${id}`, data);
  }

  delete<T>(endpoint: string, id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}/${id}`);
  }
}

