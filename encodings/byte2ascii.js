function bytesToAscii(byteArray) {
  return byteArray.map((byte) => String.fromCharCode(byte)).join("");
}

// Example usage:
const bytes = [72, 251, 158, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"
