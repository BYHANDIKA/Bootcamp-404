// Membuat tombol readmore
function ShowMore(){
    document.getElementById("artikel").innerHTML += "halaman website lebih menarik.";
    document.getElementById("link").style.display = "none";
}
// Validasi Masukan
function Klik(){
    document.getElementById("info").innerHTML = "Isikan semua field, format email xxx@gmail.com, nomor HP minimal 10 digit angka"
}

function Validate(){
    event.preventDefault();
    var huruf = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputNama = document.forms["form_daftar"]["nama"].value;
    var inputEmail = document.forms["form_daftar"]["email"].value;
    var inputAlamat = document.forms["form_daftar"]["alamat"].value;
    var inputNomor = document.forms["form_daftar"]["nomorHP"].value;
        if( inputNama.match(huruf) )
        {
            var namaValid = inputNama;
        }else{
            alert("Input nama tidak sesuai");
        }
        if( inputEmail.match(mailformat) )
        {
            var emailValid = inputEmail;
        }else{
            alert("Input email tidak sesuai")
        }
        if (inputAlamat == ""){
            alert("Alamat tidak boleh kosong");
        }else{
            var alamatValid = inputAlamat;
        }
        if (isNaN(inputNomor) || inputNomor.toString().length <10 ) {
            alert("Input nomor HP tidak sesuai");
        } else{
            var nomorValid = inputNomor;
        }
        document.getElementById("hasil").innerHTML = namaValid+"<br>"+emailValid+"<br>"+alamatValid+"<br>"+nomorValid;

        document.getElementById("tombol2").textContent = "Registered!"
}
// Membuat tampilan MODAL
function tampilModal(){
    document.getElementById('idModal').style.display='block';
}

function tutupModal(){
    document.getElementById('idModal').style.display='none';
}

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        if ( username == "user" && password == "123"){
            alert("Login Berhasil");
        }
        else
            alert("Username dan Password anda salah!");
}