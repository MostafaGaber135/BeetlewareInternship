export function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log("Id: (String)", id.toUpperCase());
  } else if (typeof id === "number") {
    console.log("Id: (Number)", id.toFixed(2));
  }
}
