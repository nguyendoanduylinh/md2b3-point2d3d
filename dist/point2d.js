"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
class Point2D {
    constructor(x, y) {
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
    setXY(x, y) {
        this._x = x;
        this._y = y;
    }
}
exports.Point2D = Point2D;
