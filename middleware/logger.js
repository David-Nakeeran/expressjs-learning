import colors from "colors";

const logger = (req, res, next) => {
  const methodColours = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const colour = methodColours[req.method] || white;
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      colour
    ]
  );
  next();
};

export default logger;
