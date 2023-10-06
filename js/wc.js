class WC {
    constructor(generator) {
        this.S1 = 1.
        this.S2 = 5.
        this.S3 = 0.
        this.friction = 0.
        this.cohesion = 0.
        this.lambda = 0.

        this.normals = df.Serie.create({ array: [...generator.normals], itemSize: 3 })
        this.areas = df.Serie.create({ array: [...generator.areas], itemSize: 1 })

        this.info_ = new Info(this.normals.count)
    }

    set R(v) {
        this.S2 = (this.S1 - this.S3) * v + this.S3
    }

    get R() {
        return (this.S2 - this.S3) / (this.S1 - this.S3)
    }

    get info() {
        return this.info_
    }

    get data() {
        return this.info_
    }

    run() {
        this.info_.reset()

        for (let i = 0; i < this.normals.count; ++i) {
            if (0) {
                const N = this.normals.itemAt(i)
                const area = this.areas.itemAt(i)
                const l2 = N[0] ** 2
                const m2 = N[1] ** 2
                const n2 = N[2] ** 2

                const sigmaN = this.S1 * l2 + this.S2 * m2 + this.S3 * n2

                const tau = Math.sqrt(
                    this.S1 ** 2 * l2 + this.S2 ** 2 * m2 + this.S3 ** 2 * n2 - sigmaN ** 2,
                )

                const Teff = tau - (this.friction * (1 - this.lambda) * sigmaN + this.cohesion)

                if (Teff >= 0) {
                    this.info_.add(Teff ** 2, area)
                }
            }
            else {
                const N = this.normals.itemAt(i)
                const area = this.areas.itemAt(i)
                const l = N[0]
                const m = N[1]
                const n = N[2]
                const S12 = (this.S1 - this.S2) * (this.S1 - this.S2)
                const S23 = (this.S2 - this.S3) * (this.S2 - this.S3)
                const S31 = (this.S3 - this.S1) * (this.S3 - this.S1)
                const l2 = l * l
                const m2 = m * m
                const n2 = n * n
                const tn = Math.sqrt(S12 * l2 * m2 + S23 * m2 * n2 + S31 * n2 * l2)
                const Sn = this.S1 * l2 + this.S2 * m2 + this.S3 * n2
                const Co = Sn * this.friction * (1 - this.lambda) + this.cohesion
                if (tn >= Co) {
                    this.info_.add((tn - Co) ** 2, area)
                }
            }
        }
    }
}

class Info {
    constructor(count) {
        this.reset()
        this.count = count
    }

    reset() {
        this.E = 0
        this.n_ = 0
        this.mean = 0
        this.max = Number.NEGATIVE_INFINITY
        this.array = []
    }

    get n() {
        return this.n_ / this.count
    }

    incN() {
        this.n_++
    }

    /**
     * Add a new element to the array and update related properties.
     *
     * @param {number} e - The energy of the crack
     * @param {number} area - The area of the crack on the unit sphere
     */
    add(e, area) {
        const ev = area * e
        this.E += ev
        this.array.push(ev)
        this.incN()
        if (ev > this.max) {
            this.max = ev
        }
        this.mean = this.E / this.n
    }
}