<template>
    <html>
<head>
<title>Login Form</title>
</head>
<body>
<div class="container">
  <h1>Login Form</h1>
  <form action="/login" method="post">
    <input type="text" class="form-control" name="username" placeholder="Username">
    <input type="password" class="form-control" name="password" placeholder="Password">
    <button type="submit" class="btn">Login</button>
  </form>
</div>
</body>
</html>
</template>


<style>
body {
  font-family: sans-serif;
  background-color: #fff;
}

.container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f1f1f1;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.btn {
  background-color: #04AA6D;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #008844;
}
</style>