import { Point2D } from "./point2d";

export class Point3D extends Point2D {
  _z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this._z = z;
  }
  get z() {
    return this._z;
  }
  set z(z) {
    this._z = z;
  }
  getXYZ() {
    return { x: this._x, y: this._y, z: this._z };
  }
  setXYZ(x: number, y: number, z: number) {
    this._x = x;
    this._y = y;
    this._z = z;
  }
}
