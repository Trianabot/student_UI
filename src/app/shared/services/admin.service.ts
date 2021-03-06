import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiRoute = environment.apiEndPoint;
  constructor(private http:HttpClient) { }

  uploadMeme(mimeData:FormData, mimeUrl):Observable<HttpEvent<{}>>{
  
    let httpheaders:HttpHeaders = new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem('token')
    });
    const req = new HttpRequest('POST', mimeUrl, mimeData, {
      headers:httpheaders,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getStudentData() {
    return this.http.get(this.apiRoute + '/user/getstudinfo');
  }

  verifyStudent(data){
    return this.http.post(this.apiRoute + '/user/verifystudent',data);
  }

  logout(data){
    return this.http.post(this.apiRoute + '/user/logout',data);
  }

  pushFileToStorage(file: File, uploadUrl_): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('profileImg', file);
    const req = new HttpRequest('POST', uploadUrl_, formdata, {
      reportProgress: true,
      responseType: 'json'
    }
    );
    return this.http.request(req);
  }
  getVideos(){
    return this.http.get(this.apiRoute + '/adminroute/getvideos');
  }
  getVideosByType(data){
    return this.http.post(this.apiRoute + '/adminroute/getvideosbytype',data);
   }

   getSubjectDetails(data){
    return this.http.post(this.apiRoute + '/adminroute/getsubjectdetails',data);
   }

   getvideosbySelectedType(data){
    return this.http.post(this.apiRoute + '/adminroute/getvideosbyselectedtype',data);
   }

   //To get all cources 
   getCources(){
    return this.http.get(this.apiRoute + '/adminroute/getcources');
   }

   // To add subject
   addSubject(data){
    return this.http.post(this.apiRoute + '/adminroute/addsubject',data);
   }

   addCource(data){
    return this.http.post(this.apiRoute + '/adminroute/addcource',data);
   }

   getsubjectbyid(data){
      return this.http.post(this.apiRoute + '/adminroute/getsubjectbyid',data);
   }

   postComments(data){
    return this.http.post(this.apiRoute + '/adminroute/postcomment',data);
  }

}
