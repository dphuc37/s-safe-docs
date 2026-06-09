---
id: installation
title: Hướng dẫn cài đặt
sidebar_class_name: icon-cai-dat
---

# Hướng dẫn cài đặt S-Safe

## Chuẩn bị trước khi cài đặt
Trước khi tiến hành cài đặt S-Safe Server và Client, vui lòng kiểm tra và hoàn thành các mục dưới đây để đảm bảo quá trình cài đặt diễn ra nhanh chóng và không gặp lỗi.

### 1. Yêu cầu hệ thống & Môi trường
* **Phù hợp phần cứng:** Đảm bảo máy chủ (Server) và máy trạm (Client) đáp ứng các yêu cầu cấu hình tối thiểu trong tài liệu Yêu cầu hệ thống S-Safe.
* **Quyền Admin:** Bạn phải đăng nhập vào hệ điều hành bằng tài khoản có quyền Quản trị viên (Administrator) để tiến hành cài đặt.
* **Windows Update:** Khuyến nghị chạy Windows Update để cài đặt đầy đủ các thư viện nền tảng cần thiết (chẳng hạn như .NET Framework 4.8 hoặc C++ Redistributable).
* **Chế độ nguồn (Power Plan):** Thiết lập chế độ nguồn của máy chủ thành *High Performance* (Hiệu suất cao) và tắt hoàn toàn chế độ *Sleep/Hibernate* (Ngủ/Ngủ đông) để tránh làm gián đoạn kết nối của hệ thống kiểm soát ra vào.

### 2. Cấu hình mạng và Tường lửa
* **IP tĩnh:** Máy chủ S-Safe phải được gán một địa chỉ IP tĩnh để các đầu đọc thẻ và máy trạm luôn có thể tìm thấy đích đến.
* **Mở cổng (Port Forwarding):** Đảm bảo tường lửa (Windows Firewall) hoặc các phần mềm diệt virus không chặn các cổng giao tiếp nội bộ của phần mềm (ví dụ: cổng mặc định `1433` của SQL Server).
* **Kiểm tra Ping:** Đảm bảo máy trạm client có thể ping đến địa chỉ IP tĩnh của máy chủ server mà không gặp lỗi.

### 3. Cơ sở dữ liệu & Bản quyền
* **Tài khoản SQL Server:** Nếu hệ thống của bạn sử dụng SQL Server có sẵn của công ty, hãy chuẩn bị sẵn tài khoản quản trị cao nhất (username: `sa` và mật khẩu).
* **Dịch vụ SQL Browser:** Đảm bảo dịch vụ *SQL Server Browser* trong mục Windows Services đang được bật và chạy.
* **Bản quyền (License):** Chuẩn bị sẵn mã kích hoạt (activation key) hoặc file bản quyền do S-Safe cung cấp để kích hoạt ngay sau khi cài đặt.

### 4. Bộ cài đặt phần mềm
* Tải xuống bộ cài đặt S-Safe mới nhất và giải nén hoàn toàn vào một thư mục trên ổ cứng (ví dụ: `D:\SSafe Setup`).
* *Lưu ý: Không chạy trực tiếp file setup.exe từ bên trong file nén (.zip/.rar).*

---

## Tiến hành cài đặt

1. Click chuột phải vào file `S-Safe Installer.exe`, chọn chạy với quyền quản trị (**Run as administrator**) và xác nhận để tiến hành cài đặt.
2. Chọn đường dẫn cài đặt cho S-Safe, hoặc bấm **Next** để hệ thống tự động chọn đường dẫn mặc định.

![Chọn đường dẫn cài đặt](/img/installation-1.png)

3. Tại màn hình cấu hình cơ sở dữ liệu (database configuration):
   * Nếu máy đã có sẵn hệ thống SQL: Hãy nhập IP của máy chủ và thông tin đăng nhập Super Admin (hoặc sử dụng Windows Authentication), sau đó bấm **Check Connection**. Khi thông báo thành công hiện ra, bấm **Next** để tiếp tục.
   * Nếu máy chưa có SQL: Hệ thống sẽ tự động cài đặt và cấu hình cơ sở dữ liệu tự động.

![Cấu hình Database](/img/installation-2.png)

4. Bấm **Install** để bắt đầu quá trình cài đặt hệ thống.

![Bắt đầu cài đặt](/img/installation-3.png)

5. Chờ quá trình cài đặt chạy hoàn tất, bấm **Finish** để đóng cửa sổ Setup Wizard.

![Hoàn tất cài đặt](/img/installation-4.png)

6. Sau khi cài đặt thành công, mở phần mềm lên. Hệ thống sẽ hiển thị một hộp thoại đăng ký cho lần đăng nhập đầu tiên để khởi tạo hệ thống.
   * Tên người dùng mặc định là `admin`.
   * Tại đây, hãy nhập mật khẩu mới của bạn và xác nhận lại hai lần để hoàn tất.

![Khởi tạo mật khẩu Admin](/img/installation-5.png)

---

## Kích hoạt bản quyền (License)

Sau khi đăng nhập vào hệ thống lần đầu tiên, toàn bộ hệ thống sẽ bị khóa theo mặc định. Bạn cần kích hoạt bản quyền để mở khóa tất cả các chức năng vận hành.

1. Vào mục **System Configuration** Chọn **Export ID file** hoặc bấm **Copy**, sau đó gửi chuỗi thông tin này cho đội ngũ hỗ trợ kỹ thuật của SMT để nhận file bản quyền chính thức.

![Xuất mã ID máy chủ](/img/installation-6.png)

2. Sau khi nhận được file bản quyền từ SMT, tại giao diện phần mềm chọn **Add New License** và tải file bản quyền được cung cấp lên hệ thống để kích hoạt.

![Kích hoạt License thành công](/img/installation-7.png)