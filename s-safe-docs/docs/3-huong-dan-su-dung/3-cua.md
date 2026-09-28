---
id: quan-ly-cua
title: Quản lý Cửa (Door)
sidebar_label: Quản lý Cửa (Door)
sidebar_class_name: icon-cua
sidebar_position: 3
---

# Quản lý Cửa (Door)

Trong hệ thống S-Safe, **Cửa (Door)** là một đối tượng logic được tạo ra bằng cách gán ghép các thiết bị vật lý (Đầu đọc, Ngõ vào, Ngõ ra) thuộc một Bộ điều khiển lại với nhau. Quản lý Cửa giúp bạn kiểm soát luồng người ra vào, thiết lập các ngưỡng thời gian khóa/mở và quản lý các tín hiệu cảnh báo an ninh.

## 1. Giao diện danh sách Cửa

Màn hình chính hiển thị danh sách toàn bộ các Cửa đang hoạt động trên hệ thống dưới dạng bảng dữ liệu:

* **Thông tin cơ bản:** STT, Tên cửa và Bộ điều khiển truy cập đang quản lý cửa đó (Kèm địa chỉ IP).
* **Công tắc trạng thái (Toggles):** Giao diện hiển thị trực tiếp trạng thái của các cấu hình an ninh, bao gồm:
  * *Unlocked for maintenance:* Trạng thái mở khóa cửa tự do (Thường dùng khi bảo trì hoặc giờ hành chính).
  * *Enable Open Too Long:* Trạng thái cảnh báo khi cửa mở quá lâu.
  * *Enable Forced Open:* Trạng thái cảnh báo cạy cửa (Mở cửa cưỡng bức).
* **Thanh công cụ thao tác:** Nằm ở cạnh dưới màn hình, cung cấp các nút **Thêm mới** (Màu xanh dương), **Sửa** (Màu xanh lá) và **Xóa** (Màu đỏ) kèm theo tính năng phân trang.

<img src="/img/door/door-listview.png" alt="Danh sách quản lý Cửa" width="100%" />

## 2. Thêm mới và Cấu hình Cửa

Để tạo một Cửa mới, bạn nhấn vào nút **+ Thêm mới** ở thanh công cụ phía dưới. Hộp thoại **Cấu hình cửa** được chia làm 2 Tab chính:

### Tab 1: Thông tin (Gán thiết bị vật lý bằng Kéo thả)
Khu vực này dùng để định nghĩa linh kiện phần cứng cho Cửa. Hệ thống sử dụng cơ chế **Kéo - Thả (Drag & Drop)** trực quan từ trái sang phải.

1. **Chọn bộ điều khiển cửa:** Chọn Controller vật lý từ danh sách thả xuống ở cột bên trái.
2. **Cấu hình cửa (Cột phải):** Nhập **Tên (*)** định danh cho cửa (Ví dụ: *Cửa văn phòng*).
3. **Thao tác kéo thả các thành phần:**
   * **Đầu đọc:** Nắm kéo biểu tượng Reader ở cột trái thả vào ô **Đầu đọc ngoài** hoặc **Đầu đọc trong** ở cột phải. Bạn có thể chọn phương thức xác thực (VD: *CardOnly*). Nhấn nút `X` để gỡ bỏ.
   * **Ngõ vào:** Nắm kéo các cổng IN thả vào hộp Ngõ vào. Thiết lập trạng thái tiếp điểm (Ví dụ: *NormallyOpen*) và loại tín hiệu (*DoorSensor* hoặc *ExitButton*).
   * **Ngõ ra:** Nắm kéo các cổng Output thả vào hộp Ngõ ra, đặt loại tín hiệu là *DoorStrike* (Khóa điện từ).

<img src="/img/door/door-details-1.png" alt="Cấu hình Thông tin Cửa" width="100%" />

:::tip[Mẹo thiết lập ngõ vào/ra]
Hãy chắc chắn rằng bạn đang đối chiếu đúng bản vẽ đấu nối dây điện thực tế của thợ thi công để kéo thả đúng cổng IN/OUT tương ứng trên phần mềm.
:::

### Tab 2: Bảo trì (Thiết lập cảnh báo và Thời gian)
Chuyển sang Tab "Bảo trì", tại đây bạn sẽ thiết lập các quy tắc hoạt động và giới hạn thời gian an ninh cho cửa:

* **Unlocked for maintenance:** Bật/tắt chế độ mở khóa bảo trì.
* **Enable open too long:** Bật/tắt tính năng cảnh báo mở cửa quá lâu.
* **Enable forced open:** Bật/tắt tính năng cảnh báo cạy cửa.
* **Open too long threshold seconds:** Nhập số giây giới hạn (Ví dụ: 30 giây). Nếu cửa mở vượt quá thời gian này mà chưa đóng lại, hệ thống sẽ kích hoạt báo động.
* **Unlock duration seconds:** Thời gian trễ của rơ-le (Ví dụ: 5 giây). Đây là thời gian khóa điện từ nhả ra để người dùng kéo cửa sau khi quẹt thẻ hợp lệ.

Sau khi hoàn tất, nhấn nút **Lưu** (Màu xanh lá) ở góc dưới cùng bên phải để lưu cấu hình.

<img src="/img/door/door-details-2.png" alt="Cấu hình Bảo trì Cửa" width="100%" />

---

## 3. Chỉnh sửa và Xóa
* **Sửa:** Chọn cửa cần thay đổi trên danh sách và nhấn nút **Sửa** ở thanh công cụ dưới cùng để cấu hình lại các thông số hoặc gỡ/đổi đầu đọc.
* **Xóa:** Chọn cửa và nhấn nút **Xóa** để loại bỏ cửa khỏi hệ thống. 

:::warning[Cảnh báo khi xóa]
Khi bạn xóa một Cửa, các quy tắc truy cập (Access Rule) đang cấp quyền cho nhân sự đi qua cửa này có thể bị ảnh hưởng. Hãy kiểm tra lại phân quyền sau khi xóa.
:::