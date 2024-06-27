import ClassRoom from './0-classroom';

/**
 * Creates an array of classroom objects.
 * @returns An array of {@link ClassRoom} objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
