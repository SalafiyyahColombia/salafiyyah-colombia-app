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
      {socialMediaName: 'Facebook', icon: this.faFacebook, url: 'https://web.facebook.com/groups/salafiyyahcolombia', style: 'text-primary mt-5'},
      {socialMediaName: 'Instagram', icon: this.faInstagram, url: 'https://www.instagram.com/salafiyyah_colombia/', style: 'text-danger mt-5'},
      {socialMediaName: 'Telegram', icon: this.faTelegram, url: 'https://t.me/salafiyyahcolombia', style: 'text-info mt-5'},
      {socialMediaName: 'Threads', icon: this.faThreads, url: 'https://www.threads.net/@salafiyyah_colombia', style: 'text-black mt-5'},
      {socialMediaName: 'Youtube', icon: this.faYoutube, url: 'https://www.youtube.com/channel/UCy3V2DPyTmwedEr0soDv-7A', style: 'text-danger mt-5'},
      {socialMediaName: 'Mezquita', icon: this.faMapPin, url: 'https://maps.app.goo.gl/ZuyqYwQeFVonZFRn7', style: 'text-danger mt-5'},
      {socialMediaName: 'Whatsapp', icon: this.faWhatsapp, url: 'https://wa.me/+573216081336', style: 'text-success mt-5'},
    ];
  }

  onSocialMedialClick(url: string): void {
    window.open(url, "_blank");
  }
}
