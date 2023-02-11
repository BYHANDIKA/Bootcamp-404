// Membuat tampilan MODAL
function tampilModal(){
    document.getElementById('idModal').style.display='block';
}

function tutupModal(){
    document.getElementById('idModal').style.display='none';
}

function validate(){
    var nama = document.getElementById("nama").value;
    var nomerhp = document.getElementById("nomerhp").value;
        if ( nama == "Handika" && nomerhp == "08122107"){
            alert("Pendaftaran Berhasil ygy");
        }
        else
            alert("Nama dan Nomer HP anda salah Bro!");
}