import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Authentication failed",
        success: false,
      });
    } else {
      req.body.userId = decoded.id;
      next();
    }
  });
};

export default protect;
