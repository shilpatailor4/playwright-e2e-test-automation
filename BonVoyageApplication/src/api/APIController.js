import { url } from "node:inspector";
import { ENDPOINTS } from "./Endpoints";

export class APIController {
  constructor(request) {
    this.request = request;
  }

  async registerNewUser(userData) {
    const response = await this.request.post(ENDPOINTS.USERS, {
      data: {
        userName: userData.username,
        userEmail: userData.email,
        userPhone: userData.phone,
        userPassword: userData.password,
        userAddress: userData.address,
        userRole: "user", // Set as default
      },
    });
    return response;
  }

  // GET Method: Fetch all packages
  async getAllPackages() {
    const response = await this.request.get(ENDPOINTS.PACKAGES);
    return response;
  }

  // GET Method: Fetch specific package by ID
  async getPackageById(id) {
    const response = await this.request.get(ENDPOINTS.PACKAGES, {
      params: { packageID: id },
    });
    return response;
  }

  async getPackageByLocation(city) {
    const response = await this.request.get(ENDPOINTS.PACKAGES, {
      params: {
        // This must match the key in your URL: ?packageCity=London
        packageCity: city,
      },
    });
    return response;
  }

  // POST Method: Create a User
  async createUser(userData) {
    const response = await this.request.post(ENDPOINTS.USERS, {
      data: userData,
    });
    return response;
  }

  // GET Method: Fetch specific package by one user details
  async getUsersByEmail(email) {
    const response = await this.request.get(ENDPOINTS.USERS, {
      params: { userEmail: email },
    });
    console.log("UserEmailUrl:", response.url());
    return response;
  }

  // POST Method: Create a Booking
  async createBooking(bookingData) {
    const response = await this.request.post(ENDPOINTS.BOOKINGS, {
      data: bookingData,
    });
    return response;
  }
}
