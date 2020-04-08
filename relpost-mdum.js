var classicMode = false ;
   var summary = 40;
   var indent = 3;
   imgr = new Array();
   imgr[0] = "https://monochroomlab.com/wp-content/uploads/2020/04/no-image-icon-no-border-radius@2x.png";
   showRandomImg = true;
   aBold = true;
   summaryPost = 220; 
   summaryTitle = 25; 
   numposts1 = 5; 
   numposts2 = 8;
   var classicMode = false ;
   var summary = 50;
   var indent = 3;
   var relatedTitles = new Array();
   var relatedTitlesNum = 0;
   var relatedUrls = new Array();
   var thumburl = new Array();
   
   
   function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}
   
   eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1I 15=["\\b\\14\\1r\\14\\1l\\S\\Y\\a\\b\\H\\a\\l\\a\\h\\a\\b\\P\\a\\z\\a\\1j\\a\\11\\a\\o\\a\\11\\a\\b\\p\\a\\11\\a\\1m\\a\\11\\a\\b\\t\\a\\11\\a\\b\\F\\a\\11\\a\\h\\a\\b\\t\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\b\\z\\a\\g\\a\\b\\p\\a\\q\\a\\n\\a\\l\\a\\o\\a\\g\\a\\o\\a\\q\\a\\n\\a\\l\\a\\1m\\a\\g\\a\\1m\\a\\q\\a\\n\\a\\l\\a\\b\\t\\a\\g\\a\\b\\t\\a\\q\\a\\n\\a\\l\\a\\b\\F\\a\\g\\a\\b\\F\\a\\q\\a\\n\\a\\l\\a\\r\\a\\g\\a\\b\\Z\\a\\k\\a\\b\\N\\a\\z\\a\\1j\\a\\B\\a\\q\\a\\n\\a\\l\\a\\J\\a\\g\\a\\r\\a\\k\\a\\h\\a\\b\\g\\a\\z\\a\\f\\a\\J\\a\\f\\a\\B\\a\\q\\a\\n\\a\\l\\a\\b\\w\\a\\g\\a\\r\\a\\k\\a\\1g\\a\\k\\a\\b\\J\\a\\z\\a\\K\\a\\v\\a\\J\\a\\k\\a\\b\\s\\a\\b\\x\\a\\x\\a\\K\\a\\b\\c\\a\\11\\a\\j\\a\\j\\a\\B\\a\\k\\a\\b\\J\\a\\z\\a\\K\\a\\v\\a\\1a\\a\\k\\a\\b\\s\\a\\b\\x\\a\\x\\a\\K\\a\\b\\c\\a\\11\\a\\j\\a\\j\\a\\B\\a\\q\\a\\n\\a\\l\\a\\m\\a\\g\\a\\b\\w\\a\\k\\a\\V\\a\\z\\a\\K\\a\\v\\a\\h\\a\\b\\l\\a\\b\\o\\a\\A\\a\\b\\s\\a\\b\\o\\a\\K\\a\\b\\x\\a\\x\\a\\K\\a\\B\\a\\q\\a\\n\\a\\l\\a\\E\\a\\g\\a\\m\\a\\N\\a\\19\\a\\M\\a\\H\\a\\m\\a\\k\\a\\b\\q\\a\\z\\a\\h\\a\\11\\a\\1c\\a\\h\\a\\B\\a\\k\\a\\h\\a\\b\\L\\a\\z\\a\\j\\a\\v\\a\\h\\a\\b\\l\\a\\x\\a\\j\\a\\B\\a\\H\\a\\m\\a\\k\\a\\b\\q\\a\\z\\a\\1c\\a\\h\\a\\B\\a\\q\\a\\n\\a\\l\\a\\c\\a\\g\\a\\h\\a\\u\\a\\l\\a\\h\\a\\n\\a\\z\\a\\B\\a\\q\\a\\c\\a\\N\\a\\19\\a\\M\\a\\g\\a\\f\\a\\h\\a\\r\\a\\f\\a\\q\\a\\c\\a\\N\\a\\h\\a\\M\\a\\g\\a\\f\\a\\h\\a\\c\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\l\\a\\M\\a\\g\\a\\f\\a\\h\\a\\i\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\u\\a\\M\\a\\g\\a\\f\\a\\h\\a\\J\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\g\\a\\M\\a\\g\\a\\f\\a\\h\\a\\U\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\G\\a\\M\\a\\g\\a\\f\\a\\h\\a\\s\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\h\\a\\M\\a\\g\\a\\f\\a\\h\\a\\1k\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\m\\a\\M\\a\\g\\a\\f\\a\\h\\a\\1m\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\y\\a\\M\\a\\g\\a\\f\\a\\h\\a\\p\\a\\f\\a\\q\\a\\c\\a\\N\\a\\b\\v\\a\\M\\a\\g\\a\\f\\a\\h\\a\\E\\a\\f\\a\\q\\a\\c\\a\\N\\a\\h\\a\\19\\a\\M\\a\\g\\a\\f\\a\\h\\a\\A\\a\\f\\a\\q\\a\\c\\a\\N\\a\\h\\a\\h\\a\\M\\a\\g\\a\\f\\a\\h\\a\\b\\d\\a\\f\\a\\q\\a\\n\\a\\l\\a\\y\\a\\g\\a\\c\\a\\N\\a\\1m\\a\\k\\a\\V\\a\\z\\a\\j\\a\\K\\a\\j\\a\\B\\a\\N\\a\\19\\a\\M\\a\\M\\a\\q\\a\\n\\a\\l\\a\\h\\a\\b\\r\\a\\g\\a\\1m\\a\\k\\a\\V\\a\\z\\a\\j\\a\\K\\a\\j\\a\\B\\a\\N\\a\\h\\a\\M\\a\\q\\a\\n\\a\\l\\a\\h\\a\\b\\F\\a\\g\\a\\1m\\a\\k\\a\\V\\a\\z\\a\\j\\a\\K\\a\\j\\a\\B\\a\\N\\a\\b\\l\\a\\M\\a\\q\\a\\13\\a\\z\\a\\J\\a\\k\\a\\t\\a\\g\\a\\g\\a\\h\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\h\\a\\b\\v\\a\\g\\a\\J\\a\\N\\a\\19\\a\\M\\a\\k\\a\\p\\a\\q\\a\\n\\a\\l\\a\\w\\a\\g\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\b\\a\\f\\a\\x\\a\\v\\a\\u\\a\\l\\a\\1h\\a\\g\\a\\f\\a\\j\\a\\H\\a\\b\\z\\a\\H\\a\\j\\a\\f\\a\\x\\a\\v\\a\\J\\a\\l\\a\\b\\D\\a\\g\\a\\f\\a\\h\\a\\C\\a\\f\\a\\l\\a\\b\\16\\a\\g\\a\\f\\a\\b\\r\\a\\f\\a\\l\\a\\p\\a\\g\\a\\f\\a\\j\\a\\H\\a\\h\\a\\b\\v\\a\\H\\a\\j\\a\\f\\a\\x\\a\\v\\a\\K\\a\\u\\a\\x\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\q\\a\\n\\a\\l\\a\\b\\O\\a\\g\\a\\w\\a\\H\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\d\\a\\f\\a\\x\\a\\j\\a\\H\\a\\10\\a\\z\\a\\E\\a\\11\\a\\1i\\a\\B\\a\\H\\a\\j\\a\\k\\a\\k\\a\\k\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\17\\a\\b\\P\\a\\1b\\a\\13\\a\\z\\a\\J\\a\\k\\a\\t\\a\\x\\a\\h\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\1k\\a\\g\\a\\j\\a\\j\\a\\q\\a\\b\\K\\a\\z\\a\\n\\a\\l\\a\\s\\a\\g\\a\\19\\a\\q\\a\\s\\a\\v\\a\\J\\a\\k\\a\\t\\a\\q\\a\\s\\a\\H\\a\\H\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\1k\\a\\g\\a\\1k\\a\\H\\a\\j\\a\\v\\a\\1k\\a\\x\\a\\v\\a\\J\\a\\l\\a\\p\\a\\g\\a\\f\\a\\j\\a\\H\\a\\J\\a\\N\\a\\s\\a\\M\\a\\k\\a\\p\\a\\H\\a\\j\\a\\f\\a\\x\\a\\v\\a\\K\\a\\1k\\a\\x\\a\\j\\a\\17\\a\\n\\a\\l\\a\\w\\a\\g\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\b\\a\\f\\a\\x\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\h\\a\\w\\a\\1c\\a\\h\\a\\y\\a\\f\\a\\x\\a\\v\\a\\b\\C\\a\\l\\a\\C\\a\\g\\a\\f\\a\\h\\a\\t\\a\\f\\a\\x\\a\\j\\a\\H\\a\\1k\\a\\H\\a\\j\\a\\v\\a\\K\\a\\b\\C\\a\\x\\a\\v\\a\\K\\a\\r\\a\\x\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\q\\a\\n\\a\\l\\a\\b\\O\\a\\g\\a\\w\\a\\H\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\d\\a\\f\\a\\x\\a\\j\\a\\H\\a\\10\\a\\z\\a\\E\\a\\11\\a\\1i\\a\\B\\a\\H\\a\\j\\a\\k\\a\\k\\a\\k\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\17\\a\\b\\P\\a\\1b\\a\\n\\a\\l\\a\\b\\L\\a\\g\\a\\r\\a\\k\\a\\h\\a\\b\\g\\a\\z\\a\\f\\a\\1a\\a\\f\\a\\B\\a\\q\\a\\13\\a\\z\\a\\b\\L\\a\\k\\a\\t\\a\\x\\a\\g\\a\\h\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\b\\A\\a\\g\\a\\b\\L\\a\\N\\a\\19\\a\\M\\a\\k\\a\\p\\a\\q\\a\\n\\a\\l\\a\\w\\a\\g\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\b\\a\\f\\a\\x\\a\\v\\a\\1a\\a\\l\\a\\b\\D\\a\\g\\a\\f\\a\\h\\a\\b\\O\\a\\b\\18\\a\\f\\a\\l\\a\\b\\16\\a\\g\\a\\f\\a\\b\\r\\a\\f\\a\\l\\a\\h\\a\\o\\a\\g\\a\\f\\a\\b\\E\\a\\f\\a\\l\\a\\p\\a\\g\\a\\f\\a\\j\\a\\H\\a\\b\\A\\a\\H\\a\\j\\a\\f\\a\\l\\a\\h\\a\\m\\a\\g\\a\\f\\a\\b\\E\\a\\f\\a\\x\\a\\v\\a\\K\\a\\1a\\a\\x\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\q\\a\\n\\a\\l\\a\\b\\O\\a\\g\\a\\w\\a\\H\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\d\\a\\f\\a\\x\\a\\j\\a\\H\\a\\10\\a\\z\\a\\E\\a\\11\\a\\1i\\a\\B\\a\\H\\a\\j\\a\\k\\a\\k\\a\\k\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\17\\a\\b\\P\\a\\1b\\a\\n\\a\\l\\a\\b\\O\\a\\g\\a\\j\\a\\v\\a\\r\\a\\l\\a\\C\\a\\g\\a\\f\\a\\U\\a\\1c\\a\\b\\d\\a\\f\\a\\x\\a\\j\\a\\H\\a\\10\\a\\z\\a\\E\\a\\11\\a\\1i\\a\\B\\a\\H\\a\\j\\a\\k\\a\\k\\a\\k\\a\\v\\a\\K\\a\\r\\a\\x\\a\\j\\a\\17\\a\\17\\a\\17\\a\\r\\a\\k\\a\\1g\\a\\g\\a\\b\\O\\a\\q\\a\\r\\a\\k\\a\\h\\a\\V\\a\\k\\a\\h\\a\\1i\\a\\g\\a\\f\\a\\h\\a\\13\\a\\f\\a\\q\\a\\n\\a\\l\\a\\b\\I\\a\\g\\a\\b\\Z\\a\\k\\a\\h\\a\\1g\\a\\z\\a\\f\\a\\h\\a\\10\\a\\f\\a\\B\\a\\q\\a\\b\\K\\a\\z\\a\\n\\a\\l\\a\\s\\a\\g\\a\\19\\a\\q\\a\\s\\a\\v\\a\\b\\I\\a\\k\\a\\t\\a\\q\\a\\s\\a\\H\\a\\H\\a\\B\\a\\1b\\a\\b\\I\\a\\N\\a\\s\\a\\M\\a\\k\\a\\1g\\a\\g\\a\\j\\a\\j\\a\\17\\a\\17\\a\\h\\a\\b\\u\\a\\k\\a\\h\\a\\1a\\a\\g\\a\\b\\H\\a\\z\\a\\B\\a\\1b\\a\\n\\a\\l\\a\\i\\a\\g\\a\\b\\Z\\a\\k\\a\\b\\N\\a\\z\\a\\f\\a\\h\\a\\1h\\a\\f\\a\\B\\a\\q\\a\\13\\a\\z\\a\\i\\a\\g\\a\\g\\a\\h\\a\\b\\b\\a\\B\\a\\1b\\a\\h\\a\\b\\u\\a\\k\\a\\h\\a\\b\\Z\\a\\k\\a\\1h\\a\\g\\a\\f\\a\\h\\a\\b\\G\\a\\b\\M\\a\\K\\a\\K\\a\\h\\a\\b\\h\\a\\k\\a\\h\\a\\b\\m\\a\\k\\a\\h\\a\\b\\y\\a\\K\\a\\f\\a\\17\\a\\i\\a\\k\\a\\1o\\a\\z\\a\\f\\a\\1h\\a\\f\\a\\11\\a\\f\\a\\h\\a\\b\\G\\a\\b\\M\\a\\K\\a\\K\\a\\h\\a\\b\\h\\a\\k\\a\\h\\a\\b\\m\\a\\k\\a\\h\\a\\b\\y\\a\\K\\a\\f\\a\\B\\a\\q\\a\\i\\a\\k\\a\\1o\\a\\z\\a\\f\\a\\h\\a\\1o\\a\\f\\a\\11\\a\\f\\a\\h\\a\\b\\w\\a\\f\\a\\B\\a\\q\\a\\i\\a\\k\\a\\1o\\a\\z\\a\\f\\a\\o\\a\\f\\a\\11\\a\\f\\a\\h\\a\\b\\q\\a\\l\\a\\h\\a\\b\\D\\a\\l\\a\\h\\a\\b\\16\\a\\f\\a\\B\\a\\q\\a\\i\\a\\k\\a\\1g\\a\\g\\a\\f\\a\\h\\a\\b\\I\\a\\f\\a\\17\\Y\\W\\Y\\a\\d\\Y\\W\\Y\\a\\A\\a\\E\\a\\p\\a\\s\\a\\m\\Y\\W\\Y\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\d\\a\\1i\\a\\u\\a\\o\\a\\d\\a\\c\\a\\s\\a\\1i\\a\\d\\a\\w\\a\\t\\a\\y\\a\\m\\a\\U\\a\\d\\a\\d\\a\\s\\a\\w\\a\\C\\a\\d\\a\\r\\a\\p\\a\\u\\a\\A\\a\\A\\a\\d\\a\\E\\a\\t\\a\\A\\a\\m\\a\\d\\a\\d\\a\\p\\a\\s\\a\\d\\a\\c\\a\\u\\a\\m\\a\\i\\a\\d\\a\\A\\a\\o\\a\\r\\a\\d\\a\\m\\a\\U\\a\\V\\a\\w\\a\\n\\a\\d\\a\\d\\a\\p\\a\\i\\a\\y\\a\\C\\a\\m\\a\\U\\a\\d\\a\\r\\a\\t\\a\\y\\a\\m\\a\\i\\a\\y\\a\\m\\a\\d\\a\\A\\a\\V\\a\\w\\a\\w\\a\\u\\a\\o\\a\\10\\a\\h\\a\\d\\a\\m\\a\\s\\a\\m\\a\\p\\a\\i\\a\\d\\a\\d\\a\\u\\a\\o\\a\\o\\a\\d\\a\\A\\a\\E\\a\\p\\a\\s\\a\\m\\a\\d\\a\\b\\h\\a\\b\\G\\a\\d\\a\\s\\a\\J\\a\\d\\a\\s\\a\\y\\a\\y\\a\\i\\a\\o\\a\\b\\L\\a\\1j\\a\\b\\D\\a\\b\\q\\a\\d\\a\\A\\a\\m\\a\\o\\a\\s\\a\\E\\a\\b\\L\\a\\m\\a\\w\\a\\p\\a\\1j\\a\\u\\a\\C\\a\\A\\a\\d\\a\\i\\a\\y\\a\\m\\a\\o\\a\\10\\a\\d\\a\\s\\a\\J\\a\\o\\a\\u\\a\\w\\a\\i\\a\\d\\a\\U\\a\\o\\a\\i\\a\\J\\a\\d\\a\\s\\a\\w\\a\\u\\a\\C\\a\\i\\a\\d\\a\\c\\a\\t\\a\\r\\a\\V\\a\\w\\a\\i\\a\\y\\a\\m\\a\\d\\a\\i\\a\\p\\a\\A\\a\\i\\a\\d\\a\\m\\a\\u\\a\\C\\a\\d\\a\\r\\a\\t\\a\\w\\a\\w\\a\\i\\a\\y\\a\\m\\a\\d\\a\\J\\a\\o\\a\\u\\a\\w\\a\\i\\a\\d\\a\\i\\a\\p\\a\\i\\a\\w\\a\\d\\a\\A\\a\\i\\a\\m\\a\\1a\\a\\m\\a\\m\\a\\o\\a\\s\\a\\n\\a\\V\\a\\m\\a\\i\\a\\d\\a\\r\\a\\t\\a\\y\\a\\m\\a\\i\\a\\y\\a\\m\\a\\h\\a\\d\\a\\A\\a\\p\\a\\s\\a\\r\\a\\i\\a\\d\\a\\13\\a\\s\\a\\c\\a\\m\\a\\U\\a\\d\\a\\U\\a\\i\\a\\s\\a\\C\\a\\U\\a\\m\\a\\d\\a\\b\\g\\a\\b\\G\\a\\19\\a\\d\\a\\J\\a\\V\\a\\y\\a\\r\\a\\m\\a\\s\\a\\t\\a\\y\\a\\d\\a\\o\\a\\i\\a\\E\\a\\p\\a\\u\\a\\r\\a\\i\\a\\d\\a\\s\\a\\C\\a\\d\\a\\V\\a\\o\\a\\p\\a\\d\\a\\E\\a\\b\\I\\a\\b\\Z\\a\\d\\a\\J\\a\\t\\a\\o\\a\\d\\a\\C\\a\\i\\a\\m\\a\\b\\P\\a\\p\\a\\i\\a\\w\\a\\i\\a\\y\\a\\m\\a\\1h\\a\\10\\a\\b\\I\\a\\c\\a\\d\\a\\V\\a\\p\\a\\d\\a\\E\\a\\t\\a\\A\\a\\m\\a\\V\\a\\o\\a\\p\\a\\d\\a\\s\\a\\J\\a\\o\\a\\u\\a\\w\\a\\i\\a\\h\\a\\d\\a\\y\\a\\t\\a\\d\\a\\d\\a\\d\\a\\n\\a\\o\\a\\d\\a\\13\\a\\s\\a\\y\\a\\c\\a\\t\\a\\13\\a\\d\\a\\C\\a\\i\\a\\m\\a\\b\\P\\a\\p\\a\\i\\a\\w\\a\\i\\a\\y\\a\\m\\a\\A\\a\\1h\\a\\10\\a\\1j\\a\\u\\a\\C\\a\\b\\16\\a\\u\\a\\w\\a\\i\\a\\d\\a\\U\\a\\m\\a\\m\\a\\E\\a\\d\\a\\13\\a\\13\\a\\13\\a\\d\\a\\m\\a\\U\\a\\i\\a\\w\\a\\i\\a\\1g\\a\\E\\a\\t\\a\\A\\a\\i\\a\\d\\a\\r\\a\\t\\a\\w\\a\\d\\a\\s\\a\\w\\a\\C\\a\\V\\a\\o\\a\\p\\a\\d\\a\\y\\a\\i\\a\\13\\a\\d\\a\\1a\\a\\o\\a\\o\\a\\u\\a\\10\\a\\d\\a\\1o\\a\\u\\a\\y\\a\\d\\a\\b\\F\\a\\i\\a\\n\\a\\d\\a\\b\\D\\a\\u\\a\\o\\a\\d\\a\\1a\\a\\E\\a\\o\\a\\d\\a\\b\\h\\a\\b\\m\\a\\b\\G\\a\\d\\a\\b\\D\\a\\u\\a\\10\\a\\d\\a\\1o\\a\\V\\a\\y\\a\\d\\a\\1o\\a\\V\\a\\p\\a\\d\\a\\1a\\a\\V\\a\\C\\a\\d\\a\\b\\p\\a\\i\\a\\E\\a\\d\\a\\n\\a\\1g\\a\\d\\a\\13\\a\\o\\a\\u\\a\\E\\a\\E\\a\\i\\a\\o\\a\\d\\a\\n\\a\\1g\\a\\A\\a\\p\\a\\s\\a\\c\\a\\i\\a\\o\\a\\d\\a\\b\\r\\a\\r\\a\\m\\a\\d\\a\\h\\a\\19\\a\\19\\a\\d\\a\\J\\a\\o\\a\\u\\a\\w\\a\\i\\a\\n\\a\\t\\a\\o\\a\\c\\a\\i\\a\\o\\a\\d\\a\\b\\16\\a\\t\\a\\1i\\a\\d\\a\\A\\a\\r\\a\\o\\a\\t\\a\\p\\a\\p\\a\\s\\a\\y\\a\\C\\a\\d\\a\\A\\a\\m\\a\\10\\a\\p\\a\\i\\a\\d\\a\\c\\a\\s\\a\\A\\a\\E\\a\\p\\a\\u\\a\\10\\a\\d\\a\\n\\a\\p\\a\\t\\a\\r\\a\\1m\\a\\d\\a\\C\\a\\i\\a\\m\\a\\b\\P\\a\\p\\a\\i\\a\\w\\a\\i\\a\\y\\a\\m\\a\\A\\a\\1h\\a\\10\\a\\b\\b\\a\\p\\a\\u\\a\\A\\a\\A\\a\\b\\16\\a\\u\\a\\w\\a\\i\\a\\d\\a\\A\\a\\i\\a\\E\\a\\u\\a\\o\\a\\u\\a\\m\\a\\t\\a\\o\\a\\d\\a\\b\\Z\\a\\i\\a\\r\\a\\d\\a\\t\\a\\y\\a\\p\\a\\t\\a\\u\\a\\c\\a\\d\\a\\w\\a\\10\\a\\r\\a\\t\\a\\y\\a\\m\\a\\i\\a\\y\\a\\m\\a\\d\\a\\y\\a\\V\\a\\p\\a\\p\\a\\d\\a\\p\\a\\t\\a\\r\\a\\u\\a\\m\\a\\s\\a\\t\\a\\y\\a\\d\\a\\r\\a\\o\\a\\i\\a\\u\\a\\m\\a\\i\\a\\b\\p\\a\\V\\a\\w\\a\\w\\a\\u\\a\\o\\a\\10\\a\\1a\\a\\y\\a\\c\\a\\1j\\a\\U\\a\\V\\a\\w\\a\\n\\a\\d\\a\\10\\a\\i\\a\\u\\a\\o\\a\\d\\a\\u\\a\\V\\a\\m\\a\\U\\a\\t\\a\\o\\a\\d\\a\\1k\\a\\t\\a\\s\\a\\y\\a\\d\\a\\1j\\a\\U\\a\\i\\a\\w\\a\\i\\a\\b\\z\\a\\E\\a\\t\\a\\A\\a\\i\\a\\d\\a\\o\\a\\i\\a\\J\\a\\d\\a\\c\\a\\t\\a\\J\\a\\t\\a\\p\\a\\p\\a\\t\\a\\13\\a\\d\\a\\b\\F\\a\\o\\a\\i\\a\\i\\a\\d\\a\\1h\\a\\p\\a\\t\\a\\C\\a\\C\\a\\i\\a\\o\\a\\d\\a\\1j\\a\\i\\a\\w\\a\\E\\a\\p\\a\\u\\a\\m\\a\\i\\a\\A\\a\\d\\a\\c\\a\\u\\a\\m\\a\\i\\a\\h\\Y\\W\\Y\\Y\\W\\Y\\a\\J\\a\\o\\a\\t\\a\\w\\a\\b\\b\\a\\U\\a\\u\\a\\o\\a\\b\\b\\a\\t\\a\\c\\a\\i\\Y\\W\\Y\\a\\o\\a\\i\\a\\E\\a\\p\\a\\u\\a\\r\\a\\i\\Y\\W\\Y\\a\\b\\o\\a\\13\\a\\H\\Y\\W\\Y\\a\\b\\o\\a\\n\\Y\\W\\Y\\a\\C\\Y\\R\\1n\\b\\1b\\Q\\b\\k\\Q\\b\\i\\W\\b\\n\\W\\X\\W\\b\\f\\W\\18\\W\\b\\B\\T\\1e\\18\\1l\\b\\k\\Q\\X\\T\\1e\\b\\j\\Q\\X\\1O\\b\\n\\1A\\14\\S\\L\\R\\1C\\18\\Q\\b\\19\\Q\\X\\1y\\b\\n\\T\\T\\T\\1s\\Q\\Q\\X\\1l\\X\\1P\\b\\n\\T\\1S\\b\\17\\1A\\b\\U\\S\\14\\S\\I\\R\\R\\Q\\X\\1s\\b\\10\\T\\1C\\X\\1F\\b\\11\\Q\\b\\13\\T\\T\\1d\\1n\\b\\V\\Q\\1M\\14\\S\\L\\R\\S\\14\\S\\G\\R\\R\\Q\\1y\\1N\\1y\\W\\b\\U\\T\\T\\1e\\b\\X\\Q\\X\\1w\\1w\\T\\1e\\b\\B\\S\\18\\Q\\X\\T\\R\\1l\\b\\f\\S\\X\\R\\e\\e\\18\\Q\\X\\T\\1d\\1n\\b\\f\\1l\\S\\b\\k\\Q\\18\\T\\1e\\b\\j\\1r\\b\\B\\S\\18\\R\\1d\\R\\1n\\18\\1l\\b\\k\\Q\\T\\1e\\b\\j\\1r\\14\\S\\O\\R\\1d\\1n\\X\\1l\\b\\1d\\1n\\b\\X\\Q\\X\\1w\\1w\\T\\1e\\b\\V\\Q\\b\\f\\S\\X\\R\\T\\1e\\b\\i\\1l\\b\\i\\S\\14\\S\\G\\R\\R\\Q\\b\\1c\\1r\\b\\1a\\Q\\14\\S\\Z\\R\\1s\\18\\Q\\X\\T\\1s\\14\\S\\Z\\R\\W\\14\\S\\16\\R\\T\\W\\b\\f\\S\\X\\R\\T\\1d\\1d\\1n\\b\\j\\1r\\b\\i\\1d\\Q\\14\\S\\P\\R\\W\\b\\1g\\W\\b\\1h\\W\\14\\S\\F\\R\\S\\14\\S\\D\\R\\R\\Q\\14\\S\\b\\R\\T\\W\\P\\W\\1e\\1d\\T\\T","\\e","\\x\\u\\p\\j\\v","\\e\\e\\e\\e\\e\\e\\e\\e\\e\\e\\c\\O\\E\\e\\c\\D\\D\\e\\c\\F\\b\\e\\c\\G\\I\\e\\c\\F\\J\\e\\c\\D\\P\\e\\c\\D\\M\\e\\c\\O\\L\\e\\c\\D\\O\\e\\c\\O\\D\\e\\c\\F\\A\\e\\c\\G\\E\\e\\c\\G\\F\\e\\c\\G\\D\\e\\c\\G\\N\\e\\c\\G\\b\\e\\c\\G\\J\\e\\c\\G\\16\\e\\c\\F\\M\\e\\c\\F\\E\\e\\c\\G\\M\\e\\c\\D\\16\\e\\c\\D\\Z\\e\\c\\G\\L\\e\\c\\D\\A\\e\\c\\D\\N\\e\\c\\G\\O\\e\\c\\O\\F\\e\\c\\O\\P\\e\\c\\G\\G\\e\\c\\I\\J\\e\\c\\I\\A\\e\\c\\G\\Z\\e\\c\\O\\I\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\F\\e\\c\\O\\16\\e\\c\\D\\E\\e\\c\\O\\O\\e\\1p\\P\\c\\I\\f\\D\\h\\e\\c\\O\\A\\e\\c\\F\\P\\e\\c\\O\\J\\e\\c\\D\\J\\e\\c\\L\\b\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\I\\e\\c\\O\\Z\\e\\c\\L\\D\\e\\c\\I\\L\\e\\c\\G\\C\\e\\c\\O\\G\\e\\c\\G\\A\\e\\c\\L\\C\\e\\c\\L\\I\\e\\c\\L\\F\\e\\c\\L\\J\\e\\c\\L\\G\\e\\c\\L\\Z\\e\\c\\L\\16\\e\\c\\F\\I\\e\\c\\O\\b\\e\\c\\L\\L\\e\\c\\L\\M\\e\\c\\O\\C\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\L\\e\\c\\F\\G\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\b\\e\\c\\F\\L\\e\\c\\F\\D\\e\\l\\y\\n\\h\\v\\j\\t\\n\\e\\c\\F\\O\\e\\s\\g\\v\\y\\s\\n\\e\\c\\I\\E\\e\\c\\L\\E\\e\\c\\I\\F\\e\\c\\L\\N\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\D\\e\\c\\L\\O\\e\\c\\F\\F\\e\\c\\L\\A\\e\\c\\D\\C\\e\\c\\F\\N\\e\\c\\F\\16\\e\\c\\F\\Z\\e\\1p\\P\\c\\Z\\d\\D\\P\\c\\G\\e\\c\\I\\Z\\e\\c\\I\\D\\e\\c\\I\\P\\e\\c\\I\\I\\e\\c\\I\\O\\e\\c\\I\\16\\e\\c\\I\\C\\e\\c\\I\\b\\e\\c\\F\\C\\e\\c\\I\\G\\e\\18\\v\\s\\j\\n\\k\\e\\j\\l\\e\\z\\m\\j\\p\\g\\e\\D\\16\\e\\v\\t\\18\\v\\s\\j\\n\\k\\e\\F\\G\\e\\B\\d\\s\\e\\g\\B\\d\\p\\e\\u\\d\\s\\x\\g\\X\\n\\v\\e\\F\\I\\e\\n\\g\\z\\e\\1a\\g\\k\\M\\c\\u\\e\\c\\D\\I\\e\\G\\D\\e\\b\\b\\F","","\\l\\s\\t\\r\\E\\m\\d\\s\\E\\t\\i\\g","\\s\\g\\u\\p\\d\\h\\g","\\a\\z\\1s","\\a\\f","\\k"];1T(1u(1v,1x,12,1q,1f,1z){1f=1u(12){1t(12<1x?15[4]:1f(1G(12/1x)))+((12=12%1x)>1H?1B[15[5]](12+1J):12.1K(1L))};1E(!15[4][15[6]](/^/,1B)){1D(12--){1z[1f(12)]=1q[12]||1f(12)};1q=[1u(1f){1t 1z[1f]}];1f=1u(){1t 15[7]};12=1};1D(12--){1E(1q[12]){1v=1v[15[6]](1Q 1R(15[8]+1f(12)+15[8],15[9]),1q[12])}};1t 1v}(15[0],1U,1V,15[3][15[2]](15[1]),0,{}))',62,120,'||||||||||x5C|x31|x78|x61|x7C|x62|x65|x63|x64|x69|x67|x66|x68|x6E|x6A|x6C|x6B|x6D|x72|x6F|x70|x74|x71|x73|x75|x77|x42|x76|x41|x32|x43|x33|x36|x79|x35|x44|x7A|x34|x45|x46|x37|x30|x28|x5D|x5B|x29|x47|x48|x2C|x49|x22|x38|x4A|x4B|_0x292ax3|x4C|x4D|_0x396f|x39|x50|x53|x4F|x52|x4E|x51|x7D|x7B|_0x292ax5|x54|x55|x58|x56|x57|x3D|x59|x3B|x5A|x5F|_0x292ax4|x20|x2B|return|function|_0x292ax1|x2D|_0x292ax2|x2F|_0x292ax6|x3F|String|x3A|while|if|x2E|parseInt|35|var|29|toString|36|x21|x5E|x3C|x25|new|RegExp|x3E|eval|62|119'.split('|'),0,{}))
   
   function related_results_labels_thumbs(json) {
   for (var i = 0; i < json.feed.entry.length; i++) {
   var entry = json.feed.entry[i];
   relatedTitles[relatedTitlesNum] = entry.title.$t;
   try 
   {thumburl[relatedTitlesNum]=entry.media$thumbnail.url;}
   
   
   catch (error){
   
   s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
   if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
   {thumburl[relatedTitlesNum]=d;} else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="https://monochroomlab.com/wp-content/uploads/2020/04/no-image-icon-no-border-radius@2x.png";}
   
   }
   
   if(relatedTitles[relatedTitlesNum].length>35) relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 35)+"...";
   for (var k = 0; k < entry.link.length; k++) {
   if (entry.link[k].rel == 'alternate') {
   relatedUrls[relatedTitlesNum] = entry.link[k].href;
   relatedTitlesNum++;
   
   
   }
   }
   }
   }
   function removeRelatedDuplicates_thumbs() {
   var tmp = new Array(0);
   var tmp2 = new Array(0);
   var tmp3 = new Array(0);
   for(var i = 0; i < relatedUrls.length; i++) {
   if(!contains_thumbs(tmp, relatedUrls[i])) 
   {
   tmp.length += 1;
   tmp[tmp.length - 1] = relatedUrls[i];
   tmp2.length += 1;
   tmp3.length += 1;
   tmp2[tmp2.length - 1] = relatedTitles[i];
   tmp3[tmp3.length - 1] = thumburl[i];
   }
   }
   relatedTitles = tmp2;
   relatedUrls = tmp;
   thumburl=tmp3;
   
   
   }
   function contains_thumbs(a, e) {
   for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
   return false;
   }
   function printRelatedLabels_thumbs(current) {
   for(var i = 0; i < relatedUrls.length; i++)
   {
   if((relatedUrls[i]==current)||(!relatedTitles[i]))
   {
   relatedUrls.splice(i,1);
   relatedTitles.splice(i,1);
   thumburl.splice(i,1);
   i--;
   }
   }
   
   
   var r = Math.floor((relatedTitles.length - 1) * Math.random());
   var i = 0;
   
   while (i < relatedTitles.length && i < 20 && i<maxresults) {
   tmb = thumburl[r].replace('s72-c/','s300-c/');
   
   document.write('<div class="item-related"><a href="' + relatedUrls[r] + '"><img width="150" height="100" src="'+tmb+'"/></a><h3><a href="' + relatedUrls[r] + '">'+relatedTitles[r]+'</a></h3></div>');i++;
   
   
   if (r < relatedTitles.length - 1) {
   r++;
   } else {
   r = 0;
   }
   
   }
   
   relatedUrls.splice(0,relatedUrls.length);
   thumburl.splice(0,thumburl.length);
   relatedTitles.splice(0,relatedTitles.length);
   
   }
   function removeHtmlTag(strx, chop) {
       var s = strx.split("<");
       for (var i = 0; i < s.length; i++) {
           if (s[i].indexOf(">") != -1) {
               s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length)
           }
       }
       s = s.join("");
       s = s.substring(0, chop - 1);
       return s
   }
     
   function stripHtmlTags1(s){return s.replace(/<a.*?>/ig, '')}
   function showrecentcomments(json) {
   for (var i = 0; i < 6; i++) {
   var entry = json.feed.entry[i];
   var ctlink;
   if (i == json.feed.entry.length) break;
   for (var k = 0; k < entry.link.length; k++) {
   if (entry.link[k].rel == 'alternate') {
   ctlink = entry.link[k].href;
   break;
   }
   }
   ctlink = ctlink.replace("#", "#comment-");
   var ptlink = ctlink.split("#");
   ptlink = ptlink[0];
   var txtlink = ptlink.split("/");
   txtlink = txtlink[5];
   txtlink = txtlink.split(".html");
   txtlink = txtlink[0];
   var pttitle = txtlink.replace(/-/g," ");
   pttitle = pttitle.link(ptlink);
   if ("content" in entry) {
   var comment = entry.content.$t;}
   else
   if ("summary" in entry) {
   var comment = entry.summary.$t;}
   else var comment = "";
   var re = /<\S[^>]*>>/g;
   comment = comment.replace(re, "");
   document.write('<li>');
   commentauthor1 = entry.author[0].name.$t;
   commentauthor = stripHtmlTags(commentauthor1,40);
   document.write('<div class="small"><i class="icon-comment-alt"></i> ' + commentauthor + '</div>');
   if (comment.length < 100) {
   document.write('<div class="comments-custom_txt"><a target="_blank" href="' + ctlink + '">'+stripHtmlTags1(comment)+ '</a></div>');
   }
   else
   {
   comment = comment.substring(0, 100);
   var quoteEnd = comment.lastIndexOf(" ");
   comment = comment.substring(0, quoteEnd);
   document.write('<div class="comments-custom_txt"><a target="_blank" href="' + ctlink + '">'+stripHtmlTags1(comment) + '...</a></div>');
   }
   }
   document.write('</li>');
   }
