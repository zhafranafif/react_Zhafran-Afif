## Summary materi GraphQL-Basic

1. Apa itu GraphQL
- GraphQL adalah bahasa kueri untuk API Anda, dan runtime sisi server untuk mengeksekusi kueri dengan menggunakan sistem tipe yang Anda tentukan untuk data Anda, GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu titik akhir tunggal (/graphQL) untuk setiap permintaan yang diperlukan

2. 3 Fitur pada GraphQL
- Query : Mendapatkan data berdasarkan kueri tertentu yang kita definisikan
- Mutation : insert, update, delete data
- Subscription : mendapatan data terupdate secara realtime berdasarkan event tertentu

3. Basic Query
- Dengan GraphQL kita bisa mendapatkan data persis seperti yang kita butuhkan. Kami mendefinisikan bidang apa yang ingin kami dapatkan dan graphql akan memberi kami data berdasarkan apa yang kami definisikan. Misalnya, bayangkan ada satu koleksi dalam database yang menyimpan data film. Semua data yang tidak diperlukan seperti direktur, created_at, dan diperbarui-at tidak akan disertakan dalam hasil
