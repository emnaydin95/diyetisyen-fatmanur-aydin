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
  category: "Fit Tatlılar" | "Detoks & Ödem" | "Pratik Atıştırmalıklar";
  prepTime: string;
  calories: string;
  description: string;
  ingredients: string[];
  instructions: string[];
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
        "Hücre içi ve hücre dışı sıvı (ödem) dengesi",
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
      slug: "unsuz-sekersiz-kakaolu-sufle",
      title: "Unsuz Şekersiz Kakaolu Sufle",
      category: "Fit Tatlılar",
      prepTime: "10 dk",
      calories: "140 kcal",
      description: "Tatlı krizlerine anında sağlıklı çözüm! Rafine şekersiz ve yüksek lifli fit sufle.",
      ingredients: [
        "1 adet olgun muz",
        "1 adet yumurta",
        "1 tatlı kaşığı ham kakao",
        "1 çay kaşığı kabartma tozu",
        "1 kare bitter çikolata (%80+)",
      ],
      instructions: [
        "Muzu çatalla ezerek püre haline getirin.",
        "Yumurta, kakao ve kabartma tozunu ekleyip homojen olana kadar çırpın.",
        "Yağlanmış küçük bir sufle kabına dökün, ortasına bitter çikolatayı batırın.",
        "Önceden ısıtılmış 180 derece fırında veya hava fritözünde 8-10 dakika pişirin.",
      ],
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
      slug: "nohut-unlu-citir-kraker",
      title: "Nohut Unlu Çıtır Kraker",
      category: "Pratik Atıştırmalıklar",
      prepTime: "15 dk",
      calories: "110 kcal / porsiyon",
      description: "Ofiste ve çantada taşıması kolay, kıtır kıtır glutensiz nohut krakeri.",
      ingredients: [
        "1 su bardağı nohut unu",
        "3 yemek kaşığı zeytinyağı",
        "4-5 yemek kaşığı ılık su",
        "1 tatlı kaşığı çörek otu & susam",
        "1 çay kaşığı kekik & biberiye & deniz tuzu",
      ],
      instructions: [
        "Nohut unu, baharatlar ve tohumları karıştırın.",
        "Zeytinyağı ve suyu ekleyip toparlanan bir hamur elde edin.",
        "İki yağlı kağıt arasında incecik açıp bıçakla kare kare kesin.",
        "170 derece fırında 12-15 dakika altın sarısı olana kadar pişirin.",
      ],
    },
  ] as RecipeItem[],
  reviews: [
    {
      id: "1",
      author: "Selin B.",
      role: "Keçiören Ofis Yüz Yüze Danışanı",
      rating: 5,
      comment: "Fatmanur Hanım ile 3 ayda 11 kilo verdim. En güzeli hiç aç kalmadım, elimin altındaki malzemelerle alternatifli menüler yazdı. İnsülin direncim tamamen düzene girdi. Keçiören'deki ofisi de çok nezih ve huzurlu.",
      date: "2 hafta önce",
    },
    {
      id: "2",
      author: "Merve K.",
      role: "Online Danışan (Almanya)",
      rating: 5,
      comment: "Almanya'dan online diyet programına katıldım. Saat farkına rağmen her soruma WhatsApp'tan anında dönüş yaptı. Motivasyonu ve şefkatli yaklaşımı sayesinde tatlı krizlerim bitti. Kesinlikle tavsiye ediyorum.",
      date: "1 ay önce",
    },
    {
      id: "3",
      author: "Ebru D.",
      role: "Emzirme Beslenmesi Danışanı",
      rating: 5,
      comment: "Emzirme döneminde kilo vermekten çok korkuyordum, sütüm azalır sanıyordum. Fatmanur Hanım'ın dengeli listeleriyle hem sütüm arttı hem de 2 ayda 7 kilo hafifledim. İyi ki yollarımız kesişmiş!",
      date: "1 ay önce",
    },
    {
      id: "4",
      author: "Burak T.",
      role: "Sporcu & Kilo Alma Danışanı",
      rating: 5,
      comment: "Kilo almak kilo vermekten zordur derler, gerçekten öyleydi. Fatmanur Hanım'ın hazırladığı yüksek kalorili ama temiz içerikli menülerle 2 ayda 5 kg temiz kas kazandım. Enerjim tavan yaptı.",
      date: "2 ay önce",
    },
  ] as ReviewItem[],
  faqs: [
    {
      q: "İlk yüz yüze görüşmede neler yapılıyor?",
      a: "Öncelikle varsa son 6 aya ait kan tahlilleriniz incelenir, tıbbi geçmişiniz, beslenme alışkanlıklarınız ve günlük rutininiz konuşulur. Ardından klinik vücut analizi cihazımızla detaylı kas, yağ ve ödem dağılımınız ölçülerek tamamen size özel ilk haftalık listeniz hazırlanır.",
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
