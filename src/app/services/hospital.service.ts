import { Injectable } from '@angular/core';
import { BaseUrlProvider } from '../providers/urls.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private url: BaseUrlProvider, private http: HttpClient) { }

  getAllHospital = () => {
    return this.http.get(`${this.url.apiBaseUrl}hospital/allHospitals`);
  }

  addNewHospital = (hospital) => {
    if (hospital.hospId == undefined)
      return this.http.post(`${this.url.apiBaseUrl}hospital/addHospital`, hospital);
    else
      return this.http.put(`${this.url.apiBaseUrl}hospital/updateHospital`, hospital)
  }

  deleteHospital = (hospital) => {
    return this.http.delete(`${this.url.apiBaseUrl}hospital/deleteHospital/${hospital.hospId}`);
  }
  editHopital = (hospital) => {
    return this.http.put(`${this.url.apiBaseUrl}hospital/updateHospital`, hospital)
  }
}
