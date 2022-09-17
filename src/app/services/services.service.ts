import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../model/bus.model';
@Injectable({
  providedIn: 'root'
})
export class BusService {
  private static url : string = "http://localhost:8880";

  constructor(private http : HttpClient) { }

  add(bus : Bus) {
    this.http.post(BusService.url + "/bus", bus).subscribe(data => data = bus);
    // this.flights.push(flight);
  }

  async list() {
    return await this.http.get<Bus[]>(BusService.url + "/bus");
    // return this.flights;
  }

  async route(source : string, destiny : string) {
    return await this.http.get<Bus[]>(BusService.url + "/route?source="+source+"&destiny="+destiny);
    // return this.flights.filter(f => f.source == source && f.destiny == destiny);
  }

  remove(code : number) {
    this.http.delete(BusService.url + "/bus/" + code).subscribe();
    // return this.flights.splice(idx, 1);
  }

  updateSeats(code : number){
    this.http.put(BusService.url + "/bus/" + code,null).subscribe();
  }
}
