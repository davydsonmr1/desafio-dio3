class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não possui um ataque definido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Hero("Gandalf", 1000, "mago");
heroi1.atacar();  // Saída: O mago atacou usando usou magia

const heroi2 = new Hero("Conan", 35, "guerreiro");
heroi2.atacar();  // Saída: O guerreiro atacou usando usou espada

const heroi3 = new Hero("Bruce Lee", 32, "monge");
heroi3.atacar();  // Saída: O monge atacou usando usou artes marciais

const heroi4 = new Hero("Naruto", 19, "ninja");
heroi4.atacar();  // Saída: O ninja atacou usando usou shuriken
