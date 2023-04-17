import { AddTask } from "./components/add-task";
import { ViewTasks } from "./components/view-tasks";
import { ViewTask } from "./components/view-task";

export class MyApp {
  static routes = [
    {
      path: "",
      component: ViewTasks,
      title: "Home",
    },
    {
      path: "add-task",
      component: AddTask,
      title: "Agregar Tareas",
    },
    {
      path: "task",
      component: ViewTasks,
      title: "Tareas",
    },
    {
      path: "task/:id",
      component: ViewTask,
      title: "Tarea",
    },
  ];

  
}
