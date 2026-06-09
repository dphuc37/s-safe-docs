---
id: quan-ly-camera
title: Quản lý Camera
sidebar_label: Quản lý Camera
sidebar_class_name: icon-camera
sidebar_position: 4
---

# Quản lý Camera

Module **Camera** cho phép bạn tích hợp các luồng video giám sát trực tiếp vào phần mềm S-Safe. Việc liên kết Camera với một Cửa (Door) cụ thể sẽ giúp hệ thống tự động hiển thị video (Pop-up) ngay lập tức khi có sự kiện quẹt thẻ hoặc cảnh báo an ninh tại cửa đó.

## 1. Giao diện danh sách

Màn hình chính hiển thị danh sách (listview) toàn bộ Camera đã được khai báo trên hệ thống. 
Các thông tin hiển thị giúp người vận hành kiểm soát nhanh bao gồm:
* **Thông định danh:** ID, Tên camera.
* **Luồng dữ liệu:** Đường dẫn Url (Thường là link RTSP của luồng camera).
* **Tài khoản:** Tên đăng nhập và Mật khẩu của camera (để phần mềm có quyền truy xuất luồng hình ảnh).
* **Cửa:** Tên Cửa đang được gán đồng bộ với camera này.

![Danh sách quản lý Camera](/img/camera-listview.png)

---

## 2. Thêm mới và Chỉnh sửa

Để thêm một Camera mới, nhấn vào nút **+ Thêm mới** ➕ ở góc phải. Để sửa camera đã có, nhấn vào nút **Edit** 📝 (Ô vuông màu xanh lá).

Giao diện **Chi tiết camera** sẽ yêu cầu bạn điền các thông số sau:
* **Tên (*):** Đặt tên dễ nhớ theo khu vực (Ví dụ: *Camera cửa chính, Camera sảnh tầng 1*).
* **Url (*):** Đường dẫn giao thức của camera (Ví dụ: Link RTSP).
* **Tên đăng nhập / Mật khẩu:** Tài khoản nội bộ được cấu hình trên thiết bị camera.
* **Vị trí X / Vị trí Y:** Tọa độ hiển thị của camera trên bản đồ -Map. *(Mẹo: Thường bạn không cần nhập tay số này. Khi sang module Quản lý Vùng / E-Map, bạn chỉ cần kéo thả camera lên bản đồ, hệ thống sẽ tự động lưu tọa độ vào đây).*
* **Cửa:** Chọn một Cửa từ danh sách thả xuống để gán camera này làm mắt thần giám sát trực tiếp cho cửa đó.

![Chi tiết thêm mới Camera](/img/camera-details.png)

---

## 3. Xóa Camera

* Nhấn vào nút **Delete** 🗑️ (Thùng rác màu đỏ) tại cột thao tác để gỡ bỏ thiết bị.
* Hệ thống sẽ hiển thị một thông báo yêu cầu xác nhận trước khi xóa hoàn toàn để tránh thao tác nhầm.

:::info[Tối ưu luồng Video]
Để hệ thống Server và máy trạm (Client) hoạt động mượt mà, không bị giật lag khi hiển thị cùng lúc nhiều luồng sự kiện (Video Wall), khuyến nghị nên sử dụng URL của **Luồng phụ (Sub-stream)** với độ phân giải VGA hoặc HD để nạp vào hệ thống S-Safe thay vì luồng chính (Main-stream) độ phân giải 4K.
:::