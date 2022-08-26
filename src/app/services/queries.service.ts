import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  public url: string;

  constructor(private httpClient : HttpClient) {
    this.url = environment.API_URL;
  }

  ///////////////Métodos FIND
 async getPrincipal(idPersona: any){
  const req: any = await this.httpClient.post(this.url + '/find_persona', idPersona).toPromise();
  return req;
 }

 async getPerfil(idPersona: any){
  const reqP: any = await this.httpClient.post(this.url + '/find_textos', idPersona).toPromise();
  return reqP;
 }

 async getEducacion(idPersona: any){
  const req: any = await this.httpClient.post(this.url + '/find_educacion', idPersona).toPromise();
  return req;
 }

 async getHabilidades(){
  const req: any = await this.httpClient.post(this.url + '/find_habs', null).toPromise();
  return req;
 }

 async getContacto(idPersona: any){
  const req: any = await this.httpClient.post(this.url + '/find_contact', idPersona).toPromise();
  return req;
 }

 async getHabs(){
  const req: any = await this.httpClient.post(this.url + '/find_habilidades', null).toPromise();
  return req;
 }

 //////////Metodos DELETE
 async deleteEscuela(idEscuela: any){
  const req: any = await this.httpClient.post(this.url + '/escuela_delete', idEscuela).toPromise();
  return req;
 }

 async deleteTexto(idTexto: any){
  const req: any = await this.httpClient.post(this.url + '/texto_delete', idTexto).toPromise();
  return req;
 }

 async deleteContacto(idContacto: any){
  const req: any = await this.httpClient.post(this.url + '/contact_delete', idContacto).toPromise();
  return req;
 }

 async deleteHab(idHab: any){
  const req: any = await this.httpClient.post(this.url + '/hab_delete', idHab).toPromise();
  return req;
 }

 ////////////Métodos CREATE
 async createTextos(data: any){
  const req: any = await this.httpClient.post(this.url + '/texto_create', data).toPromise();
  return req;
 }

 async createEducacion(data: any){
  const req: any = await this.httpClient.post(this.url + '/escuela_create', data).toPromise();
  return req;
 }

 async createContacto(data: any){
  const req: any = await this.httpClient.post(this.url + '/contact_create', data).toPromise();
  return req;
 }
 
 async createHab(data: any){
  const req: any = await this.httpClient.post(this.url + '/hab_create', data).toPromise();
  return req;
 }

 async createUser(data: any){
  const req: any = await this.httpClient.post(this.url + '/user_create', data).toPromise();
  return req;
 }

 ////////////////Métodos UPDATE
 async updateTexto(data: any){
  const req: any = await this.httpClient.post(this.url + '/texto_update', data).toPromise();
  return req;
 }

 async updateEdu(data: any){
  const req: any = await this.httpClient.post(this.url + '/edu_update', data).toPromise();
  return req;
 }

 
}
