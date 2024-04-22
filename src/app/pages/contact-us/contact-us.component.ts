import { Component } from '@angular/core';
import { faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTelegram, faThreads, faWhatsapp, faYoutube,IconDefinition} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  faFacebook: IconDefinition = faFacebook;
  faInstagram: IconDefinition = faInstagram;
  faTelegram: IconDefinition = faTelegram;
  faThreads: IconDefinition = faThreads;
  faWhatsapp: IconDefinition = faWhatsapp;
  faMapPin: IconDefinition = faMapPin;
  faYoutube: IconDefinition = faYoutube;
  socialMediaItems:  Array<any> = [];

  constructor() {
    this.socialMediaItems = [
      {socialMediaName: 'Facebook', icon: this.faFacebook, url: 'https://web.facebook.com/groups/salafiyyahcolombia', style: 'text-primary my-3'},
      {socialMediaName: 'Instagram', icon: this.faInstagram, url: 'https://www.instagram.com/salafiyyah_colombia/', style: 'text-danger my-3'},
      {socialMediaName: 'Telegram', icon: this.faTelegram, url: 'https://t.me/salafiyyahcolombia', style: 'text-info my-3'},
      {socialMediaName: 'Threads', icon: this.faThreads, url: 'https://www.threads.net/@salafiyyah_colombia', style: 'text-black my-3'},
      {socialMediaName: 'Youtube', icon: this.faYoutube, url: 'https://www.youtube.com/channel/UCy3V2DPyTmwedEr0soDv-7A', style: 'text-danger my-3'},
      {socialMediaName: 'Mezquita', icon: this.faMapPin, url: 'https://maps.app.goo.gl/ZuyqYwQeFVonZFRn7', style: 'text-danger my-3'},
      // {socialMediaName: 'Whatsapp', icon: this.faWhatsapp, url: '', style: 'text-success my-3'},
    ];
  }

  onSocialMedialClick(url: string): void {
    window.open(url, "_blank");
  }
}
