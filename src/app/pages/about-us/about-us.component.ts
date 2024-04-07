import { Component } from '@angular/core';
import { faMapPin} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTelegram, faThreads, faWhatsapp, faYoutube,IconDefinition} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
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
      {icon: this.faFacebook, url: 'https://web.facebook.com/groups/salafiyyahcolombia', style: 'text-primary'},
      {icon: this.faInstagram, url: 'https://www.instagram.com/salafiyyah_colombia/', style: 'text-danger'},
      {icon: this.faTelegram, url: 'https://t.me/salafiyyahcolombia', style: 'text-info'},
      {icon: this.faThreads, url: 'https://www.threads.net/@salafiyyah_colombia', style: 'text-black'},
      {icon: this.faWhatsapp, url: '', style: 'text-success'},
      {icon: this.faMapPin, url: 'https://maps.app.goo.gl/ZuyqYwQeFVonZFRn7', style: 'text-danger'},
      {icon: this.faYoutube, url: 'https://www.youtube.com/channel/UCy3V2DPyTmwedEr0soDv-7A', style: 'text-danger'},
    ];
  }

  onSocialMedialClick(url: string): void {
    window.open(url, "_blank");
  }
}
