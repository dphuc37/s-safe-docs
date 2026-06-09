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

* **Sự kiện:** Phân loại mã định danh sự kiện (Ví dụ: *TypeCardID* - Quẹt thẻ xác thực).
* **Thời gian:** Mốc thời gian chính xác đến từng giây khi sự kiện xảy ra tại thực địa.
* **Nguồn:** Tên thiết bị hoặc Cửa phát sinh sự kiện (Ví dụ: *Main Door CR1*).
* **Mô tả:** Trạng thái chi tiết của lượt truy cập (Ví dụ: *Request granted: full test, used* - Quyền truy cập được chấp thuận).
* **Tên:** Họ tên nhân sự quẹt thẻ (nếu hệ thống đối chiếu thành công).
* **Ảnh đại diện:** Ảnh gốc trong hồ sơ của nhân viên để bảo vệ so sánh trực tiếp với người đang đứng trước camera.
* **Trạng thái:** Tín hiệu cảnh báo hoặc trạng thái logic đi kèm.

![Giao diện Giám sát sự kiện trực tuyến](/img/event.png)

---

## 2. Giám sát Video liên kết trực tiếp (Live Camera Integration)

Điểm ưu việt của module này là sự kết hợp đồng bộ giữa dữ liệu Access Control và hệ thống Camera giám sát (CCTV) ở khung hiển thị phía dưới:

* **Tự động kích hoạt luồng:** Khi một sự kiện quẹt thẻ phát sinh tại một cửa bất kỳ, hệ thống S-Safe sẽ tự động gọi luồng video trực tiếp (Live stream) từ Camera được gán tương ứng với cửa đó lên màn hình.
* **Đối soát trực quan:** Nhân viên trực ban có thể nhìn thấy ngay hình ảnh thực tế tại hiện trường cửa ra vào để kiểm tra chéo xem có hiện tượng gian lận thẻ (một người quẹt thẻ cho nhiều người vào) hoặc có sự cố kẹt cửa, đột nhập hay không.
* **Hỗ trợ đa luồng:** Khung hình dưới chia làm các ô lưới độc lập, cho phép giám sát đồng thời nhiều góc máy Camera cùng lúc khi có chuỗi sự kiện diễn ra liên tiếp.