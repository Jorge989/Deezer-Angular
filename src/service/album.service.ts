import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Album} from "../_model/Album"
import {map,mergeMap} from "rxjs/operators"
import { from } from "rxjs";

@Injectable({
  providedIn:"root",
})
export class AlbumService{
  public albums: Album[]=[];
  constructor(
    private httpClient:HttpClient,

  ){
    const allAlbums = "https://api.deezer.com/album/302127";
    this.httpClient.get<any>(allAlbums).pipe(
      map(value =>value.results),
      map((value:any)=>{
        console.log("aqui",value)
        return from(value).pipe(

          mergeMap((v:any) => this.httpClient.get(v.url))
        )

      }),

      mergeMap(value => value),

    ).subscribe((result:any) => this.albums[result.id] ={
      id: result.id,
      title: result.title,
      image: result.cover_small
    })

  }

}
