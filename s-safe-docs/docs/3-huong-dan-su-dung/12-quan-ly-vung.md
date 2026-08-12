---
id: quan-ly-vung
title: Quản lý Vùng (E-Map)
sidebar_label: Vùng (E-Map)
sidebar_class_name: icon-vung
sidebar_position: 12
---

# Quản lý Vùng & Bản đồ trực quan (E-Map)

Module **Quản lý Vùng (Area)** cung cấp một trung tâm giám sát an ninh trực quan (E-Map). Thay vì nhìn vào những dòng dữ liệu khô khan, bạn có thể tải lên sơ đồ mặt bằng thực tế của tòa nhà, bố trí trực tiếp các Cửa, Camera và Báo động lên bản đồ, từ đó theo dõi và điều khiển thiết bị ngay trên nền tảng không gian 2D.

## 1. Tổng quan không gian làm việc

Giao diện E-Map được thiết kế tối ưu hóa không gian, chia làm 3 khu vực chính:

* **Cột trái (Treeview):** Cây thư mục quản lý phân cấp các Vùng (Khu vực) và danh sách thiết bị (Camera, Cửa, Báo động) thuộc vùng đó. Có tích hợp thanh tìm kiếm nhanh.
* **Khu vực trung tâm (Bản đồ):** Hiển thị sơ đồ mặt bằng. Bạn có thể **Kéo & Thả (Drag & Drop)** thiết bị từ cây thư mục lề trái thẳng vào bản đồ. Khi di chuột (Hover) lên icon thiết bị trên bản đồ, thông tin chi tiết sẽ tự động hiển thị.
* **Thanh tác vụ (Toolbar lề phải):** Chứa các công cụ điều khiển bản đồ bao gồm: 
  * Lưu cấu hình (Save).
  * Công cụ lật biểu tượng (Flip) - *Chỉ hiện khi chọn vào một icon thiết bị*.
  * Import/Chỉnh sửa bản đồ.
  * Phóng to / Thu nhỏ (Zoom In/Out).
  * Chế độ toàn màn hình (Fullscreen).

![Giao diện chính Quản lý Vùng](/img/area.png)

---

## 2. Thao tác với Cây thư mục (Treeview)

Hệ thống hỗ trợ Menu ngữ cảnh (Click chuột phải) thông minh ngay trên cây thư mục:

* **Chuột phải vào khoảng trống:** Tạo nhanh một Vùng mới hoàn toàn.

![Menu thao tác trên Cây thư mục](/img/area-1.png)

* **Chuột phải vào một Vùng cụ thể:** Hiển thị menu chức năng để **Thêm vùng con**, **Gán Camera**, **Gán Cửa**, **Gán Báo động**, hoặc **Sửa/Xóa** vùng đó.

![Menu thao tác trên Cây thư mục](/img/area-treeview.png)

* **Thao tác Chuột phải vào Thiết bị:**
  Khi nhấp chuột phải vào một đối tượng thiết bị trong danh sách, hệ thống sẽ hiển thị menu thao tác nhanh tương ứng với từng loại:
  * **Đối với Cửa:** 
    * **Mở cửa:** Kích hoạt lệnh điều khiển mở cửa từ xa ngay lập tức mà không cần quẹt thẻ.
    * **Sửa:** Mở hộp thoại cấu hình để chỉnh sửa thông tin cửa.
    * **Xóa (Màu đỏ):** Loại bỏ cửa khỏi danh sách quản lý và bản đồ.

    ![Menu thao tác trên Cây thư mục](/img/area-2.png)

  * **Đối với Camera:** 
    * **Sửa:** Mở hộp thoại cấu hình để chỉnh sửa camera.
    * **Xóa (Màu đỏ):** Gỡ bỏ camera khỏi hệ thống bản đồ.

    ![Menu thao tác trên Cây thư mục](/img/area-3.png)

  * **Đối với Báo động:** 
    * **Sửa:** Thay đổi biểu tượng (icon) cho cảnh báo hiển thị trên bản đồ.
    * **Xóa (Màu đỏ):** Gỡ bỏ báo động khỏi hệ thống bản đồ.

    ![Menu thao tác trên Cây thư mục](/img/area-4.png)

---

## 3. Tương tác trực tiếp trên Bản đồ (Map Canvas)

Khu vực bản đồ cho phép bạn tinh chỉnh vị trí thiết bị sao cho khớp nhất với thực tế lắp đặt:

### Thao tác Click chuột trái (Tùy chỉnh UI)
Khi bạn nhấp chuột trái vào một biểu tượng thiết bị trên bản đồ, một khung đứt nét sẽ bao quanh thiết bị:
* Nắm giữ các góc để **phóng to, thu nhỏ** kích thước icon.
* Nhấn giữ điểm neo phía trên để **xoay 360 độ** icon cho khớp với hướng cửa thực tế.
* Lúc này, thanh Toolbar bên phải sẽ xuất hiện thêm cụm công cụ **Flip** để bạn lật mặt icon (Trái/Phải/Trên/Dưới).

### Thao tác Click chuột phải (Điều khiển)
Mở ra menu thao tác nóng đối với thiết bị tại vị trí đó:
* **Mở cửa:** Kích hoạt rơ-le mở cửa ngay lập tức từ xa.
* **Mở Camera:** Gọi popup hiển thị luồng video trực tiếp từ Camera giám sát khu vực đó.
* **Khóa vị trí thiết bị:** Giữ cố định icon, không cho phép di chuyển, xoay, lật.
* **Xóa khỏi bản đồ:** Gỡ biểu tượng khỏi mặt bằng (Thiết bị vẫn tồn tại trong Treeview bên trái).

![Menu thao tác nhanh trên Bản đồ](/img/area-mapview.png)

---

## 4. Thiết lập Vùng và Tải Bản đồ

Khi bạn khởi tạo vùng mới hoặc nhấn vào nút **Import bản đồ** trên thanh Toolbar, hộp thoại **Chi tiết vùng** với 3 Tab cấu hình sẽ xuất hiện:

### Tab 1: Thông tin
Dùng để khai báo các thông tin định danh cơ bản:
* **ID:** Số thứ tự nhận diện hệ thống.
* **Tên (*):** Đặt tên cho khu vực (Ví dụ: *Tầng 1, Sảnh chính, Phòng máy chủ*).

![Tab Thông tin Vùng](/img/area-details-1.png)

### Tab 2: Bản đồ
Nơi không gian thực tế được số hóa:
* **Tải ảnh bản đồ:** Chọn file ảnh mặt bằng (Floor plan) từ máy tính.
* **Tọa độ X / Y:** Tinh chỉnh độ lệch gốc của bản đồ nếu cần thiết.

![Tab Tải Bản đồ](/img/area-details-2.png)

### Tab 3: Cấu hình (Anti-Passback)
Tính năng an ninh nâng cao cho khu vực:
* **Kích hoạt APB / Quy tắc APB hợp lệ:** Khi bật tính năng này, hệ thống sẽ áp dụng quy tắc chống quay vòng thẻ. Nhân sự bắt buộc phải có một sự kiện "Quẹt thẻ đi Vào" rồi mới được phép "Quẹt thẻ đi Ra". Tính năng này ngăn chặn triệt để việc một người dùng thẻ mở cửa rồi tuồn thẻ ra ngoài cho người khác mượn.

![Tab Cấu hình APB](/img/area-details-3.png)