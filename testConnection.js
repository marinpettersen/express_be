const pool = require('./config/database');
// Konfigurasi koneksi ke database


// Fungsi untuk menguji koneksi ke database
async function testConnection() {
  try {
    // Mencoba membuat koneksi ke database
    const client = await pool.connect();
    
    // Jika berhasil terkoneksi, log pesan ke konsol
    console.log('Koneksi ke database berhasil.');
    
    // Setelah selesai, lepaskan koneksi
    client.release();
    
    // Kembalikan true untuk menunjukkan koneksi berhasil
    return true;
  } catch (error) {
    // Jika ada kesalahan, log pesan kesalahan ke konsol
    console.error('Koneksi ke database gagal:', error.message);
    
    // Kembalikan false untuk menunjukkan koneksi gagal
    return false;
  }
}

// Panggil fungsi testConnection
testConnection().then((connected) => {
  if (connected) {
    console.log('Koneksi berhasil. Aplikasi siap digunakan.');
  } else {
    console.log('Koneksi gagal. Periksa konfigurasi koneksi database.');
  }
});
