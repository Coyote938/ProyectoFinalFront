import { CrudApi } from "../services/task-api";
import { IRouter, IRouteableComponent, Parameters } from "@aurelia/router";

export class ViewTask implements IRouteableComponent {
  private id;
  private data;
  private tarea;
  private descripcion;
  private prioridad;
  private error;

  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.error = false;
  }

  async canLoad(params: Parameters) {
    this.id = params.id;
    this.searhcTask(this.id);
    return true;
  }
  async searhcTask(id) {
    this.data = await this.api.getTask(id);
    this.tarea = this.data.tarea;
    this.descripcion = this.data.descripcion;
    this.prioridad = this.data.prioridad;
  }
  async updateTask() {
    this.data = await this.api.updateTask(
      this.tarea,
      this.descripcion,
      this.prioridad,
      this.id,
    );
    this.data == "error" ? (this.error = true) : this.HomePage();
  }
  async HomePage() {
    await this.router.load("/");
  }
  closeAlert() {
    this.error = false;
  }
}
