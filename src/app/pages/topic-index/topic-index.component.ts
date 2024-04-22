import {Component} from '@angular/core';
import {TopicInterface} from "../../Interfaces/topic.interface";
import {MatChipSelectionChange} from "@angular/material/chips";

@Component({
  selector: 'app-topic-index',
  templateUrl: './topic-index.component.html',
  styleUrls: ['./topic-index.component.scss']
})
export class TopicIndexComponent {
  topics: Array<TopicInterface> = [];
  filteredTopics: Array<TopicInterface> = [];
  categories: string[] = [
    'Conceptos básicos',
    'Creencia',
    'Metodología',
    'Corán',
    'Hadith',
    'Adoración',
    'Búsqueda del conocimiento',
    'Suavizantes del corazón',
    'Dawa',
    'Sociedad y cultura',
    'Biografías',
    'Mujeres',
    'Matrimonio',
    'Niños',
    'Refutación'
  ];

  constructor() {
    this.topics = [
      {
        title: 'Aquidah al-Wasitiyyah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/sharh-aqeedat-ul-waasitiyyah-shaykh-saleh-al-fawzan-parte-1-la-basmallah.html',
        description: 'Esta es la explicación del libro escrito por Shaykhul Islam Ibn Taymiyyah sobre la Creencia islámica (Aqida) titulado "al-Aqidah al-Waasitiyyah". La explicación es proporcionada por el renombrado erudito del Islam, Shaykh Saleh al-Fawzan. Su obra en árabe ha sido traducida al inglés por Iyaad as-Salafi.',
        categories: ['Creencia', 'Metodología'],
      },
      {
        title: 'Fundamentos de la sunnah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/fundamentos-de-la-sunnah-introduccion-el-sirat-ul-mustaquim-sheikh-an-najmi.html',
        description: 'El artículo a continuación se basa principalmente en la explicación de Shaikh Ahmad bin Yahya An-Najmi (que Allah tenga misericordia de él) del "Usool us-Sunnah" de Imam Ahmad Ibn Hanbal. Shaikh An-Najmi fue uno de los principales eruditos de Ahlus-Sunnah de esta era. En esta introducción, explica que el Sirātul Mustaqeem es el camino de la Gente del Hadiz; aquellos que siguen el Corán y la Sunnah bajo la comprensión de los Sahābah (que Allah esté complacido con ellos).',
        categories: ['Creencia', 'Metodología'],
      },
      {
        title: 'Kitab at-Tawhid (Explicación del sheikh Ahmad an-Najmi',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/kitab-at-tawhid-de-mohammed-bin-andul-wahhab-con-la-explicacio-de-sheikh-an-najmi-parte-00-introduccion.html',
        description: 'Esta es una explicación del Kitab at-Tawhid (El Libro de la Unicidad de Allah) por Sheikh ul-Islam Muhammad bin Abdul-Wahhab (fallecido en el año 1206 de la Hégira, que Allah tenga misericordia de él). La explicación fue escrita por Ash-Sheikh Al-Allamah Ahmad bin Yahya An-Najmi (que Allah tenga misericordia de él) y adaptada por Abu Khadijah Abdul-Wahid Alam.',
        categories: ['Creencia'],
      },
      {
        title: 'Esta Ummah se dividirá en 73 sectas',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/kitab-at-tawhid-de-mohammed-bin-andul-wahhab-con-la-explicacio-de-sheikh-an-najmi-parte-00-introduccion.html',
        description: 'Imam al-Barbaharī (que Allah tenga misericordia de él, fallecido en el 329 AH) afirmó: "Sabe que el Mensajero de Allah (que la paz y las bendiciones de Allah sean con él) dijo: Mi Ummah se dividirá en 73 sectas, todas ellas estarán en el Fuego excepto una, y esa es la Jama\'ah\'. Se le preguntó: ¿Y quiénes son ellos, oh Mensajero de Allah? Él (que la paz y las bendiciones de Allah sean con él) respondió: Lo que yo y mis Compañeros seguimos hoy en día."',
        categories: ['Hadith'],
      },
      {
        title: 'El Día de \'Eid y la Oración del \'Eid: Obligaciones, Sunan y Celebración',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/04/el-dia-de-eid-y-la-oracion-del-eid.html',
        description: 'El día del \'Eid y la oración del \'Eid: Obligaciones, sunan y celebración - Por los Sheikh Saleh al-Fawzan, Ibn Uthaymin, al-Albani, al-Baghawi y otros.',
        categories: ['Jurisprudencia'],
      },
      {
        title: 'Las refutaciones son de la religión del Islam',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/las-refutaciones-son-de-la-religion-del-islam.html',
        description: 'Pregunta: ¿Qué dice usted acerca de quien dice: "En verdad, la refutación contra la gente de las innovaciones y el extravío no fue de la práctica de los Salaf, ¿y los libros de la refutación no merecen ser distribuidos sino entre los estudiantes de conocimiento y no deben ser distribuidos a otros que no sean ellos?',
        categories: ['Jurisprudencia'],
      },
      {
        title: 'Seis de los Medios que conducen a la Firmeza en la Religión',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/seis-medios-que-conducen-a-la-firmeza-en-la-religion.html',
        description: 'Seis de los Medios que conducen a la Firmeza en la Religión (Thabāt): “Allah mantendrá firmes a aquellos que creen, con la palabra que se mantiene firme en la vida de este mundo, y en la otra vida.',
        categories: ['conceptos basicos'],
      },
      {
        title: 'El Fiqh del Qunut en witr y Qunut en el mes de Ramadan',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/03/el-fiqh-del-qunoot-en-witr-y-qunoot-en.html',
        description: 'El Qunoot de Witr es específico de la última Rak\'ah de la oración del Witr según la mayoría de los eruditos. La Shari’ah ha legislado un du\'a particular para ser recitado en la oración de Witr. Hasan bin Ali (radiyallāhu anhumā) narró: El Mensajero de Allah (salallāhu \'alaihi wasallam) me enseñó las palabras que debía recitar en el Qunoot del Witr',
        categories: ['Jurisprudencia'],
      },
      {
        title: 'Las bases de la adoración',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/las-bases-de-la-adoracion.html',
        description: 'El Sheijul-Islam Ibn Taymiyyah (que Allah tenga misericordia de él) dijo: "La adoración es la obediencia a Allah llevando a cabo lo que Él ha ordenado en las lenguas de Sus mensajeros.',
        categories: ['Jurisprudencia', 'Conceptos básicos'],
      },
      {
        title: '¿Cual es el significado de la noche de la mitad de Sha\'ban?',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/cual-es-el-significado-de-la-noche-de.html',
        description: '¿Existe alguna Sunnah que esté legislada en la noche del medio de Sha\'bān (es decir, el 15 de Sha\'bān)? Hay algunos hadices citados que son utilizados por la gente.',
        categories: ['Jurisprudencia', 'Conceptos básicos'],
      },
      {
        title: 'Ser visto con un innovador',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/imam-al-barbahari-sobre-ser-visto-con-un-innovador-explicacion-por-sheikh-saleh-fawzan.html',
        description: 'Imam al-Barbahari sobre "ser visto con un innovador". Explicación del Sheikh Al-Fawzan',
        categories: ['Jurisprudencia', 'Conceptos básicos', 'Creencia'],
      },
      {
        title: '¿Debería haber unidad entre Ahlus-Sunnah y Ahlul-Bidʿah contra los incrédulos, liberales y materialistas?',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/deberia-haber-unidad-entre-ahlus-sunnah-y-ahlul-bidah-contra-los-enemigos-del-islam.html',
        description: 'El noble erudito, Al-ʿAllāmah, Sālih Al-Fawzān (que Allah lo preserve) fue preguntado: "Escuché en uno de los canales islámicos donde un pensador afirmó que es sabio que los diversos grupos islámicos cooperen entre sí contra los materialistas y aquellos similares a ellos. ¿Es correcta esta afirmación?',
        categories: ['Jurisprudencia', 'Conceptos básicos', 'Creencia'],
      },
      {
        title: 'El Testimonio de Fe Musulmana: Shahādah y sus Condiciones.',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/el-testimonio-de-fe-musulmana-shahadah-y-sus-condiciones.html',
        description: 'El Profeta (la paz y las bendiciones sean con él) dijo: "El Islam se construye sobre cinco: La declaración de que no hay más digno de adoración que Allah y que Muhammad es el Mensajero de Allah...',
        categories: ['Conceptos básicos'],
      },
      {
        title: 'Principios importantes sobre los Nombres y Atributos de Allah: La \'Aqidah de Ahlus-Sunnah y una refutación de los opositores',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/principios-importantes-sobre-los-nombres-y-atributos-de-allah-la-aqidah-de-ahlus-sunnah-y-una-refutacion-de-los-opositores-sheikh-Ibn-uthaimin.html',
        description: 'Ibn Qudaamah al-Maqdisi. Este libro fue explicado por el ilustre Imam de la Sunnah y la Aqidah, el erudito salafista, Muhammad b. Saalih al-‘Uthaimin',
        categories: ['Conceptos básicos'],
      },
      {
        title: 'Las virtudes y principios de ordenar el bien y prohibir el mal',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/as-virtudes-y-principios-de-ordenar-el-bien-y-prohibir-el-mal.html',
        description: 'Imām Al-Barbahārī (rahimahullāh) afirmó: "Ordenar el bien y prohibir el mal es una obligación, excepto cuando temes la espada o el bastón de una persona".',
        categories: ['Conceptos básicos'],
      },
      {
        title: 'Matrimonio y actividades relacionadas con la boda que se oponen al Corán y la Sunnah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/matrimonio-y-actividades-relacionadas.html',
        description: 'Matrimonio y actividades relacionadas con la boda que se oponen al Corán y la Sunnah. Por Abu Khadeejah Abdul-Wāhid',
        categories: ['Conceptos básicos', 'Matrimonio'],
      },
      {
        title: 'Matrimonio y actividades relacionadas con la boda que se oponen al Corán y la Sunnah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/matrimonio-y-actividades-relacionadas.html',
        description: 'Matrimonio y actividades relacionadas con la boda que se oponen al Corán y la Sunnah. Por Abu Khadeejah Abdul-Wāhid',
        categories: ['Conceptos básicos', 'Matrimonio'],
      },
      {
        title: 'Once formas de realizar la Ruqyah en ti mismo para tratar enfermedades, mal de ojo, posesión, locura y magia.',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/once-formas-de-realizar-ruqyah-en-ti-mismo-para-tratar-enfermedades-mal-de-ojo-posesion-locura-y-magia.html',
        description: 'La cura es alcanzable para el musulmán que teme a Allah (عَزَّ وَ جَلَّ), lo adora, le suplica y lo recuerda abundantemente; para aquel que establece la Oración, paga el Zakāt, ayuna el mes de Ramadān y realiza el Hajj (cuando es capaz).',
        categories: ['Conceptos básicos', 'Creencia'],
      },
      {
        title: 'Cómo evitar los caminos peligrosos que conducen al Talāq (divorcio).',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/como-evitar-los-caminos-peligrosos-que-conducen-al-divorcio.html',
        description: 'De las calamidades y males claros y evidentes que se han vuelto generalizados en las comunidades musulmanas, especialmente en estos tiempos, está el aumento de los casos de divorcio―y los salafis no son inmunes a este asunto.',
        categories: ['Matrimonio'],
      },
      {
        title: 'Las Tres Categorías de la Paciencia y los Cuatro Estados en los que las Personas Caen Cuando Son Afectadas por la Calamidad',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/las-tres-categorias-de-la-paciencia-y.html',
        description: '“¡Oh, creyentes! Tened paciencia, esforzaos en la paciencia, y sean más pacientes [que el enemigo] y protejan su territorio y temed a Allah, para que seáis exitosos.” (Surah Aali ‘Imrān 3:200).',
        categories: ['Creencia', 'Conceptos básicos'],
      },
      {
        title: 'Las últimas noches de nuestros eruditos de Ahlus-Sunnah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/las-ultimas-noches-de-nuestros-eruditos.html',
        description: 'Las últimas noches de nuestros eruditos de Ahlus-Sunnah - por el Sheik Abdullah Adh-Dhafiri.',
        categories: ['Biografías'],
      },
      {
        title: '¿Cómo sabes que no te desviarás después de recibir la guia?',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/como-sabes-que-no-te-desviaras-despues-de-recibir-la-guia-sheikh-saleh-fawzan.html',
        description: '¿Cómo sabes que no te desviarás después de recibir la guia? - Shaykh Salih Fawzan.',
        categories: ['Creencia'],
      },
      {
        title: 'Al-Walaa Wal-Baraa (Lealtad y Repudio) la Aqidah en todos los libros clásicos de la Aqidah',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/al-walaa-wal-baraa-lealtad-y-repudio-la.html',
        description: 'Es importante que el musulmán se dé cuenta cuando está aprendiendo la aqidah, que no es un ejercicio puramente académico. Más bien, el credo es algo en torno a lo cual y sobre lo cual se basa la lealtad y la negación.',
        categories: ['Creencia', 'Conceptos básicos'],
      },
      {
        title: 'La importancia del tawhid',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/02/la-importancia-del-tawhid-shaikh.html',
        description: 'La verdad ha llegado y la falsedad se ha desvanecido; seguramente la falsedad siempre desaparecerá. [17:81]',
        categories: ['Creencia', 'Conceptos básicos'],
      },
      {
        title: 'Una respuesta a los ateos que afirman que el universo surgió por sí solo y luego evolucionó progresivamente hasta su estado actual',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/una-respuesta-los-ateos-que-afirman-que-el-universo-surgio-por-si-solo.html',
        description: 'Refutamos a los ateos con lo que Allah, el Altísimo, ha declarado en el Corán: "¿Fueron creados de la nada o fueron ellos los creadores?" (Aṭ-Ṭūr: 35).',
        categories: ['Refutación'],
      },
      {
        title: 'Sobre lo que es obligatorio creer con respecto a al-Qadaa wal-Qadar',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/opvus-ibn-battah-al-ukbaree-d-387h-sobre-lo-que-es-obligatorio-creer-en-respecto-al-qadaa-wal-qadar-parte-1.html',
        description: 'Ibn Battah al-Ukbaree (m. 387H) sobre lo que es obligatorio creer con respecto a al-Qadaa wal-Qadar - parte 1',
        categories: ['Creencia', 'Conceptos básicos'],
      },
      {
        title: 'Tener gentileza y sabiduría con el musulmán común que no es un llamador a la desviación',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/tener-amabilidad-y-sabiduria-con-el-musulman-en-general-que-no-llama-al-desvio-como-enfatizo-rabi-madkhali.html',
        description: 'Tener gentileza y sabiduría con el musulmán común que no es un llamador a la desviación es enfatizado por el noble erudito, el ʿAllāmah, Rabīʿ Ibn Hādī Al-Madkhalī (que Allāh lo preserve).',
        categories: ['Creencia', 'Conceptos básicos', 'Suavizantes del corazón'],
      },
      {
        title: '¿Qué es el salafismo? Lea sobre los aspectos más importantes de Salafiyya',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/que-es-el-salafismo-lea-sobre-los-aspectos-mas-importantes.html',
        description: 'Los términos salafista, sunita, Ahlus-Sunnah wal-Jamā’ah, As-hābul-Hadieth y Ahlul-Hadieth son intercambiables. Todos estos títulos se refieren al mismo grupo de personas que siguen el mismo camino. Sin embargo, no todos los que utilizan estos títulos son fieles a lo que representan.',
        categories: ['Creencia', 'Conceptos básicos'],
      },
      {
        title: 'Esta Ummah se dividirá en 73 sectas',
        url: 'https://salafiyyahcolombia.blogspot.com/2024/01/esta-ummah-se-dividira-en-73-sectas-sheikh-al-fawzan-explica-que-significa.html',
        description: 'Imām al-Barbahārī (rahimahullāh, murió en 329 AH) declaró: “Sepan que el Mensajero de Allah (salallāhu \'alaihi wa sallam) dijo: “Mi ummah se dividirá en 73 sectas, todas ellas estarán en el Fuego excepto una, y esa es la Jamā\'ah.” Se dijo: "¿Y quiénes son ellos, oh Mensajero de Allah?" Él (salallāhu ‘alaihi wasallam) respondió: “Aquellos que están en lo que yo y mis Compañeros nos encontramos hoy”',
        categories: ['Hadith'],
      },
    ]
    this.filteredTopics = [...this.topics];
  }

  onCardClick(url: string): void {
    window.open(url, "_blank");
  }

  onChipClick(chipSelection: MatChipSelectionChange): void {
    console.log(chipSelection)
    if (chipSelection.selected) {
      this.filteredTopics = this.topics.filter(topic => topic.categories.includes(chipSelection.source.value));
    } else {
      this.filteredTopics = [...this.topics];
    }
  }
}
