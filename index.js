const mongoose = require("mongoose");
const app = require("./app");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/EventoStudentes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
    });
  })
  .catch((error) => console.log(error));
