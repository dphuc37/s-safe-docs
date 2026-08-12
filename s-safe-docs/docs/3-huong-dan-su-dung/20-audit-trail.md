---
id: audit-trail
title: Audit trail
sidebar_label: Audit trail
sidebar_class_name: icon-audit-trail
sidebar_position: 20
---

Module **Audit Trail** (Nhật ký hệ thống) cho phép người quản trị theo dõi, tra cứu và truy vết toàn bộ lịch sử các thao tác tác động đến dữ liệu hoặc cấu hình hệ thống S-Safe (như thêm mới, chỉnh sửa, xóa bộ điều khiển, người dùng, lịch truy cập...).

![Giao diện chính](/img/audit-trail.png)

---

## 1. Thanh công cụ & Bộ lọc tìm kiếm

Hệ thống cung cấp các bộ lọc giúp bạn nhanh chóng giới hạn dữ liệu cần tra cứu:

* **Ô tìm kiếm (`Search...`):** Nhập từ khóa liên quan đến tên đăng nhập, địa chỉ IP hoặc nội dung mô tả thao tác để lọc nhanh.
* **Bộ lọc khoảng thời gian:**
  * **Từ ngày:** Chọn ngày bắt đầu truy vấn (VD: `01/08/2026`).
  * **Đến ngày:** Chọn ngày kết thúc truy vấn (VD: `10/08/2026`).
* **Nút Tìm kiếm (Màu xanh dương):** Nhấp để hệ thống tiến hành lọc và hiển thị danh sách kết quả tương ứng.
* **Nút Export (Màu xanh lá):** Nhấp để xuất toàn bộ danh sách nhật ký thao tác đang hiển thị ra file dữ liệu phục vụ mục đích lưu trữ hoặc báo cáo.

---

## 2. Bảng dữ liệu Nhật ký thao tác (Audit Log Table)

Bảng chi tiết bao gồm các cột thông tin sau:

* **Tên đăng nhập:** Tài khoản quản trị viên hoặc người dùng thực hiện thao tác (VD: `admin`).
* **Thời gian thao tác:** Mốc thời gian chính xác ghi nhận thao tác (Định dạng: `YYYY-MM-DD HH:mm:ss`, VD: `2026-08-10 14:28:45`).
* **Địa chỉ IP:** Địa chỉ IP của máy tính/thiết bị mà người dùng truy cập để thực hiện thao tác (VD: `192.168.2.86`).
* **Mô tả:** Chi tiết hành động tác động vào hệ thống, ví dụ:
  * **CardholderGroup:** Nhóm người dùng thẻ (VD: `CardholderGroup 'Group 1' was updated.`).
  * **AccessController:** Bộ điều khiển truy cập (VD: `AccessController 'Controller' was created/updated/deleted.`).
  * **Visitor:** Thông tin khách (VD: `Visitor 'Phuong' was updated.`).
  * **Door:** Cửa truy cập (VD: `Door 'a' was created/deleted.`).
  * **ApplicationUser:** Tài khoản người dùng ứng dụng (VD: `ApplicationUser '12345' was created/updated.`).

---

## 3. Điều hướng & Phân trang

Khu vực cuối màn hình hỗ trợ quản lý việc hiển thị dữ liệu:

* **Thống kê tổng số:** Hiển thị tổng số bản ghi khớp với bộ lọc (VD: *Hiển thị 1-11 trong tổng 11 mục*).
* **Số dòng mỗi trang:** Cho phép tùy chọn số lượng bản ghi hiển thị trên một trang (Mặc định: `20`).
* **Thanh chuyển trang:** Chọn trang cụ thể (`Trang 1`, `Trang 2`...) hoặc di chuyển qua lại giữa các trang danh sách.