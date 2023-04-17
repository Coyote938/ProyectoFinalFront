import { CrudApi } from "../services/task-api";
import { IRouter, IRouteableComponent } from "@aurelia/router";

export class AddTask implements IRouteableComponent {
  private data;
  private tarea;
  private descripcion;
  private prioridad;
  private error;

  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.error = false;
  }

  async createTask() {
    this.data = await this.api.createTask(
      this.tarea,
      this.descripcion,
      this.prioridad
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
