---
id: bao-dong
title: Quản lý Báo động
sidebar_label: Báo động
sidebar_class_name: icon-bao-dong
sidebar_position: 16
---

# Quản lý Báo động (Alarms)

Module **Báo động (Alarms)** là nơi bạn định nghĩa các rủi ro an ninh, phân loại mức độ nghiêm trọng và thiết lập Quy trình xử lý tiêu chuẩn (SOP - Standard Operating Procedure) cho nhân viên trực ban khi sự cố xảy ra (Ví dụ: Cửa mở quá lâu, Cạy cửa, Cháy nổ...).

## 1. Ma trận liên kết: Alarm - Automation - Alert

Trong hệ thống S-Safe, **Báo động** không hoạt động độc lập mà là một mắt xích trung tâm trong chuỗi phản ứng an ninh 3 bước:

1. **Automation (Nguyên nhân / Logic):** Là "Bộ não" phát hiện sự cố. Automation chứa các quy tắc logic (NẾU - THÌ). *Ví dụ: NẾU phát hiện cửa bị cạy mở, THÌ kích hoạt Báo động "Cạy cửa".*
2. **Alarm (Bản chất sự cố / Xử lý):** Là "Trái tim" của sự kiện. Module này định nghĩa sự cố đó nguy hiểm ở mức nào (Cấp 1/2/3) và bảo vệ phải làm các bước gì (SOP) để khắc phục sự cố đó khi nhìn thấy trên màn hình.
3. **Alert (Thông báo / Lan truyền):** Là "Cái loa" của hệ thống. Nó lấy thông tin từ Báo động (Alarm) để phát đi thông báo ra bên ngoài (Gửi Email cho Giám đốc, đẩy thông báo Push lên điện thoại, SMS...).

---

## 2. Giao diện danh sách Báo động

Cột lề trái của module hiển thị danh sách toàn bộ các kịch bản báo động đã được khởi tạo trong hệ thống.
* **Ô tìm kiếm:** Giúp tra cứu nhanh tên báo động.
* **Nút + Thêm mới / Xóa:** Dùng để tạo thêm một kịch bản báo động mới hoặc loại bỏ các kịch bản không còn sử dụng.
* Mỗi báo động sẽ có một chấm màu biểu thị mức độ nghiêm trọng tương ứng.

---

## 3. Cấu hình chi tiết Báo động và SOP

Khi bạn nhấp vào một báo động (Ví dụ: *Cửa mở quá lâu*), khu vực bên phải sẽ hiển thị các tham số cấu hình:

### Trạng thái
Công tắc bật/tắt (Active/Inactive) góc phải trên cùng cho phép bạn kích hoạt hoặc tạm dừng áp dụng kịch bản báo động này trên toàn hệ thống.

### Thuộc tính & Quy trình xử lý (SOP)
Đây là nơi thiết lập kịch bản ứng phó cho bảo vệ khi sự cố xảy ra:
* **Độ ưu tiên:** Phân loại mức độ nghiêm trọng của sự kiện để hệ thống sắp xếp hiển thị:
  * **Cấp 1 - Khẩn cấp (Đỏ):** Cần xử lý ngay lập tức (Cạy cửa, Cháy).
  * **Cấp 2 - Cảnh cáo (Cam):** Cần lưu tâm xử lý nhanh (Cửa mở quá lâu).
  * **Cấp 3 - Chú ý (Xanh):** Theo dõi thêm (Mất kết nối thiết bị phụ).
* **Quy trình xử lý (SOP):** Bạn có thể gõ thủ công từng bước hướng dẫn, hoặc nhấn vào **Chọn mẫu có sẵn** để thêm nhanh các quy trình chuẩn (Ví dụ: *Gọi điện cho Trưởng ca trực, Khóa toàn bộ cửa ra vào, Kiểm tra camera...*). Các bước này sẽ hiển thị lên màn hình của bảo vệ để họ làm theo tác vụ (Checklist) khi sự cố bùng phát.

### Automation đã gán
Khu vực này liệt kê danh sách các Quy tắc Tự động hóa (Automations) đang được liên kết để "kích nổ" báo động này. Bạn có thể nhìn vào đây để biết chính xác phần cứng hay cảm biến nào đang được dùng để theo dõi sự cố (Ví dụ: *[#0002] NẾU Geofence intrusion THÌ Trigger Alarm...*).

![Giao diện hồ sơ báo động](/img/alarm.png)