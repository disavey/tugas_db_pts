# KASUS MANAJEMENT EVENT

### Sistem Manajemen Event ini dirancang untuk membantu dalam pengelolaan dan organisasi berbagai jenis acara seperti konferensi, konser, seminar, dan workshop. Sistem ini memungkinkan pengelolaan entitas utama seperti acara, peserta, bintang tamu, sponsor, dan lokasi. Selain itu, sistem ini mendukung penjualan tiket, pendaftaran peserta, pengaturan agenda acara, pengumpulan umpan balik, serta promosi dan penawaran khusus.

### Sistem ini memastikan bahwa semua data penting terkait acara dapat dikelola secara terstruktur di dalam basis data, sehingga memudahkan pelacakan, pembuatan laporan, dan manajemen operasional acara.



## Fitur Utama

- Pembuatan Event: Penyelenggara dapat membuat acara baru dengan mendefinisikan detail seperti nama acara, tanggal, deskripsi, dan lokasi acara.
- Pendaftaran Peserta: Pengguna dapat mendaftarkan diri untuk menghadiri acara, dan informasi peserta akan disimpan di dalam sistem.
- Manajemen Tiket: Sistem mendukung penjualan dan pengelolaan berbagai jenis tiket, serta pelacakan ketersediaan dan harga tiket.
- Pengelolaan Lokasi: Setiap acara dapat dikaitkan dengan lokasi spesifik yang berisi detail tentang tempat penyelenggaraan, seperti nama lokasi, alamat, dan kapasitas.
- Integrasi Bintang Tamu: Artist atau pembawa acara yang mengisi acara tersebut.
- Manajemen Sponsorship: Kumpulan Sponsor yang dapat dikaitkan dengan acara, dan kontribusi mereka dapat dilacak serta dikelola dalam sistem.
- Manajemen Sponsor : Sponsor yang bersifat individu belum dikelompokkan dalam satu acara.
- Pengelolaan Rundown: Setiap acara dapat memiliki beberapa sesi atau aktivitas yang dapat diatur melalui agenda acara, memastikan struktur kegiatan yang jelas selama acara berlangsung.
- Manajemen Registrasi : Registrasi untuk masuk ke event dan mencatat setiap pendaftaran peserta ke sebuah acara dengan maksud satu peserta hanya dapat meregistrasi sekali dengan satu ticket.
- Promosi: Penyelenggara dapat mempromosikan penjualan tiket.

## Relasi

1. Events
   - One-to-Many dengan Registrations (1 acara dapat memiliki banyak pendaftaran).
   - One-to-Many dengan Tickets (1 acara dapat memiliki banyak jenis tiket).
   - One-to-Many dengan Sponsorships (1 acara dapat memiliki banyak sponsor).
   - Many-to-One dengan Location (banyak acara terkait dengan satu tempat )
   - One-to-Many dengan Rundown (1 acara dapat memiliki banyak sesi).
   - One-to-Many dengan Promotions (1 acara dapat memiliki banyak promosi).

2. Participants
   - One-to-Many dengan Registrations (1 peserta dapat mendaftar di banyak acara).

3. Location 
   - One-to-Many dengan Events (1 lokasi dapat digunakan untuk banyak acara).

4. Sponsors
   - One-to-Many dengan Sponsorships (1 sponsor dapat mendukung banyak acara ).

5. Sponsorships
   - Many-to-One dengan Sponsors (Banyak sponsorship terkait dengan satu sponsor)
   - Many-to-One dengan Events (Banyak sponsorship terkait dengan satu acara)

6. Tickets
   - Many-to-One dengan Events (Banyak tiket terkait dengan satu acara).

7. Registrations
   - Many-to-One dengan Events (Banyak pendaftaran terkait dengan satu acara).
   - Many-to-One dengan Participants (Banyak pendaftaran terkait dengan satu peserta).

8. Guest Star 
   - Many-to-One dengan Rundown (Banyak Guest Star terkait dengan satu Rundown).

9. Rundown 
   - One-to-Many dengan Guest Star (Satu rundown memiliki banyak Guest Star).
   - Many-to-One dengan Event (Banyak rundown terkai dengan satu event)

10. Promotions
   - Many-to-One dengan Acara (Banyak promosi terkait dengan satu acara).

