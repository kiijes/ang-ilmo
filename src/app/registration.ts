export class Registration {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public food: string,
        public sauna: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.food = food;
        this.sauna = sauna;
    }
}
