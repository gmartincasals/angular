import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { templateJitUrl, ThrowStmt } from '@angular/compiler';

@Injectable({
  provideIn: 'root'
})
export class SpotifyService {

  artista: any[] = [];
  tracks: any [] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQAw-bg3St-n1di2W8W9AIAegRx2Q7tiWbcIDt26dVLxMTBZoOkwgHWeu17BZnulJ12u9I7lTiG-rtPZEjI';


  constructor(
    public http: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTopArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    const headers = this.getHeaders();

    return this.http.get(url, {headers});
  }

  getArtist(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();

    return this.http.get(url, {headers});

  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    const headers = this.getHeaders();

    return this.http.get(url, {headers})
                .map( (resp: any) => {
                  this.artista = resp.artists.items;
                  return this.artista;
                });
  }

}
