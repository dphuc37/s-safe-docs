---
id: canh-bao
title: Trung tâm Cảnh báo
sidebar_label: Cảnh báo
sidebar_class_name: icon-canh-bao
sidebar_position: 18
---

# Trung tâm Cảnh báo (Warning Real-time)

Module **Cảnh báo** là màn hình tác nghiệp trực tuyến dành cho nhân viên an ninh. Giao diện này tập hợp toàn bộ các sự cố đang diễn ra tại cơ sở, cung cấp dữ liệu hình ảnh, vị trí sơ đồ và các nút lệnh xử lý nhanh để giải quyết sự cố theo luồng trạng thái cố định.

## 1. Mối liên hệ chuỗi: Automation | Alarm | Warning

Màn hình Cảnh báo vận hành dựa trên sự kết hợp của hai module trước đó:
* **Automation** đóng vai trò tự động phát hiện lỗi phần cứng hoặc vi phạm vùng cấm và kích nổ lệnh.
* **Alarm** cung cấp cấu hình độ ưu tiên (Màu sắc hiển thị) và các bước xử lý tiêu chuẩn (SOP) tương ứng cho sự cố đó.
* **Warning** tiếp nhận hai luồng trên để hiển thị trực quan lên màn hình, ép nhân viên an ninh phải thực hiện đúng quy trình checklist và ghi nhận nhật ký xử lý.

---

## 2. Luồng xử lý sự cố qua 3 trạng thái

Hệ thống quản lý và phân loại cảnh báo theo 3 tab luồng công việc rõ ràng ở cột trái:

### Tab 1: Đang diễn ra (Active)
Hiển thị danh sách các sự cố mới phát sinh chưa có người tiếp nhận. Sự kiện có nhãn **ACTIVE** màu đỏ. 
* **Thao tác:** Nhân viên trực ban xem thông tin chi tiết và nhấn nút **NHẬN LỆNH** (Màu cam) ở góc phải để chuyển sự cố vào trạng thái xử lý.

![Giao diện Cảnh báo trạng thái Active](/img/alert-1.png)

### Tab 2: Đang xử lý (Ack'd - Acknowledged)
Hiển thị các sự cố đã có nhân viên bấm xác nhận tiếp nhận và đang trong quá trình kiểm tra thực địa. Sự kiện chuyển sang nhãn **ACK'D** màu xanh dương.
* **Thao tác:** Sau khi kiểm tra hiện trường, nhân viên lựa chọn một trong hai nút chức năng ở góc phải đáy màn hình: **BÁO ĐỘNG GIẢ** (Màu xám) hoặc **ĐÃ GIẢI QUYẾT** (Màu xanh lá).

![Giao diện Cảnh báo trạng thái Ackd](/img/alert-2.png)

### Tab 3: Đã xử lý (Cleared)
Hiển thị danh sách các sự cố đã được giải quyết xong hoặc xác nhận báo động giả. Sự kiện có nhãn **CLEARED** màu xám.
* **Thao tác:** Nhấn nút **XÓA KHỎI DANH SÁCH** (Màu đỏ) để dọn dẹp hàng chờ, lưu trữ dữ liệu vào hệ thống báo cáo lịch sử.

![Giao diện Cảnh báo trạng thái Cleared](/img/alert-3.png)

---

## 3. Không gian đối soát dữ liệu trung tâm

Khi chọn vào một cảnh báo bất kỳ trong danh sách, khu vực trung tâm cung cấp các thông tin xác minh thực địa bao gồm:

* **Bản đồ định vị sự cố (E-Map):** Hiển thị sơ đồ mặt bằng tầng. 
  * *Hiệu ứng hàng rào nhấp nháy:* Nếu sự cố bắt nguồn từ lỗi vi phạm vùng cấm hoặc hàng rào điện tử (Geofence intrusion), hệ thống sẽ hiển thị một khung viền màu đỏ nhấp nháy liên tục xung quanh tọa độ của vùng/hàng rào đó trên sơ đồ mặt bằng, giúp định vị nhanh vị trí xâm nhập.
* **Camera giám sát:** Hiển thị trực tiếp từ camera.

---

## 4. Thanh tác vụ và Nhật ký xử lý (SOP Panel)

Cột lề phải hiển thị toàn bộ thuộc tính và công cụ ghi nhận hành vi của nhân viên trực ban:
* **Thông tin sự cố:** Hiển thị Tên cảnh báo, Vị trí thiết bị bị lỗi và Nguyên nhân kích hoạt (Ví dụ: *Geofence intrusion*).
* **QUY TRÌNH XỬ LÝ (SOP):** Hiển thị các ô tick chọn (Checklist) nhiệm vụ buộc bảo vệ phải làm theo cấu hình sẵn của Alarm.
* **NHẬT KÝ SỰ KIỆN:** Hộp thoại hiển thị tiến trình tự động của hệ thống (Mốc thời gian ghi nhận cảnh báo, thời gian có nhân viên nhận lệnh và thời gian giải quyết). Người dùng có thể gõ thêm ghi chú thủ công vào ô **Ghi chú** để lưu lại báo cáo.