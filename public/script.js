
getData();
async function getData(){
	const response = await fetch('/read');
	const json = await response.json();
	console.log(json);
	showData(json);
}

const btnSave = document.getElementById('btn_save');
btnSave.addEventListener('click', async event => {

    const action = btnSave.textContent;

    const id = document.getElementById('id').value;
    const mata_pelajaran = document.getElementById('mata_pelajaran').value;
    const kelas = document.getElementById('kelas').value;
    const jurusan = document.getElementById('jurusan').value;
    const tipe_kelas = document.getElementById('tipe_kelas').value;
    const nama_guru = document.getElementById('nama_guru').value;

    let data = {
        id : id,
        mata_pelajaran : mata_pelajaran,
        kelas : kelas,
        jurusan : jurusan,
        tipe_kelas : tipe_kelas,
        nama_guru : nama_guru,
        action : action
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
    
    getData();

    $('#exampleModal').modal('hide');

    if(action === 'Simpan'){
        $.alert('Data Berhasil ditambah!');
    }else{
        $.alert('Data Berhasil diubah!');
    }
});

function showData(json){
    let tr = '';
    $('#databody').html('');
    // let no;
    for (let i = 0; i < json.length; i++) {
        // no = i + 1;
        tr = $('<tr/>');
        tr.append("<td>" + json[i].id + "</td>");
        tr.append("<td>" + json[i].mata_pelajaran + "</td>");
        tr.append("<td>" + json[i].kelas + "</td>");
        tr.append("<td>" + json[i].jurusan + "</td>");
        tr.append("<td>" + json[i].tipe_kelas + "</td>");
        tr.append("<td>" + json[i].nama_guru + "</td>");
        tr.append(`
            <td>
                <button type="button" class="badge badge-primary badge-pill btnEdit" data-id="`+ json[i].id +`">
                    Edit
                </button>
                <button type="button" class="badge badge-danger badge-pill btnHapus" data-id="`+ json[i].id +`">
                    Hapus
                </button>
            </td>`
        );
        $('#databody').append(tr);
    }

    //Jquery Selector
    $(function(){
        $('.btnTambahData').on('click', function(){
            document.getElementById('id').readOnly = false;
            document.getElementById('id').value = '';
            document.getElementById('mata_pelajaran').value = '';
            document.getElementById('kelas').value = '';
            document.getElementById('jurusan').value = '';
            document.getElementById('tipe_kelas').value = '';
            document.getElementById('nama_guru').value = '';

            $('#exampleModalLabel').html('Tambah Data Siswa');
            $('.modal-footer button[id=btn_save]').html('Simpan');
        });

        $('.btnEdit').on('click', async function(){
            let id = $(this).data('id');
            console.log(id);

            const url = `read/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            console.log(json[0].id);

            document.getElementById('id').readOnly = true;
            document.getElementById('id').value = json[0].id;
            document.getElementById('mata_pelajaran').value = json[0].mata_pelajaran;
            document.getElementById('kelas').value = json[0].kelas;
            document.getElementById('jurusan').value = json[0].jurusan;
            document.getElementById('tipe_kelas').value = json[0].tipe_kelas;
            document.getElementById('nama_guru').value = json[0].nama_guru;

            $('#exampleModalLabel').html('Ubah Data Siswa');
            $('.modal-footer button[id=btn_save]').html('Ubah Data');
            $('#exampleModal').modal('show');
        });

        $('.btnHapus').on('click', async function(){
            let id = $(this).data('id');

            $.confirm({
                title: 'Hapus Data Siswa',
                content: 'Apakah Anda Yakin...???',
                buttons: {
                    ya: {
                        text: 'YA',
                        btnClass: 'btn-blue',
                        action: async function(){
                            const url = `hapus/${id}`;
                            const response = await fetch(url);
                            const json = await response.json();
                            $.alert('Data Berhasil dihapus!');
                            getData();
                        }
                    },
                    tidak: function () {
                        
                    }
                }
            });
        });
    })
}