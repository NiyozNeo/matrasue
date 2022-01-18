const TelegramBot = require("node-telegram-bot-api");

const { BOT_TOKEN } = require("./config/config");
const { addUser, setStep, getUser } = require("./model");

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

const menu = [
  ["🛍 Katalog", "Manzilimiz"],
  ["ℹ️ Biz haqimizda", "✍️ Aloqa"],
];

const categories = [
  ["lavashlar", "burgerlar"],
  ["Ichimliklar", "Pitsalar"],
  ["korzinka", "Ortga qaytish"],
];

const lavashlar = [["tandir lavash", "oddiy lavash"], ["ortga qaytish"]];

const Ichimliklar = [["kola", "pepsi"], ["ortga qaytish"]];

const burgerlar = [["gamburger", "cheezeburger"], ["ortga qaytish"]];

const Pitsalar = [["go'shtli", "pishloqli"], ["ortga qaytish"]];

const product = [
  ["-", "soni", "+"],
  ["savatga qo'shish", "ortga qaytish"],
];

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  await getUser()
//   const 

  if (text === "/start" && ) {
    await bot.sendMessage(
      chatId,
      "Assaslomu Alaykum! \n Botimizga xush kelibsiz. \n O'zizingizga kerakli menuni tanlang",
      {
        reply_markup: {
          keyboard: menu,
          resize_keyboard: true,
        },
      }
     
    );
    addUser(msg.from.first_name , msg.from.id , false)
  } else if (text === "🛍 Buyurtma berish") {
    await bot.sendMessage(chatId, "O'zingizga keraklisini tanlang", {
      reply_markup: {
        keyboard: categories,
        resize_keyboard: true,
      },
    });
  } else if (text === "Ortga qaytish") {
    await bot.sendMessage(
      chatId,
      "Assaslomu Alaykum! \n Botimizga xush kelibsiz. \n O'zizingizga kerakli menuni tanlang",
      {
        reply_markup: {
          keyboard: menu,
          resize_keyboard: true,
        },
      }
    );
  } else if (text === "ortga qaytish") {
    await bot.sendMessage(chatId, "O'zingizga keraklisini tanlang", {
      reply_markup: {
        keyboard: categories,
        resize_keyboard: true,
      },
    });
  } else if (text === "ℹ️ Biz haqimizda") {
    await bot.sendMessage(
      chatId,
      `Mattrassue kompaniyasi haqida
        Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:
        
        Penatibus viverra gravida rhoncus in.
        
        Dolor integer in interdum viverra risus dolor enim.
        
        Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.`,
      {
        reply_markup: {
          keyboard: menu,
          resize_keyboard: true,
        },
      }
    );
  } else if (text === "✍️ Aloqa") {
    await bot.sendMessage(
      chatId,
      `Sizni qiziqtirdimi?
      Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
      
      +998XXXXXXXXX`,
      {
        reply_markup: {
          keyboard: menu,
          resize_keyboard: true,
        },
      }
    );
    setStep("aloqa" , msg.from.id)
  }
});

bot.on("callback_query", (msg) => {
  const chatId = msg.from.id;
  if (msg.data === "development") {
    console.log("asdasd");
    bot.sendMessage(chatId, "develepment qabul qilindi");
  } else {
    console.log("asdasd");
    bot.sendMessage(chatId, "boshqasi");
  }
});
