import {Component} from '@angular/core';
import {
  faBlogger,
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faYoutube,
  faXTwitter,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import {ThrustableSitesInterface} from "../../Interfaces/thrustable-sites.interface";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-thrustable-sources',
  templateUrl: './thrustable-sources.component.html',
  styleUrls: ['./thrustable-sources.component.scss']
})
export class TrustableSourcesComponent {
  faGlobe: IconDefinition = faGlobe;
  faYoutube: IconDefinition = faYoutube;
  faInstagram: IconDefinition = faInstagram;
  faTelegram: IconDefinition = faTelegram;
  faFacebook: IconDefinition = faFacebook;
  faTiktok: IconDefinition = faTiktok;
  faBlogger: IconDefinition = faBlogger;
  faXTwitter: IconDefinition = faXTwitter;
  trustableSitesSpanish: ThrustableSitesInterface[] = [];
  trustableSitesEnglish: ThrustableSitesInterface[] = [];

  constructor() {
    this.trustableSitesSpanish = [
      {
        socialMediaName: 'Youtube',
        icon: this.faYoutube,
        classes: 'text-danger',
        sites: [
          {
            name: 'Sunnah Audios:',
            urls: ['https://youtube.com/@SunnahAudios']
          },
          {
            name: 'Mpubs Español:',
            urls: ['https://youtube.com/@MpubsEspanol']
          },
          {
            name: 'Ansar al Ghuraba:',
            urls: ['https://youtube.com/@AnsarAlGhuraba']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['https://youtube.com/@Minhaj_alsalaf']
          },
          {
            name: 'Kitab wa Sunnah Videos>',
            urls: ['https://www.youtube.com/@KitabwaSunnahVideos/']
          },
          {
            name: 'As-Salafiyyah Colombia:',
            urls: ['https://youtube.com/@salafiyyahcolombia']
          },
        ]
      },
      {
        socialMediaName: 'Instagram',
        icon: this.faInstagram,
        classes: 'text-danger',
        sites: [
          {
            name: 'Sunnah Audios:',
            urls: ['https://www.instagram.com/sunnahaudios']
          },
          {
            name: 'Tayeb:',
            urls: ['https://www.instagram.com/tayebderouich']
          },
          {
            name: 'Ustadh Issa Al-Meksiki:',
            urls: ['https://www.instagram.com/eisaalmeksiki']
          },
          {
            name: 'Abu Nuh:',
            urls: ['https://www.instagram.com/abunuh31']
          },
          {
            name: 'Qué es Islam:',
            urls: ['https://www.instagram.com/que_es_islam']
          },
          {
            name: 'Kitab wa Sunnah:',
            urls: ['https://www.instagram.com/kitab_wa_sunnah_ebooks']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['https://www.instagram.com/minhajalsalaf']
          },
          {
            name: 'As-Salafiyyah Colombia:',
            urls: ['https://www.instagram.com/salafiyyah_colombia']
          },
        ]
      },
      {
        socialMediaName: 'Telegram',
        icon: this.faTelegram,
        classes: 'text-primary',
        sites: [
          {
            name: 'Desde el tintero de un Muwāhhid:',
            urls: ['https://t.me/Laplumayelpapel']
          },
          {
            name: 'TubaalilGhuraba:',
            urls: ['https://t.me/TuubaaLilGhuraba']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['https://t.me/almanhaj_Sahih', 'https://t.me/biblioteca_Sahiha']
          },
          {
            name: 'Kitab wa Sunnah:',
            urls: ['https://t.me/kitabwasunnahebooks', 'https://t.me/kitabwasunnah1445', 'https://t.me/KitabwaSunnahVideos']
          },
          {
            name: 'As-Salafiyyah Colombia:',
            urls: ['https://t.me/salafiyyahcolombia']
          },

        ]
      },
      {
        socialMediaName: 'Facebook',
        icon: this.faFacebook,
        classes: 'text-primary',
        sites: [
          {
            name: 'Sunnah Audios:',
            urls: ['https://www.facebook.com/sunnah.audios']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['https://www.facebook.com/share/USKC9W4WCqpfcemJ/']
          },
          {
            name: 'kitab wa Sunnah:',
            urls: ['https://www.facebook.com/kitabwasunnahebooks']
          },
          {
            name: 'As-Salafiyyah Colombia',
            urls: ['https://www.facebook.com/groups/salafiyyahcolombia']
          },
        ]
      },
      {
        socialMediaName: 'Tiktok',
        icon: this.faTiktok,
        classes: 'text-dark',
        sites: [
          {
            name: 'Sunnah Audios:',
            urls: ['https://www.tiktok.com/@sunnah.audios']
          },
          {
            name: 'Que es Islam:',
            urls: ['https://www.tiktok.com/@que_es_islam']
          },
          {
            name: 'Tayeb Derouich:',
            urls: ['https://www.tiktok.com/@tayeb.derouich']
          },
          {
            name: 'Abu Nuh:',
            urls: ['https://www.tiktok.com/@abunuh31']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['https://www.tiktok.com/@almanhaj_alsahih', 'https://www.tiktok.com/@bintalbellahouel', 'https://www.tiktok.com/@noura.al.saaliha']
          },
        ]
      },
      {
        socialMediaName: 'Blogspot',
        icon: this.faBlogger,
        classes: 'text-dark',
        sites: [
          {
            name: 'Ahlul Sunnah chile:',
            urls: ['http://ahlussunnahchile.blogspot.com']
          },
          {
            name: 'Al Manhaj Al-Sahih:',
            urls: ['http://elcaminodelospredecesorespiadosos.blogspot.com']
          },
          {
            name: 'As-Salafiyyah Colombia:',
            urls: ['http://salafiyyahcolombia.blogspot.com']
          }
        ]
      },
    ];
    this.trustableSitesEnglish = [
      {
        socialMediaName: 'Youtube',
        icon: this.faYoutube,
        classes: 'text-danger',
        sites: [
          {
            name: 'Muwahhideen Publications:',
            urls: ['https://www.youtube.com/user/MuwahhideenPubs/videos']
          },
          {
            name: 'Masjid Daar us Sunnah:',
            urls: ['https://www.youtube.com/user/DaarusSunnah/videos']
          },
          {
            name: 'Salafi Centre of Manchester:',
            urls: ['https://www.youtube.com/user/SalafiCentreUK/videos']
          },
          {
            name: 'TROID:',
            urls: ['https://www.youtube.com/user/troidtube/videos']
          },
          {
            name: 'LearnAboutIslamUK:',
            urls: ['https://www.youtube.com/user/LearnAboutIslamUK']
          },
          {
            name: 'SunnahPublishing:',
            urls: ['https://www.youtube.com/user/SunnahPublishing/videos']
          },
          {
            name: 'IIINAUDIO:',
            urls: ['https://www.youtube.com/user/IIINAUDIO']
          },
          {
            name: 'At-Tarbiyah South Florida:',
            urls: ['https://www.youtube.com/AtTarbiyahSouthFlorida']
          },
          {
            name: 'Albaseerah:',
            urls: ['https://www.youtube.com/user/AlbaseerahBradford/videos']
          },
          {
            name: 'SalafiDawaLancs:',
            urls: ['https://www.youtube.com/user/SalafiDawaLancs/videos']
          },
          {
            name: 'SalafiDawaLancs:',
            urls: ['https://www.youtube.com/user/SalafiDawaLancs/videos']
          },
          {
            name: 'Masjid Al-Huda Sheffield:',
            urls: ['https://www.youtube.com/channel/UCV1rtd29OafALtwTOcOC74w/videos']
          },
          {
            name: 'As Sabeel:',
            urls: ['https://www.youtube.com/channel/UC6es_vz9Fd1V6xziM3hLCeA/videos']
          },
          {
            name: 'Tawheed Rochdale:',
            urls: ['https://www.youtube.com/@TawheedRochdale/videos']
          },
          {
            name: 'Markaz us-Sunnah:',
            urls: ['https://www.youtube.com/channel/UCiIkBFQyLTInntJyK6Vi4Og/videos']
          },
        ]
      },
      {
        socialMediaName: 'Facebook',
        icon: this.faFacebook,
        classes: 'text-primary',
        sites: [
          {
            name: 'Albaseerah:',
            urls: ['https://www.facebook.com/albaseerah/']
          },
          {
            name: 'The Salafi Centre of Manchester :',
            urls: ['https://www.facebook.com/SalafiCentreUK/']
          },
          {
            name: 'TROID:',
            urls: ['https://www.facebook.com/troidorg']
          },
          {
            name: 'At-Tarbiyah South Florida:',
            urls: ['https://www.facebook.com/TarbiyahSouthFL']
          },
          {
            name: 'Muwahhideen Publications :',
            urls: ['https://www.facebook.com/mpubs/']
          },
        ]
      },
      {
        socialMediaName: 'Instagram',
        icon: this.faInstagram,
        classes: 'text-danger',
        sites: [
          {
            name: 'albaseerah:',
            urls: ['https://www.instagram.com/albaseerah/?hl=en']
          },
          {
            name: 'Salafi Centre of Manchester:',
            urls: ['https://www.instagram.com/salaficentre/']
          },
          {
            name: 'TROID:',
            urls: ['https://www.instagram.com/troidorg']
          },
          {
            name: 'Learn About Islam UK:',
            urls: ['https://www.instagram.com/learnaboutislamuk/']
          },
          {
            name: 'At-Tarbiyah South Florida:',
            urls: ['https://www.instagram.com/tarbiyahsouthfl/']
          },
          {
            name: 'Muwahhideen Publications:',
            urls: ['https://www.instagram.com/mpubs']
          },
        ]
      },
      {
        socialMediaName: 'Telegram',
        icon: this.faTelegram,
        classes: 'text-primary',
        sites: [
          {
            name: 'MarkazBukhari',
            urls: ['https://t.me/MarkazBukhari']
          },
          {
            name: 'salafischool',
            urls: ['https://t.me/salafischool']
          },
          {
            name: 'Masjidussunnah1',
            urls: ['https://t.me/Masjidussunnah1']
          },
          {
            name: 'naseehah',
            urls: ['https://t.me/naseehah']
          },
          {
            name: 'salaficentre',
            urls: ['https://t.me/salaficentre']
          },
          {
            name: 'masjidalwahyain',
            urls: ['https://t.me/masjidalwahyain']
          },
          {
            name: 'ashabulhadith',
            urls: ['https://t.me/ashabulhadith']
          },
          {
            name: 'SunnahPubs',
            urls: ['https://t.me/SunnahPubs']
          },
          {
            name: 'dawaatussalafiyyahbrisbane',
            urls: ['https://t.me/dawaatussalafiyyahbrisbane']
          },
          {
            name: 'mpubs',
            urls: ['https://t.me/mpubs']
          },
          {
            name: 'masjidashshurava',
            urls: ['https://t.me/masjidashshurava']
          },
          {
            name: 'AlhudaBolton',
            urls: ['https://t.me/AlhudaBolton']
          },
          {
            name: 'TarbiyahSouthFL',
            urls: ['https://t.me/TarbiyahSouthFL']
          },
          {
            name: 'SalafiReading',
            urls: ['https://t.me/SalafiReading']
          },
          {
            name: 'sunnahradio',
            urls: ['https://t.me/sunnahradio']
          },
          {
            name: 'learnaboutislam',
            urls: ['https://t.me/learnaboutislam']
          },
          {
            name: 'masjidfurqan',
            urls: ['https://t.me/masjidfurqan']
          },
          {
            name: 'asSabeel',
            urls: ['https://t.me/asSabeel']
          },
          {
            name: 'tasfiyah',
            urls: ['https://t.me/tasfiyah']
          },
          {
            name: 'audiourdu',
            urls: ['https://t.me/audiourdu']
          },
          {
            name: 'markazblr',
            urls: ['https://t.me/markazblr']
          },
          {
            name: 'SalafiDawaLancs',
            urls: ['https://t.me/SalafiDawaLancs']
          },
          {
            name: 'dusunnah',
            urls: ['https://t.me/dusunnah']
          },
          {
            name: 'musunnah',
            urls: ['https://t.me/musunnah']
          },
          {
            name: 'tawheedcardiff',
            urls: ['https://t.me/tawheedcardiff']
          },
          {
            name: 'sd_india',
            urls: ['https://t.me/sd_india']
          },
          {
            name: 'SLCER',
            urls: ['https://t.me/SLCER']
          }
        ]
      },
      {
        socialMediaName: 'X',
        icon: this.faXTwitter,
        classes: 'text-black',
        sites: [
          {
            name: 'Albaseerah:',
            urls: ['https://twitter.com/albaseerah']
          },
          {
            name: 'Salafi Dawah Lancs:',
            urls: ['https://twitter.com/SalafiDawaLancs']
          },
          {
            name: 'Masjid Daar us Sunnah:',
            urls: ['https://twitter.com/DaarusSunnah']
          },
          {
            name: 'TROID:',
            urls: ['https://twitter.com/troidorg']
          },
          {
            name: 'Learn About Islam:',
            urls: ['https://twitter.com/learnaboutislam']
          },
          {
            name: 'At-Tarbiyah South Florida:',
            urls: ['https://twitter.com/TarbiyahSouthFL']
          },
          {
            name: 'Muwahhideen Publications:',
            urls: ['https://twitter.com/Mpubs']
          },
          {
            name: 'Markaz Bukhari Lpool:',
            urls: ['https://twitter.com/MarkazBukhari']
          },
          {
            name: 'Markaz us-Sunnah:',
            urls: ['https://twitter.com/_MuSunnah']
          },
        ],
      },
      {
        socialMediaName: 'Websites',
        icon: this.faGlobe,
        classes: 'text-black',
        sites: [
          {
            name: 'Abukhadeejah',
            urls: ['http://www.abukhadeejah.com']
          },
          {
            name: 'Troid',
            urls: ['http://www.Troid.org']
          },
          {
            name: 'Spubs',
            urls: ['http://www.spubs.com']
          },
          {
            name: 'Mpubs',
            urls: ['http://www.mpubs.org/']
          },
          {
            name: 'Islaam',
            urls: ['http://www.islaam.ca']
          },
          {
            name: 'AlBaseerah',
            urls: ['http://www.alBaseerah.com']
          },
          {
            name: 'Salaficentre',
            urls: ['http://www.salaficentre.com']
          },
          {
            name: 'Cardiffdawah',
            urls: ['http://www.cardiffdawah.co.uk']
          },
          {
            name: 'SalafiMasjid',
            urls: ['http://www.SalafiMasjid.com']
          },
          {
            name: 'Dusunnah',
            urls: ['http://www.dusunnah.com']
          },
          {
            name: 'Markazmuaadh',
            urls: ['http://www.markazmuaadh.com']
          },
          {
            name: 'Markazbukhari',
            urls: ['http://markazbukhari.com/']
          },
          {
            name: 'Alhudabolton',
            urls: ['http://alhudabolton.com/']
          },
          {
            name: 'Tuitionclub',
            urls: ['https://www.tuitionclub.org/']
          },
          {
            name: 'Salafischool',
            urls: ['https://salafischool.co.uk/']
          },
          {
            name: 'Giveaquraan',
            urls: ['https://www.giveaquraan.org/']
          },
          {
            name: 'Ccdawah',
            urls: ['https://www.ccdawah.co.uk/']
          },
          {
            name: 'Sunnahpublishing',
            urls: ['http://www.sunnahpublishing.net']
          },
          {
            name: 'Germantownmasjid',
            urls: ['www.germantownmasjid.com']
          },
          {
            name: 'Tasfiyah',
            urls: ['https://tasfiyah.com/']
          },
          {
            name: 'Islam',
            urls: ['http://islam.tt/']
          },
          {
            name: 'Embodyislam',
            urls: ['https://embodyislam.org/']
          },
          {
            name: 'Masjidfurqan',
            urls: ['www.masjidfurqan.co.uk']
          },
          {
            name: 'Ah-sp',
            urls: ['www.ah-sp.com']
          },
          {
            name: 'Salaficulture',
            urls: ['http://salaficulture.com/']
          },
          {
            name: 'Masjidussunnah',
            urls: ['http://masjidussunnah.co.uk/']
          },
          {
            name: 'Bakkah',
            urls: ['http://www.bakkah.net/en/']
          },
          {
            name: 'Musunnah',
            urls: ['https://musunnah.com/']
          },
          {
            name: 'Tawheedfirst',
            urls: ['http://www.tawheedfirst.com/']
          },
          {
            name: 'Markazblru',
            urls: ['https://sites.google.com/site/markazblru/']
          },
          {
            name: 'Mtws',
            urls: ['https://mtws.posthaven.com/']
          },
          {
            name: 'Followingthesunnah',
            urls: ['https://followingthesunnah.wordpress.com']
          },
          {
            name: 'Learnaboutislam',
            urls: ['http://learnaboutislam.co.uk']
          },
          {
            name: 'Miraathpubs',
            urls: ['http://www.miraathpubs.net/en/']
          },
          {
            name: 'Islamseychelles',
            urls: ['https://www.islamseychelles.com/']
          },
          {
            name: 'Wrightstreetmosque',
            urls: ['https://www.wrightstreetmosque.com/']
          },
          {
            name: 'Salaf',
            urls: ['www.salaf.com']
          },
          {
            name: 'Aqidah',
            urls: ['www.aqidah.com']
          },
          {
            name: 'Aboutatheism',
            urls: ['http://www.aboutatheism.net']
          },
          {
            name: 'Themadkhalis',
            urls: ['www.themadkhalis.com']
          },
          {
            name: 'Asharis',
            urls: ['www.asharis.com']
          },
          {
            name: 'Rahmaniyyahpublishing',
            urls: ['www.rahmaniyyahpublishing.wordpress.com']
          },
          {
            name: 'Islamagainstextremism',
            urls: ['http://islamagainstextremism.com']
          },
          {
            name: 'Nawawis40hadith',
            urls: ['https://www.nawawis40hadith.com']
          },
          {
            name: 'Islamjesus',
            urls: ['http://islamjesus.ws']
          },
          {
            name: 'Abovethethrone',
            urls: ['http://abovethethrone.com']
          },
          {
            name: 'Wahhabis',
            urls: ['http://wahhabis.com']
          },
          {
            name: 'Kharijites',
            urls: ['http://kharijites.com/']
          },
          {
            name: 'Sahihalbukhari',
            urls: ['http://sahihalbukhari.com']
          },
          {
            name: 'Sahihmuslim',
            urls: ['http://sahihmuslim.com']
          },
          {
            name: 'Thenoblequran',
            urls: ['http://thenoblequran.com/']
          },
          {
            name: 'Barelwis',
            urls: ['http://barelwis.com']
          },
          {
            name: 'Bidah',
            urls: ['http://bidah.com']
          },
          {
            name: 'Dajjal',
            urls: ['http://dajjal.com']
          },
          {
            name: 'Fiqhonline',
            urls: ['http://fiqhonline.com']
          },
          {
            name: 'Ikhwanis',
            urls: ['http://ikhwanis.com']
          },
          {
            name: 'Learnarabic',
            urls: ['http://learnarabic.com']
          },
          {
            name: 'Manhaj',
            urls: ['http://manhaj.com']
          },
          {
            name: 'Maturidis',
            urls: ['http://maturidis.com']
          },
          {
            name: 'Mutazilah',
            urls: ['http://mutazilah.com']
          },
          {
            name: 'Piousmuslim',
            urls: ['http://piousmuslim.com']
          },
          {
            name: 'Prophetmuhammad',
            urls: ['http://prophetmuhammad.name']
          },
          {
            name: 'Salafis',
            urls: ['http://salafis.com']
          },
          {
            name: 'Sayyidqutb',
            urls: ['http://sayyidqutb.com']
          },
          {
            name: 'Shariah',
            urls: ['http://shariah.ws']
          },
          {
            name: 'Shia',
            urls: ['http://shia.bs']
          },
          {
            name: 'Takfiris',
            urls: ['http://takfiris.com']
          },
          {
            name: 'Tawhidfirst',
            urls: ['http://tawhidfirst.com']
          },
          {
            name: 'Madeenah',
            urls: ['http://www.madeenah.org/md/index.cfm']
          },
          {
            name: 'Alhajuri',
            urls: ['http://alhajuri.com']
          },
          {
            name: 'Albani',
            urls: ['http://albani.co.uk']
          },
          {
            name: 'Binbaz',
            urls: ['http://binbaz.co.uk']
          },
          {
            name: 'Binuthaymin',
            urls: ['http://binuthaymin.co.uk']
          },
          {
            name: 'Ibntaymiyyah',
            urls: ['http://ibntaymiyyah.com']
          },
          {
            name: 'Muqbil',
            urls: ['http://muqbil.co.uk']
          },
          {
            name: 'Rabee',
            urls: ['http://rabee.co.uk']
          },
          {
            name: 'Ubayd',
            urls: ['http://ubayd.co.uk']
          },
          {
            name: 'Fawzan',
            urls: ['http://www.fawzan.co.uk/']
          }
        ]
      },
    ];
  }

  onSocialMedialClick(url: string): void {
    window.open(url, "_blank");
  }

}
