/**
 * Creates a buffer array with a given position set to a given value.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view.set([value], position);
  return new DataView(buffer);
}
