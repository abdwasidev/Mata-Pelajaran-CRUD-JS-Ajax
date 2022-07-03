const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const app        = express();


//Koneksi ke mysql database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datamapel'
});

//connect ke database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Koneksi berhasil');
});

app.use(bodyParser.json());
app.listen(4000, () => console.log('Server berjalan di port 4000'));
app.use(express.static('public'));

//Baca Semua Data
app.get('/read',(req, res) => {

  let sql = "SELECT * FROM mapel";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.json(results);
  });
});

//Baca Data Berdasarkan ID
app.get('/read/:id', async (req, res) =>{
	const id = req.params.id;
	console.log(id);

	let sql = "SELECT * FROM mapel Where id = "+ id +"";
  	let query = conn.query(sql, (err, results) => {
    	if(err) throw err;
    	res.json(results);
  	});
});

//route untuk insert data
app.post('/api', (req, res) => {
    let action = req.body.action;
    let data = {id: req.body.id, mata_pelajaran: req.body.mata_pelajaran, kelas: req.body.kelas, jurusan: req.body.jurusan, tipe_kelas: req.body.tipe_kelas, nama_guru: req.body.nama_guru};
    let sql;

    if(action === 'Simpan'){
        sql = "INSERT INTO mapel SET ?";    
    }else{
        sql = `UPDATE mapel SET mata_pelajaran='`+req.body.mata_pelajaran+`', kelas='`+req.body.kelas+`', jurusan='`+req.body.jurusan+`', tipe_kelas='`+req.body.tipe_kelas+`', nama_guru='`+ req.body.nama_guru +`', WHERE id='`+req.body.id+`';`
        // sql = "UPDATE mapel SET id='"+req.body.id+"', mata_pelajaran='"+req.body.mata_pelajaran+"', kelas='"+req.body.kelas+"', jurusan='"+req.body.jurusan+"', tipe_kelas='"+req.body.tipe_kelas+"', nama_guru='"+req.body.nama_guru+"' WHERE id="+req.body.id;
    }
    
    console.log(sql);
    let query = conn.query(sql, data,(err, results) => {
       if(err) throw err;
       res.json(results);
       console.log(results);
    });
});

//Baca Data Berdasarkan ID
app.get('/hapus/:id', async (req, res) =>{
    const id = req.params.id;
    console.log(id);

    let sql = `DELETE FROM mapel Where id = '`+ id +`';`
      let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
      });
});