import { CrudApi } from "../services/task-api";
import { IRouter, IRouteableComponent } from "@aurelia/router";

export class ViewTasks implements IRouteableComponent {
  private data;
  private delete;
  constructor(private api: CrudApi, @IRouter private router: IRouter) {
    this.success();
  }

  async success() {
    this.data = await this.api.getAllData();
  }
  async deleteTask(id) {
    this.delete = await this.api.deleteTask(id);
    this.success()
  }
  async RegisterTaskPage() {
    await this.router.load("/add-Task");
  }
  async EditPage(id) {
    await this.router.load(`/Task/${id}`);
  }
}
