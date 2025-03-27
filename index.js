const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/42PDMF2/logo.png',
    'cta-img': 'https://i.ibb.co/XssVKxk/cta.png',
    'accent-img': 'https://i.ibb.co/5FZmL26/accent.png',
  },
};

/* Kodlar Buradan aşağıya */
// [1]-[13]
const head = document.querySelectorAll('header > nav > a');
const navValues = Object.values(siteContent.nav);

for (let i = 0; i < head.length; i++) {
  head[i].textContent = navValues[i];
  head[i].classList.add('italic');
}
//[2]
document.querySelector('.cta-text > h1').textContent = siteContent.cta.h1;
//[3]
document.querySelector('.cta-text > button').textContent =
  siteContent.cta.button;
//[4]
/* ilk kurduğum yapı. Daha sonra ChatGPT ile derin mevzulara girip ufak bir verimlilik geliştirmesi yaptım.

const topContentHead = document.querySelectorAll(
  '.top-content .text-content h4'
);
const topContentValues = [
  siteContent['top-content']['left-h4'],
  siteContent['top-content']['right-h4'],
];
topContentHead.forEach((head, index) => {
  head.textContent = topContentValues[index];
});

*/
//[4]-[5]
const topContent = siteContent['top-content']; //önce tırnaklardan kurtulmak için içeriği bir değişkene attım
const textContentDivs = document.querySelectorAll('.top-content .text-content');
const contentKeys = Object.keys(topContent); // tanımladığım objeden keyleri çektim

textContentDivs.forEach((block, index) => {
  const h4 = block.querySelector('h4'); //başlıklar için değişken tanımladım
  const p = block.querySelector('p'); //metinler için değişken tanımladım

  h4.textContent = topContent[contentKeys[index * 2]]; //h4'e topContent'in index *2. keyini yaz
  p.textContent = topContent[contentKeys[index * 2 + 1]]; //p'ye topContent'in index *2+1. keyini yaz
});
/* [6]-[7]

üstte kurduğum yapının aynısını burada da kurdum

*/

const bottomContent = siteContent['bottom-content'];
const bottomDivs = document.querySelectorAll('.bottom-content .text-content');
const bottomKeys = Object.keys(bottomContent);

bottomDivs.forEach((block, index) => {
  const h4 = block.querySelector('h4');
  const p = block.querySelector('p');

  h4.textContent = bottomContent[bottomKeys[index * 2]];
  p.textContent = bottomContent[bottomKeys[index * 2 + 1]];
});

// [8]
const contactDiv = document.querySelector('.contact');
const contactChildren = contactDiv.children;
/*
[
  contactChildren[0] => <h4></h4>,
  contactChildren[1] => <p></p>,
  contactChildren[2] => <p></p>,
  contactChildren[3] => <p></p>
]
*/
contactDiv.children[0].textContent = siteContent.contact['contact-h4'];
contactDiv.children[1].textContent = siteContent.contact.address;
contactDiv.children[2].textContent = siteContent.contact.phone;
contactDiv.children[3].textContent = siteContent.contact.email;

// [9]
const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');

// [10]
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

// [11]
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];

// [12]
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent.images['accent-img'];

// [13]
document.querySelectorAll('header > nav > a').classList.add('italic');
