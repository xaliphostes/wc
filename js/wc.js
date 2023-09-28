class WC {
    constructor(generator) {
        this.S1 = 10
        this.S2 = 5
        this.S3 = 5
        this.friction = 0
        this.dis_ = new Info()

        this.positions = generator.positions
        this.normals = generator.normals
        this.area = generator.areas
    }

    get info() {
        return this.dis_
    }

    run() {
        this.dis_.reset()

        for (let i = 0; i < this.normals.length; ++i) {
            const N = this.normals[i]
            const area = this.areas[i]
            const l2 = N[0] ** 2
            const m2 = N[1] ** 2
            const n2 = N[2] ** 2

            const Sn = this.S1 * l2 + this.S2 * m2 + this.S3 * n2
            const Tn = Math.sqrt(
                this.S1 ** 2 * l2 + this.S2 ** 2 * m2 + this.S3 ** 2 * n2 - Sn ** 2,
            )
            const T = Sn * this.friction

            if (Tn > T) {
                const Ed = (Tn - T) ** 2
                this.dis_.add(Ed, area)
            }
        }
    }
}

class Info {
    constructor() {
        this.reset()
    }

    reset() {
        this.E = 0
        this.n = 0
        this.mean = 0
        this.max = Number.NEGATIVE_INFINITY
        this.array = []
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
        this.n++
        if (ev > this.max) {
            this.max = ev
        }
        this.mean = this.E / this.n
    }
}