const express = require('express');
const app = express();

//3300은 포트번호 
const server = app.listen(3300, () => {
    console.log("Start Server : localhost:3300");
    //처음 (app.get 없을때)하면 Cannot GET /이 뜨고 웹서버가 정상적으로 구동 완료 
});

//이 폴더에 정의되어 있는 걸 갖고오라고 정의 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// localhost:3300/ 이면 Hello World가 나오게 보내주기
app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/about', function (req, res) {
    res.render('about.html')
})

//mysql DB 연결
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

//라우터
app.get('/db', function (req, res) {
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM Test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results', results);
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) throw error;
        
            // Don't use the connection here, it has been returned to the pool.
        });
      });
})