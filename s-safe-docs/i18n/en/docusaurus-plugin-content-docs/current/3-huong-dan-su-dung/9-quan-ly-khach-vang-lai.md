---
id: quan-ly-khach-vang-lai
title: Visitor Management
sidebar_label: Visitors
sidebar_class_name: icon-khach
sidebar_position: 9
---

# Visitor Management

The **Visitor** module provides a streamlined reception workflow and grants temporary access rights to visiting guests, short-term contractors, or business partners. The system supports capturing identity document photos (National ID / CCCD) and printing QR code access passes, allowing visitors to self-scan at doors or building lobbies without the need for expensive physical cards.

## 1. Main List Interface

The screen displays a list of all visitors with scheduled appointments or currently staying in the building in an intuitive table (Listview):

* **No. / ID Photo:** Sequential number and a directly captured photo of the visitor's identity document for security verification.
* **Name / ID Number:** The visitor's full name and national ID card number.
* **Assigned Card / Assigned Group:** The temporarily issued physical card code (if any) and the access group defining the areas the visitor is permitted to access (e.g., *IT Room*).
* **Note:** Record customer information.
* **Cardholder Name:** The name of the internal employee or host responsible for sponsoring the visitor's entry.
* **Actions:** Includes Edit 📝 and Delete 🗑️ buttons.

![Visitor List Interface](/img/visitor-listview.png)

---

## 2. Adding and Registering a New Visitor

When a visitor arrives, the receptionist or security guard clicks **+ Add New** in the top-right corner to open the **Visitor** configuration dialog:

1. **Name (*) / ID Number (*):** Enter the visitor's full name and identity document number (required fields).
2. **Visit Date:** Select the date of the visit. The system will automatically restrict access permissions to this date only.
3. **Cardholder:** Select the name of the internal employee responsible for receiving or sponsoring the visitor from the dropdown list.
4. **Assigned Cards / Assigned Groups:** Declare a card code or select an access group to grant to the visitor.
5. **Note:** Enter notes regarding the guest's information.
6. **Upload IC Photo (Right side):** Click the button to activate the webcam and capture the front and back of the guest's ID card for security record-keeping.

![Visitor Registration Dialog](/img/visitor-details.png)

---

## 3. QR Code Access Pass Printing Workflow

To provide the visitor with a door access credential — instead of a physical card swipe — the system supports printing an information slip containing a QR Code:

* Directly in the Add New dialog, after filling in all required information, click the **Print QRCode** 🖨️ button in the bottom-right corner.
* The system will immediately send a print command to the thermal printer at the reception desk, producing a small slip containing the visitor's information along with a **temporary QR access code**. The visitor can then scan this code at QR-enabled readers installed at Doors or Elevators to navigate the building independently.

### 🛠️ Printer Connection Configuration (For Technicians)

For the **Print QRCode** feature to work, the workstation must be linked to a thermal printer through the following system configuration steps:

1. In the left sidebar menu of the software, navigate to **System Configuration** ⚙️.
2. On the main screen, select the **External Devices** tab.
3. In the **Print Name (copy and paste)** field, select the exact driver name of the thermal printer connected to the computer (e.g., *Xprinter, Microsoft Print to PDF*).
4. Click **Save** to lock in the printer connection for the system.

![System Printer Connection Configuration](/img/visitor-QR.png)