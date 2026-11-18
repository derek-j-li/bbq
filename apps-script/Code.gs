/**
 * 烧烤点单 —— Google Apps Script 后端
 *
 * 每人一行：姓名 | 菜品(JSON) | 辣度 | 备注 | 更新时间
 * GET  → 返回所有订单
 * POST → {action:"save", name, items, spice, note}  新增或覆盖此人的订单
 *        {action:"delete", name}                     删除此人的订单
 */

const SHEET_NAME = "订单";
const HEADERS = ["姓名", "菜品(JSON)", "辣度", "备注", "更新时间"];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readOrders_() {
  const values = getSheet_().getDataRange().getValues();
  const orders = [];
  for (let i = 1; i < values.length; i++) {
    const [name, itemsJson, spice, note, updated] = values[i];
    if (!name) continue;
    let items = {};
    try { items = JSON.parse(itemsJson || "{}"); } catch (e) {}
    orders.push({
      name: String(name),
      items: items,
      spice: String(spice || ""),
      note: String(note || ""),
      updated: updated instanceof Date ? updated.toISOString() : String(updated || ""),
    });
  }
  return orders;
}

// 前缀 ' 强制按纯文本保存（防止 "=..." 被当成公式、"001" 被当成数字）
function txt_(s) {
  return "'" + s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return json_({ ok: true, orders: readOrders_() });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    const name = String(body.name || "").trim().slice(0, 30);
    if (!name) return json_({ ok: false, error: "缺少姓名" });

    const sheet = getSheet_();
    const names = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues().map(r => String(r[0]).trim());
    const rowIndex = names.indexOf(name) + 1; // 0 = 未找到

    if (body.action === "delete") {
      if (rowIndex > 1) sheet.deleteRow(rowIndex);
    } else {
      // 只保留数量为正整数的菜品
      const items = {};
      Object.keys(body.items || {}).forEach(k => {
        const n = Math.floor(Number(body.items[k]));
        if (n > 0 && n <= 999) items[String(k).slice(0, 50)] = n;
      });
      const row = [
        txt_(name),
        txt_(JSON.stringify(items)),
        txt_(String(body.spice || "").slice(0, 10)),
        txt_(String(body.note || "").slice(0, 200)),
        new Date(),
      ];
      if (rowIndex > 1) {
        sheet.getRange(rowIndex, 1, 1, row.length).setValues([row]);
      } else {
        sheet.appendRow(row);
      }
    }
    return json_({ ok: true, orders: readOrders_() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
