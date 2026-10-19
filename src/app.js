export function main(argv) {
  console.log("hello", argv.join(" "));
  if (argv.includes("--experimental")) console.log("experimental mode");
  return 0;
}
