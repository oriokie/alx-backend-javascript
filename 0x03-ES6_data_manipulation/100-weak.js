export const weakMap = new WeakMap();

const MAX_NO_OF_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= MAX_NO_OF_CALLS) {
    throw new Error("Endpoint load is high");
  }
}
