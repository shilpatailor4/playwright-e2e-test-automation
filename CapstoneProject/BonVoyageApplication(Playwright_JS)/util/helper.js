export class Helper {
    
    // Generates a random string of a specified length
     
    static generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

   
    // Generates a random email
    
    static generateRandomEmail() {
        return `testuser_${this.generateRandomString(5)}@example.com`;
    }
}