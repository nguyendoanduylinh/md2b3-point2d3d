"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
const point2d_1 = require("./point2d");
class Point3D extends point2d_1.Point2D {
    constructor(x, y, z) {
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
    setXYZ(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
}
exports.Point3D = Point3D;
