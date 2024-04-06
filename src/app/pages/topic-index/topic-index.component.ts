import {Component} from '@angular/core';
import {TopicInterface} from "../../Interfaces/topic.interface";

@Component({
  selector: 'app-topic-index',
  templateUrl: './topic-index.component.html',
  styleUrls: ['./topic-index.component.scss']
})
export class TopicIndexComponent {
  topics: Array<TopicInterface> = [];

  constructor() {
    this.topics = [
      {
        title: 'Aquidah al-Wasitiyyah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/sharh-aqeedat-ul-waasitiyyah-shaykh-saleh-al-fawzan-parte-1-la-basmallah.html',
        description: 'Esta es la explicación del libro escrito por Shaykhul Islam Ibn Taymiyyah sobre la creencia islámica (Aqida) titulado "al-Aqidah al-Waasitiyyah". La explicación es proporcionada por el renombrado erudito del Islam, Shaykh Saleh al-Fawzan. Su obra en árabe ha sido traducida al inglés por Iyaad as-Salafi.'
      },
      {
        title: 'Fundamentos de la sunnah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/fundamentos-de-la-sunnah-introduccion-el-sirat-ul-mustaquim-sheikh-an-najmi.html',
        description: 'El artículo a continuación se basa principalmente en la explicación de Shaikh Ahmad bin Yahya An-Najmi (que Allah tenga misericordia de él) del "Usool us-Sunnah" de Imam Ahmad Ibn Hanbal. Shaikh An-Najmi fue uno de los principales eruditos de Ahlus-Sunnah de esta era. En esta introducción, explica que el Sirātul Mustaqeem es el camino de la Gente del Hadiz; aquellos que siguen el Corán y la Sunnah bajo la comprensión de los Sahābah (que Allah esté complacido con ellos).'
      },
      {
        title: 'Kitab at-Tawhid (Explicación del sheikh Ahmad an-Najmi',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/kitab-at-tawhid-de-mohammed-bin-andul-wahhab-con-la-explicacio-de-sheikh-an-najmi-parte-00-introduccion.html',
        description: 'Esta es una explicación del Kitab at-Tawhid (El Libro de la Unicidad de Allah) por Sheikh ul-Islam Muhammad bin Abdul-Wahhab (fallecido en el año 1206 de la Hégira, que Allah tenga misericordia de él). La explicación fue escrita por Ash-Sheikh Al-Allamah Ahmad bin Yahya An-Najmi (que Allah tenga misericordia de él) y adaptada por Abu Khadijah Abdul-Wahid Alam.'
      }
    ]
  }

  onCardClick(url: string): void {
    window.open(url, "_blank");
  }
}
