---
id: giam-sat-su-kien
title: Event Monitoring
sidebar_label: Event Monitoring
sidebar_class_name: icon-giam-sat
sidebar_position: 15
---

# Live Event Monitoring (Event Monitor)

The **Event Monitoring** module is the real-time security operations center of the S-Safe system. This screen is designed specifically for security guards or control room operators to detect access events early and respond promptly to security incidents.

## 1. Live Event Log Table

The upper area displays a continuously updating list of events pushed from door controllers, with no page refresh required (Auto-refresh):

* **Personnel:** Displays the avatar and full name of the employee (e.g., *Nguyen Van A, Tran Thi B*) or shows *Visitor* for unidentified individuals.
* **Location (Source):** The location of the door or device where the event originated (e.g., *Basement Door, Warehouse Door, Main Entrance*).
* **Event:** The type of event recorded by the system (e.g., *Card Rejected, Door Status, System Event*).
* **Details:** A specific description of the reason or status (e.g., *Access denied: Card not registered in the system*, *Door connection lost*, *System rebooted unexpectedly*).
* **Time:** The exact timestamp (Year-Month-Day Hour:Minute:Second) of the event's occurrence.
* **Status:** Associated alert indicator (e.g., a red **ALERT** badge for access denial events or danger warnings).

> **Quick Action Buttons (Top-right corner):**
> * **Test Event (Green):** Generates a simulated event to test connectivity and system response.
> * **Export (Orange):** Exports the current event log list to a data file.

![Live Event Monitoring Interface](/img/event.png)

---

## 2. Integrated Live Camera Monitoring (Live Camera Integration)

The key advantage of this module is the synchronized integration between Access Control data and the CCTV camera system, displayed in the lower panel:

* **Automatic Stream Activation:** When a card swipe event occurs at any door, S-Safe automatically pulls the live video stream from the Camera linked to that door and displays it on screen.
* **Visual Cross-Verification:** On-duty personnel can immediately see the real-time footage at the door to check for card fraud (one person swiping for multiple people) or any door jamming or intrusion incidents.
* **Multi-Stream Support:** The lower panel is divided into independent grid cells, allowing simultaneous monitoring of multiple camera angles when a series of events occur in quick succession.