"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point2d_1 = require("./point2d");
const point3d_1 = require("./point3d");
let point2d = new point2d_1.Point2D(10, 20);
console.log(point2d.getXY());
let point3d = new point3d_1.Point3D(10, 20, 30);
console.log(point3d.getXYZ());
