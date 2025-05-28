// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZjeS9RaHQ5bGRkVUlGb0U3aDRUNVRMYVdVRjhJeWtMYzE3d2IxdUgyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xUMnYxT3lUYWdCaXFpbTIxSmhST2VrQm85cER3cEN0bFlwTSs4dVVIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR2R6OEJSSXB1UlV2eG41YnE3eCs1RCtIbzEyOXdTNzhNUTBiUVhEVVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZ2w0QkhWQXExeHhTMjdta0k5Mzg2VmRGSlRvUm4zQWtiQmRUOWNFR1ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCZkZOSlI3T2ZUUWZ2QmlUR2RLV1dvQXJ3enVQUHhQQUdKdy8vdUVmR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldyTk04aG9VZzY4bmFaemMxV29CV3hSdG5UUGhFa01iS3R4elBtNmVNVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0U4M3p5UllCVW0ydm5HeGtnMmplRUlhSzFiVDNKKzUvMEFTUjZLQzFFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZSRjlWQkpFc0V3M2pETGxaOGtKV1RJRFVxUk5TYmF2L0dPZ2hZMGNRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlxQ1FJRlNzM2ZNL0FWNTNMNk51alZIVnA5aitIakc0Z2JpN2RyYStVQmJreEkrYWdybTRTcmN6RnN4ZDd5bkR1aG5PRFp6cnNLcFB2WHJnUEg1Z0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJYblR6YytYemFjUHZteUNtcmdKOStDenpLM1Y1cHpaK0ZKM2ZEcldlS09NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjM0OTE2MjMxNTM3Njo1MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxNzkzMTI1NDM3NDQ3Nzo1MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUMHJMRUZFTmloMnNFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5QTHI2WXlZb0o3M1RvMmYvUzJWV0FIb0xoSkdvOGtETlE5Zit4LytBblk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBJTmRWWjF0VlNtelNZckU1RUl0U2JXamJLT3U0VWI0WjByZlVFRm9mVXZIRkVvTzByYVdkeWNib0hIeWsxckE3OGxwK0xady9VZHN3UUdvY3VUQ0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPU2pYbjZGT3VITExzcjNUK3JPZklZWThUQXJzb01LWEFsSmlmcWJPbDh2RXBGVFA0S0NwbllIVEhrdnRCTVhmWkNtRW5kUkhrTmtmTXBrajNZU0dDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjIzMTUzNzY6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFR5NittTW1LQ2U5MDZObi8wdGxWZ0I2QzRTUnFQSkF6VVBYL3NmL2dKMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ4NDA2NDkyLCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
