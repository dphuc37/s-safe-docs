---
id: lich-truy-cap
title: Lịch truy cập
sidebar_label: Lịch truy cập
sidebar_class_name: icon-lich
sidebar_position: 11
---

# Quản lý Lịch truy cập (Time Schedules)

Module **Lịch truy cập** cho phép người quản trị định nghĩa các khoảng thời gian cho phép ra vào trong hệ thống. Các lịch trình này sau đó sẽ được gán cho từng cá nhân hoặc nhóm dùng thẻ để kiểm soát thời gian quẹt thẻ hợp lệ (Ví dụ: *Chỉ cho phép vào từ 08:00 - 17:00 từ Thứ 2 đến Thứ 6*).

## 1. Giao diện danh sách lịch trình

Màn hình hiển thị danh sách các khung giờ đã được khởi tạo trên hệ thống với các cột thông tin chi tiết:

* **Tên:** Tên gợi nhớ của lịch trình (Ví dụ: *Always Allowed, Giờ hành chính, Ca đêm*).
* **Ngày trong tuần:** Các ngày được áp dụng quy tắc (Thứ 2 đến Chủ nhật).
* **Khoảng thời gian:** Khung giờ bắt đầu và kết thúc (Định dạng HH:mm).
* **Ngày Lễ:** Các nhóm ngày lễ (Holiday) được áp dụng riêng cho lịch trình này.
* **Thao tác:** Chỉnh sửa 📝 hoặc Xóa 🗑️.

![Danh sách Lịch truy cập](/img/schedule-listview.png)

---

## 2. Thêm mới và Thiết lập khung giờ

Khi nhấn **+ Thêm mới** hoặc **Edit**, hộp thoại **Schedule Details** sẽ xuất hiện để bạn cấu hình chi tiết:

* **Name (*):** Đặt tên cho lịch trình (Trường bắt buộc).
* **Days of Week:** Tích chọn vào các thứ trong tuần mà bạn muốn lịch trình này có hiệu lực (Từ `Mon` đến `Sun`).
* **Holiday:** Tích chọn các nhóm ngày lễ (`Holiday1`, `Holiday2`, `Holiday3`). Nếu một ngày được khai báo là ngày lễ trong hệ thống, quy tắc của ngày đó sẽ được ưu tiên áp dụng theo cấu hình này.
* **Time Range:** Chọn thời gian bắt đầu và thời gian kết thúc cho phép quẹt thẻ.
    * *Lưu ý: Nếu muốn cho phép truy cập cả ngày, hãy thiết lập từ 00:00:00 đến 23:59:59.*

Nhấn **Save** để hoàn tất.

![Chi tiết cấu hình Lịch truy cập](/img/schedule-details.png)

---

## 3. Các lịch trình mặc định

Hệ thống S-Safe thường đi kèm với các lịch trình có sẵn không thể xóa để đảm bảo vận hành:
* **All Time / Always Allowed:** Cho phép truy cập 24/7 vào tất cả các ngày, kể cả ngày lễ.
* **None:** Tuyệt đối không cho phép truy cập vào bất kỳ thời điểm nào (Thường dùng để khóa quyền tạm thời).