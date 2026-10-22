export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: "Yüz Yüze" | "Online" | "Klinik";
  isPopular?: boolean;
  tags: string[];
  features: string[];
}

export interface RecipeItem {
  slug: string;
  title: string;
  category: "Fit Tatlılar" | "Detoks & Ödem" | "Pratik Atıştırmalıklar" | "Kahvaltı & Fit Hamur İşi";
  prepTime: string;
  calories: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  instagramUrl?: string;
  isReels?: boolean;
  views?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  category?: string;
  rating: number;
  comment: string;
}

export const siteConfig = {
  brand: {
    name: "Diyetisyen Fatmanur Aydın",
    shortName: "Diyetisyen Fatmanur Aydın",
    title: "Ankara Keçiören Diyetisyen | Diyetisyen Fatmanur Aydın | Online & Yüz Yüze Beslenme Danışmanlığı",
    description: "Keçiören Etlik ve Online Diyetisyen Fatmanur Aydın ile yasaksız, sürdürülebilir ve bilimsel beslenme programları. Kişiye özel kilo yönetimi, insülin direnci ve tıbbi beslenme tedavisi.",
    tagline: "Yasaklarla Değil, Sürdürülebilir Dengeyle Sağlıklı Yaşam",
    university: "Biruni Üniversitesi Beslenme ve Diyetetik",
  },
  contact: {
    phone: "+90 542 660 49 00",
    phoneCallable: "+905426604900",
    whatsappNumber: "905426604900",
    defaultWhatsappMessage: "Merhaba Fatmanur Hanım, diyet randevusu oluşturmak istiyorum. Müsait seans saatleri ve süreç hakkında bilgi alabilir miyim?",
    whatsappUrl: "https://wa.me/905426604900?text=Merhaba%20Fatmanur%20Han%C4%B1m%2C%20diyet%20randevusu%20olu%C5%9Fturmak%20istiyorum.%20M%C3%BCsait%20seans%20saatleri%20ve%20s%C3%BCre%C3%A7%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F",
    email: "info@diyetisyenfatmanuraydin.com.tr",
    instagram: "@diyetisyenfatmanuraydin",
    instagramUrl: "https://www.instagram.com/diyetisyenfatmanuraydin/",
    googleMapsUrl: "https://maps.app.goo.gl/d8SP1qVd95PDrzCn9?g_st=ic",
    googleReviewsUrl: "https://www.google.com/maps/place/Diyetisyen+Fatmanur+Ayd%C4%B1n/@39.9720843,32.846379,15z/data=!4m8!3m7!1s0x14d34d0f1ba1d067:0x4b19b28931ee50b2!8m2!3d39.9740543!4d32.8363077!9m1!1b1!16s%2Fg%2F11wy9llt9f",
  },
  location: {
    street: "Etlik Caddesi, Aşağı Eğlence Mah., Sarayköy Sk. No: 16/A",
    district: "Keçiören",
    city: "Ankara",
    postalCode: "06010",
    country: "TR",
    landmark: "Etlik Şehir Hastanesi'ne yakın konumda",
    transit: {
      locationInfo: "Etlik Şehir Hastanesi'ne yakın konumda yer almaktadır.",
      bus: "Etlik Caddesi ve Aşağı Eğlence otobüs & dolmuş hatlarıyla kolay ulaşım.",
      parking: "Sarayköy Sokağı ve klinik çevresinde ücretsiz ve rahat araç park yeri mevcuttur.",
    },
    geo: {
      latitude: 39.9723,
      longitude: 32.8465,
    },
    workingHours: "Salı - Cuma: 09:00 - 20:00 | Cumartesi: 08:00 - 15:00",
    workingDaysSummary: "Salı - Cumartesi (Pazar & Pazartesi Kapalı)",
    schedule: [
      { days: "Salı - Cuma", hours: "09:00 - 20:00" },
      { days: "Cumartesi", hours: "08:00 - 15:00" },
      { days: "Pazar & Pazartesi", hours: "Kapalı" },
    ],
  },
  seo: {
    serviceAreas: [
      "Keçiören Diyetisyen",
      "Etlik Diyetisyen",
      "Aşağı Eğlence Diyetisyen",
      "Basınevleri Diyetisyen",
      "İncirli Diyetisyen",
      "Kalaba Diyetisyen",
      "Ankara Diyetisyen",
      "Online Diyetisyen",
    ],
    domain: "https://diyetisyenfatmanuraydin.com.tr",
  },
  analytics: {
    googleAnalyticsId: "G-XC05319SJD",
  },
  services: [
    {
      id: "online-diyet",
      title: "Online Diyet & Beslenme Danışmanlığı",
      category: "Online",
      isPopular: true,
      description: "Haftalık görüntülü seanslar, WhatsApp üzerinden düzenli öğün ve motivasyon takibi ile tamamen size özel online beslenme programı. Sağlıklı kilo verme, kilo alma ve sürdürülebilir yaşam tarzı hedeflerinize uzaktan güvenle ulaşın.",
      tags: ["Haftalık Görüntülü Seans", "WhatsApp Motivasyon Takibi", "Yurt Dışı & Tüm Türkiye", "Kişiye Özel Program"],
      features: [
        "Haftalık 30-40 dakikalık görüntülü görüşme (Google Meet / WhatsApp)",
        "Hafta içi anlık tabak kontrolü ve WhatsApp motivasyon desteği",
        "Saat farkına ve çalışma düzenine göre esnek randevu saatleri",
        "Restoranda ve seyahatte dengeleme rehberi",
      ],
    },
    {
      id: "yuz-yuze-diyet",
      title: "Yüz Yüze Diyet & Beslenme Danışmanlığı",
      category: "Yüz Yüze",
      isPopular: true,
      description: "Kliniğimizde birebir görüşmeler ve profesyonel cihazla detaylı vücut analizi (yağ-kas ölçümü) eşliğinde kişiye özel beslenme takibi. Yaşam tarzınıza, sağlık durumunuza ve hedeflerinize uygun sürdürülebilir, motivasyon odaklı yüz yüze klinik seansları.",
      tags: ["Kliniğimizde Birebir Görüşme", "Profesyonel Cihazla Ölçüm", "Haftalık Kontrol Seansları", "Sürdürülebilir Liste"],
      features: [
        "Profesyonel klinik cihazla detaylı yağ-kas-sıvı analizi",
        "Haftalık yüz yüze kontrol ve motivasyon seansları",
        "Kan tahlili sonuçlarının tıbbi değerlendirmesi",
        "Sosyal hayata ve sevilen besinlere göre esnek alternatifli liste",
      ],
    },
    {
      id: "insulin-direnci-diyabet",
      title: "İnsülin Direnci ve Diyabette Beslenme",
      category: "Klinik",
      description: "Kan şekeri dalgalanmalarını, tatlı krizlerini ve açlık ataklarını önlemeye yönelik tıbbi beslenme tedavisi. Tahlil sonuçlarınıza uygun glisemik indeksin dengeye alınması ile kilo kontrolü ve metabolik sağlığın korunması.",
      tags: ["Kan Şekeri Dengesi", "Tatlı Krizlerini Önleme", "Glisemik İndeks Planı", "Metabolik Sağlık"],
      features: [
        "Glisemik indeksi dengeli öğün kombinasyonları",
        "Açlık ataklarını ve reaktif hipoglisemiyi önleme",
        "Hba1c, açlık insülini ve glukoz takibi",
        "İlaç ve hekim tedavisine tam uyumlu diyet planı",
      ],
    },
    {
      id: "gebe-emziren-anne",
      title: "Gebe ve Emziren Anne Beslenmesi",
      category: "Klinik",
      description: "Hamilelikte bebeğin sağlıklı gelişimi ve annenin ideal kilo kontrolü için özel beslenme planları. Doğum sonrası emzirme döneminde ise süt kalitesini ve miktarını korurken güvenli ve sağlıklı şekilde ideal formunuza kavuşun.",
      tags: ["Trimester Beslenme Planı", "Süt Miktarı & Kalitesi", "Güvenli Kilo Kontrolü", "Bebek Gelişimi Desteği"],
      features: [
        "Trimester dönemlerine özel vitamin & mineral dengesi",
        "Gebelikte aşırı kilo alımının ve ödemin önlenmesi",
        "Sütü azaltmadan doğum sonrası güvenli form kazanımı",
        "Bebekte gaz ve sindirim rahatsızlığı yapmayan besinler",
      ],
    },
    {
      id: "pkos-beslenmesi",
      title: "PKOS (Polikistik Over) Beslenmesi",
      category: "Klinik",
      description: "Hormonal dengeyi destekleyen, insülin direncini kıran ve kronik inflamasyonu azaltmaya yardımcı özel beslenme programı. PKOS kaynaklı kilo artışı, inatçı yağlanma ve ödem problemlerine bilimsel, hedefe yönelik klinik yaklaşım.",
      tags: ["Hormonal Denge", "İnatçı Yağlanmayı Kırma", "Anti-inflamatuar Beslenme", "Ödem Yönetimi"],
      features: [
        "İnsülin duyarlılığını artıran besin örüntüleri",
        "Karın ve bel çevresi inatçı yağlanmaya özel yaklaşım",
        "Hormon dengesini destekleyen anti-inflamatuar menüler",
        "Kronik ödem ve yorgunluğu azaltan destekler",
      ],
    },
    {
      id: "kilo-alma",
      title: "Sağlıklı Kilo Alma Programı",
      category: "Özel Beslenme",
      description: "Düşük kilolu bireyler ve sağlıklı hacim kazanmak isteyenler için dengeli, kas kütlesini artırmaya yönelik kalori ve makro planlaması. İştahsızlık, hızlı metabolizma ve sindirim hassasiyetlerine özel beslenme takibi.",
      tags: ["Kas Kütlesi Kazanımı", "Yüksek Kalorili Temiz Öğünler", "İştahsızlık Çözümleri", "Sindirim Dostu"],
      features: [
        "Mideyi zorlamayan hacmi küçük, kalorisi ve besin değeri yüksek öğünler",
        "Kas dokusunu artıran kaliteli protein ve sağlıklı yağ kombinasyonları",
        "Hızlı metabolizmaya uygun enerji planlaması",
        "Haftalık tartı ve kas kütlesi takibi",
      ],
    },
    {
      id: "vucut-analizi",
      title: "Vücut Kompozisyon Analizi (Ölçüm)",
      category: "Klinik",
      description: "Profesyonel klinik cihazımızla vücut yağ oranı, kas kütlesi, sıvı dengesi, iç organ yağlanması ve metabolizma hızının ayrıntılı ölçümü. Ölçüm sonuçlarının detaylı grafiklerle yorumlanması ve kişiye özel hedeflerin belirlenmesi.",
      tags: ["Yağ & Kas Dağılımı", "İç Organ (Visseral) Yağlanma", "Metabolizma Hızı Ölçümü", "Detaylı Grafik Raporu"],
      features: [
        "Biyoelektrik empedans ile hassas vücut kompozisyonu tespiti",
        "Bölgesel (sağ-sol kol/bacak ve gövde) kas-yağ analizi",
        "Hücre içi ve hücre dışı sıvı (su) dengesi",
        "Ölçüm sonrası detaylı grafik çıktısı ve uzman yorumlaması",
      ],
    },
    {
      id: "cocuk-ergen-beslenmesi",
      title: "Çocuk ve Ergen Beslenmesi",
      category: "Özel Beslenme",
      description: "Büyüme ve gelişme çağındaki çocukların boy uzamasını ve zihinsel odaklanmasını destekleyen dengeli beslenme planları. İştahsızlık, okul dönemi beslenmesi ve çocukluk çağı kilo kontrolünde sağlıklı alışkanlık kazandırma.",
      tags: ["Büyüme & Boy Uzaması", "Okul Beslenme Çantası", "Zihinsel Odaklanma Desteği", "Baskısız Alışkanlık"],
      features: [
        "Persentil (büyüme eğrisi) takibine uygun beslenme planı",
        "Okul dönemine uygun pratik ve besleyici menüler",
        "Paketli gıda ve fast food alışkanlığını kırma",
        "Baskıcı olmayan, çocuğu motive eden pozitif yaklaşım",
      ],
    },
    {
      id: "sporcu-beslenmesi",
      title: "Sporcu ve Egzersiz Beslenmesi",
      category: "Özel Beslenme",
      description: "Antrenman verimini artıran, kas onarımını hızlandıran ve yağ yakımını destekleyen kişiselleştirilmiş besin planlaması. Pilates, fitness ve diğer branşlarla ilgilenenlerin hedeflerine (sıkılaşma/kas kazanımı) uygun makro takibi.",
      tags: ["Antrenman Öncesi/Sonrası", "Kas Onarımı & Toparlanma", "Sıkılaşma & Yağ Yakımı", "Makro Besin Takibi"],
      features: [
        "Antrenman saatlerine göre zamanlanmış besin alımı",
        "Kas protein sentezini maksimize eden makro dengesi",
        "Performans artırıcı hidrasyon ve besin zamanlaması",
        "Pilates, fitness, koşu ve branş sporlarına tam uyum",
      ],
    },
  ] as ServiceItem[],
  recipes: [
    {
      slug: "padisah-lokumu",
      title: "3 Malzemeli Sağlıklı Padişah Lokumu",
      category: "Fit Tatlılar",
      prepTime: "10 dk",
      calories: "65 kcal / adet",
      description: "Rafine şekersiz, unsuz ve pişirme gerektirmeyen; sadece muz, hindistan cevizi ve yulaf ile 10 dakikada hazırlanan hafif ve besleyici fit saray lokumu.",
      image: "/images/recipes/padisah-lokumu.jpg",
      ingredients: [
        "1 adet büyük boy olgun muz",
        "3 yemek kaşığı hindistan cevizi tozu",
        "3 yemek kaşığı öğütülmüş yulaf ezmesi (yulaf unu)",
        "Üzeri için: 7 adet yarım ceviz içi",
        "Dışını bulamak için: 1-2 yemek kaşığı ekstra hindistan cevizi",
      ],
      instructions: [
        "Olgun muzu derin bir kasede çatal yardımıyla püre haline gelene kadar iyice ezin.",
        "Üzerine 3 yemek kaşığı öğütülmüş yulaf ezmesi ve 3 yemek kaşığı hindistan cevizini ekleyin.",
        "Tüm malzemeleri kaşık veya spatulayla toparlanıp ele yapışmayan yumuşak bir hamur kıvamına gelene kadar karıştırın.",
        "Harcı 7 eşit parçaya bölüp avucunuzun içinde yuvarlayarak pürüzsüz toplar haline getirin.",
        "Yuvarladığınız lokumları bir tabağa yaydığınız hindistan cevizi tozuna bulayın.",
        "Servis tabağına dizip her bir lokumun tam ortasına hafifçe bastırarak 1'er adet yarım ceviz içi yerleştirin.",
        "Kıvam alması ve lezzetinin oturması için buzdolabında 15-20 dakika dinlendirdikten sonra servis yapın.",
      ],
      instagramUrl: "https://www.instagram.com/reel/DGDiEUeIce3/",
    },
    {
      slug: "maydanoz-ananas-odem-smoothie",
      title: "Ödem Atmaya Yardımcı: Maydanoz & Ananas Smoothie",
      category: "Detoks & Ödem",
      prepTime: "5 dk",
      calories: "85 kcal",
      description: "Doğal bromelain kaynağı ananas ve taze maydanoz ile vücuttaki fazla sıvıyı uzaklaştırmaya, şişkinliği rahatlatmaya yardımcı ferahlatıcı smoothie.",
      image: "/images/recipes/smoothie-maydanoz.jpg",
      ingredients: [
        "Yarım demet taze maydanoz (yıkanmış ve ayıklanmış)",
        "1 kalın dilim taze ananas (doğal bromelain kaynağı)",
        "1/2 adet salatalık",
        "1/2 limonun taze sıkılmış suyu",
        "1 ince dilim taze zencefil",
        "1 su bardağı soğuk maden suyu veya içme suyu",
      ],
      instructions: [
        "Maydanozları saplarıyla birlikte bol suyla yıkayıp süzün.",
        "Ananası kabuğundan ayırıp küp küp doğrayın; salatalık ve taze zencefili soyup blender haznesine ekleyin.",
        "Üzerine taze sıkılmış limon suyunu ve soğuk maden suyunu (veya suyu) ilave edin.",
        "Tüm malzemeler homojen ve pürüzsüz bir kıvam alana kadar yüksek devirde 1-2 dakika blenderdan geçirin.",
        "Hazırladıktan hemen sonra bekletmeden, sabah aç karnına veya ara öğünde taze olarak tüketin.",
      ],
      instagramUrl: "https://www.instagram.com/reel/DIeHwAtoh-G/",
    },
    {
      slug: "ici-akiskan-fit-browni",
      title: "İçi Akışkan Fit Browni",
      category: "Fit Tatlılar",
      prepTime: "30 dk",
      calories: "140 kcal / dilim",
      description: "Rafine şekersiz, unsuz ve tereyağsız; kurudut ve tahinin mükemmel uyumuyla fırında 160 derecede hazırlanan içi yumuşacık ve akışkan fit çikolatalı lezzet.",
      image: "/images/recipes/brownie-fit.jpg",
      ingredients: [
        "2 adet yumurta",
        "1 çay bardağı çekilmiş kurudut (doğal tatlandırıcı)",
        "150 gram kaliteli bitter çikolata",
        "1 çay bardağından 1 parmak eksik tahin",
        "2 yemek kaşığı kakao",
        "3 yemek kaşığı yulaf unu",
        "1 tutam tuz",
      ],
      instructions: [
        "Bitter çikolatayı benmari usulü eritin ve tahin ile pürüzsüzleşene kadar karıştırın.",
        "Ayrı bir çırpma kabında 2 adet yumurta ile çekilmiş kurudutu güzelce çırpın.",
        "Eritilmiş çikolata-tahin karışımını yumurtalı harca yavaşça ilave edip spatula ile harmanlayın.",
        "Kakao, yulaf unu ve bir tutam tuzu ekleyerek homojen, pürüzsüz bir kek harcı elde edin.",
        "Harcı yağlı kağıt serili fırın kabına veya küçük borcama yayın.",
        "Önceden ısıtılmış 160 derece fırında, fansız ayarda tam 30 dakika pişirin. Fırından çıkarıp içi akışkan kıvamda ılık servis yapın.",
      ],
      instagramUrl: "https://www.instagram.com/reel/DGgZioZIJwq/",
    },
    {
      slug: "tavada-fit-sufle",
      title: "Tavada Sağlıklı Fit Sufle",
      category: "Fit Tatlılar",
      prepTime: "15 dk",
      calories: "155 kcal / porsiyon",
      description: "Fırın açmaya gerek kalmadan, tavada buhar yöntemiyle hazırlanan; 2 değişim meyve, 2 değişim et ve 1 değişim EYG dengeli, içi akışkan rafine şekersiz fit sufle.",
      image: "/images/recipes/sufle-fit.jpg",
      ingredients: [
        "2 adet olgun muz (2 değişim meyve)",
        "2 adet yumurta (2 değişim et)",
        "2 yemek kaşığı yulaf unu (1 değişim EYG)",
        "1.5 yemek kaşığı ham kakao",
        "1 çay kaşığı kabartma tozu",
        "İç dolgusu için: 2-3 kare bitter çikolata (%70+)",
      ],
      instructions: [
        "Olgun muzları derin bir kasede çatal yardımıyla püre haline getirin; yumurtalarla birlikte homojen ve köpüklü olana kadar çırpın.",
        "Üzerine ham kakao, yulaf unu ve kabartma tozunu ilave edip pürüzsüz ve akışkan bir sufle harcı elde edin.",
        "Hafifçe yağlanmış 2 adet ısıya dayanıklı fincana veya sufle kabına harcı eşit şekilde paylaştırın.",
        "Her kabın tam ortasına 1'er kare bitter çikolata batırın.",
        "Geniş ve yayvan bir tavanın tabanına 1-2 parmak kadar sıcak su ekleyip fincanları tavanın içine yerleştirin.",
        "Buhar damlacıklarının suflelerin üzerine gelmemesi için tencere kapağının altına temiz bir mutfak havlusu gerip kapağı sıkıca kapatın.",
        "Kısık-orta ateşte tavanın kapağını hiç açmadan tam 8-10 dakika buharda pişirin. Ocaktan alıp içi akışkan kıvamdayken sıcak sıcak servis yapın.",
      ],
      instagramUrl: "https://www.instagram.com/reel/DFxJiy3onfG/",
    },
  ] as RecipeItem[],
  reviews: [
    {
      id: "1",
      author: "Bilal K.",
      category: "Kilo Yönetimi",
      rating: 5,
      comment: "2 aydır devam ediyorum. 88 kilodan 80 kiloya düştüm. İdeal kiloma 4 kilo kaldı. Fatma Hanım'a teşekkürlerimi sunuyorum. Aç bırakmadan zayıflatıyor.",
    },
    {
      id: "2",
      author: "Emine T.",
      category: "Kilo Verme Süreci",
      rating: 5,
      comment: "Uzun sürede kilo veremem diye düşünüp hiçbir girişimde bulunmamıştım ancak Fatma Hanım'la tanıştığımda bunun doğru olmadığını anlayıp 10 kilo vermek beni çok mutlu etti. Kendisine teşekkür ediyorum.",
    },
    {
      id: "3",
      author: "Elif D.",
      category: "Özel Gün & Düğün Hazırlığı",
      rating: 5,
      comment: "Nişanımın öncesinde Fatmanur Hanım'la tanıştık. Haftalık takip ile diyet programımı güncelledi ve istediğim kiloya ulaşmamı sağladı. Ayrıca her gün iletişim halindeydik. Güler yüzü ve ilgisi harika.",
    },
    {
      id: "4",
      author: "Çağdaş M.",
      category: "Beslenme Alışkanlığı",
      rating: 5,
      comment: "Fatmanur Hanım ile haftalık görüşmelerimiz sayesinde beslenme düzenimi çok daha kolay oturtabildim. Diyet sürecinde her zaman ilgili, açıklayıcı ve motive edici bir yaklaşımı var.",
    },
    {
      id: "5",
      author: "Nurcan A.",
      category: "Sürdürülebilir Diyet",
      rating: 5,
      comment: "Yaklaşık üç aydır Fatmanur Hanım'la diyet görüşmesine başladım. Gerçekten çok memnunum. Diyet sürecinde sanki diyet yapmıyormuş gibi beslenip kilo veriyorum. Herkese tavsiye ederim.",
    },
    {
      id: "6",
      author: "Sevim Ç.",
      category: "Aile & Çocuk Beslenmesi",
      rating: 5,
      comment: "Canım Fatmanur hocamdan kendim için destek aldım. Hem programdan hem de süreçten o kadar çok memnun kaldım ki kızımı da getirdim. Şimdi bu güzel sürece kızımla devam ediyoruz.",
    },
    {
      id: "7",
      author: "Su A.",
      category: "Kilo Koruma & Yaşam Tarzı",
      rating: 5,
      comment: "Güler yüzlülüğü ve samimiyeti ile o kadar güzel, hızlı ve en önemlisi sağlıklı bir biçimde kilo vermeme yardımcı oldu. En önemlisi de verdiğim kiloları korumayı ve sağlıklı beslenmeyi yaşam tarzı haline getirmeyi öğrendim.",
    },
    {
      id: "8",
      author: "Hamide C.",
      category: "Kişiye Özel Takip",
      rating: 5,
      comment: "Fatmanur Hanım'la tanışmak ve danışanı olmak bir ayrıcalıktır. Çok başarılı, ilgili bir uzman. Birlikte istediğimiz hedeflere ve rakamlara ulaşıyoruz.",
    },
    {
      id: "9",
      author: "Burak A.",
      category: "Kilo Yönetimi",
      rating: 5,
      comment: "Fatma Hanım anlayışlı ve güler yüzlü bir diyetisyen. Sistematik biçimde ilerleyerek kolayca kilo vermek mümkün.",
    },
    {
      id: "10",
      author: "Neslihan A.",
      category: "Birebir Motivasyon",
      rating: 5,
      comment: "Fatmanur Hanım işinde çok başarılı bir diyetisyen gerçekten. Gerek motivasyon gerek ilgilenme gerekse sizin isteklerinize dikkat etmek konusunda çok özenli.",
    },
    {
      id: "11",
      author: "Fırat Ü.",
      category: "Sağlıklı Kilo Verme",
      rating: 5,
      comment: "Fatmanur Hanım'dan diyet konusunda danışmanlık aldım. Yardımları sayesinde kendimi yormadan, sağlıklı bir şekilde zayıfladım.",
    },
    {
      id: "12",
      author: "Yiğit K.",
      category: "Haftalık Program Takibi",
      rating: 5,
      comment: "Fatmanur Hanım'a çok teşekkür ediyorum. Kişiye özel haftalık farklı beslenme programının yanı sıra çok iyi motive ediyor, dilediğiniz zaman ulaşabiliyorsunuz.",
    },
    {
      id: "13",
      author: "Sinem Ö.",
      category: "Beslenme Danışmanlığı",
      rating: 5,
      comment: "Güler yüzlü diyetisyenim. İlgisi ve bilgisiyle emin ellerde hissediyorum.",
    },
    {
      id: "14",
      author: "Zehra B.",
      category: "Klinik Danışmanlık",
      rating: 5,
      comment: "Çok memnunum canım diyetisyenim. İlgisi, enerjisi ve profesyonel yaklaşımı için çok teşekkürler.",
    },
  ] as ReviewItem[],
  faqs: [
    {
      q: "İlk yüz yüze görüşmede neler yapılıyor?",
      a: "Öncelikle varsa son 6 aya ait kan tahlilleriniz incelenir, tıbbi geçmişiniz, beslenme alışkanlıklarınız ve günlük rutininiz konuşulur. Ardından klinik vücut analizi cihazımızla detaylı kas, yağ ve su dağılımınız ölçülerek tamamen size özel ilk haftalık listeniz hazırlanır.",
    },
    {
      q: "Online diyet programı nasıl işliyor?",
      a: "Haftada 1 gün görüntülü seans (Google Meet / WhatsApp) yapıyoruz. Kendi tartınız ve mezuranızla aldığınız ölçümleri değerlendirip yeni haftalık listenizi planlıyoruz. Hafta boyunca WhatsApp üzerinden tabak fotoğraflarınızı paylaşıp soru sorabiliyorsunuz.",
    },
    {
      q: "Listeler çok katı mı, sevdiğim yiyecekleri yiyebilir miyim?",
      a: "Kesinlikle katı ve yasakçı değil. Felsefemiz sürdürülebilir dengedir. Tatlı, hamur işi veya dışarıda yeme alışkanlıklarınızı tamamen kesmek yerine porsiyon kontrolü, dengeleme günleri ve sağlıklı alternatiflerle sosyal hayatınızı kısıtlamadan ilerliyoruz.",
    },
    {
      q: "Keçiören kliniğinize ulaşım ve araç parkı kolay mı?",
      a: "Evet, kliniğimiz Keçiören Etlik Aşağı Eğlence Mahallesi Sarayköy Sokak'ta, Etlik Şehir Hastanesi'ne yakın konumda bulunmaktadır. Özel aracıyla gelen danışanlarımız için sokak üzerinde rahat ve ücretsiz park yeri mevcuttur; ayrıca Etlik Caddesi otobüs ve dolmuş hatlarıyla da kolayca ulaşılabilir.",
    },
  ],
};
