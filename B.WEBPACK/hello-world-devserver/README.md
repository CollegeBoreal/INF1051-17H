# Un exemple simple de webpack



index.html
```
<!DOCTYPE html>
<html>
<body>
  <script src="/bundle.js"></script>
</body>
</html>
```
main.js
```
document.write('Hello World!');
```


```
$ npm init -y
```

```
npm install webpack webpack-dev-server --save-dev
```
Ajouter `webpack-dev-server` à `scripts.start`
```
scripts": {
   "start": "webpack-dev-server"
}
```



