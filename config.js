// ============================================================
//  烧烤点单 —— 配置文件（只需要改这个文件）
// ============================================================

window.BBQ_CONFIG = {
  // 部署 Google Apps Script 后得到的网址（以 /exec 结尾）。
  // 留空 = 演示模式：订单只保存在你自己的浏览器里，别人看不到。
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxOabTEWOvGRNuHWtkjXduXnBy1M3fw0wEF2mQXRI2GbN8V0Hb0tTHjUVtrFqYQ0cC2/exec",

  // 页面标题和聚会信息
  TITLE: "周末烧烤局 🍢",
  SUBTITLE: "",   // 副标题，留空则不显示

  // 辣度选项
  SPICE_LEVELS: ["不辣", "微辣", "中辣", "特辣"],

  // 菜单：分类 → 菜品。id 一旦有人点过就不要再改（改名字没关系）。
  MENU: [
    {
      category: "肉类",
      items: [
        { id: "lamb", name: "羊肉串", unit: "串" },
        { id: "lamb_fat", name: "羊肉肥瘦串", unit: "串" },
        { id: "lamb_chop", name: "羊排", unit: "块" },
        { id: "beef", name: "牛肉串", unit: "串" },
        { id: "beef_tendon", name: "牛板筋", unit: "串" },
        { id: "pork_belly", name: "五花肉", unit: "串" },
        { id: "pork_neck", name: "猪颈肉", unit: "串" },
        { id: "bacon_roll", name: "培根卷", unit: "串" },
        { id: "chicken_wing", name: "鸡翅", unit: "个" },
        { id: "chicken_thigh", name: "鸡腿肉串", unit: "串" },
        { id: "chicken_heart", name: "鸡心", unit: "串" },
        { id: "gizzard", name: "鸡胗", unit: "串" },
        { id: "chicken_skin", name: "鸡皮", unit: "串" },
        { id: "chicken_cartilage", name: "掌中宝", unit: "串" },
        { id: "sausage", name: "烤肠", unit: "根" },
        { id: "lap_cheong", name: "腊肠", unit: "根" },
      ],
    },
    {
      category: "海鲜",
      items: [
        { id: "shrimp", name: "虾", unit: "串" },
        { id: "shrimp_paste", name: "虾滑", unit: "串" },
        { id: "squid", name: "鱿鱼", unit: "串" },
        { id: "squid_tentacle", name: "鱿鱼须", unit: "串" },
        { id: "oyster", name: "生蚝", unit: "个" },
        { id: "scallop", name: "扇贝", unit: "个" },
        { id: "saury", name: "秋刀鱼", unit: "条" },
        { id: "crab_stick", name: "蟹棒", unit: "串" },
      ],
    },
    {
      category: "卤味",
      items: [
        { id: "braised_feet", name: "卤鸡爪", unit: "个" },
        { id: "braised_trotter", name: "卤猪脚", unit: "块" },
        { id: "braised_egg", name: "卤蛋", unit: "个" },
      ],
    },
    {
      category: "豆制品 / 丸子",
      items: [
        { id: "fish_tofu", name: "鱼豆腐", unit: "串" },
        { id: "tempura", name: "甜不辣", unit: "串" },
        { id: "puffed_tofu", name: "起泡豆干", unit: "串" },
        { id: "dried_tofu", name: "豆干", unit: "串" },
        { id: "tofu_skin", name: "豆皮", unit: "串" },
        { id: "shaopi", name: "苕皮", unit: "张" },
        { id: "fish_ball", name: "鱼丸", unit: "串" },
        { id: "beef_ball", name: "牛肉丸", unit: "串" },
        { id: "spam", name: "午餐肉", unit: "串" },
      ],
    },
    {
      category: "蔬菜 / 菌菇",
      items: [
        { id: "potato", name: "土豆", unit: "串" },
        { id: "eggplant", name: "茄子", unit: "个" },
        { id: "zucchini", name: "西葫芦", unit: "串" },
        { id: "onion", name: "洋葱", unit: "串" },
        { id: "hot_pepper", name: "尖椒", unit: "串" },
        { id: "green_pepper", name: "青椒", unit: "串" },
        { id: "scallion", name: "葱", unit: "串" },
        { id: "leek", name: "韭菜", unit: "串" },
        { id: "corn", name: "玉米", unit: "根" },
        { id: "cauliflower", name: "花菜", unit: "串" },
        { id: "lotus", name: "藕片", unit: "串" },
        { id: "okra", name: "秋葵", unit: "串" },
        { id: "garlic", name: "大蒜", unit: "串" },
        { id: "lettuce", name: "生菜（包着吃）", unit: "份" },
        { id: "enoki", name: "金针菇", unit: "份" },
        { id: "shiitake", name: "香菇", unit: "串" },
        { id: "king_oyster", name: "杏鲍菇", unit: "串" },
      ],
    },
    {
      category: "主食",
      items: [
        { id: "toast", name: "吐司", unit: "片" },
        { id: "rice_cake", name: "年糕", unit: "串" },
        { id: "bun", name: "馒头片", unit: "串" },
        { id: "naan", name: "烤馕", unit: "个" },
        { id: "rice_ball", name: "烤饭团", unit: "个" },
        { id: "lengmian", name: "烤冷面", unit: "份" },
      ],
    },
    {
      category: "甜品 / 水果",
      items: [
        { id: "egg_tart", name: "蛋挞", unit: "个" },
        { id: "basque", name: "巴斯克", unit: "块" },
        { id: "pineapple", name: "烤菠萝", unit: "串" },
        { id: "banana", name: "烤香蕉", unit: "根" },
        { id: "marshmallow", name: "烤棉花糖", unit: "串" },
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
