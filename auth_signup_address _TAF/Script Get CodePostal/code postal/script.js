////city
// Array.prototype.remove =
// Array.prototype.remove ||
// function () {
//   this.splice(0, this.length);
// };



const arrayCity = ["SAFI","SEBT BNI FRASSEN","EL HAJEB","MOULAY ABDESSLAM","EL GOUZAT","HAMRIA","KHENIFRA","SEBAA ROUADI","KENITRA","RAS JERRI","AIN JEMAA","BAB MARZOUKA","LAAJAJRA",
"AIN CHKEF",
"TEMSIA",
"SEBT JEHJOUH",
"ELJADIDA",
"SIDI BOUZID",
"OULAD ETTAYEB",
"ASMATEN",
"TAZA",
"GUELDAMANE",
"ZOCO JEMIS DE ANYERA",
"AIN EL ORMA",
"SIDI YAHIA ZAERS",
"HAD MSILA",
"NADOR",
"KHOURIBGA",
"RABAT",
"BAB TAZA",
"AIT AMIRA",
"MOHAMMADIA",
"TAZARINE MSARA",
"MRHASSIYNE",
"BENI BOUZRA",
"OULAD TEIMA",
"BERKANE",
"TANGER",
"SIDI ALI BENHAMDOUCHE",
"BAB EL MROUJ",
"TEMARA",
"DAR BEN SADDOUK",
"TETOUAN",
"BENI MELLAL",
"NZALATE BNI AMMAR",
"BENI YDER",
"HAFRAT BEN TAYBI",
"MEHDYA",
"EL FENDEQ",
"AIN ATTIG",
"BECHIYINE",
"FES",
"KHEMISSET",
"OUED ROMMANE",
"AGOURAI",
"BOUDERBALA",
"SETTAT",
"MOULAY YACOUB",
"GHAFSAI",
"OUED AL JADIDAH",
"LQLIAA",
"BENI ALI",
"CASABLANCA",
"BERRECHID",
"AJDIR",
"BNI KARRICH FOUKI",
"LAAYOUNE",
"SALE",
"ARBAA BENI FTAH",
"SIDI KACEM",
"ARBAA SHOUL",
"BENI LENNT",
"AIN TAOUJDATE",
"BRIDIA",
"MERS EL KHEIR",
"CHEFCHAOUEN",
"BAB BERRET",
"OUJDA",
"MARRAKECH",
"BOUKNADEL",
"INEZGANE",
"MEKNES",
"AGADIR",
"AIN CHEGGAG",
"KARIA BA MOHAMED",
"AZLA",
"AIT MELLOUL"
]
    

//npm init -y 
const puppeteer = require('puppeteer');
const writeFileSync = require('fs').writeFileSync;
var tabless = [];
var dict = []; // create an empty array


async function ScrapCodes(url,Filename){
    
    const browser = await puppeteer.launch({
        executablePath: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`
    });
    const page = await browser.newPage();
    await page.goto(url,{timeout: 0});
    ////await page.$x('/html/body/table/tbody/tr[2]/td/table[2]');
    const rows = await page.$$('#DgCodeparAdresse tbody tr td:nth-of-type(3)');
    
    //console.log(await (await (await el.getProperty('innerText')).jsonValue()));
    //const table = (await el.getProperty('textContent')).jsonValue();
    //const test =table;
    const CodePostal = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        //row.$$eval('td:nth-of-type(1)',element => element.textContent)
        const code = await (await (await row.getProperty('innerText'))).jsonValue();
        CodePostal.push(String(code)) ;
    }
    //CodePostal.push('\n');
    browser.close();
    //console.log(CodePostal[0]);
    tabless.push(Object.values(CodePostal));
   // console.log(tables);
   // console.log('\n\r');
   // CodePostal.splice(0, CodePostal.length);
   dict.push({
      [Filename] : Object.values(CodePostal)}
   );
    
    writeFileSync("555.json",JSON.stringify(dict));

}

//  https://www.codepostal.ma/search_mot.aspx?keyword=casablanca   
///  /html/body/table/tbody/tr[2]/td/table[2]/tbody/tr['+count+']/td[3]


arrayCity.forEach(element => {
    ScrapCodes(`https://www.codepostal.ma/search_mot.aspx?keyword=${element}`,element);
});

// for (const [key, value] of Object.entries(dict)) {
//     console.log();
//   }


// writeFileSync("445.json",JSON.stringify(dict));
