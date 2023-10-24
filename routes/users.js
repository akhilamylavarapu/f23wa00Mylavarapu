// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var express = require('express');
var userRouter = express.Router();
var sum = 0;
var more = 0;

userRouter.get('/', function(req,res) {
  more++;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

//module.exports = router;
module.exports = userRouter;
