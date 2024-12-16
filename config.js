//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347049625495";
global.owner = process.env.OWNER_NUMBER || "2347049625495";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9kUGN6TU9RUHpLU2JYV0lvbHZDYkg1QlRRMk05QzFjY1dMdEZXMVluZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFFvMWdJTWYwOFFpTGNkbXlmbDFGNXp1dDBHT0c2UTl4MTdORXRNa0FYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTXlJVTU1anNjaXk2V2VGbkVrc2d4NHp4ZkpYc1lBUjkrT3pxUjN3VzJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTelBGZkpNb3pvblc5a2hFY1Rqa3ZxYzhZcTdVTWlDaitHUzl5eGhwc0ZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPY0VYSUliUWxxR2l3QU5YcjJPdG1aY2NOUVEwVnBHSjhEOS9zZDIwMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJjUHhsNURlKzkwcWlqMmJTdjJKamhIdG1SWm1TM3BNcVdnWXErVUlqbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5Sb3FKYng5blQxR1lvRnhxOStwL0Z5bldDdXMyU25QQmJ1ZG1RTjZIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1ZTbEVXQUFRc2Z6K0ZsS3hucE5KVkZvQ2tPWHhIRzJpZGgwSy95QjNBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNSG4wYzJQeTdrYm54cjQ4VGI1MmZYa2hnSHpXM2FVS1lOU1ZiU2JweStaZHhpV1U4YUxRVE9ySVdtWnZWMDgyaU8zeWlNaFdNRE9DaHA5cVVpS0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiYXptTGM4aDRtWXZKakdzdHRsdHVCRTJpTTVLR3VZZ2JrUFBPcjlTdmZVTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSUpYNDhFMFNROHFwb0sxcU1EdkNZdyIsInBob25lSWQiOiI1NGVhYmEzZi04ODQyLTRlZjYtYmM2NC00YzI4ODViODAyOGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW5NT1dRd1BrSXNabWU1Szd2b1M3bUtDc2pjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5vckcxRW4wM3loMmptMFBTLzIwTnBMSHRDYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGMVpTTDk2VyIsIm1lIjp7ImlkIjoiMjM0OTA3Mjc4NjkyMDo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRvbiBNYWx2aW5zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUzEyWllDRVAraWdyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoR212eHZzdW9UQ2JleFY2eXN1N05Kend0amlaOEJvWUN3Z05RNHJIcGhRPSIsImFjY291bnRTaWduYXR1cmUiOiJWSkdBK1R2RDVLSWVubHYxK3hqN2IyY1RZcVdoSzJDWC92eW5jRHNIWkhrdXJHWE4ya2FuWEhtVXZ2QjVnUkZmVTNhMTRXZlJ4dytaUVhBZG5TcEFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSFM3aU1lTy9xV0VCWERiUzMzZHQ5OXVXL0NNenhNZTBtS3ZSeXhmVmZ1SklNSXEzZVVvdlJicUJwbmlOZlI5dER0QTlMWnYyUXg1VnludHhBKytCRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDcyNzg2OTIwOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVJwcjhiN0xxRXdtM3NWZXNyTHV6U2M4TFk0bWZBYUdBc0lEVU9LeDZZVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDM4MTk2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFESnEifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
