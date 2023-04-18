import { Countries, Periods, Subjects } from './constants';
import { DataInterface, PeriodsDataInterface } from './types';

import VikingAgeImagePath from './assets/images/VikingAge/main.webp';
import AssimilationImagePath from './assets/images/Assimilation/main.webp';

import VikingAgeHistoryNorwayImage from './assets/images/VikingAge/History/norway.webp';
import VikingAgeHistorySwedenImage from './assets/images/VikingAge/History/sweden.webp';
import VikingAgeHistoryDenmarkImage from './assets/images/VikingAge/History/denmark.webp';
import VikingAgeHistoryNordenImage from './assets/images/VikingAge/History/norden.webp';

import VikingAgeCultureNorwayImage from './assets/images/VikingAge/Culture/norway.webp';
import VikingAgeCultureSwedenImage from './assets/images/VikingAge/Culture/sweden.webp';
import VikingAgeCultureDenmarkImage from './assets/images/VikingAge/Culture/denmark.webp';
import VikingAgeCultureNordenImage from './assets/images/VikingAge/Culture/norden.webp';

import AssimilationHistoryNorwayImage from './assets/images/Assimilation/History/norway.webp';
import AssimilationHistorySwedenImage from './assets/images/Assimilation/History/sweden.webp';
import AssimilationHistoryDenmarkImage from './assets/images/Assimilation/History/denmark.webp';
import AssimilationHistoryNordenImage from './assets/images/Assimilation/History/norden.webp';

import AssimilationCultureNorwayImage from './assets/images/Assimilation/Culture/norway.webp';
import AssimilationCultureSwedenImage from './assets/images/Assimilation/Culture/sweden.webp';
import AssimilationCultureDenmarkImage from './assets/images/Assimilation/Culture/denmark.webp';
import AssimilationCultureNordenImage from './assets/images/Assimilation/Culture/norden.webp';

export const periodsData: PeriodsDataInterface = {
  [Periods.Viking]: {
    name: Periods.Viking,
    primaryColor: '#B898FB',
    secondaryColor: '#3D006C',
    imagePath: VikingAgeImagePath,
    quotationText:
      'The Vikings were a fascinating people, whose legacy still echoes through history today',
    quotationAuthor: 'Judith Jesch',
  },
  [Periods.Assimilation]: {
    name: Periods.Assimilation,
    primaryColor: '#D6A953',
    secondaryColor: '#2A51B6',
    imagePath: AssimilationImagePath,
    quotationText:
      'The Vikings were conquerors of the sea, the masters of the sword and builders of empires',
    quotationAuthor: 'Magnus Magnusson',
  },
};

