import jwt  from "jsonwebtoken";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JTW_SECRET, {
    expiresIn,
  });
    return token;
};