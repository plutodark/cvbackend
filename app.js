var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InBsdXRvZGFya0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBhdWwiLCJleHAiOjE0OTEwNTUwNjZ9.1906GrNioprjSQKE09w8GPf4icQecwFQK8Ov5DEEW5Y';


app.get('/:password', function (req,res) {
  console.log(req.params.password);
  if(req.params.password === '98539314'){
    console.log('success');
    auth = {
      status: 'success',
      JWT: jwt,
      }
  }else{
    console.log('failed');
    auth = {
      status: 'failed',
      message: 'Wrong Password',
    }
  }
  res.json(auth);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})