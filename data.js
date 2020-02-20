// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    id: '40454230',
    price: '$129.00',
    name: 'BINGSTA',
    image:
      'https://www.ikea.com/us/en/images/products/bingsta-armchair__0793271_PE765307_S5.JPG?f=xs'
  },
  {
    id: '70078463',
    price: '$49.99',
    name: 'PELLO',
    image:
      'https://www.ikea.com/us/en/images/products/pello-armchair__38296_PE130209_S5.JPG?f=xs'
  },
  {
    id: '99305926',
    price: '$99.00',
    name: 'POÄNG',
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs'
  },
  {
    id: '90359829',
    price: '$249.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0325432_PE517964_S5.JPG?f=xs'
  },
  {
    id: '29221746',
    price: '$149.00',
    name: 'KOARP',
    image:
      'https://www.ikea.com/us/en/images/products/koarp-armchair__0522337_PE643233_S5.JPG?f=xs'
  },
  {
    id: '89129085',
    price: '$249.00',
    name: 'EKTORP',
    image:
      'https://www.ikea.com/us/en/images/products/ektorp-armchair__0386173_PE559138_S5.JPG?f=xs'
  },
  {
    id: '40344760',
    price: '$159.00',
    name: 'REMSTA',
    image:
      'https://www.ikea.com/us/en/images/products/remsta-armchair-djuparp-dark-green-blue__0474490_PE615066_S5.JPG?f=xs'
  },
  {
    id: '00425777',
    price: '$279.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0392556_PE560378_S5.JPG?f=xs'
  },
  {
    id: '69299012',
    price: '$160.00',
    name: 'BUSKBO',
    image:
      'https://www.ikea.com/us/en/images/products/buskbo-armchair__0700959_PE723853_S5.JPG?f=xs'
  },
  {
    id: '40262877',
    price: '$149.00',
    name: 'EKERÖ',
    image:
      'https://www.ikea.com/us/en/images/products/ekeroe-armchair__0204749_PE359788_S5.JPG?f=xs'
  },
  {
    id: '10407136',
    price: '$69.99',
    name: 'IKEA PS LÖMSK',
    image:
      'https://www.ikea.com/us/en/images/products/ikea-ps-loemsk-swivel-armchair-white-red__0726690_PE735385_S5.JPG?f=xs'
  },
  {
    id: '10233532',
    price: '$39.99',
    name: 'NOLMYRA',
    image:
      'https://www.ikea.com/us/en/images/products/nolmyra-easy-chair__0152020_PE310348_S5.JPG?f=xs'
  },
  {
    id: '90359848',
    price: '$279.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0531313_PE647261_S5.JPG?f=xs'
  },
  {
    id: '30299032',
    price: '$269.00',
    name: 'MUREN',
    image:
      'https://www.ikea.com/us/en/images/products/muren-recliner__0325257_PE517991_S5.JPG?f=xs'
  },
  {
    id: '59275912',
    price: '$279.00',
    name: 'GRÖNLID',
    image:
      'https://www.ikea.com/us/en/images/products/groenlid-armchair__0604385_PE681233_S5.JPG?f=xs'
  },
  {
    id: '80423576',
    price: '$199.00',
    name: 'VEDBO',
    image:
      'https://www.ikea.com/us/en/images/products/vedbo-armchair__0634896_PE696809_S5.JPG?f=xs'
  },
  {
    id: '89272714',
    price: '$149.00',
    name: 'TULLSTA',
    image:
      'https://www.ikea.com/us/en/images/products/tullsta-armchair__0602718_PE680490_S5.JPG?f=xs'
  },
  {
    id: '39254821',
    price: '$406.00',
    name: 'GRÖNLID',
    image:
      'https://www.ikea.com/us/en/images/products/groenlid-chaise-longue__0577218_PE668696_S5.JPG?f=xs'
  },
  {
    id: '89129306',
    price: '$429.00',
    name: 'STOCKSUND',
    image:
      'https://www.ikea.com/us/en/images/products/stocksund-armchair__0405134_PE575040_S5.JPG?f=xs'
  },
  {
    id: '89297187',
    price: '$249.00',
    name: 'EKOLSUND',
    image:
      'https://www.ikea.com/us/en/images/products/ekolsund-recliner__0709905_PE727164_S5.JPG?f=xs'
  },
  {
    id: '89829138',
    price: '$199.00',
    name: 'POÄNG',
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair__55440_PE160526_S5.JPG?f=xs'
  },
  {
    id: '10370741',
    price: '$179.00',
    name: 'JÄPPLING',
    image:
      'https://www.ikea.com/us/en/images/products/jaeppling-armchair__0549511_PE657731_S5.JPG?f=xs'
  },
  {
    id: '49251935',
    price: '$260.00',
    name: 'HAVSTEN',
    image:
      'https://www.ikea.com/us/en/images/products/havsten-easy-chair-in-outdoor__0587818_PE672793_S5.JPG?f=xs'
  },
  {
    id: '50423587',
    price: '$299.00',
    name: 'VEDBO',
    image:
      'https://www.ikea.com/us/en/images/products/vedbo-high-back-armchair__0635321_PE697114_S5.JPG?f=xs'
  },
  {
    id: '70262890',
    price: '$149.00',
    name: 'EKERÖ',
    image:
      'https://www.ikea.com/us/en/images/products/ekeroe-armchair__0204753_PE359787_S5.JPG?f=xs'
  },
  {
    id: '89221734',
    price: '$169.00',
    name: 'KOARP',
    image:
      'https://www.ikea.com/us/en/images/products/koarp-armchair__0522305_PE643209_S5.JPG?f=xs'
  },
  {
    id: '59221716',
    price: '$169.00',
    name: 'KOARP',
    image:
      'https://www.ikea.com/us/en/images/products/koarp-armchair-gunnared-beige-black__0522280_PE643185_S5.JPG?f=xs'
  },
  {
    id: '19336026',
    price: '$99.00',
    name: 'POÄNG',
    image:
      'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497150_PE628977_S5.JPG?f=xs'
  },
  {
    id: '90434310',
    price: '$99.00',
    name: 'ULRIKSBERG',
    image:
      'https://www.ikea.com/us/en/images/products/ulriksberg-armchair-rattan-anthracite__0672896_PE716932_S5.JPG?f=xs'
  },
  {
    id: '40456960',
    price: '$249.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0761768_PE751434_S5.JPG?f=xs'
  },
  {
    id: '80423581',
    price: '$199.00',
    name: 'VEDBO',
    image:
      'https://www.ikea.com/us/en/images/products/vedbo-armchair__0634903_PE696815_S5.JPG?f=xs'
  },
  {
    id: '40392548',
    price: '$99.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-children-s-armchair-vissle-grey__0729754_PE737122_S5.JPG?f=xs'
  },
  {
    id: '59269162',
    price: '$299.00',
    name: 'LANDSKRONA',
    image:
      'https://www.ikea.com/us/en/images/products/landskrona-armchair__0602085_PE680153_S5.JPG?f=xs'
  },
  {
    id: '99033544',
    price: '$429.00',
    name: 'STOCKSUND',
    image:
      'https://www.ikea.com/us/en/images/products/stocksund-armchair__0378699_PE556245_S5.JPG?f=xs'
  },
  {
    id: '30276667',
    price: '$299.00',
    name: 'EKENÄS',
    image:
      'https://www.ikea.com/us/en/images/products/ekenaes-armchair__0239914_PE379569_S5.JPG?f=xs'
  },
  {
    id: '09031808',
    price: '$499.00',
    name: 'LANDSKRONA',
    image:
      'https://www.ikea.com/us/en/images/products/landskrona-armchair__0320852_PE514833_S5.JPG?f=xs'
  },
  {
    id: '40233535',
    price: '$39.99',
    name: 'NOLMYRA',
    image:
      'https://www.ikea.com/us/en/images/products/nolmyra-easy-chair__0169629_PE323574_S5.JPG?f=xs'
  },
  {
    id: '59192399',
    price: '$499.00',
    name: 'FÄRLÖV',
    image:
      'https://www.ikea.com/us/en/images/products/faerloev-armchair__0559816_PE662033_S5.JPG?f=xs'
  },
  {
    id: '30433243',
    price: '$249.00',
    name: 'STRANDMON',
    image:
      'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG?f=xs'
  },
  {
    id: '79135652',
    price: '$359.00',
    name: 'SÖDERHAMN',
    image:
      'https://www.ikea.com/us/en/images/products/soederhamn-armchair__0405925_PE583234_S5.JPG?f=xs'
  },
  {
    id: '50262891',
    price: '$159.00',
    name: 'EKERÖ',
    image:
      'https://www.ikea.com/us/en/images/products/ekeroe-armchair__0204740_PE359785_S5.JPG?f=xs'
  },
  {
    id: '70434311',
    price: '$130.00',
    name: 'BUSKBO',
    image:
      'https://www.ikea.com/us/en/images/products/buskbo-armchair-rattan__0679296_PE719536_S5.JPG?f=xs'
  },
  {
    id: '50058376',
    price: '$79.99',
    name: 'AGEN',
    image:
      'https://www.ikea.com/us/en/images/products/agen-chair__31428_PE120743_S5.JPG?f=xs'
  },
  {
    id: '99135750',
    price: '$300.00',
    name: 'SÖDERHAMN',
    image:
      'https://www.ikea.com/us/en/images/products/soederhamn-chaise-finnsta-turquoise__0406294_PE583238_S5.JPG?f=xs'
  },
  {
    id: '89277491',
    price: '$655.00',
    name: 'VALLENTUNA',
    image:
      'https://www.ikea.com/us/en/images/products/vallentuna-sofa-bed-module-with-backrests__0623429_PE691135_S5.JPG?f=xs'
  },
  {
    id: '50295472',
    price: '$199.00',
    name: 'RÅDVIKEN',
    image:
      'https://www.ikea.com/us/en/images/products/radviken-armchair-dark-brown-black__0325825_PE517684_S5.JPG?f=xs'
  },
  {
    id: '50262872',
    price: '$149.00',
    name: 'EKERÖ',
    image:
      'https://www.ikea.com/us/en/images/products/ekeroe-armchair__0204746_PE359786_S5.JPG?f=xs'
  },
  {
    id: '79257101',
    price: '$399.00',
    name: 'EKTORP',
    image:
      'https://www.ikea.com/us/en/images/products/ektorp-armchair__0619699_PE689263_S5.JPG?f=xs'
  }
];
