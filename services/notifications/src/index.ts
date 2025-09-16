export function start() {
  // Placeholder service entrypoint
  console.log("Starting service: notifications");
}

if ((globalThis as any).require?.main === module) {
  start();
}




