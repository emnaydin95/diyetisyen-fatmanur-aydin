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
  instagramUrl?: string;
  isReels?: boolean;
  views?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
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
      slug: "sekersiz-muzlu-fit-cookie",
      title: "Şekersiz Muzlu Yulaflı Fit Cookie",
      category: "Fit Tatlılar",
      prepTime: "15 dk",
      calories: "90 kcal / adet",
      description: "Kahvenin yanına rafine şekersiz, unsuz ve tereyağsız; sadece 15 dakikada hazırlanan pratik fit kurabiye.",
      ingredients: [
        "2 adet olgun muz",
        "1 adet yumurta",
        "1 su bardağı yulaf ezmesi",
        "1 tatlı kaşığı şekersiz fıstık ezmesi (isteğe bağlı)",
        "1 çay kaşığı toz tarçın",
        "2 kare kıyılmış bitter çikolata (%80+)",
      ],
      instructions: [
        "Olgunlaşmış muzları derin bir kasede çatal yardımıyla püre haline gelene kadar ezin.",
        "Üzerine 1 adet yumurtayı ekleyip çatalla güzelce karıştırın.",
        "Yulaf ezmesi, tarçın ve fıstık ezmesini ilave ederek homojen bir kurabiye harcı elde edin.",
        "Kıyılmış bitter çikolata parçalarını ekleyip spatulayla son kez karıştırın.",
        "Kaşık yardımıyla yağlı kağıt serili fırın tepsisine porsiyonlar halinde dizip üzerlerini hafifçe düzeltin.",
        "Önceden ısıtılmış 180 derece fırında 12-15 dakika kontrollü şekilde pişirin. Soğuduktan sonra servis yapın.",
      ],
      instagramUrl: "https://www.instagram.com/diyetisyenfatmanuraydin/",
    },
    {
      slug: "yesil-odem-atici-smoothie",
      title: "Yeşil Ödem Atıcı Smoothie",
      category: "Detoks & Ödem",
      prepTime: "5 dk",
      calories: "95 kcal",
      description: "Sabahları hafif uyanmak ve vücuttaki şişkinliği hızla atmak için mükemmel tazeleyici içecek.",
      ingredients: [
        "1 avuç taze ıspanak",
        "1/2 adet yeşil elma",
        "1/2 adet salatalık",
        "1 dilim taze zencefil",
        "1/2 limonun suyu",
        "1 bardak maden suyu veya soğuk su",
      ],
      instructions: [
        "Tüm malzemeleri iyice yıkayın ve doğrayın.",
        "Blender haznesine alıp pürüzsüz olana kadar 1 dakika karıştırın.",
        "Sabah aç karnına veya ara öğünde taze olarak tüketin.",
      ],
    },
    {
      slug: "yulafli-peynirli-tuzlu-kek",
      title: "Fırında Yulaflı ve Peynirli Tuzlu Kek",
      category: "Kahvaltı & Fit Hamur İşi",
      prepTime: "25 dk",
      calories: "165 kcal / dilim",
      description: "Klasik haşlanmış yumurta sevmeyenlere veya kahvaltıda pratiklik arayanlara lif ve protein deposu nefis fırın lezzeti.",
      ingredients: [
        "2 adet yumurta",
        "1 su bardağı yulaf ezmesi",
        "2 yemek kaşığı yoğurt",
        "3 dilim süzme peynir",
        "1 dilim İzmir tulumu (lezzet için)",
        "Yarım kapya biber (ince doğranmış)",
        "1 adet yeşil biber (ince doğranmış)",
        "1 dal taze yeşil soğan",
        "Yarım paket kabartma tozu & 1 çay kaşığı tuz",
        "Üzeri için: Ceviz içi ve çörek otu",
      ],
      instructions: [
        "Derin bir karıştırma kabında yumurta, yoğurt, tuz ve yulaf ezmesini güzelce çırpın.",
        "İnce kıyılmış kapya biberi, yeşil biberi, yeşil soğanı ve çatalla ufalanmış peynirleri ilave edin.",
        "Kabartma tozunu ekleyip tüm harcı spatula yardımıyla homojen bir kıvama gelene kadar harmanlayın.",
        "Karışımı yağlı kağıt serili küçük fırın kabına dökün, üzerine ceviz parçaları ve çörek otu serpiştirin.",
        "Önceden ısıtılmış 180 derece fırında üzeri altın sarısı kızarana kadar yaklaşık 25 dakika pişirin. Ilık servis yapın.",
      ],
      instagramUrl: "https://www.instagram.com/diyetisyenfatmanuraydin/",
    },
  ] as RecipeItem[],
  reviews: [
    {
      id: "1",
      author: "Bilal K.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "2 aydır devam ediyorum. 88 kilodan 80 kiloya düştüm. İdeal kiloma 4 kilo kaldı. Fatma Hanım'a teşekkürlerimi sunuyorum. Aç bırakmadan zayıflatıyor.",
      date: "Google Haritalar",
    },
    {
      id: "2",
      author: "Emine T.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Uzun sürede kilo veremem diye düşünüp hiçbir girişimde bulunmamıştım ancak Fatma Hanım'la tanıştığımda bunun doğru olmadığını anlayıp 10 kilo vermek beni çok mutlu etti.",
      date: "Google Haritalar",
    },
    {
      id: "3",
      author: "Elif D.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Nişanımın öncesinde Fatmanur Hanım'la tanıştık. Haftalık takip ile diyet programımı güncelledi ve istediğim kiloya ulaşmamı sağladı. Ayrıca her gün iletişim halindeydik. Güler yüzü ve ilgisi harika.",
      date: "Google Haritalar",
    },
    {
      id: "4",
      author: "Çağdaş M.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatmanur Hanım ile haftalık görüşmelerimiz sayesinde beslenme düzenimi çok daha kolay oturtabildim. Diyet sürecinde her zaman ilgili, açıklayıcı ve motive edici bir yaklaşımı var.",
      date: "Google Haritalar",
    },
    {
      id: "5",
      author: "Nurcan A.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Yaklaşık üç aydır Fatmanur Hanım'la diyet görüşmesine başladım. Gerçekten çok memnunum. Diyet sürecinde sanki diyet yapmıyormuş gibi beslenip kilo veriyorum. Herkese tavsiye ederim.",
      date: "Google Haritalar",
    },
    {
      id: "6",
      author: "Sevim Ç.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Canım Fatmanur hocamdan kendim için destek aldım. Hem programdan hem de süreçten o kadar çok memnun kaldım ki kızımı da getirdim. Şimdi bu güzel sürece kızımla devam ediyoruz.",
      date: "Google Haritalar",
    },
    {
      id: "7",
      author: "Su A.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Güler yüzlülüğü ve samimiyeti ile o kadar güzel, hızlı ve en önemlisi sağlıklı bir biçimde kilo vermeme yardımcı oldu. En önemlisi de verdiğim kiloları korumayı ve sağlıklı beslenmeyi yaşam tarzı haline getirmeyi öğrendim.",
      date: "Google Haritalar",
    },
    {
      id: "8",
      author: "Hamide C.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatmanur Hanım'la tanışmak ve danışanı olmak bir ayrıcalıktır. Çok başarılı, ilgili bir uzman. Birlikte istediğimiz hedeflere ve rakamlara ulaşıyoruz.",
      date: "Google Haritalar",
    },
    {
      id: "9",
      author: "Burak A.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatma Hanım anlayışlı ve güler yüzlü bir diyetisyen. Sistematik biçimde ilerleyerek kolayca kilo vermek mümkün.",
      date: "Google Haritalar",
    },
    {
      id: "10",
      author: "Neslihan A.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatmanur Hanım işinde çok başarılı bir diyetisyen gerçekten. Gerek motivasyon gerek ilgilenme gerekse sizin isteklerinize dikkat etmek konusunda çok özenli.",
      date: "Google Haritalar",
    },
    {
      id: "11",
      author: "Fırat Ü.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatmanur Hanım'dan diyet konusunda danışmanlık aldım. Yardımları sayesinde kendimi yormadan, sağlıklı bir şekilde zayıfladım.",
      date: "Google Haritalar",
    },
    {
      id: "12",
      author: "Yiğit K.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Fatmanur Hanım'a çok teşekkür ediyorum. Kişiye özel haftalık farklı beslenme programının yanı sıra çok iyi motive ediyor, dilediğiniz zaman ulaşabiliyorsunuz.",
      date: "Google Haritalar",
    },
    {
      id: "13",
      author: "Sinem Ö.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Güler yüzlü diyetisyenim. İlgisi ve bilgisiyle emin ellerde hissediyorum.",
      date: "Google Haritalar",
    },
    {
      id: "14",
      author: "Zehra B.",
      role: "Google Doğrulanmış Danışan",
      rating: 5,
      comment: "Çok memnunum canım diyetisyenim. İlgisi, enerjisi ve profesyonel yaklaşımı için çok teşekkürler.",
      date: "Google Haritalar",
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
