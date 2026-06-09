---
id: hang-rao-dien-tu
title: Hàng rào điện tử
sidebar_label: Hàng rào điện tử
sidebar_class_name: icon-hang-rao
sidebar_position: 19
---

# Quản lý Hàng rào điện tử (Geofence)

Module **Hàng rào điện tử** cho phép bạn tích hợp sơ đồ mặt bằng, sau đó vẽ các phân khu an ninh ảo (Geofence) và liên kết chúng với các cổng tín hiệu vật lý của thiết bị điều khiển để phát hiện xâm nhập.

## 1. Thêm Bản đồ vào danh sách

Để bắt đầu thiết lập, bạn cần đưa bản đồ mặt bằng vào không gian làm việc:
* Nhấp chuột phải vào khoảng trống trong khu vực danh sách (Treeview) lề trái.
* Chọn thêm bản đồ. Hộp thoại **Add Map** xuất hiện:
  * **Name:** Đặt tên hiển thị cho bản đồ (Ví dụ: *Map 1*).
  * **Area:** Chọn Vùng/Khu vực đã được tạo sẵn trong hệ thống để liên kết với bản đồ này (Ví dụ: *Main Area Test*).
* Nhấn **Save** để lưu lại.

![Hộp thoại Thêm bản đồ](/img/geofence-3.png)

---

## 2. Thao tác trên Cây thư mục và Vẽ vùng quét

Sau khi bản đồ được thêm vào danh sách, bạn nhấp chuột phải trực tiếp vào tên bản đồ đó (Ví dụ: *Main Area Test*) để mở menu ngữ cảnh:
* **Add Fence (Thêm hàng rào):** Cho phép bạn tạo một hàng rào điện tử mới thuộc bản đồ này.
* **Edit (Chỉnh sửa):** Sửa lại thông tin Tên hoặc liên kết Area của bản đồ.
* **Delete (Xóa):** Gỡ bản đồ khỏi danh sách.

Khi bạn chọn vẽ hàng rào, khu vực bản đồ trung tâm sẽ cho phép bạn chấm các điểm để tạo thành một đa giác khép kín (vùng màu xanh nhạt có viền đỏ) bao quanh khu vực cần bảo vệ.

![Thao tác trên cây thư mục và bản đồ](/img/geofence-2.png)

---

## 3. Cấu hình thiết bị cho Hàng rào (Add Fence)

Khi bạn khởi tạo một hàng rào điện tử mới, hộp thoại **Add Fence** sẽ yêu cầu thiết lập các thông số liên kết với phần cứng:

* **Name:** Tên định danh của hàng rào (Ví dụ: *F12, Bãi xe, Kho hàng*).
* **Controller:** Chọn đích danh Bộ điều khiển (Tủ trung tâm) đang quản lý khu vực này.
* **Input:** Chọn cổng tín hiệu báo động đầu vào trên bộ điều khiển đó (Ví dụ: *AUX Input 1*). Cổng này sẽ được đấu nối với các cảm biến thực tế (như cảm biến hồng ngoại, beam hàng rào). Khi cảm biến bị kích hoạt, hệ thống sẽ báo động đúng vào vùng ảo đã vẽ trên bản đồ.

Nhấn **Save** để hoàn tất quá trình liên kết.

![Hộp thoại cấu hình Hàng rào điện tử](/img/geofence-1.png)