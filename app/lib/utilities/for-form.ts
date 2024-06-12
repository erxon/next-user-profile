import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

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
  if (file && file.size > 0) {
    return file;
  }
  return undefined;
}

export async function imageUpload(file: File) {
  const { resources: avatar } = await cloudinary.api.resources_by_tag(
    "next-profile-avatar",
    { context: true }
  );

  const buffer = await imageToBuffer(file);
  //handle image upload here
  try {
    const uploadAvatarURL: string | undefined = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              tags: ["next-profile-avatar"],
            },
            function (error, result) {
              if (error) {
                reject(error);
                return;
              }
              resolve(result?.url);
            }
          )
          .end(buffer);
      }
    );
    return uploadAvatarURL;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
