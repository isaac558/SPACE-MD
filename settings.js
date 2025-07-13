require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK287FpuWq1iUgQAAG0HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrkIKFVdNSBeQGlFBJWteQgQMMrNJKg45X*fwp7unofd2V6ewknqnC*fJT9BUWKK5qgB6k9QEXyBDLVL1lQIqECvkwQR0AUxZBCoYGvg+TSR+q4A62jbJyFxj5s4LavpQvTM5DxPJo2oLNazLHoBjy6o6jDD0R8aDl*zQd*XDwujcOXV0rnVjo13qBYOqzkrpGyBRMs0fUM62S*g0XaEmOAiHVcHlCMCszlqVhCTr8HnJkzUNtPgFlqR09OvA7pHm140O+6G5lm49BnvpWxSpYnPfQ0+YmdjjSI4OkbLYltre740V8Gd6tt9nnpEPsNclm4p0UXzDT7FaYFiM0YFw6z5Mu9XS7FvXppp2m5mDsT1cR46u77BCL1flh4WpHFtmR07LHn6NeBGR7h71SC+e9wympX6OlpLZRBNPN3c9Zz6NBuaIYH3oJdHvwNfkXevnP4P77KxwHIuxatJee5p675*ys6Obpzc64FV1nordHKjKE4Tgx9*kXcaF8utq43lg6KXqAgOpuV3Tv7UhZtl8qqMQ2nn2W7i8fYnfMhq8ieUg*NIKnc3fwMHpW4F*LmjjPRK3PVeL5YjXGUSXQOFcxXJEDV5Y*rSANf7ZtbJna3kTC3D7Odwcd0485qUXBUm1vHWjLSX541OqDFjoPKPLiAoxZQRyHBZPGtDvgtgfHFRRBB70gvGp8NUEbBCfWUWND5BlSIcztNw1nHyhXuGljOYanVPx9X+BXRBRcoIUYriGaasJI2NKIUpokD960cXFOjG3oRrx4l8FySYUOYVdZWVMH5X9X0TRlFZF8xtimjULhABKvdZRozhIqUtj3UBSXTAFzQ6QEaBmsCMoo8bIoJioDJSo4*Ujsq4JX633Rv2aCuDLsifguAYqEAQRYkbcDzHi5zKf6ffrm1XWFXfCsRAF2TPU*JgKMmCwomyIAuSyn9vy48PeG23GDGIMwpUMLKQ26Pj1*G8d2wG9nSqjVNtlGrg8zrvvnjj3Zt7zQgfs2BZ8UF*eg+OrLhcGUmmu33e2wT++LKeC9mq43kv*9CkDZbRGU9oEjs7aT0bZpbcG0IR1rbhNqVTZGvv4NBpku+UMEGpT9MlOt9fj4ahNZGiLPir*wrvvrSIo*pyqXbWaHP2L1proi6I0QVH6PdhYSP2s70ddKq1suwM71fCafw53LOtPJvvUjoLHCGsJ5wkeplp2ythBddimNJNeqsCm1mheSEbsuR8ZOztuU7u7PZqXN8c+0xM9uulwk8vtUK1vwlGz+AXsJXvP4V7w93ai3t0f2vx6yX5lzTq*iiz07KUtptzvEU6FfZKoAwWULxlgnXhBH+94FxWbXrZBDweP7qgyiBLSpIDFeDqUBYIdAEp69auZpGUf5g10kzzPakZpEz7jMAG54gymFdA5RVJEGWx3xfeTq1IWc0gPQAViOnKs06tnxutqlwG2XuigNZ+4+0RPP4GUEsBAhQDFAAACAgArbzsWm5arWJSBAAAbQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233508010130',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'isaac5588',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || Chairmano123,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
