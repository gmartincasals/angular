import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artista: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQBXAEBZnNRmaUL0n22RFB-8TOhLluL1ttdptxw47Xl8eWyOsaNpSCvf7e9VjcAo1yWVWAoufkiuWDHpX28';


  constructor(
    public http: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
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
