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

Màn hình chính hiển thị danh sách toàn bộ các Cửa đang hoạt động trên hệ thống. 

Điểm nổi bật của giao diện này là các **Công tắc thao tác nhanh (Toggles)** được đưa trực tiếp ra ngoài bảng danh sách, cho phép người vận hành bật/tắt các tính năng ngay lập tức mà không cần bấm vào xem chi tiết:
* **Unlocked for maintenance:** Mở khóa cửa tự do (Thường dùng khi bảo trì, sự cố hoặc trong giờ hành chính mở cửa tự do).
* **Enable Open Too Long:** Bật/tắt tính năng cảnh báo khi cửa mở quá lâu so với thời gian quy định.
* **Enable Forced Open:** Bật/tắt tính năng cảnh báo cạy cửa (Mở cửa cưỡng bức không qua xác thực).
* **Bộ điều khiển truy cập:** Hiển thị tên và IP của Bộ điều khiển đang quản lý cửa này.

![Danh sách quản lý Cửa](/img/door-listview.png)

## 2. Thêm mới và Cấu hình Cửa

Để tạo một Cửa mới, bạn nhấn vào nút **+ Thêm mới** ➕ ở góc phải màn hình. Giao diện cấu hình Cửa được chia làm 2 phần chính:

### Tab 1: Thông tin (Gán thiết bị vật lý bằng Kéo thả)
Đây là khu vực để bạn định nghĩa Cửa này sẽ dùng những linh kiện phần cứng nào. Hệ thống sử dụng cơ chế **Kéo - Thả (Drag & Drop)** cực kỳ trực quan.

1. **Chọn bộ điều khiển cửa:** Chọn Controller vật lý từ danh sách thả xuống.
2. **Tên:** Đặt tên định danh cho cửa (Ví dụ: *Cửa Chính, Cửa Phòng Server*).
3. **Thao tác kéo thả các thành phần:**
   * **Đầu đọc (Reader):** Nắm kéo biểu tượng Reader từ cột bên trái thả vào ô **Đầu đọc ngoài** (chiều đi vào) hoặc **Đầu đọc trong** (chiều đi ra). Bạn có thể chọn phương thức xác thực như *CardOnly* (Chỉ dùng thẻ).
   * **Ngõ vào (Input):** Nắm kéo các cổng IN thả vào hộp Ngõ vào. Thiết lập trạng thái tiếp điểm (Ví dụ: *NormallyClosed*) và loại tín hiệu là *DoorSensor* (Cảm biến từ gắn cửa).
   * **Ngõ ra (Output):** Nắm kéo các cổng Output thả vào hộp Ngõ ra, đặt loại tín hiệu là *DoorStrike* (Khóa điện từ).

![Cấu hình Thông tin Cửa](/img/door-details-1.png)

:::tip[Mẹo thiết lập ngõ vào/ra]
Hãy chắc chắn rằng bạn đang đối chiếu đúng bản vẽ đấu nối dây điện thực tế của thợ thi công để kéo thả đúng cổng IN/OUT tương ứng trên phần mềm.
:::

### Tab 2: Bảo trì (Thiết lập cảnh báo và Thời gian)
Chuyển sang Tab "Bảo trì", tại đây bạn sẽ thiết lập các quy tắc hoạt động và giới hạn thời gian an ninh cho cửa:

* **Unlocked for maintenance:** Chế độ mở khóa bảo trì.
* **Enable open too long:** Kích hoạt tính năng cảnh báo mở cửa quá lâu.
* **Enable forced open:** Kích hoạt tính năng cảnh báo cạy cửa.
* **Open too long threshold seconds:** Nhập số giây (Ví dụ: 15 giây). Nếu cửa mở vượt quá khoảng thời gian này mà chưa đóng lại (nhận diện qua Door Sensor), hệ thống sẽ đổ chuông báo động.
* **Unlock duration seconds:** Thời gian trễ của rơ-le (Ví dụ: 3 giây). Đây là khoảng thời gian khóa điện từ nhả ra để người dùng kéo cửa sau khi quẹt thẻ hợp lệ.

![Cấu hình Bảo trì Cửa](/img/door-details-2.png)

---

## 3. Chỉnh sửa và Xóa
* Nhấn vào nút **Edit** 📝 (Biểu tượng màu xanh) tại cột thao tác để cấu hình lại các thông số hoặc gỡ/đổi đầu đọc cho cửa.
* Nhấn vào nút **Delete** 🗑️ (Biểu tượng màu đỏ) để xóa cửa. 

:::warning[Cảnh báo khi xóa]
Khi bạn xóa một Cửa, các quy tắc truy cập (Access Rule) đang cấp quyền cho nhân sự đi qua cửa này có thể bị ảnh hưởng. Hãy kiểm tra lại phân quyền sau khi xóa.
:::