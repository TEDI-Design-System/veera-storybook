export const EstonianFlag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="#F7FCFF"/>
<mask id="mask0_25497_18510" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="white"/>
</mask>
<g mask="url(#mask0_25497_18510)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V4H16V0H0Z" fill="#40A8FF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4V8H16V4H0Z" fill="#272727"/>
</g>
</svg>`;

export const FinnishFlag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="#F7FCFF"/>
<mask id="mask0_24762_21390" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="white"/>
</mask>
<g mask="url(#mask0_24762_21390)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0H7V5H16V7H7V12H5V7H0V5H5V0Z" fill="#2E42A5"/>
</g>
</svg>`;

export const RussianFlag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="#3D58DB"/>
<mask id="mask0_24762_21396" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V12H16V0H0Z" fill="white"/>
</mask>
<g mask="url(#mask0_24762_21396)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V4H16V0H0Z" fill="#F7FCFF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8V12H16V8H0Z" fill="#C51918"/>
</g>
</svg>`;

export const countryOptions = [
  {
    flag: EstonianFlag,
    name: 'Eesti',
    dial_code: '+372',
  },
  {
    flag: FinnishFlag,
    name: 'Soome',
    dial_code: '+358',
  },
  {
    flag: RussianFlag,
    name: 'Venemaa',
    dial_code: '+7',
  },
];
