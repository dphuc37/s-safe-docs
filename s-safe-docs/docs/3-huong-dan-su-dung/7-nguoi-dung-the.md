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
* **Tổ chức:** Nắm bắt nhanh Phòng ban (Ví dụ: *IT*), Chức vụ (*Nhân viên*), Chi nhánh (*Hà Nội*).
* **Thông tin an ninh:** Chế độ truy cập (*CardOnly, Face...*), Mã PIN mã hóa, Số định danh của thẻ, Nhóm quyền và Lịch trình (Time Schedule) đang được áp dụng.

### Tính năng Import / Export dữ liệu nhanh
Để tiết kiệm thời gian khởi tạo hệ thống ban đầu, S-Safe trang bị 2 công cụ:
* **Export 📤 (Màu cam):** Xuất toàn bộ danh sách nhân sự hiện tại ra file Excel để lưu trữ hoặc báo cáo.
* **Import 📥 (Màu xanh lá):** Tải file mẫu Excel của hệ thống, điền danh sách nhân viên rồi tải ngược lên để khai báo hàng loạt trong vài giây.

:::warning[Lưu ý quan trọng khi Import dữ liệu]
Tính năng Import hàng loạt bằng Excel chỉ áp dụng cho dữ liệu văn bản thô (Tên, Mã NV, Phòng ban...). Hệ thống **KHÔNG hỗ trợ import hình ảnh đại diện hàng loạt** qua file Excel. Ảnh đại diện của từng nhân sự bắt buộc phải được cập nhật thủ công theo hướng dẫn ở Tab 1 dưới đây.
:::

![Giao diện chính Quản lý Người dùng thẻ](/img/cardholder-listview.png)

---

## 2. Thêm mới và cấu hình chi tiết (Hộp thoại 3 Tab)

Khi nhấn nút **+ Thêm mới** ➕, hộp thoại **Cardholder Details** sẽ hiển thị. Bạn cần cấu hình đầy đủ thông tin qua 3 tab chức năng sau:

### Tab 1: Thông tin chung (Cá nhân & Hình ảnh)
Khu vực này dùng để định danh cá nhân và thiết lập thời hạn cho thẻ:
* **Tên (*):** Nhập họ tên của người dùng (Trường bắt buộc).
* **PIN:** Mã số cá nhân dùng cho chế độ quẹt thẻ kèm PIN. Bạn có thể tự nhập hoặc nhấn nút **Tạo mã PIN** để hệ thống tự động sinh mã ngẫu nhiên.
* **Số Định Danh:** Nhập số ID của thẻ từ vật lý được cấp cho nhân sự này.
* **Thời hạn hiệu lực (Áp dụng cho Visitor):** Thiết lập khoảng thời gian `Từ ngày` đến `Đến ngày`. Quá thời hạn này, thẻ sẽ tự động bị vô hiệu hóa (Đặc biệt tối ưu khi cấp thẻ cho nhà thầu, khách mượn thẻ tạm thời).
* **Cập nhật Ảnh đại diện (Góc phải):**
  * Nhấn **Tải ảnh đại diện** để chọn file ảnh có sẵn trên máy tính.
  * Hoặc nhấn **Mở Camera** để chụp trực tiếp khuôn mặt của nhân sự thông qua Webcam của máy trạm.

![Tab Thông tin chung Người dùng thẻ](/img/cardholder-details-1.png)

### Tab 2: Quyền truy cập (Phân quyền & Lịch trình)
Tab này quyết định người dùng sẽ được đi qua những cửa nào và vào thời gian nào:
* **Chế Độ Truy Cập:** Chọn phương thức xác thực từ danh sách thả xuống tùy theo phần cứng hỗ trợ:
  * `CardOnly`: Chỉ cần quẹt thẻ.
  * `PinOnly`: Chỉ cần bấm mã PIN.
  * `CardAndPin`: Bắt buộc quẹt thẻ rồi bấm tiếp mã PIN (Bảo mật cao).
  * `FingerPrint` / `Face`: Xác thực bằng Vân tay hoặc Khuôn mặt.
  * `Disabled`: Khóa thẻ tạm thời (Nhân viên nghỉ thai sản, treo thẻ...).
* **Thêm biển số:** Nhập biển số xe của nhân sự và bấm **+ Thêm biển số** để đồng bộ với hệ thống kiểm soát xe (nếu có).
* **Nhóm dùng thẻ (Access Group):** Giao diện phân quyền kéo thả trực quan. Bạn chọn nhóm quyền (Ví dụ: *Nhóm quyền tầng 5, Nhóm toàn quyền*) ở cột **Chưa gán** rồi bấm nút **`>`** để chuyển sang cột **Đã gán**. Người dùng sẽ lập tức được thừa hưởng các quy tắc ra vào cửa và lịch trình thời gian của nhóm đó.

![Tab Quyền truy cập Người dùng thẻ](/img/cardholder-details-2.png)

### Tab 3: Tổ chức (Thông tin hành chính)
Tab cuối cùng dùng để phân loại cấu trúc nhân sự trong doanh nghiệp:
* **Loại:** Phân loại đối tượng (Ví dụ: `Employee` - Nhân viên, `Visitor` - Khách...).
* **Mã Nhân Viên:** Nhập mã số nhân sự để đồng bộ với phần mềm chấm công HRM.
* **Chức Vụ / Chi Nhánh / Phòng Ban:** Chọn từ danh sách có sẵn để phục vụ việc lọc dữ liệu và xuất báo cáo quẹt thẻ theo phòng ban sau này.

![Tab Tổ chức Người dùng thẻ](/img/cardholder-details-3.png)

---

## 3. Chỉnh sửa và Xóa
* **Sửa (Edit) 📝:** Nhấn biểu tượng màu xanh lá để cập nhật ảnh mới, đổi mã PIN hoặc gán thêm nhóm quyền truy cập mới cho nhân sự khi chuyển phòng ban.
* **Xóa (Delete) 🗑️:** Nhấn biểu tượng màu đỏ để xóa tài khoản người dùng thẻ khỏi hệ thống.