// ============================================================
//  烧烤点单 —— 配置文件（只需要改这个文件）
// ============================================================

window.BBQ_CONFIG = {
  // 部署 Google Apps Script 后得到的网址（以 /exec 结尾）。
  // 留空 = 演示模式：订单只保存在你自己的浏览器里，别人看不到。
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxOabTEWOvGRNuHWtkjXduXnBy1M3fw0wEF2mQXRI2GbN8V0Hb0tTHjUVtrFqYQ0cC2/exec",

  // 页面标题和聚会信息
  TITLE: "周末烧烤局 🍢",
  SUBTITLE: "提前点单，主办方按需采购，不浪费！",

  // 辣度选项
  SPICE_LEVELS: ["不辣", "微辣", "中辣", "特辣"],

  // 菜单：分类 → 菜品。id 一旦有人点过就不要再改（改名字没关系）。
  MENU: [
    {
      category: "肉类",
      items: [
        { id: "lamb", name: "羊肉串", unit: "串" },
        { id: "lamb_fat", name: "羊肉肥瘦串", unit: "串" },
        { id: "beef", name: "牛肉串", unit: "串" },
        { id: "pork_belly", name: "五花肉", unit: "串" },
        { id: "chicken_wing", name: "鸡翅中", unit: "个" },
        { id: "chicken_thigh", name: "鸡腿肉串", unit: "串" },
        { id: "chicken_heart", name: "鸡心", unit: "串" },
        { id: "gizzard", name: "鸡胗", unit: "串" },
        { id: "sausage", name: "烤肠", unit: "根" },
        { id: "lamb_chop", name: "羊排", unit: "块" },
        { id: "beef_tendon", name: "牛板筋", unit: "串" },
      ],
    },
    {
      category: "海鲜",
      items: [
        { id: "shrimp", name: "大虾", unit: "串" },
        { id: "squid", name: "鱿鱼", unit: "串" },
        { id: "oyster", name: "蒜蓉生蚝", unit: "个" },
        { id: "scallop", name: "蒜蓉扇贝", unit: "个" },
        { id: "fish_tofu", name: "鱼豆腐", unit: "串" },
        { id: "crab_stick", name: "蟹棒", unit: "串" },
      ],
    },
    {
      category: "蔬菜 / 豆制品",
      items: [
        { id: "corn", name: "玉米", unit: "根" },
        { id: "eggplant", name: "蒜蓉茄子", unit: "个" },
        { id: "enoki", name: "金针菇", unit: "份" },
        { id: "shiitake", name: "香菇", unit: "串" },
        { id: "leek", name: "韭菜", unit: "串" },
        { id: "potato", name: "土豆片", unit: "串" },
        { id: "green_pepper", name: "青椒", unit: "串" },
        { id: "cauliflower", name: "花菜", unit: "串" },
        { id: "tofu_skin", name: "豆皮", unit: "串" },
        { id: "dried_tofu", name: "豆干", unit: "串" },
      ],
    },
    {
      category: "主食",
      items: [
        { id: "bun", name: "烤馒头片", unit: "串" },
        { id: "rice_cake", name: "烤年糕", unit: "串" },
        { id: "naan", name: "烤馕", unit: "个" },
        { id: "rice_ball", name: "烤饭团", unit: "个" },
        { id: "noodles", name: "炒面", unit: "份" },
      ],
    },
    {
      category: "饮料",
      items: [
        { id: "beer", name: "啤酒", unit: "罐" },
        { id: "coke", name: "可乐", unit: "罐" },
        { id: "sprite", name: "雪碧", unit: "罐" },
        { id: "herbal_tea", name: "凉茶", unit: "罐" },
        { id: "soy_milk", name: "豆奶", unit: "瓶" },
        { id: "water", name: "矿泉水", unit: "瓶" },
      ],
    },
  ],
};
