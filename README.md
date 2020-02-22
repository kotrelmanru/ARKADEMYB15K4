# BootcampArkademy

>> Jawaban Soal 1

Fungsi JSON pada Rest API : json sendiri merupakan bagian dari javascript sesuai kepanjangannya dan berguna untuk pertukaran data (client dan Server) antar aplikasi yang dapat di baca oleh berbagai bahasa pemrograman lainnya.

>> Jawaban Soal 6A

SELECT chsr.name as Cashier, prd.name as Product, ctgr.name as Category, prd.price as Price, prd.id_cashier as id_cashier, prd.id_category as id_category
from product as prd
inner join Category as ctgr on prd.id_category = ctgr.id inner join Cashier as chsr on prd.id_cashier = chsr.id");

>> Petunjuk 6B

Harus menggunakan internet untuk membuka index.html karena menggunakan CDN Bootstrap

>> Petunjuk 6C

1. Nyalakan XAMPP dan start Apache dan MySQL
2. Import File .sql yang terdapat dalam folder
3. Buka localhost sesuai dengan root folder
4. note : fitur edit dan delete masih belum berhasil

>> Capture/Screenshot Demo Aplikasi


>> Screenshot 6B

![img](https://i.imgur.com/Z2P0UvX.png)

>> Screenshot 6C

![img](https://i.imgur.com/L7IKTVG.png)
![img](https://i.imgur.com/oHmXML3.png)
