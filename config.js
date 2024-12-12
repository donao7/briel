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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01RMG9OSCtYQXA5S2tEbkpITllPWTAzV09wMVk0QkdmazVYK2FhOERYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzgrb3lpRFpXdkdaVGRjYTkrYUVkSVI3OU8vYlpkaVltaENVaUI1NFQzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSFRHNTl5NDhQVHlxVURlSitPYlRJMzhHRGI0aVZsQTRoWGQ4dmRPbjFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWXdWQnRFKzhlcU43OUl2b1ZQNFRIdTVidlMxYTNwZENWNEV1Tm1uc0FNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQd3h6ckFwYms0WkFlNDZaczFzLzhURlVSTGtsMFBSY1hwK1lWUzBmM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9lUFVkeXhBdTc2V0hsSmdzbERIN2JhMElrcmRUbTNUK3R4RTFRdks2MGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhISUE1MDFiRHpYUG9aMXhNM0psMzZzQi9TOU1UNmt0YkFTdDJoSUxraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzFTRTY5d3dGK0R3YXZERDJSc0pCRHlFZ0lILy9DRHhMMU5rd1FhRkUzZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ6akFjSFlsVUpZTzhwTU1qL0U2UExod25xcVhXQjZUWjczSXVXN3B0eElwbmlXQjYyOEc5ZHp5Z1pOazBHT2ZoQ1N0U0RpemRtQkN4VXhmYWp0dERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJkajhsUnZoRzFzRE1CeEFiZU5ITUY4dnlVMm9la21uN2dyT0ZRVnFXUTJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXcGwtR3lxaFIxaVZqU1FpUWhqSl9RIiwicGhvbmVJZCI6IjczM2NiM2I2LTI3NGItNDgxYy05YTI4LTRkMTAyNjM0MjhkZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSng1eGFoN05YSyt4QkhUUGYwaWUvblBNNnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXFBc2g3bDUwZjJUMDF4SGJGc1RTRHhlTk9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJRNFRDRFpaIiwibWUiOnsiaWQiOiIyMzQ5MDQxMjk5NDU1OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnljZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTY4cDljRUVQYm03TG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRU92OHIwUngzYVV2TDNpNVc3dlJQbllWSkxFcTJmNHg2OG9McXIzODgwUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaS9UZU5VSWxwNkhGMWhqQWNMdlNUWmNJc1Z3ZUlGRFBKam9RNHNQMTNhWDRqakpzbXdEUkt5aTliTWZ0U1pUK0FtT0J6dDdKSTB6eWNsMVdUM3VaQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVPR3B3dUhJMXNiZ05FSWxPVXBya25NZ0xtdzI2SkNGNC9jT09HRVRmNEg1Um4xSXkvZUw2NjY5L2EwcTUxbzQ4R2NPbG5ScHc1UWZ6aldDWWdHakJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA0MTI5OTQ1NTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJEci9LOUVjZDJsTHk5NHVWdTcwVDUyRlNTeEt0bitNZXZLQzZxOS9QTkUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQwMzAyMTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFlYIn0=" // session id here
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
