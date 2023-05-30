export class UserRegister {
  private username: string;
  private password: string;
  private email: string;
  private city: string;
  private country: string;
  private dateOfBirth: Date;

  constructor(username: string, password: string, email: string, city: string, country: string, dateOfBirth: Date) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.city = city;
    this.country = country;
    this.dateOfBirth = dateOfBirth;
  }
}
