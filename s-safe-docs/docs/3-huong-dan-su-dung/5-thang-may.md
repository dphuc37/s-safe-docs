---
id: quan-ly-thang-may
title: Quản lý Thang máy
sidebar_label: Quản lý Thang máy
sidebar_class_name: icon-thang-may
sidebar_position: 5
---

# Quản lý Thang máy (Elevator Control)

Module **Thang máy** là giải pháp kiểm soát phân tầng chuyên sâu của S-Safe. Tính năng này cho phép bạn giới hạn quyền truy cập của người dùng đến từng tầng cụ thể trong tòa nhà, đảm bảo an ninh tối đa cho các khu vực nội bộ hoặc tầng VIP.

:::info[Module Đang Phát Triển (Beta)]
Giao diện và một số tính năng chuyên sâu của module Thang máy hiện đang được đội ngũ SMT liên tục cập nhật và hoàn thiện để mang lại trải nghiệm tối ưu nhất.
:::

## 1. Tổng quan giao diện

Màn hình Quản lý Thang máy được thiết kế chia làm hai khu vực trực quan:
* **Cột bên trái:** Danh sách các thang máy đang được quản lý trên hệ thống. Bạn có thể sử dụng thanh tìm kiếm để lọc nhanh thang máy cần cấu hình.
* **Khu vực bên phải:** Không gian thiết lập chi tiết cho thang máy đang được chọn.

Để khai báo một thang máy mới, bạn nhấn nút **Thêm mới** ở góc dưới bên trái, sau đó nhập **Tên thang máy** và chọn **Bộ điều khiển phần cứng** tương ứng.

![Giao diện Quản lý Thang máy](/img/elevator-listview.png)

---

## 2. Thiết lập Liên kết Thiết bị

Mỗi buồng thang máy trong thực tế sẽ được "số hóa" trên phần mềm thông qua việc liên kết các thiết bị ngoại vi. Tại phần cấu hình chi tiết, bạn cần xác định:
* **Loại thang máy:** Phân loại thang máy (Ví dụ: Thang khách, Thang hàng, Thang VIP).
* **Đầu đọc liên kết:** Chọn Đầu đọc thẻ (Reader) được lắp đặt bên trong buồng (Cabin) của thang máy này.
* **Camera liên kết:** Gán một Camera giám sát để tự động bật video (popup) khi có sự kiện quẹt thẻ trong thang máy.

---

## 3. Cấu hình Sơ đồ Phân tầng (Relay Mapping)

Đây là tính năng cốt lõi của hệ thống kiểm soát thang máy. Mỗi nút bấm tầng trong cabin sẽ được nối với một rơ-le (Output) trên bộ điều khiển S-Safe.

Để cấu hình, bạn nhấn vào nút **+ Thêm Tầng** màu xanh:
1. **Ký hiệu tầng / Tên tầng:** Đặt tên định danh cho tầng (Ví dụ: *Tầng 1, Tầng 30, Tầng VIP*).
2. **Phân bổ Rơ-le đầu ra:** Chọn đúng cổng rơ-le vật lý (Ví dụ: *Relay 1 - Output 1*) đang được đấu dây trực tiếp với nút bấm của tầng đó.
3. Nhấn **Lưu tầng** để hoàn tất.

Sau khi thiết lập sơ đồ này, bạn có thể sử dụng module **Quy tắc truy cập (Access Rule)** để cấp quyền cho thẻ nhân viên được phép bấm những rơ-le (tương ứng với các tầng) nào.

![Cấu hình Phân tầng Thang máy](/img/elevator-details.png)