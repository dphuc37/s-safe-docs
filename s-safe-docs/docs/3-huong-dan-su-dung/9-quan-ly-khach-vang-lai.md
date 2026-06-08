---
id: quan-ly-khach-vang-lai
title: Quản lý Khách vãng lai
sidebar_label: Khách vãng lai
sidebar_class_name: icon-khach
sidebar_position: 9
---

# Quản lý Khách vãng lai (Visitor)

Module **Khách vãng lai** cung cấp quy trình tiếp đón và cấp quyền truy cập tạm thời cho khách đến làm việc, nhà thầu ngắn hạn hoặc đối tác. Hệ thống hỗ trợ chụp ảnh giấy tờ tùy thân (CCCD) và in mã QR truy cập nhanh để khách tự quét tại các cửa hoặc sảnh tòa nhà mà không cần cấp thẻ từ vật lý đắt đỏ.

## 1. Giao diện danh sách chính

Màn hình hiển thị danh sách toàn bộ khách vãng lai đang có lịch hẹn hoặc đang lưu trú trong tòa nhà dưới dạng bảng (Listview) trực quan:

* **STT / Ảnh CCCD:** Số thứ tự và ảnh chụp trực tiếp giấy tờ tùy thân của khách để đối chiếu bảo vệ.
* **Tên / CCCD:** Họ tên đầy đủ và số căn cước công dân của khách.
* **Thẻ đã gán / Nhóm đã gán:** Mã thẻ từ vật lý được cấp tạm (nếu có) và Nhóm phân quyền khu vực khách được phép di chuyển (Ví dụ: *Phòng IT*).
* **Cardholder Name:** Tên nhân viên hoặc người nội bộ bảo lãnh cho khách vào tòa nhà.
* **Thao tác:** Gồm các nút Chỉnh sửa 📝 và Xóa 🗑️.

![Giao diện danh sách Khách vãng lai](/img/visitor-listview.png)

---

## 2. Thêm mới và Tiếp đón Khách vãng lai

Khi có khách đến, lễ tân hoặc bảo vệ nhấn nút **+ Add New** ở góc phải để mở hộp thoại cấu hình **Visitor**:

1. **Name (*) / CCCD (*):** Nhập họ tên và số giấy tờ tùy thân của khách (Các trường bắt buộc).
2. **Visit Date:** Chọn ngày khách đến làm việc. Hệ thống sẽ tự động giới hạn quyền truy cập chỉ trong ngày này.
3. **Cardholder:** Chọn tên nhân viên nội bộ chịu trách nhiệm tiếp đón hoặc bảo lãnh cho khách từ danh sách thả xuống.
4. **Assigned Cards / Assigned Groups:** Khai báo mã thẻ hoặc chọn Nhóm quyền ra vào cấp cho khách.
5. **Upload IC Photo (Góc phải):** Nhấn nút để kích hoạt webcam chụp lại mặt trước/mặt sau của thẻ CCCD khách để lưu trữ hồ sơ an ninh.

![Hộp thoại đăng ký thông tin Khách vãng lai](/img/visitor-details.png)

---

## 3. Quy trình In mã QR Truy cập Tạm thời

Để cung cấp mã ra vào cho khách, thay vì quẹt thẻ vật lý, hệ thống hỗ trợ in phiếu thông tin chứa mã QR Code:

* Ngay tại hộp thoại thêm mới, sau khi điền đủ thông tin, bạn nhấn vào nút **Print QRCode** 🖨️ ở góc dưới cùng bên phải.
* Hệ thống sẽ ngay lập tức ra lệnh cho máy in nhiệt tại quầy lễ tân xuất ra một phiếu nhỏ chứa thông tin khách kèm một **Mã QR truy cập tạm thời**. Khách có thể dùng mã này quét lên các đầu đọc mã QR đặt tại các Cửa hoặc Thang máy để tự di chuyển.

### 🛠️ Cấu hình kết nối Máy in (Dành cho Kỹ thuật)

Để tính năng **Print QRCode** hoạt động, máy trạm cần được liên kết với máy in nhiệt thông qua các bước cấu hình hệ thống sau:

1. Nhìn sang Menu lề trái của phần mềm, truy cập vào mục **Cấu hình hệ thống** ⚙️.
2. Tại màn hình chính, chọn Tab **External Devices** (Thiết bị ngoại vi).
3. Tại trường **Print Name (copy and paste)**, chọn đúng tên Driver của máy in nhiệt đang kết nối với máy tính (Ví dụ: *Xprinter, Microsoft Print to PDF*...).
4. Nhấn **Lưu** để hệ thống khóa cổng kết nối với máy in.

![Giao diện Cấu hình kết nối máy in hệ thống](/img/visitor-QR.png)