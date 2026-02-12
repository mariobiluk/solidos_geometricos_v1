class Cone {
    // "constructor" = abre o espaço na memória para armazenar os dados de raio e altura
    constructor(raio, altura) {
        // "this" = relaciona o raio ou altura declarados aqui dentro com as informações que vem de fora
        this.raio = raio
        this.altura = altura
    }

    calcularArea() {
        // Ab = pi*r²
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume() {
        // V = Ab * h
        let volume = 0.0
        volume = (1 / 3) * this.calcularArea() * this.altura
        return volume
    }
}

module.exports = Cone