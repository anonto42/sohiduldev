export class ApiResponse<T = any> {
    success: boolean;
    message: string;
    status: number;
    data?: T;
  
    constructor(success: boolean, message: string, status: number, data?: T) {
      this.success = success;
      this.message = message;
      this.status = status;
      this.data = data;
    }
  
    static success<T>(message: string, status: number = 200, data?: T): Response {
      return new Response(
        JSON.stringify({ success: true, message, status, data }),
        { status, headers: { "Content-Type": "application/json" } }
      );
    }
  
    static error<T>(message: string, status: number = 400, data?: T): Response {
      return new Response(
        JSON.stringify({ success: false, message, status, data }),
        { status, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  