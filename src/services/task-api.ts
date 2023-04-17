import { HttpClient, json } from "@aurelia/fetch-client";
import { inject } from "aurelia";

@inject(HttpClient)
export class CrudApi {
  constructor(private http: HttpClient) {}

  public async getAllData(): Promise<any> {
    const req = await this.http.fetch(
      `https://tareasapp-production.up.railway.app/tareas/`
    );
    return req.json();
  }
  public async getTask(id): Promise<any> {
    const req = await this.http.fetch(
      `https://tareasapp-production.up.railway.app/tareas/${id}`
    );
    return req.json();
  }
  public async createTask(tarea, descripcion, prioridad): Promise<any> {
    let body = {
      tarea: tarea,
      descripcion: descripcion,
      prioridad: prioridad
  ,
    };
    const req = await this.http.fetch(
      "https://tareasapp-production.up.railway.app/tareas/",
      { method: "post", body: json(body) }
    );
    return req.status == 400 ? "error" : req.json(); 
    
  }
  public async updateTask(tarea, descripcion, prioridad, id): Promise<any> {
    
    const req = await this.http.fetch(
      `https://tareasapp-production.up.railway.app/tareas/${id}?tarea=${tarea}&descripcion=${descripcion}&prioridad=${prioridad}`,
      { method: "put"}
    );
    return req.status == 400 ? "error" : req.json(); 
  }
  public async deleteTask(id): Promise<any> {
    const req = await this.http.fetch(
      `https://tareasapp-production.up.railway.app/tareas/${id}`,
      {
        method: "delete",
      }
    );
    return req.json();
  }

}