export const data: DataInterface = {
  [Periods.Viking]: {
    [Subjects.History]: {
      [Countries.Norway]: {
        primaryColor: '#2B766C',
        secondaryColor: '#982020',
        imagePath: VikingAgeHistoryNorwayImage,
        textBlocks: {
          left: [
            'The Viking Age is a period in European history that lasted from the late 8th century to the mid-11th century, with its origins in Scandinavia, including Norway. \n' +
              'During this time, Norwegian Vikings undertook voyages of exploration and conquest, establishing settlements in many parts of Europe, Asia, and North America.',
            'The Viking Age began in Norway in 793 AD when Vikings attacked the Christian monastery of Lindisfarne in England. This event marked the start of a period of intense Viking activity that would last for centuries. The Vikings were skilled navigators and seafarers, and they used their ships to raid coastal towns and villages throughout Europe.',
          ],
          right: [
            'In Norway, the Viking Age is characterized by the reign of Harald Fairhair, who is credited with unifying the various small kingdoms of Norway into a single, centralized state. \n' +
              'Under his rule, the Norwegian Vikings continued their seafaring and raiding activities, but they also began to settle in new areas and establish permanent communities.',
          ],
        },
      },
      [Countries.Sweden]: {
        primaryColor: '#4FCB89',
        secondaryColor: '#514FCB',
        imagePath: VikingAgeHistorySwedenImage,
        textBlocks: {
          left: [
            'The Viking Age, which lasted from 793 to 1066 AD, was a period of significant historical importance in Sweden. During this time, Swedish Vikings played a crucial role in shaping the history of Scandinavia, Europe, and even parts of the Middle East.',
            'At the start of the Viking Age, Sweden was divided into several small kingdoms, each ruled by a local chieftain. These chieftains and their warriors, who were collectively known as Vikings, were renowned for their seafaring skills and their raids on coastal towns and villages throughout Europe.',
            'Swedish Viking traders were known for their long-distance trade, particularly with the Byzantine Empire.',
          ],
          right: [
            'They traveled down the Volga River to Constantinople, where they traded furs, honey, and slaves for silver, silk, and spices.',
            'One of the most famous Swedish Vikings was Rurik. Other notable Viking leaders include Erik the Victorious, who united the small kingdoms of Sweden into a single state.',
          ],
        },
      },
      [Countries.Denmark]: {
        primaryColor: '#66A2FB',
        secondaryColor: '#E7A14E',
        imagePath: VikingAgeHistoryDenmarkImage,
        textBlocks: {
          left: [
            "The Viking Age, which lasted from 793 to 1066 AD, was a period of great significance in Denmark's history. During this time, Danish Vikings established settlements and trading posts throughout Europe, Asia, North America, leaving a lasting impact on the world.",
            'Danish Vikings were renowned for their seafaring skills and their raids on coastal towns and villages throughout Europe. They also established permanent settlements in places such as England, Ireland, and Iceland. Danish Vikings also reached as far east as Constantinople, where they formed the elite Varangian Guard and fought as mercenaries for the Byzantine Emperor.',
          ],
          right: [
            'At the start of the Viking Age, Denmark was ruled by several powerful chieftains who often competed for dominance. However, this period also saw the rise of several legendary Danish kings, including Harald Bluetooth, who is credited with unifying Denmark and introducing Christianity to the country.',
          ],
        },
      },
      [Countries.Norden]: {
        primaryColor: '#FFAAA4',
        secondaryColor: '#FF8DED',
        imagePath: VikingAgeHistoryNordenImage,
        textBlocks: {
          left: [
            'The Viking Age, which lasted from 793 to 1066 AD, was a time of significant historical importance in Norden. During this period, the Vikings from Norden were renowned for their seafaring skills, their raids and conquests.',
            "During the Viking Age, the different regions of Norden were ruled by a series of powerful chieftains and kings who frequently competed for power and territory. However, this period also saw the rise of several legendary leaders who played a significant role in shaping the region's history, including Harald Bluetooth in Denmark, Erik the Victorious in Sweden, and Olaf Tryggvason in Norway.",
          ],
          right: [
            'The Vikings from Norden were renowned for their maritime skills and their raids on coastal towns and villages throughout Europe, Asia, and North America. They were also accomplished traders and craftsmen, trading goods such as furs, amber, and weapons throughout the world and producing some of the most remarkable works of art and craftsmanship of the period.',
          ],
        },
      },
    },
    [Subjects.Culture]: {
      [Countries.Norway]: {
        primaryColor: '#B9C0FF',
        secondaryColor: '#206698',
        imagePath: VikingAgeCultureNorwayImage,
        textBlocks: {
          left: [
            'One of the defining features of Viking culture was their art. The Vikings were skilled metalworkers, and they used their expertise to create intricate pieces of jewelry, weapons, and household items. They also carved intricate designs into wood and stone, creating some of the most impressive artwork of the time.',
            'Another significant aspect of Viking culture was their religion. The Vikings worshiped a pantheon of gods and goddesses, such as Odin, Thor, and Freyja. They believed in an afterlife in Valhalla, where the bravest warriors went after they died in battle. To honor their gods, the Vikings built elaborate temples and performed complex rituals.',
          ],
          right: [
            'Despite their reputation as fierce warriors, the Vikings were also skilled farmers and traders. They were known for their shipbuilding skills, which allowed them to explore and trade throughout Europe and beyond. The Vikings traded furs, textiles, and precious metals, and they established trading settlements throughout the world.',
          ],
        },
      },
      [Countries.Sweden]: {
        primaryColor: '#82B770',
        secondaryColor: '#714481',
        imagePath: VikingAgeCultureSwedenImage,
        textBlocks: {
          left: [
            'One of the defining features of Viking culture in Sweden was their art. The Vikings were skilled metalworkers, and they used their expertise to create intricate pieces of jewelry, weapons, household items. They also carved intricate designs into wood and stone, creating some of the most impressive artwork of the time.',
            'Old Norse was also the language spoken in Sweden during the Viking Age, and it was the ancestor of modern Scandinavian languages.',
            'Sweden is home to many runestones, which were erected during the Viking Age as memorials or to commemorate important events. They are inscribed with runes, an early form of writing.',
          ],
          right: [
            'Another significant aspect of Viking culture in Sweden was their religion. The Vikings worshipped a pantheon of gods and goddesses, such as Odin, Thor, and Freyja. They believed in an afterlife in Valhalla, where the bravest warriors went after they died in battle. To honor their gods, the Vikings built elaborate temples and performed complex rituals.',
          ],
        },
      },
      [Countries.Denmark]: {
        primaryColor: '#4542D4',
        secondaryColor: '#AD9E4E',
        imagePath: VikingAgeCultureDenmarkImage,
        textBlocks: {
          left: [
            'The Viking Age in Denmark lasted from 793 to 1066 and was a time of significant cultural, social, and economic change. During this period, Danish Vikings, also known as Norsemen, traveled widely, engaging in trade and raiding across Europe and beyond.',
            'The Danish Vikings, like their Scandinavian counterparts, worshipped a pantheon of gods, including Odin, Thor, and Freya. They also believed in an afterlife in Valhalla.',
            'Danish Viking art was characterized by intricate designs and motifs, often featuring animals and mythological figures. Metalwork, such as jewelry and weapons, was highly prized.',
          ],
          right: [
            'Denmark is home to many runestones, which were erected during the Viking Age as memorials or to commemorate important events. They are inscribed with runes, an early form of writing.',
          ],
        },
      },
      [Countries.Norden]: {
        primaryColor: '#724708',
        secondaryColor: '#7CA1FF',
        imagePath: VikingAgeCultureNordenImage,
        textBlocks: {
          left: [
            'The Viking Age also saw the emergence of a rich literary tradition in Norden, with the composition of sagas, poems, and stories that have become an essential part of the region\'s cultural identity. These tales include the story of Beowulf, a legendary hero who battles a monstrous creature, and the epic poem "The Tale of Ragnar\'s Sons," which recounts the adventures of a group of Viking warriors.',
            "In addition to their material culture, the Vikings from Norden also left behind a legacy of political and economic institutions. The Icelandic Althing, established in 930 AD, is considered the world's oldest parliament and continues to function to this day. The Viking Age also saw the development of a complex system of trade and commerce, with the Vikings establishing trade networks that spanned the globe.",
          ],
          right: [
            'Viking Age architecture in Norden included the construction of wooden fortresses, bridges, and stave churches, as well as the development of burial mounds.',
          ],
        },
      },
    },
  },
  [Periods.Assimilation]: {
    [Subjects.History]: {
      [Countries.Norway]: {
        primaryColor: '#852626',
        secondaryColor: '#2B766C',
        imagePath: AssimilationHistoryNorwayImage,
        textBlocks: {
          left: [
            'The Viking assimilation period, also known as the Christianization of Norway, began in the late 10th century and lasted until the mid-11th century. During this period, Norway underwent significant changes in its political, social, and religious structures.',
            'One of the most notable events of this period was the introduction of Christianity to Norway. The conversion was a gradual process that took place over several decades and was largely spearheaded by the ruling class, including King Olaf Tryggvason and King Olaf II Haraldsson.',
            "The Vikings continued to raid and trade throughout Europe, and Norway's rulers maintained close ties with other European powers, including Denmark, England, and Germany.",
          ],
          right: [
            "This period also saw significant changes in Norway's political landscape. The traditional Viking chieftains were gradually replaced by a centralized monarchy under the rule of the Norwegian kings. This shift was facilitated in part by the Christian church, which sought to exert its influence over the ruling class and to promote a more stable and orderly society.",
          ],
        },
      },
      [Countries.Sweden]: {
        primaryColor: '#134765',
        secondaryColor: '#9D3721',
        imagePath: AssimilationHistorySwedenImage,
        textBlocks: {
          left: [
            'The Viking assimilation period in Sweden began in the late 1000s, and it was a time of significant cultural change. During this period, the old pagan religion was gradually replaced by Christianity, and Swedish society became more settled and less focused on raiding and pillaging.',
            'One of the most significant changes during this period was the introduction of Christianity, which had a profound impact on Swedish culture. Churches and monasteries were built throughout the country, and Christian beliefs began to replace traditional pagan practices. The introduction of Christianity also brought new cultural practices, such as the use of Latin in religious texts and the adoption of Christian holidays.',
          ],
          right: [
            'In addition to the introduction of Christianity, the Viking assimilation period also saw the consolidation of political power in Sweden. The country was divided into several small kingdoms, but during this period, some of these kingdoms began to merge and form larger, more powerful entities. This consolidation of power helped to create a more stable and unified society, which in turn allowed for greater cultural and economic growth.',
          ],
        },
      },
      [Countries.Denmark]: {
        primaryColor: '#1B70BF',
        secondaryColor: '#9F622A',
        imagePath: AssimilationHistoryDenmarkImage,
        textBlocks: {
          left: [
            'The Viking assimilation period in Denmark, which began in the late 10th century and continued until the early 12th century, was marked by significant political and cultural changes.',
            'In the late 10th century, Denmark was ruled by Harald Bluetooth, who played a significant role in the spread of Christianity throughout the country. He converted to Christianity in the 960s and promoted its adoption throughout his kingdom, although it was not fully embraced by the population until the following century.',
            'The country was divided into several small kingdoms, and there was a constant struggle for power between rival factions. This period saw the rise of several powerful families, including the Jelling dynasty, which ruled Denmark from the late 10th to the mid-11th century.',
          ],
          right: [
            "One notable event that occurred during the Viking assimilation period was the Norman Conquest of England in 1066, which had significant implications for Denmark. Many Danish warriors fought in the Battle of Hastings alongside the Anglo-Saxons, and the defeat of the English king, Harold Godwinson, had implications for Denmark's own power struggles.",
          ],
        },
      },
      [Countries.Norden]: {
        primaryColor: '#D7D145',
        secondaryColor: '#633CB6',
        imagePath: AssimilationHistoryNordenImage,
        textBlocks: {
          left: [
            'The Viking assimilation period, which began in the late 10th century, was a time of significant cultural change throughout the Nordic region, including Denmark. One of the most significant changes during this period was the gradual conversion of the Nordic peoples from their traditional pagan beliefs to Christianity.',
            'In addition to religious changes, the Viking assimilation period also saw significant developments in trade, agriculture, and urbanization. This led to the growth of towns and cities, the development of trade networks, and the emergence of a more urbanized culture. The Vikings, who had traditionally been known for their seafaring and raiding, began to focus more on trade, and this led to the growth of economic and cultural exchange between different parts of the Nordic region.',
          ],
          right: [
            'Another important aspect of Nordic culture during the Viking assimilation period was the emergence of a more centralized political structure. As the various Nordic peoples began to come under the influence of larger, more powerful kingdoms such as Denmark, Norway, and Sweden, there was a shift towards a more unified culture and political system. This led to the development of a shared Nordic identity.',
          ],
        },
      },
    },
    [Subjects.Culture]: {
      [Countries.Norway]: {
        primaryColor: '#FDE17F',
        secondaryColor: '#7C488E',
        imagePath: AssimilationCultureNorwayImage,
        textBlocks: {
          left: [
            'The Viking assimilation period in Norway was characterized by a blending of traditional Norse culture and newly introduced Christian customs. This period marked a significant transition in Norwegian history, as the country was in the process of converting from the traditional pagan religion to Christianity.',
            'One of the most notable aspects of Norwegian culture during this period was the continued importance of Viking heritage and traditions. Despite the introduction of Christianity, Norse mythology and pagan practices continued to hold sway in many parts of the country. However, the church and the ruling class worked to suppress these practices, and over time they gradually declined \n' +
              'in popularity.',
          ],
          right: [
            'Despite these changes, many aspects of traditional Norse culture continued to survive in Norway during the Viking assimilation period. These included practices such as shipbuilding, hunting and fishing, and the use of runes for writing and divination. Norse mythology also continued to be an important cultural touchstone, inspiring works of art and literature throughout the period.',
          ],
        },
      },
      [Countries.Sweden]: {
        primaryColor: '#42742A',
        secondaryColor: '#6F4B9E',
        imagePath: AssimilationCultureSwedenImage,
        textBlocks: {
          left: [
            'The Viking assimilation period in Sweden, also known as the Christianization of Sweden, began in the late 1000s and lasted until the 12th century. During this period, Sweden underwent significant changes in culture, religion, and social organization as it transitioned from pagan beliefs to Christianity.',
            'With the introduction of Christianity, Sweden began to shift towards a new religion and a new set of cultural norms. \n' +
              'Christianity brought with it new traditions and customs, including church-building, monasticism, and the creation of a written language. The conversion to Christianity was gradual, and it was not until the 12th century that Christianity was fully established in Sweden.',
          ],
          right: [
            'During this period of assimilation, Sweden experienced significant changes in its social organization as well. The introduction of Christianity brought about new forms of governance, with the establishment of a Christian monarchy and a new set of laws based on Christian principles. The society also became more hierarchical, with the church playing an increasingly important role in governing society.',
          ],
        },
      },
      [Countries.Denmark]: {
        primaryColor: '#6D6F0B',
        secondaryColor: '#3F549E',
        imagePath: AssimilationCultureDenmarkImage,
        textBlocks: {
          left: [
            'The Viking assimilation period in Denmark began in the late 10th century, after the end of the Viking Age. During this time, Denmark was in the process of transitioning from a primarily pagan society to a Christian one, which led to significant changes in its culture and way of life.',
            'One of the most significant changes during this period was the adoption of Christianity. As Christianity spread throughout Denmark, it brought with it new religious practices, beliefs, and traditions that gradually replaced the old pagan ways. This included the building of churches, the establishment of monasteries, and the introduction of new religious festivals and celebrations.',
          ],
          right: [
            'In addition to religion, there were other cultural changes during this period as well. For example, the Vikings had traditionally been known for their seafaring and raiding, but during the assimilation period, they began to focus more on trade and agriculture. This led to the growth of towns and cities, as well as the development of a more urban culture.',
          ],
        },
      },
      [Countries.Norden]: {
        primaryColor: '#789AF2',
        secondaryColor: '#8F662A',
        imagePath: AssimilationCultureNordenImage,
        textBlocks: {
          left: [
            'During the late 1000s, the culture in Norden was undergoing significant changes as the Viking Age was drawing to a close. The process of assimilation of the Vikings into the broader European culture was already underway, and the influence of Christianity was spreading throughout the region.',
            'One of the key factors in this assimilation process was the adoption of Christianity as the dominant religion in the region. By the late 1000s, Nordic countries had converted to Christianity, although some regions continued to practice their traditional pagan religions.',
            'Growing influence of trade and commerce was led to the development of new trading networks and partnerships with other European regions, which further exposed the Nordics to outside influences and ideas.',
          ],
          right: [
            "Despite these changes, many aspects of traditional Nordic culture persisted during this period. For example, Norse mythology continued to play a significant role in the region's art and literature, and elements of traditional Viking culture such as shipbuilding, seafaring, and raiding remained important parts of the region's identity.",
          ],
        },
      },
    },
  },
};
