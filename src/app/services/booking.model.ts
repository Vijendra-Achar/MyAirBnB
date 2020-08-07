export class Bookings {
    constructor(
        public bookingId: string,
        public placeId: string,
        public placeName: string,
        public placeImage: string,
        public placeSuite: string,
        public placePerNight: number,
        public placeAddress: string,
        public userName: string,
        public userId: string,
        public userEmail: string,
        public userPhNumber: number,
        public noOfGuests: number,
        public bookingDateFrom: Date,
        public bookigDateTill: Date,
        public bookingDays: number,
        public totalPrice: number
    ) { }
}