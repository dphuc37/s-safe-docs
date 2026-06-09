---
id: nhom-dung-the
title: Cardholder Group Management
sidebar_label: Cardholder Groups
sidebar_class_name: icon-nhom-the
sidebar_position: 8
---

# Cardholder Group Management

The **Cardholder Groups** module allows administrators to cluster personnel with similar roles or from the same department (e.g., *Technical Group, Accounting Group, Visitors*). Managing access by group significantly reduces the time needed to configure door permissions, eliminating the need to manually configure each individual separately.

## 1. Main List Interface

The screen displays a list of all existing cardholder groups in a clear data table with 4 main columns:

1. **No.:** The sequential order number of the group.
2. **Group Name:** The identifying name of the cardholder group (e.g., *Board of Directors, HR Department*).
3. **Number of Members:** The total number of personnel assigned to this group. Use this column to quickly check headcount changes for each group.
4. **Actions:** Contains the **Edit** 📝 and **Delete** 🗑️ buttons.

![Cardholder Group Management Main Interface](/img/cardholder-group-listview.png)

---

## 2. Adding and Configuring Group Members

When you click the **+ Add New** ➕ button or the **Edit** 📝 button, a configuration dialog will appear. The interface is streamlined for fast operation:

* **Input Field:** `Group Name (*)` is the only text field you need to fill in (required).
* **Member Assignment Area:** Divided into 2 corresponding list columns below:
  * **Unassigned Column (Left):** Displays all personnel currently in the S-Safe system who have not yet been added to this group.
  * **Assigned Column (Right):** The list of personnel who are official members of this group.

### Quick Navigation Buttons:
* **`>>` Button:** Moves all or selected personnel from the *Unassigned* column to the *Assigned* column to add them to the group.
* **`<<` Button:** Removes selected personnel from the group, moving them back from the *Assigned* column to the *Unassigned* column.

Click **Save** to finalize the configuration. The system will automatically sync the updated member list into the group.

![Add/Edit Cardholder Group Dialog](/img/cardholder-group-details.png)

---

## 3. Editing and Deleting Groups

* **Edit:** Allows you to rename the group or add/remove members using the `>>` and `<<` navigation buttons.
* **Delete:** Permanently removes the group from the system.

:::info[Safe Deletion Rules for Groups]
When you delete a Cardholder Group, S-Safe only removes the logical object "Group Name." All personnel records inside that group **WILL NOT be deleted**. They will be automatically returned to an unassigned state so you can easily reassign them to other groups.
:::