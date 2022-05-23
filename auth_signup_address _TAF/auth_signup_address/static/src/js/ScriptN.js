// const City = [];
// fetch("ss.json")
//     .then(Response => Response.json())
// 	.then(data =>{
// 		for (let i = 0; i < data.length; i++)
// 			City.push(data[i].Villes)
// })
// console.log(City);

//.substring(0, text.length - 2);
document.getElementById('login').value = "        @gmail.com";
$("#phone").on("paste input", function(){
    var fb = ['1','2','3','4','5','6','7','8','9','0','+','-'];
    var  text = String(this.value).split('');
    //console.log(text);
    const textValue = String(this.value);
    let countA = 0;
    let countB = 0;
    for (let i = 0; i < text.length; i++) {
        if(fb.indexOf(text[i]) == -1)
            text.splice(i,1);
            //textValue.replace(String(text[i]),'');
        
    }
    if(text.lastIndexOf('-') != 4) text.splice(text.lastIndexOf('-'), 1)
    if(text.lastIndexOf('+') != 0) text.splice(text.lastIndexOf('+'), 1)
    this.value =text.join('');
    var ary = ["+212",'+212-','+21-','+2-','+21','+2','+','','+22','+22-','+12','+12-','212','212-','12','12-','2','2-','21','1'];
    if(ary.indexOf(this.value) != -1   )
    { 
         this.value = "+212-" ;
    }
});



// console.log(array);
var select = document.getElementById("state_id");

function remplire() {
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i]);
        var option = document.createElement("option");
        option.text = array[i];
        option.value = array[i];
        select.append(option);
    }
}
remplire();

///////////////////////////////////
var selectt = document.getElementById("codepostal");

$('#state_id').on('change', function() {
    selectt.innerHTML = "";
    for (let i = 0; i < dict[String(this.value)].length; i++) {
        var option = document.createElement("option");
        option.text =  dict[String(this.value)][i];
        option.value =  dict[String(this.value)][i];
        selectt.append(option);
    }
});

//////////////////////////////////////
//npm init -y 
// const puppeteer = require('puppeteer');
// const CodePostal = [];
// async function ScrapCodes(url){
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     const rows = await page.$$('#DgCodeparAdresse tbody tr td:nth-of-type(3)');

//     for (let i = 0; i < rows.length; i++) {
//         const row = rows[i];
//         //row.$$eval('td:nth-of-type(1)',element => element.textContent)
//         const code = await (await (await row.getProperty('innerText'))).jsonValue();
//         CodePostal.push(code);       
//     }

//     browser.close();
// }
// ScrapCodes("https://www.codepostal.ma/search_mot.aspx?keyword=casablanca");
// console.log(CodePostal);




