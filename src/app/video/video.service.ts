import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient,
  ) { }

  getRepos(): Observable<any> {
    return this.http.get('https://api.github.com/users/matheusobarboza/repos')
  }

  getSingleRepo(name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/matheusobarboza/${name}`)
  }
}
