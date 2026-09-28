---
id: quan-ly-khach-vang-lai
title: Quản lý Khách vãng lai
sidebar_label: Khách vãng lai
sidebar_class_name: icon-khach
sidebar_position: 9
---

# Quản lý Khách vãng lai (Visitor)

Module **Khách vãng lai** cung cấp quy trình tiếp đón và cấp quyền truy cập tạm thời cho khách đến làm việc, nhà thầu ngắn hạn hoặc đối tác. Hệ thống hỗ trợ lưu trữ ảnh giấy tờ tùy thân (CCCD) và in mã QR truy cập nhanh để khách tự quét tại các cửa hoặc sảnh tòa nhà mà không cần cấp thẻ từ vật lý đắt đỏ.

## 1. Giao diện danh sách chính

Màn hình hiển thị danh sách toàn bộ khách vãng lai đang có lịch hẹn hoặc đang lưu trú trong tòa nhà dưới dạng bảng (Listview) trực quan:

* **STT / Ảnh CCCD:** Số thứ tự và ảnh chụp giấy tờ tùy thân của khách để đối chiếu an ninh.
* **Tên / CCCD:** Họ tên đầy đủ và số căn cước công dân của khách.
* **Thẻ đã gán / Nhóm đã gán:** Mã thẻ từ vật lý được cấp tạm (nếu có) và Nhóm phân quyền khu vực khách được phép di chuyển (Ví dụ: *Nhóm tầng 2*).
* **Ghi chú:** Thông tin mục đích chuyến thăm (Ví dụ: *Khách đến họp phòng dự án*).
* **Cardholder Name:** Tên nhân viên nội bộ (Người dùng thẻ) đứng ra bảo lãnh cho khách vào tòa nhà.
* **Thanh công cụ phía dưới:** Gồm các nút thao tác **Thêm mới** (Màu xanh dương), **Sửa** (Màu xanh lá) và **Xóa** (Màu đỏ).

<img src="/img/visitor/visitor-listview.png" alt="Giao diện danh sách Khách vãng lai" width="100%" />

---

## 2. Thêm mới và Tiếp đón Khách vãng lai

Khi có khách đến, lễ tân hoặc bảo vệ nhấn nút **+ Thêm mới** ở góc dưới cùng bên trái để mở hộp thoại cấu hình:

1. **Tên (*) / CCCD (*):** Nhập họ tên và số giấy tờ tùy thân của khách (Trường bắt buộc).
2. **Ngày:** Chọn ngày khách đến làm việc. Hệ thống sẽ tự động giới hạn thời gian hiệu lực của mã QR và quyền truy cập chỉ trong khung giờ của ngày này.
3. **Người dùng thẻ:** Chọn tên nhân viên nội bộ chịu trách nhiệm tiếp đón hoặc bảo lãnh từ danh sách thả xuống.
4. **Thẻ đã gán / Nhóm đã gán:** Khai báo mã thẻ vật lý (nếu có cấp) và chọn Nhóm quyền ra vào cho khách.
5. **Ghi chú:** Nhập mục đích hoặc chú thích thêm về khách.
6. **Tải ảnh CCCD (Góc phải):** Nhấn nút để tải lên hoặc lưu lại hình ảnh khuôn mặt / thẻ CCCD của khách phục vụ lưu trữ hồ sơ an ninh.

<img src="/img/visitor/visitor-details.png" alt="Hộp thoại đăng ký thông tin Khách vãng lai" width="100%" />

---

## 3. Quy trình In mã QR Truy cập Tạm thời

Để cung cấp thông tin ra vào cho khách một cách chuyên nghiệp và tiết kiệm, hệ thống hỗ trợ tính năng xuất mã QR Code:

* Ngay tại hộp thoại cấu hình Khách vãng lai, sau khi điền đủ thông tin, bạn nhấn vào nút **In QRCode** ở góc dưới cùng bên phải.
* Hệ thống sẽ ngay lập tức kết nối với máy in được thiết lập sẵn để in ra một tờ giấy/phiếu chứa mã QR truy cập tạm thời. 
* Khách vãng lai có thể sử dụng tờ giấy chứa mã QR này để quét trực tiếp lên các **Camera nhận diện ra vào** tại các cửa. Hệ thống sẽ mở cửa nếu khách quét mã đúng vào khung giờ (Ngày) đã được cấu hình hiệu lực trong phần mềm.
