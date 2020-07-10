export class Place {
    constructor(public id: string,
        public placeName: string,
        public description: string,
        public address: string,
        public imageUrl: string,
        public price: number,
        public rating: number,
        public features: string[],
        public availableFrom: Date,
        public availableTill: Date
    ) { }
}