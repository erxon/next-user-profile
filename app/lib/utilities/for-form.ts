import fs from "fs";

export function isEmpty(fieldName: string, formData: FormData) {
  if (formData.get(fieldName) === "") {
    return true;
  } else {
    return false;
  }
}

export async function imageToBuffer(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  return buffer;
}

export async function checkFile(file: File) {
  if (file.size > 0) {
    return file;
  }
  return undefined;
}
