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
  * **Area:** Chọn Vùng/Khu vực đã được tạo sẵn trong hệ thống để liên kết với bản đồ này (Ví dụ: *Main Area Test*).
* Nhấn **Save** để lưu lại.

![Hộp thoại Thêm bản đồ](/img/geofence-3.png)

---

## 2. Thao tác trên Cây thư mục và Vẽ vùng quét

Sau khi bản đồ được thêm vào danh sách, bạn nhấp chuột phải trực tiếp vào tên bản đồ đó (Ví dụ: *Main Area Test*) để mở menu ngữ cảnh:
* **Add Fence (Thêm hàng rào):** Cho phép bạn tạo một hàng rào điện tử mới thuộc bản đồ này.
* **Delete (Xóa):** Gỡ bản đồ khỏi danh sách.

Khi bạn chọn vẽ hàng rào, khu vực bản đồ trung tâm sẽ cho phép bạn chấm các điểm để tạo thành một đa giác khép kín (vùng màu xanh nhạt có viền đỏ) bao quanh khu vực cần bảo vệ.

![Thao tác trên cây thư mục và bản đồ](/img/geofence-2.png)

---

## 3. Cấu hình thiết bị cho Hàng rào (Add Fence)

Khi bạn khởi tạo một hàng rào điện tử mới, hộp thoại **Add Fence** sẽ yêu cầu thiết lập các thông số liên kết với phần cứng:

* **Name:** Tên định danh của hàng rào (Ví dụ: *F12, Bãi xe, Kho hàng*).
* **Cảnh báo:** Lựa chọn kịch bản/mức độ cảnh báo tương ứng đã được thiết lập sẵn trên hệ thống (Ví dụ: Báo động hàng rào, Cảnh báo hàng rào, Chú ý hàng rào).
* **Cấu hình camera giám sát:** 
  * Nhấn nút **Chọn camera** để mở hộp thoại *Gán camera vào hàng rào*:
    * **Chọn camera ưu tiên (hiện khi báo động):** Lựa chọn 1 camera chính từ danh sách thả xuống. Camera này sẽ tự động bật Liveview ưu tiên lên màn hình ngay khi có sự kiện báo động phát sinh tại hàng rào.
    * **Chọn camera phụ (xem kèm):** Đánh dấu tích (checkbox) chọn thêm các camera phụ trong danh sách để theo dõi đa góc nhìn xung quanh khu vực hàng rào.
    * Nhấn **Xác nhận** để áp dụng hoặc **Hủy bỏ** để đóng hộp thoại.
  * Hiển thị danh sách và số lượng camera đã gắn (Ví dụ: *Đã gán: 1 Camera*).
  * Xem trực tiếp khung hình phát (Liveview) của camera được chọn ngay trên giao diện cấu hình hàng rào.
* **Bộ công cụ vẽ (Workspace):**
  * **Công cụ vẽ:** Nhấp vào biểu tượng vẽ để tiến hành khoanh vùng phạm vi hàng rào trực tiếp trên mặt bằng bản đồ.
  * **Hoàn tác / Làm lại (Undo / Redo):** Nhấp vào các biểu tượng mũi tên để hủy bỏ hoặc thực hiện lại thao tác vẽ trước đó.
  * **Xóa vùng vẽ:** Nhấp vào biểu tượng thùng rác màu đỏ để xóa vùng vừa vẽ trên bản đồ.
  
Sau khi thiết lập xong, nhấn **Lưu lại** (màu xanh) để lưu cấu hình hoặc nhấn **Xóa dữ liệu** (màu đỏ) nếu muốn xóa.

![Hộp thoại cấu hình Hàng rào điện tử](/img/geofence-1.png)