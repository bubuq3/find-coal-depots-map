import { FieldResolver } from "nexus";
const cloudinary = require("cloudinary").v2;

export const createImageSignatureResolver: FieldResolver<
  "Mutation",
  "createImageSignature"
> = () => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature: string = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    process.env.CLOUDINARY_SECRET
  );
  return { timestamp, signature };
};