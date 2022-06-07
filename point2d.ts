export class Point2D {
  _x: number;
  _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  set x(x) {
    this._x = x;
  }
  get y() {
    return this._y;
  }
  set y(y) {
    this._y = y;
  }
  getXY() {
    return { x: this._x, y: this._y };
  }
  setXY(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
}
