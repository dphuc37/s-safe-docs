---
id: tu-dong-hoa
title: Tự động hóa
sidebar_label: Tự động hóa
sidebar_class_name: icon-tu-dong-hoa
sidebar_position: 17
---

# Quản lý Tự động hóa (Automation)

Module **Tự động hóa** cho phép thiết lập các quy tắc logic theo cấu trúc **NẾU - THÌ (IF-THEN)**. Chức năng này nhận diện các sự kiện đầu vào để tự động thực thi các hành động phần cứng hoặc kích hoạt báo động tương ứng.

## 1. Danh sách Quy tắc

Cột lề trái hiển thị các quy tắc tự động hóa đang có trong hệ thống:
* **Tìm kiếm:** Nhập từ khóa để lọc quy tắc theo tên.
* **Thêm quy tắc / Xóa quy tắc:** Tạo mới hoặc loại bỏ một quy tắc.
* Chấm màu bên cạnh tên quy tắc biểu thị trạng thái (Xanh: Đang hoạt động, Xám: Tạm dừng).

---

## 2. Cấu hình quy tắc: Điều kiện kích hoạt (NẾU)

Khu vực này định nghĩa sự kiện đầu vào để làm điều kiện mồi nổ cho quy tắc:
* **Sự kiện kích hoạt (*):** Chọn loại sự kiện từ danh sách thả xuống (Ví dụ: *GeofenceIntrusion, Cửa mở quá lâu, Mất kết nối mạng*).
* **Nguồn thiết bị (*):** Chọn loại thiết bị phát sinh sự kiện (Ví dụ: *Controller, Reader*).
* **Mã thiết bị / Vùng:** Chọn đích danh một thiết bị hoặc một khu vực cụ thể để áp dụng điều kiện này (Ví dụ: *Kho hàng [Main Area Test]*). Nếu để trống, quy tắc sẽ áp dụng cho tất cả thiết bị trên hệ thống.

---

## 3. Cấu hình quy tắc: Hành động hệ thống (THÌ)

Khu vực này định nghĩa các tác vụ hệ thống sẽ tự động thực hiện khi điều kiện mồi nổ ở trên xảy ra:
* **Kích nổ Hồ sơ Báo động (Alarm Profile):** Liên kết trực tiếp với module **Báo động (Alarm)**. Chọn một kịch bản báo động đã tạo (Ví dụ: *Cửa mở quá lâu*) để hệ thống hiển thị cảnh báo lên màn hình trực ban và yêu cầu thực hiện SOP.
* **Target Hardware Action:** Chọn lệnh phần cứng cần thực thi (Ví dụ: *Kích hoạt Output (Active), Mở tất cả các cửa*).
* **Chọn Bộ điều khiển đích:** Chỉ định cụ thể bộ điều khiển nào sẽ nhận lệnh.
* **Chọn Thiết bị đích:** Chỉ định cụ thể cổng Output/Input nào trên bộ điều khiển đó sẽ thực thi lệnh (Ví dụ: *Output 1 (DoorStrike) - Controller cửa chính*).

## 4. Kích hoạt và Lưu trữ

* **Trạng thái chạy:** Nằm ở góc trên cùng bên phải. Bật công tắc này (Màu xanh) để áp dụng quy tắc vào thực tế, hoặc tắt đi để vô hiệu hóa tạm thời mà không cần xóa.
* Nhấn nút **Lưu quy tắc** (Màu xanh lá) ở góc dưới cùng để hệ thống ghi nhận và nạp lệnh xuống thiết bị.

![Giao diện Cấu hình Tự động hóa](/img/automation.png)