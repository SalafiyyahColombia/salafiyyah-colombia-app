import { Component } from '@angular/core';
import {
  faBlogger,
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faYoutube,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import {ThrustableSitesInterface} from "../../Interfaces/thrustable-sites.interface";

@Component({
  selector: 'app-thrustable-sources',
  templateUrl: './thrustable-sources.component.html',
  styleUrls: ['./thrustable-sources.component.scss']
})
export class TrustableSourcesComponent {
  faYoutube: IconDefinition = faYoutube;
  faInstagram: IconDefinition = faInstagram;
  faTelegram: IconDefinition = faTelegram;
  faFacebook: IconDefinition = faFacebook;
  faTiktok: IconDefinition = faTiktok;
  faBlogger: IconDefinition = faBlogger;
  trustableSites: ThrustableSitesInterface[] = [];

  constructor() {
    this.trustableSites = [
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
  }
  onSocialMedialClick(url: string): void {
    window.open(url, "_blank");
  }

}
