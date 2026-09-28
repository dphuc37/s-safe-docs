---
id: system-requirements
title: Yêu cầu hệ thống
sidebar_class_name: icon-he-thong
slug: /yeu-cau-he-thong
---

# Yêu cầu hệ thống S-Safe

 Để đảm bảo hiệu suất tối ưu, các máy trạm và máy chủ cần đáp ứng các cấu hình tối thiểu, đề nghị hoặc hiệu năng cao của S-Safe 1.2.

:::danger Quan trọng
 Việc nâng cấp S-Safe lên phiên bản mới sử dụng phần cứng cũ hơn không ảnh hưởng đến hiệu suất khi sử dụng cùng bộ tính năng.
:::

## 1. Yêu cầu cấu hình Máy trạm (Client)

| Yêu cầu | Thông số |
| :--- | :--- |
| **Tối thiểu** | -  **CPU:** Intel® Core™ i3 Gen 10 hoặc tương đương<br/>- **RAM:** 8 GB hoặc cao hơn<br/>- **Hệ điều hành:** Windows 10/11 64-bit<br/>- **Ổ cứng:** SSD với ít nhất 50 GB trống<br/>- **GPU:** Intel® UHD Graphics<br/>- **Mạng:** 100 Mbps Ethernet |
| **Đề nghị** | -  **CPU:** Intel® Core™ i5-12400F hoặc tương đương<br/>- **RAM:** 16 GB hoặc cao hơn<br/>- **Hệ điều hành:** Windows 10/11 64-bit<br/>- **Ổ cứng:** SSD với ít nhất 100 GB trống<br/>- **GPU:** NVIDIA® GeForce RTX 3050 hoặc tương đương<br/>- **Mạng:** GbE (Gigabit) |
| **Hiệu năng cao** | -  **CPU:** Intel® Core™ i7 Gen 12 trở lên hoặc tương đương<br/>- **RAM:** 32 GB hoặc cao hơn<br/>- **Hệ điều hành:** Windows 10/11 64-bit<br/>- **Ổ cứng:** SSD NVMe tốc độ cao<br/>- **GPU:** NVIDIA® GeForce RTX 3060 12GB trở lên<br/>- **Mạng:** GbE (Gigabit) |

### Số lượng camera hiển thị tối đa trên Client
 Số lượng luồng tối đa được tính ở mức 85% công suất CPU/GPU trong môi trường tĩnh (Video Wall).  Việc dùng tính năng AI như nhận diện khuôn mặt sẽ làm giảm số luồng hiển thị thực tế.

| Chuẩn nén | H.264 / HEVC (H.265) 30 fps | | | |
| :--- | :--- | :--- | :--- | :--- |
| **Độ phân giải** | **VGA** (640x480) | **HD** (1280x720) | **Full HD** (1920x1080) |  **Ultra HD** (3840x2160)|
| **Tối thiểu** | 12 luồng | 4 luồng | 2 luồng |  0|
| **Đề nghị** | 55 luồng | 35 luồng | 24 luồng |  6 luồng|
| **Hiệu năng cao** | 120+ luồng | 75 luồng | 45 luồng |  12 luồng|

:::tip Tối ưu GPU
 S-Safe yêu cầu GPU hỗ trợ kiến trúc CUDA 5.0 trở lên.  Luôn kích hoạt tính năng "Tăng tốc phần cứng" trong phần cài đặt để chuyển giải mã sang GPU, giúp máy chạy mát và ổn định hơn.  Dung lượng 12GB VRAM (như dòng RTX 3060) cực kỳ quan trọng để giữ độ trễ thấp khi xem lưới camera dày đặc (6x6, 8x8).
:::

## 2. Yêu cầu cấu hình Máy chủ (Server)

| Yêu cầu | Thông số |
| :--- | :--- |
| **Tối thiểu** | -  **CPU:** Intel® Core™ i5 Gen 10 hoặc tương đương<br/>- **RAM:** 16 GB DDR4<br/>- **Hệ điều hành:** Windows 10/11 Pro<br/>- **Ổ cứng:** SSD 250 GB (OS) + HDD 4TB-8TB chuyên dụng (Lưu video)<br/>- **GPU:** NVIDIA® GeForce GTX 1650 hoặc tương đương  |
| **Đề nghị** | -  **CPU:** Intel® Core™ i7-12700 hoặc tương đương<br/>- **RAM:** 32 GB DDR4/DDR5<br/>- **Hệ điều hành:** Windows Server 2019/2022<br/>- **Ổ cứng:** 512 GB SSD NVMe (OS) + HDD 10TB-20TB (Lưu video)<br/>- **GPU:** NVIDIA® GeForce RTX 3050 8GB  |
| **Hiệu năng cao** | -  **CPU:** Intel® Core™ i9 hoặc Xeon® Silver trở lên<br/>- **RAM:** 64 GB hoặc cao hơn<br/>- **Hệ điều hành:** Windows Server 2022 64-bit<br/>- **Ổ cứng:** SSD Enterprise 1TB RAID 1 (OS) + Hệ thống RAID HDD 30TB+ (Lưu video)<br/>- **GPU:** NVIDIA® GeForce RTX 3060 12GB  |

### Giới hạn sức chịu tải của Server

| Thông số | Cấu hình tối thiểu | Cấu hình đề nghị | Hiệu năng cao |
| :--- | :--- | :--- | :--- |
| **Đầu đọc** | Tối đa 20 thiết bị | Tối đa 100 thiết bị |  Tối đa 400 thiết bị|
| **Quy mô nhân sự** | Lên đến 1.000 người | Lên đến 5.000 người |  Lên đến 10.000 người|
| **Tần suất sự kiện** | ~ 5.000 sự kiện/ngày | ~ 50.000 sự kiện/ngày |  ~ 100.000 sự kiện/ngày|
| **Tích hợp Camera** | Tối đa 10 Camera | Tối đa 50 Camera |  Tối đa 150 Camera|

:::info Lưu ý triển khai Server
* Với cấu hình **Tối thiểu**, cơ sở dữ liệu SQL Server bắt buộc phải lưu trên máy tính độc lập (Dedicated Database Server) để tránh thắt nút cổ chai CPU.
*  Nếu lưu lượng xem Live view đồng thời vượt quá 100 Mbps, khuyến nghị sử dụng máy chủ có GPU rời (RTX 30 Series) để chia tải giải mã.
:::