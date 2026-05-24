/**
 * GoogleAppsScript.js
 * ════════════════════════════════════════════════════════
 * STEP-BY-STEP SETUP:
 *
 * 1. Open Google Sheets → Create a new spreadsheet named:
 *      "Eldeco EOE Chatbot Leads"
 *
 * 2. Add these headers in Row 1 (A1 through J1):
 *      Timestamp | Source | Project | Apartment Type | Budget |
 *      Timeline | Name | Phone | Page URL | Notes
 *
 * 3. Open Extensions → Apps Script → paste this entire file
 *
 * 4. Click "Deploy" → "New deployment"
 *      Type: Web App
 *      Execute as: Me
 *      Who has access: Anyone
 *
 * 5. Copy the Web App URL (looks like:
 *      https://script.google.com/macros/s/AKfycb.../exec )
 *
 * 6. Paste that URL into Chatbot.jsx as GOOGLE_SHEET_URL
 *
 * ════════════════════════════════════════════════════════
 */

// 🔑 Replace with your Google Sheet ID
// (Found in the sheet URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)
const SHEET_ID   = "14obYasCGbvNNISUQBnxiv9y_uYznenlrORJrKWfFzic";
const SHEET_NAME = "Sheet1"; // or whatever tab name you use

/**
 * Handles GET requests from the chatbot (no-cors mode)
 */
function doGet(e) {
  try {
    const params = e.parameter;

    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Source", "Project",
        "Apartment Type", "Budget", "Timeline",
        "Name", "Phone", "Page URL", "Notes"
      ]);
      // Bold & freeze header row
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#012518").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    // Append lead row
    sheet.appendRow([
      params.timestamp      || new Date().toLocaleString("en-IN"),
      params.source         || "Chatbot",
      params.project        || "Eldeco Echoes of Eden",
      params.apartment_type || "",
      params.budget         || "",
      params.timeline       || "",
      params.name           || "",
      params.phone          || "",
      params.page_url       || "",
      "",   // Notes column — fill manually
    ]);

    // Optional: highlight rows with "Immediately" timeline in yellow
    const lastRow = sheet.getLastRow();
    if ((params.timeline || "").toLowerCase().includes("immediately")) {
      sheet.getRange(lastRow, 1, 1, 10).setBackground("#fff9c4");
    }

    // Optional: Send email notification on every new lead
    sendLeadEmail(params);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: email notification when a new lead comes in.
 * Remove if you don't want emails.
 */
function sendLeadEmail(params) {
  const TO      = "your-email@example.com"; // ← change this
  const subject = `🏠 New Lead: ${params.name || "Unknown"} — Eldeco EOE Chatbot`;

  const body = `
New chatbot lead received!

Name:           ${params.name       || "—"}
Phone:          ${params.phone      || "—"}
Apartment Type: ${params.apartment_type || "—"}
Budget:         ${params.budget     || "—"}
Timeline:       ${params.timeline   || "—"}
Source:         ${params.source     || "—"}
Timestamp:      ${params.timestamp  || "—"}
Page:           ${params.page_url   || "—"}

—
Eldeco EOE Lead Management
  `.trim();

  try {
    MailApp.sendEmail(TO, subject, body);
  } catch (e) {
    // Silent fail — email is optional
    Logger.log("Email error: " + e.message);
  }
}