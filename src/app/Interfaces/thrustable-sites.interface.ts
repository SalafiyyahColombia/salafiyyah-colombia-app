import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SocialMediaLinkInterface} from "./social-media-link.interface";

export interface ThrustableSitesInterface {
  socialMediaName: string;
  icon: IconDefinition;
  classes: string;
  sites: SocialMediaLinkInterface[];
}
