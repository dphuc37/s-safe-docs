---
id: nhom-dung-the
title: Quản lý Nhóm người dùng thẻ
sidebar_label: Nhóm người dùng thẻ
sidebar_class_name: icon-nhom-the
sidebar_position: 8
---

# Quản lý Nhóm người dùng thẻ (Cardholder Groups)

Module **Nhóm người dùng thẻ** giúp người quản trị gom cụm các nhân sự có cùng tính chất công việc hoặc cùng phòng ban lại với nhau (Ví dụ: *Nhóm Kỹ thuật, Nhóm Kế toán, Khách vãng lai*). Việc quản lý theo nhóm giúp tối ưu hóa thời gian phân quyền ra vào cửa, thay vì phải cấu hình thủ công cho từng cá nhân đơn lẻ.

## 1. Giao diện danh sách chính

Màn hình hiển thị danh sách toàn bộ các nhóm người dùng thẻ hiện có trong hệ thống dưới dạng bảng dữ liệu trực quan bao gồm các cột thông tin chính:

1. **STT:** Số thứ tự sắp xếp của nhóm.
2. **Tên:** Tên định danh của nhóm người dùng thẻ (Ví dụ: *Nhóm tầng 1, Thẻ Đa Năng, Cửa Amico*).
3. **Số lượng người dùng thẻ:** Tổng số lượng nhân sự đã được gán vào nhóm này. Bác có thể nhìn vào đây để kiểm tra nhanh biến động quân số của từng nhóm.
4. **Lịch đã gán:** Danh sách các lịch trình thời gian đã được gán cho nhóm (Ví dụ: *Always Allowed, Visitor*).

Phía dưới cùng là thanh công cụ chứa các nút thao tác chính: **Thêm mới** ➕ (Màu xanh dương), **Sửa** 📝 (Màu xanh lá) và **Xóa** 🗑️ (Màu đỏ).

<img src="/img/cardholder-group/cardholder-group-listview.png" alt="Giao diện chính Quản lý Nhóm dùng thẻ" width="100%" />

---

## 2. Thêm mới và cấu hình thành viên Nhóm

Khi chọn một nhóm và nhấn vào nút **Sửa** 📝 (hoặc **+ Thêm mới** ➕), hộp thoại **Chi tiết nhóm người dùng thẻ** sẽ xuất hiện. Giao diện được tối giản hóa tối đa để người cấu hình thao tác nhanh gọn:

* **Trường nhập liệu:** `Tên (*)` là ô duy nhất bạn cần nhập văn bản định danh cho nhóm (Bắt buộc).
* **Không gian phân bổ thành viên:** Chia làm 2 cột danh sách đối ứng phía dưới:
  * **Người dùng thẻ chưa gán (Phía trái):** Hiển thị toàn bộ danh sách nhân sự hiện có trong hệ thống S-Safe nhưng chưa thuộc về nhóm này (Kèm theo ô tìm kiếm nhanh).
  * **Người dùng thẻ đã gán (Phía phải):** Danh sách các nhân sự chính thức là thành viên của nhóm (Hiển thị trực quan kèm ảnh đại diện).
  * **Thao tác nhanh:** Dùng nút **`>>`** để kết nạp nhân sự vào nhóm, và **`<<`** để loại bỏ nhân sự khỏi nhóm.

* **Không gian Lịch truy cập:**
  * **Chưa gán (Phía trái):** Hiển thị danh sách các lịch trình khả dụng (VD: *Visitor*).
  * **Đã gán (Phía phải):** Các lịch trình đang áp dụng cho nhóm (VD: *Always Allowed, Security*).
  * **Thao tác nhanh:** Dùng nút **`>`** để gán lịch và **`<`** để gỡ lịch.

Bấm **Lưu** (Màu xanh lá) ở góc dưới cùng bên phải để hoàn tất cấu hình. Hệ thống sẽ tự động đồng bộ danh sách thành viên và lịch truy cập mới.

<img src="/img/cardholder-group/cardholder-group-details.png" alt="Hộp thoại Thêm mới và Chỉnh sửa Nhóm dùng thẻ" width="100%" />

---

## 3. Chỉnh sửa và Xóa nhóm

* **Sửa (Edit):** Cho phép bạn đổi tên nhóm hoặc cập nhật thêm/bớt thành viên và lịch trình truy cập.
* **Xóa (Delete):** Gỡ bỏ hoàn toàn nhóm khỏi hệ thống bằng nút **Xóa** màu đỏ.

:::info[Quy tắc an toàn khi xóa Nhóm]
Khi bạn thực hiện thao tác Xóa một Nhóm dùng thẻ, hệ thống S-Safe chỉ xóa đối tượng logic "Tên nhóm". Toàn bộ hồ sơ nhân sự bên trong nhóm đó **SẼ KHÔNG bị xóa mất**, họ sẽ được tự động đưa về trạng thái tự do (Chưa gán nhóm) để bạn dễ dàng phân bổ lại sang các nhóm khác.
:::