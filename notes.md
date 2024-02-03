- api klasörü özel bir isimdir. bu klasörün altındaki dosyalarda react component yazamaz ve bunlara export default işlemi yapamayız. pages altındaki diğer dosyalarda bunu yaparız ama api ismi özel bier key.
- aip içerisindeki dosyalarda function yazabiliriz. ama bu fonksiyonlara export default işlemi yapabiliriz.
- burada yazdıklarımız server side koddur. buradaki kodlar hiçbir zaman client taraflı kod paketine girmez

```
function handler(req, res) {
  res.status(200).json({ message: 'Success!' });
}
export default handler;

```

![Success Api](succes-api.png)

- [Connect to Database](https://academind.com/tutorials/connect-to-database/)
- component içerisinde (mesela Home Page componentinde) database connect yapmak güvenli değil.
- bind() ile ilgili detaylı bilgi: [Understanding "bind"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.
