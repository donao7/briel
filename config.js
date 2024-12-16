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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdxbUFYK3ExWEM2T01GVTRnYm9EaHlRRDNQR0J3Vnl3cVdPZnNLSnlXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzVsNmEyTDlJdlY1dzlnM1QvRldoaTNJU2hyK1huSDV0V3JHK0lySDhERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUDUySUtHWk1xV1pTR0p6cFBMTVlURjJGazhLWHB5Wk9Hb09XYVpJMUVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZktPQjJSVkF6ZUlUb1YyMFlwT0tzZHovUzJQQ1psT29yN0Q0QmVQUUhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJWXZmU0pDVlcvVGM0aExWSVZNd2RXQVUrdTYyUFpXTVRiZjZlbjIrV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9TYVA0cE1VK3ovWEdMQnNucHA4b1hldS9NbDh6TTRubnFaOXM3bDN0V3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkV1VWtEamFwTUNCdXp0Y1o2emZwQzQ2SWoyc21YZkVFeWE1dVA4WksxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmlRbFJldUU3Mzg4bFkzWCtYa1BNUEhKa2dRUW9MNXg4VDE5MjZaSHVTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZYNmZwQStCZGhaTVU1NjArRm44dHFZYU5ncE15bnI4TmhTcUtZcWdUUFZQeEkrc1RkRTNuNlU0b3ZKRlgzSUg1b3gvanRvTUltaG9HaldwUzJKWmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJQUFU5K1Y0OEFoS3QyaERiNkpGS0g2U0E0ZXArcmhSRFRyWlRWcWtYTEVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlZ3AzbGVDZFFsMkZUcWlQOUZmU1h3IiwicGhvbmVJZCI6ImI0N2ZkMjU0LWU4MjItNDdjMS1iODJjLWM4ZDY0ODYwMDhmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObHYyblZIdy9DWnVDZkpyMVJqblVKMjZPaTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFZ2bkVLeXh6Y1BQUEpuaXJFMWxUalhpRGRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNSWDlURFhGIiwibWUiOnsiaWQiOiIyMzQ5MDcyNzg2OTIwOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRG9uIE1hbHZpbnMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPMTJaWUNFT0dkZ3JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhHbXZ4dnN1b1RDYmV4VjZ5c3U3Tkp6d3RqaVo4Qm9ZQ3dnTlE0ckhwaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVqT0lxMytseWlxRUorbFpFU2Uya2ZNQVdmWXFJWHlpczk5aG9TeWRHTWwvUzcra2tvREszaDMvLzd5RzNIYnlYMHVRQytoZkZCbjZ2ZFIvRnh3NEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDSTM2NmYxaHdmNXVQc1NUQ3pTUTFpQXRmMGFzOE5hZlh4dVJLMWQ5eHF0UUUyaVFVc2E1ZFlkVVdFSUZZaWZOSERGcTVyejNFRExXSnF4Z3dVcHppQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzI3ODY5MjA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUnByOGI3THFFd20zc1Zlc3JMdXpTYzhMWTRtZkFhR0FzSURVT0t4NllVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MzgxMjk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURKcSJ9=" // session id here
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
