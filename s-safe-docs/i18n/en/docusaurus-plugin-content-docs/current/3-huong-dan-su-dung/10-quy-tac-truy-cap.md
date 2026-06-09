---
id: quy-tac-truy-cap
title: Access Rules
sidebar_label: Access Rules
sidebar_class_name: icon-quy-tac
sidebar_position: 10
---

# Access Rules

The **Access Rules** module is the core logic management component of the S-Safe system. This feature allows you to define the permission relationship: **which Cardholder Groups** are authorized to swipe their cards to unlock **which Doors** in the building.

## 1. Access Rule List Interface

The main screen displays a list of all currently active permission rules in the system as an intuitive data table:

* **No.:** The sequential order number of the rule.
* **Name:** The identifying name of the rule (e.g., *Main Entrance Access, Technical Zone Access*).
* **Cardholder Groups:** The personnel groups to which this rule applies (groups separated by a vertical bar `|`).
* **Doors:** The list of doors that the above groups are authorized to access.
* **Actions:** Contains Edit 📝 (blue) and Delete 🗑️ (red) buttons.

![Access Rule List](/img/access-rule-listview.png)

---

## 2. Adding and Configuring the Permission Matrix

When you click **+ Add New** ➕ or the **Edit** 📝 button, an intuitive configuration dialog appears with two parallel corresponding list panels:

### Fields to Configure:
1. **Name (*):** Enter a name for the access rule (required — should be clearly named by area or function).
2. **Cardholder Group Configuration Panel (Top):**
   * **Available Cardholder Groups:** Personnel groups currently in the system that have not yet been granted this rule.
   * **Assigned Cardholder Groups:** The personnel groups officially subject to this rule. Select a group and use the `>>` or `<<` buttons to move them between panels.
3. **Door Configuration Panel (Bottom):**
   * **Available Doors:** The list of doors not yet assigned to this rule.
   * **Assigned Doors:** The doors that will automatically unlock when a personnel member from the above groups swipes their card. Use the `>>` and `<<` buttons to navigate between panels.

Click **Save** 💾 (green button) for the system to record and immediately sync the permission command down to the hardware Controllers.

![Access Rule Detail Configuration Dialog](/img/access-rule-details.png)

---

## 3. Editing and Deleting Rules

* **Edit:** Convenient when you want to add a new Door to an existing rule, or include a new Department in the list of groups permitted to access an area, without disrupting existing configurations.
* **Delete:** Immediately revokes all door access rights for the groups included in that rule.

:::info[System Administration Tips]
Instead of creating many small, individual access rules for each person, it is recommended to first organize personnel into **Cardholder Groups**, then use this **Access Rules** module to consolidate groups that share the same movement pattern. This approach makes managing systems with thousands of personnel extremely clean and efficient.
:::