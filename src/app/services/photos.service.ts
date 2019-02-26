import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private readonly _URL: string = "https://jsonplaceholder.typicode.com/photos?_limit=10";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this._URL);
  }
}
