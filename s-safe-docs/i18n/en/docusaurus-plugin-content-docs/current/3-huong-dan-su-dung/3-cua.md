---
id: quan-ly-cua
title: Door Management
sidebar_label: Door Management
sidebar_class_name: icon-cua
sidebar_position: 3
---

# Door Management

In the S-Safe system, a **Door** is a logical object created by mapping physical devices (Readers, Inputs, Outputs) from a Controller together. Door Management allows you to control the flow of personnel, configure lock/unlock time thresholds, and manage security alert signals.

## 1. Door List Interface

The main screen displays a list of all active Doors in the system.

A key feature of this interface is the **Quick-Action Toggles** displayed directly in the list, allowing operators to enable or disable features instantly without navigating to the details view:
* **Unlocked for maintenance:** Freely unlocks the door (typically used during maintenance, incidents, or open-door office hours).
* **Enable Open Too Long:** Toggles the alert feature for when a door is held open longer than the configured duration.
* **Enable Forced Open:** Toggles the forced-open alert feature (door opened without valid authentication).
* **Access Controller:** Displays the name and IP of the Controller managing this door.

![Door Management List](/img/door-listview.png)

## 2. Adding and Configuring a Door

To create a new Door, click the **+ Add New** ➕ button in the top-right corner. The Door configuration interface is divided into 2 main tabs:

### Tab 1: Information (Assign Physical Devices via Drag & Drop)
This is where you define which hardware components this Door will use. The system uses an intuitive **Drag & Drop** mechanism.

1. **Select the door controller:** Choose the physical Controller from the dropdown list.
2. **Name:** Enter an identifying name for the door (e.g., *Main Entrance, Server Room Door*).
3. **Drag and drop components:**
   * **Reader:** Drag the Reader icon from the left column and drop it into the **Outside Reader** (entry direction) or **Inside Reader** (exit direction) slot. You can also select the authentication method, such as *CardOnly*.
   * **Input:** Drag the IN ports and drop them into the Input box. Set the contact state (e.g., *NormallyClosed*) and the signal type to *DoorSensor* (magnetic door sensor).
   * **Output:** Drag the Output ports and drop them into the Output box. Set the signal type to *DoorStrike* (electromagnetic lock).

![Door Information Configuration](/img/door-details-1.png)

:::tip[Input/Output Setup Tips]
Make sure you cross-reference the actual wiring diagram from the installation technician to correctly map the corresponding IN/OUT ports in the software.
:::

### Tab 2: Maintenance (Configure Alerts and Timings)
Switch to the "Maintenance" tab to configure operational rules and security time limits for the door:

* **Unlocked for maintenance:** Enables maintenance unlock mode.
* **Enable open too long:** Activates the door-held-open-too-long alert feature.
* **Enable forced open:** Activates the forced-open alert feature.
* **Open too long threshold seconds:** Enter the number of seconds (e.g., 15 seconds). If the door remains open beyond this duration without closing (detected via the Door Sensor), the system will trigger an alarm.
* **Unlock duration seconds:** The relay delay time (e.g., 3 seconds). This is the duration the electromagnetic lock remains released, giving the user time to pull the door open after a successful card swipe.

![Door Maintenance Configuration](/img/door-details-2.png)

---

## 3. Editing and Deleting
* Click the **Edit** 📝 button (blue icon) in the actions column to reconfigure settings or replace the reader assigned to the door.
* Click the **Delete** 🗑️ button (red icon) to remove the door.

:::warning[Warning When Deleting]
When you delete a Door, the Access Rules currently granting personnel permission to pass through this door may be affected. Review your access permissions after deletion.
:::