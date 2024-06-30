//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BhUmtQeDJZVWJmY09ieENNS3BhYUxkYzBNOWNBRlE2R09aSTNUTElrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnlybUhndnFBYlhkb2J1eGdUaXFmQ2xURTNXaHQ0cGRoOC9NaUFHZGlDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RFh2U01DOHI0NFNWK1dOYjFqVWp4ZmsxYnlCWDFOa2ZMYUNkYXVxMEhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOaTdGV3FZblhDZmZXRlpJb0NjTmI1QjBTV2poVEt1RzNjc3BNYWhJVVJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLMUVPTzFXMkpyYUpqazFNMlhMUUlwM0tUdkR5bFhWNXRiKzBYeWIvVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJRMTlHcG9COFpxc2NQYjdweHZKcGVzRFFjdmRQbkQvYnB3Tnl0aUVvR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0M0c0FMOUdjZU1sWmZiNGl4VjBYemNDOEJNejZybnlKSWtSbTM4K0NsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnc1TXo2MmpnSkNpeVNqMHFNbVcrMlhlaWtZK0hNQWpiRi9wbVZWdnkyTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdXOWp2azl3MFlaSkxwNEpsSzR6RzhvOVM4QjNuRFVpKyt3WUpXTnlYSHN2MzVHVVlBRFpZa3J3MmxMTCtWY1pEaEsrNTYyc1dKQU9SaEY4Nmw4dmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJHK2RieUlkc2VPM1BqN21hOE1zeDVJRk1RVmVrYWVGUjZJVEszNThITFBvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTY0OTUwMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkQ0RDRENTM0M0RERThEQzk5RTEwMDcxRUFDRkYxMkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTc1MzI4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1NjQ5NTAzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEN0Y5REIwRENEQzA0MkY5NzYyQkU5M0YwQjc2QjFDRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzUzMjgyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5SlFlSlZBYVJ3S29QTF9HS3dYT2JRIiwicGhvbmVJZCI6ImU4ZGFhYjQxLWIwNGMtNDI4ZC05NzE2LWFmNjI1MDJiMDMwMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWN0QveXZXZG5LcitCOGkrNGp2QlJTMVlFSlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTlyMFhkMjB1UzBtV3ZxbHNMblZUTG52TW9rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTWThTVDQ5IiwibWUiOnsiaWQiOiIyMzQ5MTU2NDk1MDM4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZGF2ZS3igaAqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK0VwdG9ERUxLMGhiUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJYlVibHdUbUJTT2JWNjNVTzhMWmk3ZVVaYlFDUUNja0gzZHBMVXI4VlRnPSIsImFjY291bnRTaWduYXR1cmUiOiJZdE1FcU5ENVpJa2ZIckwrZXk3eGJ2b3VWNVlCaWM5QnJQZjVjS0JURUw3SGFYcStQajN5ak5BalRLRUwxV0JLV3hlbUhwYndYMHZYNEdIV0ZxZDJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQTBVU1lMU3ZMUEV5b3R4VFJvOW9IaXdFNHdHWGJBbTU4bm91WWVvNEhKTGUzWEhuUmdyakFHMlk2VDNLV3NyQ2gvQXJ6ck9pYytnSTRBZk43cFd2amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTU2NDk1MDM4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0cxRzVjRTVnVWptMWV0MUR2QzJZdTNsR1cwQWtBbkpCOTNhUzFLL0ZVNCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc1MzI3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMNVMifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2348140825959";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||

  "https://telegra.ph/file/e5d98c92bd291ef30f68e.png,https://telegra.ph/file/00c3701c235a6df1dba76.png,https://telegra.ph/file/2fc766ab7467ded0fac9c.png,https://telegra.ph/file/2fc766ab7467ded0fac9c.png"https://telegra.ph/file/2fc766ab7467ded0fac9c.png;
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©BAD_BOI-V2`",
  author: process.env.PACK_AUTHER || "BAD_BOI-V2",
  packname: process.env.PACK_NAME || "H A C K E R",
  botname: process.env.BOT_NAME || "BAD_BOI-V2",
  ownername: process.env.OWNER_NAME || "BADBOI HACKER",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
