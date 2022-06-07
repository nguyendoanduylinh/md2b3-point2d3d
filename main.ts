import { Point2D } from "./point2d";
import { Point3D } from "./point3d";

let point2d: Point2D = new Point2D(10, 20);
console.log(point2d.getXY());

let point3d: Point3D = new Point3D(10, 20, 30);
console.log(point3d.getXYZ());
