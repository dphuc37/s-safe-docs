---
id: nguoi-dung-the
title: Quản lý Người dùng thẻ
sidebar_label: Người dùng thẻ
sidebar_class_name: icon-the-nhan-su
sidebar_position: 7
---

# Quản lý Người dùng thẻ (Cardholders)

Module **Người dùng thẻ** là nơi quản lý toàn bộ cơ sở dữ liệu nhân sự, khách vãng lai (Visitor), thông tin định danh (Thẻ từ, Mã PIN, Vân tay, Khuôn mặt) và gán các quy tắc phân quyền ra vào cho từng cá nhân trong hệ thống S-Safe.

## 1. Giao diện danh sách chính

Màn hình chính cung cấp một bảng quản lý tổng thể (Listview) cực kỳ chi tiết về nhân sự:
* **Hồ sơ:** Hiển thị Ảnh đại diện (Bao gồm nhân diện khuôn mặt FR), Tên nhân sự, Mã nhân viên và Số hệ thống (Số HT).
* **Trạng thái:** Theo dõi trạng thái hoạt động của nhân sự (`Đang hoạt động` / `Ngừng hoạt động`).
* **Tổ chức:** Nắm bắt nhanh Phòng ban (Ví dụ: *IT*), Chức vụ (*Nhân viên*), Chi nhánh (*Hà Nội*).
* **Cấp độ truy cập:** Hiển thị loại đối tượng (Employee, Visitor...) và Chế độ truy cập (*CardOnly, Face...*).
* **Thẻ đã gán & Quyền hạn:** Hiển thị Số định danh thẻ, Nhóm quyền và Lịch trình (Time Schedule) đang được áp dụng.

### Thanh công cụ và Thao tác
* **Công cụ Import / Export:** 
  * **Export 📤 (Màu cam):** Xuất toàn bộ danh sách nhân sự hiện tại ra file Excel.
  * **Import 📥 (Màu xanh lá):** Tải file mẫu Excel, điền danh sách rồi tải ngược lên để khai báo hàng loạt.
* **Thanh công cụ dưới cùng:** Cung cấp các nút Thêm mới, Sửa, Xóa, công tắc bật/tắt chế độ hiển thị "Chi tiết" và tính năng phân trang dữ liệu.

:::warning[Lưu ý quan trọng khi Import dữ liệu]
Tính năng Import hàng loạt bằng Excel chỉ áp dụng cho dữ liệu văn bản thô (Tên, Mã NV, Phòng ban...). Hệ thống **KHÔNG hỗ trợ import hình ảnh đại diện hàng loạt** qua file Excel. Ảnh đại diện của từng nhân sự bắt buộc phải được cập nhật thủ công.
:::

<img src="/img/cardholder/cardholder-listview.png" alt="Giao diện chính Quản lý Người dùng thẻ" width="100%" />

---

## 2. Thêm mới và cấu hình chi tiết (Hộp thoại 4 Tab)

Khi nhấn nút **+ Thêm mới** ➕, hộp thoại **Cardholder Details** sẽ hiển thị. Bạn cần cấu hình đầy đủ thông tin qua 4 tab chức năng và sử dụng thanh điều hướng phía dưới (`Trước`, `Tiếp`, `Hủy`, `Lưu & Trước`, `Lưu`, `Lưu & Tiếp`) để thao tác:

### Tab 1: Thông tin chung
Khu vực này dùng để định danh cá nhân và quản lý thông tin thẻ:
* **Cập nhật Ảnh đại diện:** Nhấn **Mở Camera** để chụp trực tiếp khuôn mặt của nhân sự qua Webcam, hoặc tải ảnh lên.
* **Thông tin cơ bản:** Nhập Tên (*) (bắt buộc), Số định danh và chọn Chế độ truy cập.
* **PIN:** Mã số cá nhân dùng cho chế độ quẹt thẻ kèm PIN. Có thể tự nhập hoặc nhấn **Tạo mã PIN** để sinh ngẫu nhiên.
* **Trạng thái & Thời hạn hiệu lực:** Xem ngày tạo, trạng thái hoạt động (có nút **Vô hiệu hóa** để khóa thẻ tạm thời). Với khách (Visitor), thiết lập khoảng thời gian `Từ ngày` đến `Đến ngày` để thẻ tự hết hạn.
* **Thẻ đã gán:** Hiển thị danh sách thẻ vật lý đang cấp cho nhân sự dưới dạng Badge. Bạn có thể nhấn dấu `X` để thu hồi thẻ, hoặc nhập mã mới và bấm **Thêm thẻ** để cấp thêm.

![Tab Thông tin chung Người dùng thẻ](/img/cardholder/cardholder-details-1.png)

### Tab 2: Nhóm người dùng thẻ
Tab này quyết định việc gán các nhóm phân quyền ra vào cho nhân sự:
* **Khung Chưa gán:** Hiển thị các Nhóm quyền hiện có trên hệ thống (Ví dụ: *Nhóm tầng 1, Nhóm tầng 2*).
* **Khung Đã gán:** Các Nhóm quyền nhân sự đang được thừa hưởng.
* Giao diện điều hướng trực quan: Chọn nhóm quyền ở cột Chưa gán rồi bấm nút **`>`** để chuyển sang cột Đã gán. 

![Tab Nhóm người dùng thẻ](/img/cardholder/cardholder-details-2.png)

### Tab 3: Truy cập cửa
Đây là Tab xem tổng hợp (Read-only) dựa trên các Nhóm quyền đã gán ở Tab 2.
* Hiển thị bảng chi tiết các cửa mà nhân sự được phép đi qua, bao gồm: **Cửa, Chiều (Vào/Ra), ACR, Bộ điều khiển truy cập**.

![Tab Truy cập cửa](/img/cardholder/cardholder-details-3.png)

### Tab 4: Tổ chức
Khu vực phân loại cấu trúc nhân sự trong doanh nghiệp:
* **Loại:** Phân loại đối tượng (Ví dụ: `Employee`, `Visitor`).
* **Mã Nhân Viên:** Nhập mã số nhân sự để đồng bộ với phần mềm chấm công HRM.
* **Chức Vụ / Chi Nhánh / Phòng Ban:** Chọn từ danh sách có sẵn để phục vụ việc lọc và xuất báo cáo.
* **Ghi chú:** Khung nhập các thông tin chú thích bổ sung cho hồ sơ.

![Tab Tổ chức Người dùng thẻ](/img/cardholder/cardholder-details-4.png)

---

## 3. Chỉnh sửa và Xóa
* **Sửa (Edit) 📝:** Nhấn chọn một nhân sự và bấm nút Sửa màu xanh lá để cập nhật ảnh mới, gán thêm thẻ hoặc đổi nhóm quyền khi chuyển phòng ban.
* **Xóa (Delete) 🗑️:** Nhấn chọn và bấm nút Xóa màu đỏ để loại bỏ hoàn toàn tài khoản người dùng thẻ khỏi hệ thống.