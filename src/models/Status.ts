import { LightModel } from "./Light";

export class StatusModel {
  zebra: boolean = false;
  lights: LightModel[] = [];
  car: boolean = false;
  ready: boolean = false;
}