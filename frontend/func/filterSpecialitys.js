export function getSpecialtyByNum(specialties, numSpec) {
  if (!specialties) {
    console.error("Specialties array is undefined");
    return null; // Or you can return an empty object or whatever suits your application
  }

  return specialties.find((spec) => spec.numSpec === numSpec) ?? null;
}
