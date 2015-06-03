# Dbug
<h3>Example Usage</h3>
```js
var dbug = new Dbug();
dbug.time('turtles');

for( var i = 0; i < 1000; i++){}
dbug.time('turtles');
for( var i = 0; i < 1000; i++){}
dbug.time('turtles');
for( var i = 0; i < 2000; i++){}
dbug.time('turtles');
```

![Screenshot](https://raw.githubusercontent.com/guillermoroblesjr/Dbug.js/master/screenshot.PNG)
