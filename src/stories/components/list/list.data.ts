import { ListItem } from './list';

export const unorderedListItems: ListItem[] = [
  { title: 'Loomakasvatus' },
  {
    title: 'Kultuuride kasvatamine',
    children: [
      { title: 'Oder' },
      {
        title: 'Nisu',
        children: [{ title: 'Talinisu' }, { title: 'Kevadnisu' }, { title: 'Dinkel' }],
      },
      { title: 'Rukis' },
    ],
  },
  { title: 'Masinate ja seadmete kasutamine' },
];

export const orderedListItems: ListItem[] = [
  { title: 'Projekti algatamine' },
  {
    title: 'Nõuete kogumine ja analüüs',
    children: [
      { title: "Stakeholder'ite intervjuud" },
      {
        title: 'Funktsionaalsete ja mittefunktsionaalsete nõuete dokumenteerimine',
        children: [
          { title: 'Nõuete prioriseerimine' },
          { title: 'Nõuete valideerimine' },
          { title: 'Kasutajalugude ja juhtumite koostamine' },
        ],
      },
      { title: 'Riskianalüüs ja projektijuhtimise plaan' },
    ],
  },
  { title: 'Arenduse planeerimine ja rakendamine' },
];

export const definitionData = {
  Maasikas: 'Punane, südamekujuline ja magus mari, mis kasvab madalal põõsal.',
  Vaarikas: 'Väike, punane või must mari, mis kasvab vaarikapõõsal ja on magushapu maitsega.',
  Õun: 'Ümar vili, mis kasvab õunapuul, varieerudes värvis rohelisest punaseni.',
  Pirn: 'Tilgakujuline, mahlakas vili, mis kasvab pirnipuul ja on tavaliselt magus.',
  Ploom: 'Ümmargune vili kõva kooriku ja seesmise seemnega, mis kasvab ploomipuul.',
};
