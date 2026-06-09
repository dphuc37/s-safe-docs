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

* **Event:** The event code classification (e.g., *TypeCardID* — Card authentication swipe).
* **Time:** The exact timestamp accurate to the second when the event occurred on-site.
* **Source:** The name of the device or Door that triggered the event (e.g., *Main Door CR1*).
* **Description:** Detailed status of the access attempt (e.g., *Request granted: full test, used* — Access was approved).
* **Name:** The full name of the employee who swiped (if the system successfully matched the identity).
* **Profile Photo:** The original profile photo of the employee for the guard to visually compare against the person standing in front of the camera.
* **Status:** The accompanying alert signal or logical state.

![Live Event Monitoring Interface](/img/event.png)

---

## 2. Integrated Live Camera Monitoring (Live Camera Integration)

The key advantage of this module is the synchronized integration between Access Control data and the CCTV camera system, displayed in the lower panel:

* **Automatic Stream Activation:** When a card swipe event occurs at any door, S-Safe automatically pulls the live video stream from the Camera linked to that door and displays it on screen.
* **Visual Cross-Verification:** On-duty personnel can immediately see the real-time footage at the door to check for card fraud (one person swiping for multiple people) or any door jamming or intrusion incidents.
* **Multi-Stream Support:** The lower panel is divided into independent grid cells, allowing simultaneous monitoring of multiple camera angles when a series of events occur in quick succession.