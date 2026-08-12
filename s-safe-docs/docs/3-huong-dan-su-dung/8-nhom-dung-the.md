---
id: nhom-dung-the
title: Quản lý Nhóm dùng thẻ
sidebar_label: Nhóm dùng thẻ
sidebar_class_name: icon-nhom-the
sidebar_position: 8
---

# Quản lý Nhóm dùng thẻ (Cardholder Groups)

Module **Nhóm dùng thẻ** giúp người quản trị gom cụm các nhân sự có cùng tính chất công việc hoặc cùng phòng ban lại với nhau (Ví dụ: *Nhóm Kỹ thuật, Nhóm Kế toán, Khách vãng lai*). Việc quản lý theo nhóm giúp tối ưu hóa thời gian phân quyền ra vào cửa, thay vì phải cấu hình thủ công cho từng cá nhân đơn lẻ.

## 1. Giao diện danh sách chính

Màn hình hiển thị danh sách toàn bộ các nhóm dùng thẻ hiện có trong hệ thống dưới dạng bảng dữ liệu trực quan bao gồm 4 cột thông tin chính:

1. **Thao tác:** Chứa nút **Edit** 📝 (Chỉnh sửa) và **Delete** 🗑️ (Xóa nhóm).
2. **STT:** Số thứ tự sắp xếp của nhóm.
3. **Tên nhóm:** Tên định danh của nhóm người dùng thẻ (Ví dụ: *Ban Giám Đốc, Phòng Nhân Sự*).
4. **Số lượng người trong nhóm:** Tổng số lượng nhân sự đã được gán vào nhóm này. Bác có thể nhìn vào đây để kiểm tra nhanh biến động quân số của từng nhóm.
5. **Lịch đã gán:** Danh sách các lịch đã được gán cho nhóm.

![Giao diện chính Quản lý Nhóm dùng thẻ](/img/cardholder-group-listview.png)

---

## 2. Thêm mới và cấu hình thành viên Nhóm

Khi nhấn vào nút **+ Thêm mới** ➕ hoặc nút **Edit** 📝, một hộp thoại cấu hình sẽ xuất hiện. Giao diện được tối giản hóa tối đa để người cấu hình thao tác nhanh gọn:

* **Trường nhập liệu:** `Tên nhóm (*)` là ô duy nhất bạn cần nhập văn bản (Bắt buộc).
* **Không gian phân bổ thành viên:** Chia làm 2 cột danh sách đối ứng phía dưới:
  * **Cột Chưa gán (Phía trái):** Hiển thị toàn bộ danh sách nhân sự hiện có trong hệ thống S-Safe nhưng chưa thuộc về nhóm này.
  * **Cột Đã gán (Phía phải):** Danh sách các nhân sự chính thức là thành viên của nhóm.

* **Không gian phân bổ lịch truy cập:**
  * **Cột Chưa gán (Phía trái):** Hiển thị danh sách các khung giờ/lịch truy cập khả dụng chưa áp dụng cho nhóm.
  * **Cột Đã gán (Phía phải):** Các khung giờ/lịch truy cập đang được áp dụng cho nhóm.

### Thao tác điều hướng nhân sự bằng nút bấm nhanh:
* **Nút `>>`:** Chuyển nhanh toàn bộ hoặc các nhân sự được chọn từ cột *Chưa gán* sang cột *Đã gán* để kết nạp vào nhóm.
* **Nút `<<`:** Loại bỏ các nhân sự được chọn ra khỏi nhóm, chuyển ngược từ cột *Đã gán* về lại cột *Chưa gán*.

Bấm **Lưu** để hoàn tất cấu hình. Hệ thống sẽ tự động đồng bộ danh sách thành viên mới vào nhóm.

![Hộp thoại Thêm mới và Chỉnh sửa Nhóm dùng thẻ](/img/cardholder-group-details.png)

---

## 3. Chỉnh sửa và Xóa nhóm

* **Sửa (Edit):** Cho phép bạn đổi tên nhóm hoặc cập nhật thêm/bớt thành viên ra khỏi nhóm bằng các nút điều hướng `>>` và `<<`.
* **Xóa (Delete):** Gỡ bỏ hoàn toàn nhóm khỏi hệ thống.

:::info[Quy tắc an toàn khi xóa Nhóm]
Khi bạn thực hiện thao tác Xóa một Nhóm dùng thẻ, hệ thống S-Safe chỉ xóa đối tượng logic "Tên nhóm". Toàn bộ hồ sơ nhân sự bên trong nhóm đó **SẼ KHÔNG bị xóa mất**, họ sẽ được tự động đưa về trạng thái tự do (Chưa gán nhóm) để bạn dễ dàng phân bổ lại sang các nhóm khác.
:::