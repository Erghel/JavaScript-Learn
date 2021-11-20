import { square } from "./math.js"
// Вычисление площади треугольника
const getTriangleArea = (h, b) => {
    return 1/2 * h * b;
};

const solution = (n) => {
    return getTriangleArea (n, square(n)/2);
};
