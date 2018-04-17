import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artista: any[] = [];

  constructor(
    public http: HttpClient
  ) { }

  getArtistas(termino: string) {
    const url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;

    const headers = new HttpHeaders({
      'authorization': 'Bearer BQDfikMJo7_DsRLI26g2Ne0JJ8gaUqHdwUnZIEaN4tLwfCf5z7vBLZm4lDQpuf5RYR8nYGrBtntWpFZZo4I'
    });

    return this.http.get(url, {headers})
                .map( (resp: any) => {
                  this.artista = resp.artists.items;
                  return this.artista;
                });
  }

}
