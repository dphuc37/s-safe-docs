---
id: bo-dieu-khien
title: Quản lý Bộ điều khiển
sidebar_label: Quản lý Bộ điều khiển
sidebar_class_name: icon-chip
sidebar_position: 2
---

# Quản lý Bộ điều khiển (Controller)

Bộ điều khiển (Controller) là thiết bị trung tâm đóng vai trò như "bộ não" tại hiện trường. Nó trực tiếp nhận tín hiệu từ các thiết bị ngoại vi (đầu đọc thẻ, nút bấm, cảm biến cửa) gửi về phần mềm trung tâm S-Safe để phân tích và xử lý theo luồng quy tắc đã được thiết lập.

## 1. Giao diện danh sách

Tại màn hình chính của module **Bộ điều khiển**, hệ thống hiển thị danh sách (Listview) toàn bộ các thiết bị đang được quản lý. 

Giao diện giám sát cung cấp ngay lập tức các thông số quan trọng (Real-time status) để người vận hành nắm bắt tình hình mạng lưới:
* **Thông tin cơ bản:** ID, Loại bộ điều khiển (Ví dụ: X1100), Tên thiết bị và Địa chỉ IP.
* **Trạng thái phần cứng:** * *Trạng thái kết nối:* Hiển thị thiết bị đang online hay offline.
  * *Tamper:* Cảnh báo nếu vỏ hộp thiết bị bị cạy phá.
  * *AC Power / BATT:* Trạng thái nguồn điện lưới và dung lượng Pin dự phòng.

![Danh sách quản lý Bộ điều khiển](/img/controller-listview.png)

---

## 2. Các thao tác chính

### Thêm mới Bộ điều khiển
Để khai báo một bộ điều khiển mới vào hệ thống, bạn thực hiện theo các bước sau:

1. Nhấn vào nút **+ Thêm mới** (Màu xanh dương) ở góc trên cùng bên phải màn hình.
2. Giao diện **Bộ điều khiển truy cập** sẽ xuất hiện. Bạn cần điền đầy đủ các thông số kỹ thuật cho thiết bị:
   * **Thông tin định danh:** Chọn loại *Bộ điều khiển* (VD: X1100), nhập *Tên bộ điều khiển* (Bắt buộc) và *Số sê-ri*.
   * **Thông số mạng & Tài khoản:** Nhập chính xác *Địa chỉ IP* của phần cứng, kèm theo *Tên đăng nhập* và *Mật khẩu* để phần mềm có quyền truy cập vào thiết bị.
   * **Thông số ngõ vật lý:** Khai báo số lượng *Ngõ vào (Input)*, *Ngõ ra (Output)* và *Số đầu đọc (Reader)* thực tế mà thiết bị hỗ trợ.
   * **Cấu hình mở rộng:** Khai báo *Bộ điều khiển gốc*, *Địa chỉ Sio* (áp dụng cho các bộ mở rộng X100, X200, X300) và cổng *RS485 Port*.
3. Kiểm tra lại thông tin và bấm nút **Lưu** (Màu xanh lá) để hoàn tất. Thiết bị mới sẽ ngay lập tức xuất hiện trên bảng danh sách.

![Giao diện Thêm mới và Chỉnh sửa Controller](/img/controller-details.png)

:::info[Mẹo triển khai thiết bị]
Đảm bảo máy chủ cài đặt phần mềm S-Safe và các Bộ điều khiển vật lý phải thông mạng với nhau (có thể Ping thấy IP của thiết bị) trước khi khai báo trên phần mềm để trạng thái kết nối hiển thị chính xác.
:::

### Chỉnh sửa thông tin
* Tại cột *Thao tác* của thiết bị cần sửa, nhấn vào nút **Edit** (Biểu tượng ô vuông màu xanh lá cây). 
* Giao diện cập nhật sẽ hiển thị toàn bộ các thông số cũ đã được định sẵn. Bạn tiến hành thay đổi các trường dữ liệu cần thiết và bấm **Lưu**.

### Xóa thiết bị
* Nhấn vào nút **Delete** (Biểu tượng thùng rác màu đỏ) tại cột thao tác.
* Hệ thống sẽ hiển thị một hộp thoại cảnh báo để tránh việc xóa nhầm. Bấm xác nhận để loại bỏ hoàn toàn bộ điều khiển khỏi cơ sở dữ liệu.

:::warning[Cảnh báo quan trọng]
Việc xóa Bộ điều khiển sẽ ảnh hưởng trực tiếp đến các Cửa (Door) và Đầu đọc (Reader) đang được gán vào thiết bị này. Hãy chắc chắn rằng bạn đã gỡ bỏ các liên kết vật lý trên phần mềm trước khi thực hiện thao tác xóa.
:::