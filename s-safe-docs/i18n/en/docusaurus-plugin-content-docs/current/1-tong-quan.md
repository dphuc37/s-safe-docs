---
id: system-requirements
title: System Requirements
sidebar_class_name: icon-he-thong
slug: /
---

# S-Safe System Requirements

To ensure optimal performance, workstations and servers must meet the minimum, recommended, or high-performance configuration specifications for S-Safe 1.2.

:::danger Important
Upgrading S-Safe to a newer version using older hardware does not affect performance when using the same feature set.
:::

## 1. Workstation (Client) Configuration Requirements

| Requirement | Specifications |
| :--- | :--- |
| **Minimum** | - **CPU:** Intel® Core™ i3 Gen 10 or equivalent<br/>- **RAM:** 8 GB or higher<br/>- **OS:** Windows 10/11 64-bit<br/>- **Storage:** SSD with at least 50 GB free<br/>- **GPU:** Intel® UHD Graphics<br/>- **Network:** 100 Mbps Ethernet |
| **Recommended** | - **CPU:** Intel® Core™ i5-12400F or equivalent<br/>- **RAM:** 16 GB or higher<br/>- **OS:** Windows 10/11 64-bit<br/>- **Storage:** SSD with at least 100 GB free<br/>- **GPU:** NVIDIA® GeForce RTX 3050 or equivalent<br/>- **Network:** GbE (Gigabit) |
| **High Performance** | - **CPU:** Intel® Core™ i7 Gen 12 or higher, or equivalent<br/>- **RAM:** 32 GB or higher<br/>- **OS:** Windows 10/11 64-bit<br/>- **Storage:** High-speed NVMe SSD<br/>- **GPU:** NVIDIA® GeForce RTX 3060 12GB or higher<br/>- **Network:** GbE (Gigabit) |

### Maximum Number of Camera Streams Displayed on Client
The maximum number of streams is calculated at 85% CPU/GPU capacity in a static environment (Video Wall). Using AI features such as facial recognition will reduce the actual number of displayable streams.

| Codec | H.264 / HEVC (H.265) 30 fps | | | |
| :--- | :--- | :--- | :--- | :--- |
| **Resolution** | **VGA** (640x480) | **HD** (1280x720) | **Full HD** (1920x1080) | **Ultra HD** (3840x2160) |
| **Minimum** | 12 streams | 4 streams | 2 streams | 0 |
| **Recommended** | 55 streams | 35 streams | 24 streams | 6 streams |
| **High Performance** | 120+ streams | 75 streams | 45 streams | 12 streams |

:::tip GPU Optimization
S-Safe requires a GPU that supports CUDA architecture 5.0 or higher. Always enable the "Hardware Acceleration" feature in the settings to offload decoding to the GPU, keeping the system cooler and more stable. A 12GB VRAM capacity (such as the RTX 3060 series) is critically important for maintaining low latency when viewing dense camera grids (6x6, 8x8).
:::

## 2. Server Configuration Requirements

| Requirement | Specifications |
| :--- | :--- |
| **Minimum** | - **CPU:** Intel® Core™ i5 Gen 10 or equivalent<br/>- **RAM:** 16 GB DDR4<br/>- **OS:** Windows 10/11 Pro<br/>- **Storage:** SSD 250 GB (OS) + Dedicated HDD 4TB–8TB (Video Storage)<br/>- **GPU:** NVIDIA® GeForce GTX 1650 or equivalent |
| **Recommended** | - **CPU:** Intel® Core™ i7-12700 or equivalent<br/>- **RAM:** 32 GB DDR4/DDR5<br/>- **OS:** Windows Server 2019/2022<br/>- **Storage:** 512 GB NVMe SSD (OS) + HDD 10TB–20TB (Video Storage)<br/>- **GPU:** NVIDIA® GeForce RTX 3050 8GB |
| **High Performance** | - **CPU:** Intel® Core™ i9 or Xeon® Silver or higher<br/>- **RAM:** 64 GB or higher<br/>- **OS:** Windows Server 2022 64-bit<br/>- **Storage:** Enterprise SSD 1TB RAID 1 (OS) + HDD RAID System 30TB+ (Video Storage)<br/>- **GPU:** NVIDIA® GeForce RTX 3060 12GB |

### Server Capacity Limits

| Parameter | Minimum Configuration | Recommended Configuration | High Performance |
| :--- | :--- | :--- | :--- |
| **Readers** | Up to 20 devices | Up to 100 devices | Up to 400 devices |
| **Personnel Scale** | Up to 1,000 people | Up to 5,000 people | Up to 10,000 people |
| **Event Frequency** | ~5,000 events/day | ~50,000 events/day | ~100,000 events/day |
| **Camera Integration** | Up to 10 cameras | Up to 50 cameras | Up to 150 cameras |

:::info Server Deployment Notes
* With the **Minimum** configuration, the SQL Server database must be stored on a dedicated machine (Dedicated Database Server) to avoid CPU bottlenecks.
* If concurrent Live View traffic exceeds 100 Mbps, it is recommended to use a server with a dedicated GPU (RTX 30 Series) to distribute the decoding load.
:::