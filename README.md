# LoginWithRedux
React-Native kullanarak giriş işlemini yapabileceğiniz, kendi veritabanı bağlantılarınızı entegre edip kullanılabilir bir giriş paneli.

Giriş yapılan kullanıcının bilgilerini Redux ile global yaparken aynı zamanda tekrar giriş ekranı gelmesini önlemek için cihazın hafızasına Asycn Storage kullanarak kullanıcıyı kaydedilerek bir sonraki uyuglama açılışında anasayfadan devam edebilmemizi sağlayan yapı kuruldu.

Form yapısının daha efektif çalışması, sayfanın her harfe basılarak render edilmesini önlemek adına Formik kullanıldı. Form kuralları konularak kullanıcı adı, parola kontrolleri
aynı şekilde sayfa render edilmeden Yup kullanılarak belirli kontroller yaptırılıyor.

Giriş yapan kullanıcının bilgileri cihaz hafızasından kontrol edilirken arada boş görüntü oluşmaması adına Lottie kullanılarak yüklenme animasyonu eklendi. Bu da uygulamanın Splash sayfası gibi gözükmekte.
## Kullanılan Yapılar
- React Redux
- Async Storage
- React Navigation
- React Stack
- Formik
- Yup
- Lottie
- Vector Icon (Material Community Paketi)
