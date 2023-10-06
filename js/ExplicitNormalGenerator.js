function explicitNormalGenerator(n = 1000) {
    const e = new ExplicitNormalGenerator(n)
    return {
        areas: e.areas_, 
        positions: [], 
        normals: e.normals_
    }
}

class ExplicitNormalGenerator {
    constructor(n = 1000) {
        this.reg_ = true
        this.nbr_ = 0
        this.areas_ = []
        this.normals_ = []
        this.generate(n)
    }

    generate(n) {
        let vecs = []
        if (this.reg_ === false) {
            for (let i = 0; i < n; ++i) {
                let z = Math.random()
                let phi = Math.random() * Math.PI / 2.0
                let r = Math.sqrt(1.0 - z * z)
                let x = r * Math.cos(phi)
                let y = r * Math.sin(phi)
                vecs.push([x, y, z])
            }
        } else {
            let r = 1.0
            let a = 4.0 * Math.PI * r * r / n
            let d = Math.sqrt(a)
            let Mv = Math.round(Math.PI / d)
            let dv = Math.PI / Mv
            let dphi = a / dv
            for (let m = 0; m < Mv; ++m) {
                let v = Math.PI * (m + 0.5) / Mv / 2 // /2
                let Mphi = Math.round(2.0 * Math.PI * Math.sin(v) / dphi) // /4
                for (let p = 0; p < Mphi / 4; ++p) {
                    let phi = 2.0 * Math.PI * p / Mphi
                    let x = Math.sin(v) * Math.cos(phi)
                    let y = Math.sin(v) * Math.sin(phi)
                    let z = Math.cos(v)
                    vecs.push([x, y, z])
                }
            }
        }

        let tArea = 4.0 * Math.PI / 8.0 / vecs.length
        for (let i = 0; i < vecs.length; ++i) {
            this.normals_.push(vecs[i][0], vecs[i][1], vecs[i][2])
            this.areas_.push(tArea)
        }

        this.nbr_ = this.areas_.length
    }
}
