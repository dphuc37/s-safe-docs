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
* **Thông tin cơ bản:** STT, Loại bộ điều khiển (Ví dụ: X1100), Tên thiết bị, Bộ điều khiển cha, Địa chỉ, RS485 Port và Tốc độ Baud.
* **Trạng thái phần cứng:**
  * *Địa chỉ IP:* Hiển thị IP hiện tại của thiết bị trên mạng.
  * *Trạng thái kết nối:* Hiển thị thiết bị đang `Connected` (màu xanh) hay `Disconnected`.
  * *Tamper:* Cảnh báo `Opened` (màu đỏ) nếu vỏ hộp thiết bị bị cạy phá.
  * *AC Power / BATT:* Trạng thái nguồn điện lưới và dung lượng Pin dự phòng hiển thị `Normal` (màu xanh) khi ổn định.

<img src="/img/controller/controller-listview.png" alt="Danh sách quản lý Bộ điều khiển" width="100%" />

---

## 2. Các thao tác chính

### Thêm mới Bộ điều khiển
Để khai báo một bộ điều khiển mới vào hệ thống, bạn thực hiện theo các bước sau:

1. Nhấn vào nút **+ Thêm mới** (Màu xanh dương) ở góc dưới cùng bên trái màn hình.
2. Giao diện **Bộ điều khiển truy cập** xuất hiện, bao gồm 2 thẻ (tab) cấu hình chính:
   * **Thẻ Thông tin chung:**
     * **Thông định danh:** Chọn loại *Bộ điều khiển* (VD: X1100), nhập *Tên bộ điều khiển* (Bắt buộc) và *Số sê-ri*.
     * **Thông số mạng & Tài khoản:** Nhập chính xác *Địa chỉ IP* của phần cứng (VD: 192.168.5.249), kèm theo *Tên đăng nhập* (VD: user1) và *Mật khẩu* để phần mềm có quyền truy cập vào thiết bị.
     * **Tọa độ (E-map):** Khai báo Vị trí X và Vị trí Y cho thiết bị.
   * **Thẻ I/O Devices (Cấu hình ngõ vào/ngõ ra & Đầu đọc):**
     * **Thiết lập thông số chung:** Khai báo số lượng cho **Số đầu đọc** (VD: 2), **Số ngõ vào** (VD: 7), **Số ngõ ra** (VD: 4) và **Chế độ LED** (VD: *R/G + còi riêng*).
     * **Đầu đọc:** Cấu hình phương thức xác thực cho từng đầu đọc (VD: *Reader 1, Reader 2* chọn *CardOnly*).
     * **Ngõ vào (Input):** Thiết lập trạng thái tín hiệu hiện tại (*Normal/Active*), loại tín hiệu (*NormallyOpen* / *NormallyClosed*) và gán chức năng cho từng cổng ngõ vào (VD: IN 1 là *DoorSensor*, IN 2 là *ExitButton*).
     * **Ngõ ra (Output):** Cấu hình chức năng điều khiển cho từng cổng ngõ ra.
3. Kiểm tra lại thông tin và bấm nút **Lưu** (Màu xanh lá) ở góc dưới bên phải để hoàn tất. Thiết bị mới sẽ ngay lập tức xuất hiện trên bảng danh sách. Nếu muốn hủy bỏ thao tác, nhấn **Hủy** (Màu đỏ).

<img src="/img/controller/controller-details-1.png" alt="Thẻ Thông tin chung Bộ điều khiển" width="100%" />

<img src="/img/controller/controller-details-2.png" alt="Thẻ I/O Devices Bộ điều khiển" width="100%" />

:::info[Mẹo triển khai thiết bị]
Đảm bảo máy chủ cài đặt phần mềm S-Safe và các Bộ điều khiển vật lý phải thông mạng với nhau (có thể Ping thấy IP của thiết bị) trước khi khai báo trên phần mềm để trạng thái kết nối hiển thị chính xác.
:::

### Chỉnh sửa thông tin
* Tích chọn thiết bị cần sửa trên danh sách, sau đó nhấn vào nút **Sửa** (Màu xanh lá cây) ở thanh công cụ phía dưới.
* Giao diện cập nhật sẽ hiển thị toàn bộ các thông số cũ đã được định sẵn. Bạn tiến hành thay đổi các trường dữ liệu cần thiết và bấm **Lưu**.

### Xóa thiết bị
* Tích chọn thiết bị cần loại bỏ trên danh sách, sau đó nhấn vào nút **Xóa** (Màu đỏ) ở thanh công cụ phía dưới.
* Hệ thống sẽ hiển thị một hộp thoại cảnh báo để tránh việc xóa nhầm. Bấm xác nhận để loại bỏ hoàn toàn bộ điều khiển khỏi cơ sở dữ liệu.

:::warning[Cảnh báo quan trọng]
Việc xóa Bộ điều khiển sẽ ảnh hưởng trực tiếp đến các Cửa (Door) và Đầu đọc (Reader) đang được gán vào thiết bị này. Hãy chắc chắn rằng bạn đã gỡ bỏ các liên kết vật lý trên phần mềm trước khi thực hiện thao tác xóa.
:::