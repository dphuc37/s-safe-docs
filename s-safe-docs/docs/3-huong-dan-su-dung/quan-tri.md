---
id: quan-ly-tai-khoan
title: Quản lý Tài khoản
sidebar_label: Quản lý Tài khoản
sidebar_class_name: icon-tai-khoan
sidebar_position: 6
---

# Quản lý Tài khoản Quản trị viên

Module **Quản lý Tài khoản** là nơi người quản trị hệ thống (Super Admin) tạo và phân quyền truy cập phần mềm S-Safe cho các nhân sự vận hành. Hệ thống phân chia quyền hạn rõ ràng giúp đảm bảo an toàn thông tin và tránh các thao tác sai lệch từ người dùng không có chuyên môn.

## 1. Giao diện danh sách

Màn hình chính hiển thị danh sách toàn bộ các tài khoản đang có quyền đăng nhập vào phần mềm. Giao diện dạng bảng (Listview) trực quan với các cột thông tin chính:

* **Tên:** Tên hiển thị hoặc họ tên đầy đủ của người dùng.
* **Tên đăng nhập:** Tên tài khoản (Username) dùng để đăng nhập vào hệ thống.
* **Vai trò (Roles):** Cấp bậc quyền hạn của tài khoản (Ví dụ: `Admin` hoặc `Operator`).
* **Thao tác:** Chứa các nút chức năng để chỉnh sửa (Edit) hoặc xóa (Delete) tài khoản.

![Danh sách Tài khoản quản trị](/img/user-listview.png)

---

## 2. Thêm mới và Cấp quyền

Để tạo một tài khoản mới cho nhân viên vận hành, bạn nhấn vào nút **+ Thêm mới** ➕. Một hộp thoại pop-up sẽ xuất hiện yêu cầu điền các thông tin sau:

1. **ID:** Mã định danh của người dùng (Hệ thống có thể tự động cấp hoặc nhập tay).
2. **Vai trò (Role):** Đây là thiết lập quan trọng nhất, quyết định những tính năng mà tài khoản này được phép thao tác:
   * **Admin (Quản trị viên):** Có toàn quyền truy cập, chỉnh sửa phần cứng, xóa dữ liệu và tạo tài khoản khác.
   * **Operator (Người vận hành):** Chỉ có quyền xem trạng thái, giám sát cửa/camera, xuất báo cáo nhưng không được phép xóa thiết bị hay thay đổi cấu hình lõi.
3. **Tên hiển thị:** Nhập họ tên thật để dễ quản lý.
4. **Tên đăng nhập:** Viết liền không dấu (Ví dụ: *nguyenvana, admin_toanha*).
5. **Mật khẩu:** Khai báo mật khẩu mặc định cho người dùng.

![Hộp thoại thêm mới Tài khoản](/img/user-details.png)

:::warning[Bảo mật Tài khoản]
Tuyệt đối không cấp quyền **Admin** cho những nhân sự chỉ làm nhiệm vụ trực ban hoặc giám sát. Sau khi tạo tài khoản, hãy yêu cầu người dùng đổi mật khẩu trong lần đăng nhập đầu tiên để đảm bảo tính bảo mật.
:::

---

## 3. Chỉnh sửa và Xóa tài khoản

* **Sửa (Edit):** Nhấn vào biểu tượng 📝 (Màu xanh lá) tại cột thao tác để thay đổi thông tin hoặc reset mật khẩu nếu nhân viên quên.
* **Xóa (Delete):** Nhấn vào biểu tượng 🗑️ (Màu đỏ) để thu hồi vĩnh viễn quyền truy cập của tài khoản đó (Thường dùng khi nhân sự nghỉ việc).