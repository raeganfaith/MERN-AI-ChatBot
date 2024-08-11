import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JTW_SECRET, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map