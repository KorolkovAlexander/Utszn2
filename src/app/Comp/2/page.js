import styles from "../../page.module.css";
import Title from "../../../../Components/Title";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import Image from "next/image";


export default function Page() {
    return (
     
      <div className={styles.container}>
  
     
      <div className={styles.headerframe}>
        <div className={styles.flag}>
          <img src="../flag.png" />
        </div>
        <Title className={styles.title} />
        <div className={styles.logo}>
          <img src="../logo.svg" />
        </div>
      </div>
  
      <Header />
  
      <main className={styles.mainpost2}>
      

      <div className={styles.title2}>Предоставление меры социальной поддержки для приобретения бытового топлива (угля)</div>
      <div className={styles.text2}>Согласно Порядку предоставления меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля) гражданам отдельных категорий, проживающим  на территории  Луганской Народной Республики, утвержденного постановлением Правительства Луганской Народной Республики от 12.08.2022 года № 625/22, право на получение меры социальной  поддержки (в денежном выражении) по месту регистрации при наличии в жилых помещениях печного отопления или кухонного очага на твердом топливе в доме с центральным  отоплением имеют:<br/>
- ветераны войны (инвалиды войны, участники боевых действий и участники войны);<br/>
- члены семей погибших (умерших) ветеранов войны;<br/>
- жертвы нацистских преследований;<br/>
- вдовы (вдовцы) погибших (умерших) жертв нацистских преследований;<br/>
- лица, имеющие особые (трудовые) заслуги перед Отечеством, а также вдовы (вдовцы) или родители погибших (умерших) лиц, имеющих особые (трудовые) заслуги перед Отечеством; <br/>
- граждане, пострадавшие вследствие Чернобыльской катастрофы 1 и 2 категорий, вдовы (вдовцы) и опекуны (на момент опекунства) детей умерших граждан, смерть которых связана с Чернобыльской катастрофой 1 и 2 категорий;<br/>
- многодетные семьи, в т.ч. детские дома семейного типа и приемные семьи, в которых не менее года проживают соответственно трое или больше детей (и по фактическому месту проживания);<br/>
- пенсионеры, которые до выхода на пенсию работали медицинскими         и фармацевтическими работниками в сельской местности и поселках городского типа, имеющие стаж работы на указанных должностях в сельской местности и поселках городского типа не менее 3 лет и проживающие в этих населенных пунктах;<br/>
- пенсионеры, которые до выхода на пенсию работали педагогическими работниками в сельской местности и поселках городского типа, имеющие стаж работы на указанных должностях в сельской местности<br/>
и поселках городского типа не менее 3 лет и проживающие в этих населенных пунктах;<br/>
- пенсионеры, которые до выхода на пенсию являлись работниками культуры в государственных и коммунальных учреждениях культуры, учреждениях образования в сельской местности и поселках городского типа, имеющие стаж работы на указанных должностях в сельской местности<br/>
и поселках городского типа не менее 3 лет и проживающие в них в настоящее время.<br/>
- члены семей погибших при защите Отечества;<br/>
- лица, имеющие право на меру социальной поддержки для приобретения твердого бытового топлива в соответствии с частями 7 и 8 статьи 42 Горного закона Луганской Народной Республики от 12.08.2016 № 117-II (с изменениями).<br/>
Сумма меры социальной поддержки (в денежном выражении) по приобретению твердого бытового топлива на одного гражданина, имеющего право на его получение, составляет 25000,00 (двадцать пять тысяч ) российских рублей в год на домохозяйство с печным отоплением;<br/><br/>
Для реализации меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля) лица, имеющие такое право, обращаются в Филиал № 14 ГКУ ЛНР «РЦСЗН» в г.Ровеньки  и подают следующие документы:<br/>
- справку о составе семьи (акт о фактическом месте проживания) по форме, установленной Правительством Луганской Народной Республики;<br/>
- справку о том, что жилое помещение не газифицировано под отопление<br/>
(предоставляют лица, проживающие в газифицированных населённых пунктах);<br/>
- справку от лица, имеющего право на получение меры социальной поддержки, и других членов семьи о том, что они не обеспечиваются твёрдым бытовым топливом (углём) по месту работы, либо трудовую книжку (оригинал и копию) – от пенсионеров и неработающих членов семьи;<br/>
- пенсионное удостоверение;<br/>
- оригинал и копию трудовой книжки; <br/>
- оригинал и копию документа, удостоверяющего личность (паспорт или паспортный документ, удостоверяющий личность физического лица, проживающего на территории Луганской Народной Республики);<br/>
- оригинал и копию регистрационного номера учётной карточки физического лица – плательщика налогов, а для лиц, которые из за своих религиозных убеждений отказались от принятия регистрационного номера, – копию страницы паспорта с отметкой об отказе в получении указанного номера или документ, подтверждающий право осуществлять платежи по фамилии, имени, отчеству, серии и номеру паспорта;<br/>
- оригинал и копию соответствующего удостоверения или справки, подтверждающих право лица и членов его семьи на предоставление меры социальной поддержки;<br/>
- справку (акт) о разрушении жилья по месту регистрации в результате проведения военных действий Вооружёнными Силами и вооружёнными формированиями Украины (при необходимости);<br/>
- оригинал и копию свидетельства члена семьи погибшего при защите Отечества;<br/>
- оригинал и копию справки (выписки) медико – социальной экспертной комиссии (медико-социальной экспертизы) об инвалидности (для инвалидов);<br/>
- оригинал и копию акта о несчастном случае, связанном с производством,         по форме Н-1 (для семей работников, погибших/умерших на предприятиях                  по добыче / переработке угля);<br/>
- справку государственных учреждений централизованной системы государственных учреждений по обеспечению реализации государственной политики в сфере общеобязательного государственного пенсионного страхования и пенсионного обеспечения (далее – государственные учреждения пенсионного страхования и пенсионного обеспечения) по месту назначения пенсии о праве на получение пенсии в связи с потерей кормильца;<br/>
- справку, выданную горным предприятием Луганской Народной Республики, об изменениях (реорганизация, реструктуризация или переименование и другое), которые произошли на горном предприятии с момента выхода на пенсию лица до ликвидации (до признания деятельности предприятия нецелесообразной) указанного предприятия, и копии документа, подтверждающего ликвидацию такого предприятия (распоряжение, приказ и другое), – предоставляются заявителем при первичном обращении.<br/>
- доверенность в произвольной форме (от имени лица, имеющего право на получение меры социальной поддержки (далее – доверитель), в целях реализации настоящего Порядка имеет право обратиться иное дееспособное лицо (далее – доверенное лицо) при наличии документа, удостоверяющего его личность (паспорт или паспортный документ, удостоверяющий личность физического лица, проживающего на территории Луганской Народной Республики), и доверенности, выданной доверителем в простой письменной форме.<br/>
Заявление получателей для получения меры социальной поддержки подаются в администрацию до 11 декабря текущего года.<br/>
По всем вопросам обращаться в Филиал № 14 ГКУ ЛНР «РЦСЗН» в г.Ровеньки предварительно записавшись на приём.<br/>

Режим работы:  ПН- ПТ 9.00 – 18.00, перерыв с 13.00 – 14.00
5-19-61, 5-08-23.

Филиал № 14 ГКУ ЛНР «РЦСЗН»



</div>
       
      </main>
      <Footer className={styles.footer} />
    </div>
  )}