---
id: hang-rao-dien-tu
title: Electric Fence (Geofence)
sidebar_label: Electric Fence (Geofence)
sidebar_class_name: icon-hang-rao
sidebar_position: 19
---

# Electric Fence Management (Geofence)

The **Electric Fence** module allows you to integrate floor plan maps, draw virtual security perimeters (Geofences), and link them to the physical signal ports of the controller hardware to detect intrusions.

## 1. Adding a Map to the List

To begin the setup, you need to load a floor plan into the workspace:
* Right-click on an empty area in the list panel (Treeview) on the left side.
* Select **Add Map**. The **Add Map** dialog will appear:
  * **Name:** Enter a display name for the map (e.g., *Map 1*).
  * **Area:** Select the Zone/Area already created in the system to link with this map (e.g., *Main Area Test*).
* Click **Save** to confirm.

![Add Map Dialog](/img/geofence-3.png)

---

## 2. Working with the Treeview and Drawing Fence Zones

After the map is added to the list, right-click directly on the map name (e.g., *Main Area Test*) to open the context menu:
* **Add Fence:** Allows you to create a new geofence zone under this map.
* **Edit:** Modify the map's Name or linked Area.
* **Delete:** Remove the map from the list.

When you choose to draw a fence, the central map canvas will allow you to click points to form a closed polygon (a light blue shaded area with a red border) enclosing the zone to be protected.

![Treeview and Map Operations](/img/geofence-2.png)

---

## 3. Configuring Hardware for a Fence (Add Fence)

When you create a new geofence, the **Add Fence** dialog will require you to configure the hardware link parameters:

* **Name:** The identifying name for the fence (e.g., *F12, Parking Lot, Warehouse*).
* **Controller:** Select the specific Controller (Main Panel) managing this area.
* **Input:** Select the alarm input signal port on that controller (e.g., *AUX Input 1*). This port will be wired to physical sensors (such as infrared sensors or fence beam sensors). When a sensor is triggered, the system will raise an alert at the exact virtual zone drawn on the map.

Click **Save** to complete the linking process.

![Electric Fence Configuration Dialog](/img/geofence-1.png)