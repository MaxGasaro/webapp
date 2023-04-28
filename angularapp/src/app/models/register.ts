export class UserRegister {
  private username: string;
  private password: string;
  private email: string;

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
