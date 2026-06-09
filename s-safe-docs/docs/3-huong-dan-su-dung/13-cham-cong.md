---
id: cham-cong
title: Quản lý Chấm công
sidebar_label: Chấm công
sidebar_class_name: icon-cham-cong
sidebar_position: 13
---

# Quản lý Chấm công (Time Attendance)

Module **Chấm công** là công cụ đắc lực dành cho bộ phận Nhân sự và Kế toán để theo dõi ngày công trực quan của toàn bộ cán bộ công nhân viên. Hệ thống tự động thu thập dữ liệu quẹt thẻ từ các đầu đọc, đối chiếu với lịch trình được gán để tính toán chính xác số ngày làm việc thực tế.

![Giao diện chính](/img/time-attendance.png)

## 1. Bộ lọc tìm kiếm dữ liệu Chấm công

Để kết xuất dữ liệu chấm công chính xác theo nhu cầu, hệ thống cung cấp bộ công cụ lọc thông minh ở phía trên thanh tác vụ:

* **Ô tìm kiếm (Search):** Cho phép tìm kiếm nhanh một nhân sự cụ thể bằng cách nhập Họ tên, Mã nhân viên hoặc số PIN.
* **Từ ngày / Đến ngày:** Lựa chọn khoảng thời gian cần truy xuất dữ liệu (Ví dụ: Lọc từ ngày 01 đến ngày 30 hàng tháng để tính lương).
* **Nút Tìm kiếm 🔍 (Màu xanh dương):** Kích hoạt hệ thống quét và hiển thị dữ liệu theo đúng các điều kiện đã thiết lập.

---

## 2. Giao diện chức năng chia Tab dữ liệu

Màn hình quản lý dữ liệu chấm công được phân tách làm 2 tab chức năng chuyên biệt:

### Tab 1: Tổng hợp
Hiển thị bức tranh tổng quan về tình hình đi làm của nhân sự dưới dạng bảng dữ liệu bao gồm các thông tin:
* **Tên:** Họ tên của nhân viên.
* **Ảnh đại diện:** Ảnh hồ sơ của nhân sự để đối chiếu nhanh.
* **PIN:** Mã số PIN định danh của người dùng.
* **Lịch đã gán:** Khung giờ làm việc logic đang được áp dụng cho nhân sự này (Ví dụ: *All Days|00:00-23:59*).
* **Số ngày làm việc:** Tổng số lượng ngày công tích lũy hợp lệ của nhân viên đó trong khoảng thời gian được lọc.
* **Thao tác:** Chứa nút chức năng để xem sâu hoặc điều chỉnh.

### Tab 2: Chi tiết
Nơi người quản trị có thể click vào để xem chi tiết lịch sử quẹt thẻ theo từng ngày của một nhân sự (Giờ vào, Giờ ra, Đi muộn, Về sớm, Tổng giờ công thực tế của từng ca làm việc).

---

## 3. Xuất báo cáo Chấm công (Export Excel)

Để phục vụ công tác lưu trữ, báo cáo hoặc nạp dữ liệu vào các phần mềm tính lương chuyên dụng:
* Sau khi dùng bộ lọc để có được bảng công mong muốn, bạn nhấn vào nút **Export** 📥 (Màu cam) ở góc phải màn hình.
* Hệ thống sẽ ngay lập tức kết xuất và tải xuống máy tính một file bảng tính định dạng **Excel (`.xlsx`)**. Toàn bộ dữ liệu về tên, mã nhân viên, lịch gán và số ngày công thực tế sẽ được giữ nguyên định dạng cấu trúc bảng, sẵn sàng để sử dụng ngay.