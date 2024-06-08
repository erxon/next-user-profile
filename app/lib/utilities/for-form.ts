export function isEmpty(fieldName: string, formData: FormData) {
  if (formData.get(fieldName) === "") {
    return true;
  } else {
    return false;
  }
}
