type message = "info" | "warning" | "error";
export function message(message: string): void {
  console.log("The message is", message);
}
