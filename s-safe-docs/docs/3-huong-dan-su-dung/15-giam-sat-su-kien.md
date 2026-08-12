---
id: giam-sat-su-kien
title: Giám sát sự kiện
sidebar_label: Giám sát sự kiện
sidebar_class_name: icon-giam-sat
sidebar_position: 15
---

# Giám sát sự kiện trực tuyến (Event Monitor)

Module **Giám sát sự kiện** là trung tâm điều hành và giám sát an ninh trực tiếp theo thời gian thực của hệ thống S-Safe. Màn hình này được thiết kế dành riêng cho nhân viên bảo vệ hoặc điều hành tại phòng trung tâm nhằm phát hiện sớm các sự kiện ra vào và phản ứng kịp thời với các sự cố an ninh.

## 1. Bảng nhật ký sự kiện thời gian thực (Live Event Logs)

Khu vực phía trên là bảng hiển thị danh sách các sự kiện được đẩy về liên tục từ các bộ điều khiển cửa mà không cần tải lại trang (Auto-refresh):

* **Nhân sự:** Hiển thị ảnh đại diện (Avatar) kèm theo họ tên nhân viên (Ví dụ: *Nguyễn Văn A, Trần Thị B*) hoặc hiển thị *Khách Vãng Lai* đối với các đối tượng chưa định danh.
* **Vị trí (Nguồn):** Vị trí cửa hoặc thiết bị phát sinh sự kiện (Ví dụ: *Cửa Hầm, Cửa Kho, Cửa Chính*).
* **Sự kiện:** Loại sự kiện ghi nhận trên hệ thống (Ví dụ: *Từ chối thẻ, Trạng thái cửa, Sự kiện hệ thống*).
* **Chi tiết:** Mô tả diễn giải cụ thể lý do hoặc trạng thái (Ví dụ: *Từ chối truy cập: Thẻ chưa được đăng ký trong hệ thống*, *Cửa mất kết nối*, *System rebooted unexpectedly*).
* **Thời gian:** Mốc thời gian chính xác (Năm-Tháng-Ngày Giờ:Phút:Giây) khi sự kiện xảy ra tại thực địa.
* **Trạng thái:** Tín hiệu cảnh báo đi kèm (Ví dụ: Badge màu đỏ **ALERT** đối với các sự kiện từ chối truy cập hoặc cảnh báo nguy hiểm).

> **Các nút thao tác nhanh (Góc trên bên phải):**
> * **Test Event (Xanh lá):** Tạo sự kiện giả lập để kiểm tra đường truyền và phản hồi của hệ thống.
> * **Export (Màu cam):** Xuất danh sách nhật ký sự kiện hiện tại ra file dữ liệu.

![Giao diện Giám sát sự kiện trực tuyến](/img/event.png)

---

## 2. Giám sát Video liên kết trực tiếp (Live Camera Integration)

Điểm ưu việt của module này là sự kết hợp đồng bộ giữa dữ liệu Access Control và hệ thống Camera giám sát (CCTV) ở khung hiển thị phía dưới:

* **Tự động kích hoạt luồng:** Khi một sự kiện quẹt thẻ phát sinh tại một cửa bất kỳ, hệ thống S-Safe sẽ tự động gọi luồng video trực tiếp (Live stream) từ Camera được gán tương ứng với cửa đó lên màn hình.
* **Đối soát trực quan:** Nhân viên trực ban có thể nhìn thấy ngay hình ảnh thực tế tại hiện trường cửa ra vào để kiểm tra chéo xem có hiện tượng gian lận thẻ (một người quẹt thẻ cho nhiều người vào) hoặc có sự cố kẹt cửa, đột nhập hay không.
* **Hỗ trợ đa luồng:** Khung hình dưới chia làm các ô lưới độc lập, cho phép giám sát đồng thời nhiều góc máy Camera cùng lúc khi có chuỗi sự kiện diễn ra liên tiếp.