import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //usuarios
  private URL ='http://54.86.218.58:4000/api'
  URI = 'http://54.86.218.58:4000/api/photos';
  URlmaster ='http://54.86.218.58:4000/api//photos/maestros'



  constructor(private http: HttpClient, private router: Router) { }

  signup(user:any){
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signin(user:any){
    return this.http.post<any>(this.URL + '/signin', user);
  }
  
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('typeuser');
    localStorage.removeItem('iduser');

    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    localStorage.removeItem('typeuser');
    localStorage.removeItem('iduser');

  }

  createPhoto(title: string, description: string, nameoriginal: string, nivel: string, granularidad: string, topics: string, dueñouser: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('nameoriginal', nameoriginal);
    fd.append('nivel', nivel);
    fd.append('granularidad', granularidad);
    fd.append('topics', topics);
    fd.append('dueñouser', dueñouser);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }
  
  getPhotos() {
    return axios.get(this.URI);
  }

  getusers() {
    return axios.get('http://54.86.218.58:4000/api/users');
  }

  deleteuser(id: string) {
    return axios.post('http://54.86.218.58:4000/api/usersdelete'+`/${id}`);
  }

  updateuser(id: string, type: string) {
   // return axios.post('http://localhost:4000/api/usersupdate'+`/${id}`, {type});
    return this.http.put('http://54.86.218.58:4000/api/usersupdate'+`/${id}`, {type});
  }

  getPhoto(id: any){
    return axios.get(`${this.URI}/${id}`);
    //return this.http.get(`${this.URI}/${id}`);
  }

  getcontenMestro(id: any){
    return axios.get(`${this.URlmaster}/${id}`);
    //return this.http.get(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, title: string, description: string, nivel: string, granularidad: string, topics: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description, nivel, granularidad, topics});
  }
}
