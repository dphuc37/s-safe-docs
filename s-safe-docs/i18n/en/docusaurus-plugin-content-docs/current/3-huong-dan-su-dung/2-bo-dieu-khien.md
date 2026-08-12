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
  * *Connection Status:* Displays whether the device is Connected or Disconnected.
  * *Tamper:* Triggers an alert if the device enclosure has been forced open.
  * *AC Power / BATT:* Status of the mains power supply and backup battery level.

![Controller Management List](/img/controller-listview.png)

---

## 2. Main Operations

### Adding a New Controller
To register a new controller into the system, follow these steps:

1. Click the **+ Add New** button (blue) in the top-right corner of the screen.
2. The **Access Controller** interface appears, featuring two main configuration tabs:
   * **General Information Tab:**
     * **Identification Info:** Select the *Controller* type (e.g., X1100), and enter the *Controller Name* (Required) and *Serial Number*.
     * **Network & Account Parameters:** Enter the hardware's *IP Address* accurately, along with the *Username* and *Password* to grant the software access to the device.
     * **Extended Configuration:** Specify the *Parent Controller*, *SIO Address* (applicable to X100, X200, and X300 expansion modules), and the *RS485 Port*.
   * **I/O Devices Tab (Input/Output & Reader Configuration):**
     * **General Parameter Setup:** Specify the quantities for **Number of Readers**, **Number of Inputs**, and **Number of Outputs**, as well as the **LED Mode** (e.g., *R/G + separate buzzer*).
     * **Readers:** Configure the authentication method for each reader (e.g., select *CardOnly* for *Reader 1* and *Reader 2*).
     * **Inputs:** Set the signal state (*Active*, *NormallyOpen* / *NormallyClosed*) and assign a function to each input port (e.g., *DoorSensor*).
     * **Outputs:** Configure the control function for each output port (e.g., *DoorStrike*).
3. Click **Check Connection** (blue) in the bottom-left corner to test the connection to the device.
4. Review the information and click the **Save** button (green) to complete the process. The new device will immediately appear in the list. To cancel the operation, click **Cancel** (red).

![Add/Edit Controller Interface](/img/controller-details.png)
![Add/Edit Controller Interface](/img/controller-details-1.png)

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