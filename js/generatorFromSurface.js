import { normals, areas, barycenters } from '@youwol/math'
export function generatorFromSurfaces(positions, indices) {
    return {
        normals: normals(positions, indices),
        areas: areas(positions, indices),
        positions: barycenters(positions, indices)
    }
}
