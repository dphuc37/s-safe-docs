---
id: bo-dieu-khien
title: Controller Management
sidebar_label: Controller Management
sidebar_class_name: icon-chip
sidebar_position: 2
---

# Controller Management

The Controller is the central device that acts as the on-site "brain." It directly receives signals from peripheral devices (card readers, push buttons, door sensors) and transmits them to the S-Safe central software for analysis and processing according to the configured rule set.

## 1. List View Interface

On the main screen of the **Controller** module, the system displays a listview of all devices currently being managed.

The monitoring interface immediately provides key real-time status parameters to help operators assess the network at a glance:
* **Basic Information:** ID, Controller type (e.g., X1100), Device name, and IP address.
* **Hardware Status:**
  * *Connection Status:* Displays whether the device is online or offline.
  * *Tamper:* Triggers an alert if the device enclosure has been forced open.
  * *AC Power / BATT:* Status of the mains power supply and backup battery level.

![Controller Management List](/img/controller-listview.png)

---

## 2. Main Operations

### Adding a New Controller
To register a new controller into the system, follow these steps:

1. Click the **+ Add New** button (blue) in the top-right corner of the screen.
2. The **Access Controller** form will appear. Fill in all the required technical parameters for the device:
   * **Identification Info:** Select the *Controller type* (e.g., X1100), enter the *Controller Name* (required), and the *Serial Number*.
   * **Network & Account Settings:** Enter the exact *IP Address* of the hardware, along with the *Username* and *Password* to grant the software access to the device.
   * **Physical Port Configuration:** Declare the number of *Inputs*, *Outputs*, and *Readers* that the device physically supports.
   * **Extended Configuration:** Declare the *Parent Controller*, *SIO Address* (applicable for expansion modules X100, X200, X300), and the *RS485 Port*.
3. Review the information and click **Save** (green) to complete. The new device will immediately appear in the list.

![Add/Edit Controller Interface](/img/controller-details.png)

:::info[Device Deployment Tips]
Ensure that the server running S-Safe and the physical Controllers are on the same network (able to ping the device IP) before registering them in the software, so that the connection status is displayed accurately.
:::

### Editing Device Information
* In the *Actions* column for the device you wish to edit, click the **Edit** button (green square icon).
* The update form will display all previously configured parameters. Modify the required fields and click **Save**.

### Deleting a Device
* Click the **Delete** button (red trash icon) in the actions column.
* The system will display a confirmation dialog to prevent accidental deletion. Click confirm to permanently remove the controller from the database.

:::warning[Important Warning]
Deleting a Controller will directly affect the Doors and Readers that are currently assigned to it. Make sure you have removed all associated software links before performing the delete operation.
:::