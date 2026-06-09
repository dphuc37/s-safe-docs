---
id: nguoi-dung-the
title: Cardholder Management
sidebar_label: Cardholders
sidebar_class_name: icon-the-nhan-su
sidebar_position: 7
---

# Cardholder Management

The **Cardholders** module is where you manage the entire personnel database, visitor records, identity credentials (Card, PIN, Fingerprint, Face), and assign access permissions for each individual in the S-Safe system.

## 1. Main List Interface

The main screen provides an extremely detailed personnel management listview:
* **Profile:** Displays the profile photo (including Face Recognition / FR), personnel name, employee code, and system number.
* **Organization:** Quickly view the Department (e.g., *IT*), Position (*Staff*), and Branch (*Hanoi*).
* **Security Info:** Access mode (*CardOnly, Face...*), encrypted PIN, card ID number, access group, and the assigned Time Schedule.

### Bulk Import / Export Feature
To save time during initial system setup, S-Safe provides 2 tools:
* **Export 📤 (Orange):** Export the full current personnel list to an Excel file for archiving or reporting.
* **Import 📥 (Green):** Download the system's Excel template, fill in the employee list, then upload it to register personnel in bulk within seconds.

:::warning[Important Note When Importing Data]
The bulk Excel Import feature only applies to raw text data (Name, Employee Code, Department, etc.). The system **does NOT support bulk import of profile photos** via Excel. Profile photos for each individual must be updated manually as described in Tab 1 below.
:::

![Cardholder Management Main Interface](/img/cardholder-listview.png)

---

## 2. Add New and Detailed Configuration (3-Tab Dialog)

When you click the **+ Add New** ➕ button, the **Cardholder Details** dialog will appear. Configure all information across the following 3 functional tabs:

### Tab 1: General Information (Personal & Photo)
This section is used to identify the individual and set card validity dates:
* **Name (*):** Enter the user's full name (required field).
* **PIN:** A personal identification number used for card + PIN authentication mode. You can enter it manually or click **Generate PIN** to have the system create a random code.
* **Card ID Number:** Enter the ID number of the physical card issued to this person.
* **Validity Period (Applicable to Visitors):** Set the `From Date` to `To Date` range. After this period expires, the card will be automatically deactivated. (Especially useful when issuing temporary cards to contractors or short-term visitors.)
* **Update Profile Photo (Right side):**
  * Click **Upload Photo** to select an existing image file from your computer.
  * Or click **Open Camera** to capture the person's face directly using the workstation's webcam.

![Cardholder General Information Tab](/img/cardholder-details-1.png)

### Tab 2: Access Rights (Permissions & Schedule)
This tab determines which doors the user can access and at what times:
* **Access Mode:** Select the authentication method from the dropdown based on supported hardware:
  * `CardOnly`: Card swipe only.
  * `PinOnly`: PIN entry only.
  * `CardAndPin`: Requires card swipe followed by PIN entry (high security).
  * `FingerPrint` / `Face`: Authentication via fingerprint or facial recognition.
  * `Disabled`: Temporarily deactivates the card (e.g., employee on maternity leave, suspended card).
* **Add License Plate:** Enter the person's vehicle license plate and click **+ Add Plate** to sync with the vehicle access control system (if applicable).
* **Cardholder Groups (Access Group):** An intuitive permission assignment interface. Select an access group (e.g., *Floor 5 Access Group, Full Access Group*) from the **Unassigned** column, then click **`>`** to move it to the **Assigned** column. The user will immediately inherit that group's door access rules and time schedules.

![Cardholder Access Rights Tab](/img/cardholder-details-2.png)

### Tab 3: Organization (Administrative Information)
The final tab is used to classify personnel within the company structure:
* **Type:** Categorize the individual (e.g., `Employee`, `Visitor`).
* **Employee Code:** Enter the personnel ID to synchronize with HRM attendance software.
* **Position / Branch / Department:** Select from the available lists to support data filtering and department-based card-swipe report generation.

![Cardholder Organization Tab](/img/cardholder-details-3.png)

---

## 3. Editing and Deleting
* **Edit 📝:** Click the green icon to update a photo, change a PIN, or assign a new access group when an employee transfers to a different department.
* **Delete 🗑️:** Click the red icon to remove the cardholder account from the system.