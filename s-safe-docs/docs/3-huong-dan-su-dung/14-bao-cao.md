---
id: bao-cao
title: Báo cáo Sự kiện
sidebar_label: Báo cáo
sidebar_class_name: icon-bao-cao
sidebar_position: 14
---

# Báo cáo & Lịch sử Sự kiện (System Reports)

Module **Báo cáo** là nơi lưu trữ toàn bộ lịch sử vận hành, nhật ký sự kiện ra vào, cảnh báo an ninh và trạng thái phần cứng của toàn bộ hệ thống S-Safe. Mọi hành động quẹt thẻ (Hợp lệ hoặc Bị từ chối), trạng thái cửa bị cưỡng ép mở, hay mất kết nối thiết bị đều được ghi nhận chi tiết tại đây theo mốc thời gian thực.

![Giao diện chính](/img/report.png)

## 1. Bộ lọc tra cứu Sự kiện nâng cao

Để tìm kiếm chính xác các sự kiện trong một hệ thống dữ liệu lớn lên tới hàng ngàn bản ghi, S-Safe trang bị một thanh công cụ lọc đa điều kiện cực kỳ mạnh mẽ ở phía trên:

* **Từ ngày / Đến ngày:** Giới hạn khoảng thời gian cần truy xuất lịch sử.
* **Chọn event:** Lọc đích danh theo loại sự kiện (Ví dụ: *Quẹt thẻ thành công, Thẻ không hợp lệ, Cửa mở quá lâu...*).
* **Chọn cửa:** Chỉ xem lịch sử ra vào của một hoặc các cửa được chỉ định trong tòa nhà.
* **Chọn cardholder:** Tra cứu riêng lịch sử di chuyển của một nhân sự hoặc khách vãng lai cụ thể.
* **Ô tìm kiếm (Search):** Nhập nhanh từ khóa để lọc theo tên, mã thiết bị hoặc nội dung mô tả.
* **Nút Tìm kiếm 🔍 (Màu xanh dương):** Kích hoạt hệ thống quét dữ liệu theo ma trận bộ lọc đã chọn.

---

## 2. Cấu trúc bảng Nhật ký sự kiện

Dữ liệu báo cáo được hiển thị dưới dạng bảng tổng hợp chi tiết theo dòng thời gian từ mới nhất đến cũ nhất:

* **Sự kiện:** Phân loại mã hoặc nhóm sự kiện hệ thống (Ví dụ: Trạng thái tín hiệu thiết bị, Loại xác thực).
* **Nguồn:** Tên của thiết bị hoặc khu vực phát sinh ra sự kiện đó (Ví dụ: *Cửa chính, Phòng kế toán, đầu đọc phụ X1100...*).
* **Mô tả:** Chi tiết hóa trạng thái logic của sự kiện tại thời điểm diễn ra (Ví dụ: Cửa đang đóng, thiết bị chuyển sang chế độ Secure/Bảo mật).
* **Thời gian:** Mốc thời gian chính xác đến từng giây diễn ra sự kiện (Định dạng: YYYY-MM-DD HH:mm:ss).
* **Tên:** Hiển thị họ tên của người dùng nếu sự kiện đó liên quan đến hành vi quẹt thẻ định danh.
* **Ảnh đại diện:** Ảnh hồ sơ của nhân sự đối chiếu trực quan để bảo vệ kiểm tra chéo, tránh việc gian lận mượn thẻ.

---

## 3. Kết xuất file Báo cáo (Export)

Khi cần cung cấp dữ liệu phục vụ công tác điều tra an ninh hoặc lưu trữ định kỳ cho ban quản lý tòa nhà:
* Bạn thiết lập bộ lọc sự kiện theo đúng yêu cầu, nhấn **Tìm kiếm**.
* Nhấn vào nút **Export** 📥 (Màu cam) ở góc phải màn hình. Hệ thống sẽ tự động tổng hợp toàn bộ danh sách kết quả và tải xuống máy tính một file Excel (`.xlsx`), giữ nguyên cấu trúc phân cột để bạn dễ dàng làm hàm tính toán hoặc in ấn báo cáo.