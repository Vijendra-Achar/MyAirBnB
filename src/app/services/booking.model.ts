export class Bookings {
    constructor(
        public bookingId: string,
        public placeId: string,
        public placeName: string,
        public UserId: string,
        public UserName: string,
        public noOfGuests: number
    ) { }
}