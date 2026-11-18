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
  // by：可选，显示一个小标签，例如谁带来的。
  MENU: [
    {
      category: "肉类",
      items: [
        { id: "lamb", name: "羊肉串", unit: "串" },
        { id: "beef", name: "牛肉串", unit: "串" },
        { id: "chicken_wing", name: "鸡翅", unit: "个" },
        { id: "lap_cheong", name: "腊肠", unit: "根" },
      ],
    },
    {
      category: "海鲜",
      items: [
        { id: "shrimp", name: "虾", unit: "串" },
        { id: "squid", name: "鱿鱼", unit: "串" },
        { id: "shrimp_paste", name: "虾滑", unit: "串" },
      ],
    },
    {
      category: "卤味",
      items: [
        { id: "braised_feet", name: "卤鸡爪", unit: "个" },
        { id: "braised_trotter", name: "卤猪脚", unit: "块" },
      ],
    },
    {
      category: "豆制品 / 丸子",
      items: [
        { id: "fish_tofu", name: "鱼豆腐", unit: "串" },
        { id: "tempura", name: "甜不辣", unit: "串", by: "Jenny 带" },
        { id: "puffed_tofu", name: "起泡豆干", unit: "串" },
        { id: "shaopi", name: "苕皮", unit: "张" },
      ],
    },
    {
      category: "蔬菜 / 菌菇",
      items: [
        { id: "potato", name: "土豆", unit: "串" },
        { id: "eggplant", name: "茄子", unit: "个" },
        { id: "zucchini", name: "西葫芦", unit: "串" },
        { id: "onion", name: "洋葱", unit: "串" },
        { id: "hot_pepper", name: "尖椒", unit: "串", by: "Jenny 带" },
        { id: "scallion", name: "葱", unit: "串" },
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
      ],
    },
    {
      category: "甜品 / 水果",
      items: [
        { id: "egg_tart", name: "蛋挞", unit: "个" },
        { id: "basque", name: "巴斯克", unit: "块" },
        { id: "pineapple", name: "烤菠萝", unit: "串" },
      ],
    },
  ],
};
