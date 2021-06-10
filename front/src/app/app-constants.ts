export class AppConstants {

    public static get baseServidor(): string{return "http://54.90.39.27:5000/"}

    public static get baseLogin(): string {return this.baseServidor + "login" }
    
    public static get baseUrl(): string {return this.baseServidor + "usuario"}

}
