---
id: quy-tac-truy-cap
title: Quy tắc truy cập
sidebar_label: Quy tắc truy cập
sidebar_class_name: icon-quy-tac
sidebar_position: 10
---

# Quy tắc truy cập (Access Rules)

Module **Quy tắc truy cập** là hạt nhân quản lý luận lý cốt lõi của hệ thống S-Safe. Tính năng này cho phép bạn thiết lập mối quan hệ phân quyền: **Nhóm dùng thẻ nào** sẽ có quyền quẹt thẻ để mở **những Cửa nào** hoặc **những Tầng thang máy nào** trong tòa nhà.

## 1. Giao diện danh sách quy tắc

Màn hình chính hiển thị danh sách toàn bộ các quy tắc phân quyền đang được áp dụng trong hệ thống dưới dạng bảng dữ liệu trực quan:

* **STT:** Số thứ tự của quy tắc.
* **Tên:** Tên định danh của quy tắc (Ví dụ: *Truy cập cửa chính, Quyền ra vào khu kỹ thuật*).
* **Nhóm dùng thẻ:** Danh sách các nhóm nhân sự được áp dụng quy tắc này (Các nhóm cách nhau bằng dấu gạch đứng `|`).
* **Cửa / Thang máy:** Danh sách các cửa hoặc tầng thang máy mà các nhóm trên có quyền truy cập.
* **Thao tác:** Chứa các nút Chỉnh sửa 📝 (Màu xanh) và Xóa 🗑️ (Màu đỏ).

<img src="/img/access-rule/access-rule-listview.png" alt="Danh sách Quy tắc truy cập" width="100%" />

---

## 2. Thêm mới và cấu hình Ma trận phân quyền

Khi nhấn vào nút **+ Thêm mới** ➕ hoặc nút **Edit** 📝, một hộp thoại cấu hình trực quan sẽ xuất hiện. Hệ thống S-Safe phân tách rõ ràng luồng cấu hình thành 2 loại quy tắc chuyên biệt:

### Bước 1: Thiết lập thông tin cơ bản
1. **Tên (*):** Đặt tên định danh cho quy tắc (Bắt buộc - Nên đặt tên theo khu vực hoặc chức năng để dễ quản lý, VD: *Amico Rule 3.5*).
2. **Loại quy tắc:** Lựa chọn đối tượng áp dụng là **Cửa** hoặc **Thang máy**.

### Bước 2: Cấu hình theo Loại quy tắc

**Trường hợp 1: Chọn loại quy tắc là "Cửa"**
Giao diện sẽ hiển thị hai bộ danh sách phân quyền cho Nhóm nhân sự và Cửa:
* **Gán Nhóm người dùng thẻ (Phía trên):** Chọn các nhóm nhân sự từ cột *Khả dụng* và dùng nút **`>>`** để chuyển sang cột *Đã gán* (Ví dụ: *Thẻ Đa Năng, Cửa Amico*).
* **Gán Cửa (Phía dưới):** Chọn các cửa từ cột *Khả dụng* và dùng nút **`>>`** để chuyển sang cột *Đã gán* (Ví dụ: *Cửa văn phòng, Cửa kho, Cửa chính*). Những cửa nằm ở cột Đã gán sẽ tự động mở khóa khi có người thuộc nhóm trên quẹt thẻ.

<img src="/img/access-rule/access-rule-door.png" alt="Cấu hình Quy tắc truy cập Cửa" width="100%" />

**Trường hợp 2: Chọn loại quy tắc là "Thang máy"**
Giao diện sẽ chuyển đổi sang chế độ kiểm soát phân tầng thang máy:
* **Gán Nhóm người dùng thẻ (Phía trên):** Thao tác tương tự như gán Cửa, dùng nút **`>>`** và **`<<`** để kết nạp hoặc loại bỏ nhóm nhân sự.
* **Lọc và Gán Tầng (Phía dưới):**
  * Sử dụng menu thả xuống **Chọn thang máy để lọc tầng** để hệ thống tải danh sách các tầng tương ứng của thang máy đó (VD: *Thang máy mở rộng*).
  * Tại cột **Tầng khả dụng**, chọn các tầng cho phép ra vào (VD: *Tầng 1, 2, 3, 4*) và dùng nút **`>>`** để đưa sang cột **Tầng đã gán**.

<img src="/img/access-rule/access-rule-elevator.png" alt="Cấu hình Quy tắc truy cập Thang máy" width="100%" />

Nhấn nút **Lưu** (Màu xanh lá) ở góc dưới cùng bên phải để hệ thống ghi nhận và lập tức đồng bộ lệnh phân quyền xuống các Bộ điều khiển.

---

## 3. Chỉnh sửa và Xóa quy tắc

* **Chỉnh sửa (Edit):** Tiện lợi khi bạn muốn bổ sung thêm một Cửa/Tầng mới vào quy tắc sẵn có, hoặc muốn thêm một Phòng ban mới vào diện được phép ra vào khu vực mà không làm xáo trộn các cấu hình cũ.
* **Xóa (Delete):** Thu hồi ngay lập tức toàn bộ quyền ra vào của các nhóm nằm trong quy tắc đó.

:::info[Mẹo quản trị hệ thống]
Thay vì tạo quá nhiều quy tắc truy cập nhỏ lẻ cho từng người, bạn nên gom nhân sự vào các **Nhóm dùng thẻ** trước, sau đó dùng module **Quy tắc truy cập** này để gộp các nhóm có chung sơ đồ di chuyển lại. Cách làm này giúp việc quản lý hệ thống hàng ngàn nhân sự trở nên cực kỳ gọn gàng.
:::