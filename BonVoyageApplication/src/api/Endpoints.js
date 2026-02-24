export const ENDPOINTS = {
  PACKAGES: "/packages",
  USERS: "/users",
  BOOKINGS: "/bookings",
};

/** 
 * All packages: http://localhost:3000/packages    (Get method) To Get all the package details
 * 
 * One package id: http://localhost:3000/packages?packageID=P101   (Get method) To Get packages based on Package Id
 * 
 * Users: http://localhost:3000/users (Post Method)
 * { "userName" : “Lee", 
 * "userEmail": “Lee@gmail.com", 
 * "userPhone": "6180942356", 
 * "userPassword": “Lee123$", 
 * "userAddress": "india", 
 * "userRole": "userRole" }

To register new User Successful registered user will receive the success email

http://localhost:3000/packages?packageCity=London (Get Method) To Get packages based on Location

http://localhost:3000/users?userEmail=manzoor@gmail.com  (Get method) Get one user details


http://localhost:3000/bookings   (POST method) Book the package

{
userID: 23,
bookingID: P101,
bookingDate: 01/01/2024,
bookingPerson: Manzoor,
bookingRooms: 2
}

 * 
 */
