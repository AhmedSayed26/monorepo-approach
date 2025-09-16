export function start() {
  // Placeholder service entrypoint
  console.log("Starting service: auth");
}

if ((globalThis as any).require?.main === module) {
  start();
}




