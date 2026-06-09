---
id: quy-tac-truy-cap
title: Quy tắc truy cập
sidebar_label: Quy tắc truy cập
sidebar_class_name: icon-quy-tac
sidebar_position: 10
---

# Quy tắc truy cập (Access Rules)

Module **Quy tắc truy cập** là hạt nhân quản lý luận lý cốt lõi của hệ thống S-Safe. Tính năng này cho phép bạn thiết lập mối quan hệ phân quyền: **Nhóm dùng thẻ nào** sẽ có quyền quẹt thẻ để mở **những Cửa nào** trong tòa nhà.

## 1. Giao diện danh sách quy tắc

Màn hình chính hiển thị danh sách toàn bộ các quy tắc phân quyền đang được áp dụng trong hệ thống dưới dạng bảng dữ liệu trực quan:

* **STT:** Số thứ tự của quy tắc.
* **Tên:** Tên định danh của quy tắc (Ví dụ: *Truy cập cửa chính, Quyền ra vào khu kỹ thuật*).
* **Nhóm dùng thẻ:** Danh sách các nhóm nhân sự được áp dụng quy tắc này (Các nhóm cách nhau bằng dấu gạch đứng `|`).
* **Cửa:** Danh sách các cửa mà các nhóm trên có quyền ra vào.
* **Thao tác:** Chứa các nút Chỉnh sửa 📝 (Màu xanh) và Xóa 🗑️ (Màu đỏ).

![Danh sách Quy tắc truy cập](/img/access-rule-listview.png)

---

## 2. Thêm mới và cấu hình Ma trận phân quyền

Khi nhấn vào nút **+ Thêm mới** ➕ hoặc nút **Edit** 📝, một hộp thoại cấu hình trực quan sẽ xuất hiện với hai bộ danh sách đối ứng song song:

### Các thông tin cần thiết lập:
1. **Tên (*):** Đặt tên cho quy tắc phân quyền (Trường bắt buộc - Nên đặt rõ ràng theo khu vực hoặc chức năng).
2. **Khung cấu hình Nhóm người dùng thẻ (Phía trên):**
   * **Nhóm người dùng thẻ khả dụng:** Các nhóm nhân sự đang có trên hệ thống nhưng chưa được cấp quyền này.
   * **Nhóm người dùng thẻ đã gán:** Các nhóm nhân sự chính thức được áp dụng quy tắc. Bạn chọn nhóm và dùng nút `>>` hoặc `<<` để điều hướng qua lại.
3. **Khung cấu hình Cửa (Phía dưới):**
   * **Cửa khả dụng:** Danh sách các cửa đang trống trên hệ thống.
   * **Cửa đã gán:** Những cửa sẽ tự động mở khóa khi có nhân sự thuộc nhóm phía trên quẹt thẻ. Thao tác điều hướng cũng sử dụng hai nút `>>` và `<<`.

Nhấn **Lưu** 💾 (Nút màu xanh lá) để hệ thống ghi nhận và lập tức đồng bộ lệnh phân quyền xuống các Bộ điều khiển phần cứng.

![Hộp thoại thiết lập chi tiết Quy tắc truy cập](/img/access-rule-details.png)

---

## 3. Chỉnh sửa và Xóa quy tắc

* **Chỉnh sửa (Edit):** Tiện lợi khi bạn muốn bổ sung thêm một Cửa mới vào quy tắc sẵn có, hoặc muốn thêm một Phòng ban mới vào diện được phép ra vào khu vực mà không làm xáo trộn các cấu hình cũ.
* **Xóa (Delete):** Thu hồi ngay lập tức toàn bộ quyền ra vào của các nhóm nằm trong quy tắc đó.

:::info[Mẹo quản trị hệ thống]
Thay vì tạo quá nhiều quy tắc truy cập nhỏ lẻ cho từng người, bạn nên gom nhân sự vào các **Nhóm dùng thẻ** trước, sau đó dùng module **Quy tắc truy cập** này để gộp các nhóm có chung sơ đồ di chuyển lại. Cách làm này giúp việc quản lý hệ thống hàng ngàn nhân sự trở nên cực kỳ gọn gàng.
:::