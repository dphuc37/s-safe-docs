---
id: installation
title: 2. Hướng dẫn cài đặt
sidebar_class_name: icon-cai-dat
---

# [cite_start]Hướng dẫn cài đặt S-Safe [cite: 480]

## [cite_start]Chuẩn bị trước khi cài đặt [cite: 481]
[cite_start]Trước khi tiến hành cài đặt S-Safe Server và Client, vui lòng kiểm tra và hoàn thành các mục dưới đây để đảm bảo quá trình cài đặt diễn ra nhanh chóng và không gặp lỗi. [cite: 482]

### [cite_start]1. Yêu cầu hệ thống & Môi trường [cite: 485]
* [cite_start]**Phù hợp phần cứng:** Đảm bảo máy chủ (Server) và máy trạm (Client) đáp ứng các yêu cầu cấu hình tối thiểu trong tài liệu Yêu cầu hệ thống S-Safe. [cite: 486]
* **Quyền Admin:** Bạn phải đăng nhập vào hệ điều hành bằng tài khoản có quyền Quản trị viên (Administrator) để tiến hành cài đặt. [cite: 487]
* [cite_start]**Windows Update:** Khuyến nghị chạy Windows Update để cài đặt đầy đủ các thư viện nền tảng cần thiết (chẳng hạn như .NET Framework 4.8 hoặc C++ Redistributable). [cite: 488]
* [cite_start]**Chế độ nguồn (Power Plan):** Thiết lập chế độ nguồn của máy chủ thành *High Performance* (Hiệu suất cao) và tắt hoàn toàn chế độ *Sleep/Hibernate* (Ngủ/Ngủ đông) để tránh làm gián đoạn kết nối của hệ thống kiểm soát ra vào. [cite: 489]

### [cite_start]2. Cấu hình mạng và Tường lửa [cite: 490]
* [cite_start]**IP tĩnh:** Máy chủ S-Safe phải được gán một địa chỉ IP tĩnh để các đầu đọc thẻ và máy trạm luôn có thể tìm thấy đích đến. [cite: 491]
* **Mở cổng (Port Forwarding):** Đảm bảo tường lửa (Windows Firewall) hoặc các phần mềm diệt virus không chặn các cổng giao tiếp nội bộ của phần mềm (ví dụ: cổng mặc định `1433` của SQL Server). [cite: 492, 493]
* [cite_start]**Kiểm tra Ping:** Đảm bảo máy trạm client có thể ping đến địa chỉ IP tĩnh của máy chủ server mà không gặp lỗi. [cite: 494]

### [cite_start]3. Cơ sở dữ liệu & Bản quyền [cite: 495]
* **Tài khoản SQL Server:** Nếu hệ thống của bạn sử dụng SQL Server có sẵn của công ty, hãy chuẩn bị sẵn tài khoản quản trị cao nhất (username: `sa` và mật khẩu). [cite: 496]
* [cite_start]**Dịch vụ SQL Browser:** Đảm bảo dịch vụ *SQL Server Browser* trong mục Windows Services đang được bật và chạy. [cite: 497]
* [cite_start]**Bản quyền (License):** Chuẩn bị sẵn mã kích hoạt (activation key) hoặc file bản quyền do S-Safe cung cấp để kích hoạt ngay sau khi cài đặt. [cite: 498]

### [cite_start]4. Bộ cài đặt phần mềm [cite: 499]
* [cite_start]Tải xuống bộ cài đặt S-Safe mới nhất và giải nén hoàn toàn vào một thư mục trên ổ cứng (ví dụ: `D:\SSafe Setup`). [cite: 499] 
* *Lưu ý: Không chạy trực tiếp file setup.exe từ bên trong file nén (.zip/.rar).* [cite: 499]

---

## Tiến hành cài đặt [cite: 500]

1. Click chuột phải vào file `S-Safe Installer.exe`, chọn chạy với quyền quản trị (**Run as administrator**) và xác nhận để tiến hành cài đặt. [cite: 501]
2. Chọn đường dẫn cài đặt cho S-Safe, hoặc bấm **Next** để hệ thống tự động chọn đường dẫn mặc định. [cite: 502]
3. Tại màn hình cấu hình cơ sở dữ liệu (database configuration):
   * [cite_start]Nếu máy đã có sẵn hệ thống SQL: Hãy nhập IP của máy chủ và thông tin đăng nhập Super Admin (hoặc sử dụng Windows Authentication), sau đó bấm **"Check Connection"**. [cite: 505] [cite_start]Khi thông báo thành công hiện ra, bấm **Next** để tiếp tục. [cite: 505]
   * Nếu máy chưa có SQL: Hệ thống sẽ tự động cài đặt và cấu hình cơ sở dữ liệu tự động. [cite: 505]
4. Bấm **Install** để bắt đầu quá trình cài đặt hệ thống. [cite: 511]
5. Sau khi cài đặt thành công, hệ thống sẽ hiển thị một hộp thoại đăng ký cho lần đăng nhập đầu tiên để khởi tạo hệ thống. [cite: 515, 516]
   * [cite_start]Tên người dùng mặc định là `admin`. [cite: 517]
   * [cite_start]Tại đây, hãy nhập mật khẩu mới của bạn và xác nhận lại hai lần để hoàn tất. [cite: 517]

---

## [cite_start]Kích hoạt bản quyền (License) [cite: 518]

[cite_start]Sau khi đăng nhập vào hệ thống lần đầu tiên, toàn bộ hệ thống sẽ bị khóa theo mặc định. [cite: 520] [cite_start]Bạn cần kích hoạt bản quyền để mở khóa tất cả các chức năng vận hành. [cite: 521]

1. [cite_start]Vào mục **System Configuration** $\rightarrow$ Chọn **Export ID file** hoặc bấm **Copy**, sau đó gửi chuỗi thông tin này cho đội ngũ hỗ trợ kỹ thuật của SMT để nhận file bản quyền chính thức. [cite: 522]
2. [cite_start]Sau khi nhận được file bản quyền từ SMT, tại giao diện phần mềm chọn **Add New License** và tải file bản quyền được cung cấp lên hệ thống để kích hoạt. [cite: 524]