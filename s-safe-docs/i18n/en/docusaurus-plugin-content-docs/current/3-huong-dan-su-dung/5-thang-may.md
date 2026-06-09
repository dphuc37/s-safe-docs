---
id: quan-ly-thang-may
title: Elevator Management
sidebar_label: Elevator Management
sidebar_class_name: icon-thang-may
sidebar_position: 5
---

# Elevator Management (Elevator Control)

The **Elevator** module is S-Safe's advanced floor-based access control solution. This feature allows you to restrict user access to specific floors within a building, ensuring maximum security for internal areas or VIP floors.

:::info[Module Under Development (Beta)]
The interface and some advanced features of the Elevator module are currently being continuously updated and refined by the SMT team to deliver the best possible experience.
:::

## 1. Interface Overview

The Elevator Management screen is designed with two intuitive areas:
* **Left Column:** A list of all elevators currently managed in the system. You can use the search bar to quickly filter the elevator you need to configure.
* **Right Area:** The detailed configuration space for the currently selected elevator.

To register a new elevator, click the **Add New** button in the bottom-left corner, then enter the **Elevator Name** and select the corresponding **Hardware Controller**.

![Elevator Management Interface](/img/elevator-listview.png)

---

## 2. Device Link Setup

Each physical elevator cabin is "digitized" in the software by linking peripheral devices. In the detailed configuration section, you need to define:
* **Elevator Type:** Classify the elevator (e.g., Passenger Elevator, Freight Elevator, VIP Elevator).
* **Linked Reader:** Select the card Reader installed inside the cabin of this elevator.
* **Linked Camera:** Assign a surveillance Camera to automatically display a video pop-up when a card swipe event occurs inside the elevator.

---

## 3. Floor Map Configuration (Relay Mapping)

This is the core feature of the elevator access control system. Each floor button inside the cabin is wired to a relay (Output) on the S-Safe controller.

To configure, click the **+ Add Floor** button (blue):
1. **Floor Symbol / Floor Name:** Enter an identifying name for the floor (e.g., *Floor 1, Floor 30, VIP Floor*).
2. **Output Relay Assignment:** Select the correct physical relay port (e.g., *Relay 1 - Output 1*) that is directly wired to that floor's button.
3. Click **Save Floor** to complete.

Once this floor map is configured, you can use the **Access Rule** module to grant employee cards permission to activate specific relays (corresponding to specific floors).

![Elevator Floor Configuration](/img/elevator-details.png)