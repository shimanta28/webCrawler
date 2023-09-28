const cheerio =require('cheerio');


    // fetch("https://www.theblogstarter.com/").then((response)=>response.text()).then((html)=>console.log("html",html));
    async function crwal(){
        const response= await fetch("https://www.theblogstarter.com/");
        const html=await response.text();
        const $=cheerio.load(html);
        const links=$("a")
        .map((i,link)=>link.attribs.href)
        .get();
        console.log(links);
    };
    
    // 
    

crwal();
