# Build Windows EXE - Aeon - Tu Tiên

## Cách dùng nhanh

1. Upload thư mục `WINDOWNS` và file `.github/workflows/build-exe.yml` lên gốc repo GitHub.
2. Vào tab **Actions**.
3. Chọn **Build Windows EXE**.
4. Bấm **Run workflow**.
5. Build xanh thì tải artifact tên **Aeon - Tu Tiên**.
6. Giải nén artifact ra sẽ có file `.exe`.

## File EXE tạo ra

Workflow sẽ build 2 dạng nếu Electron Builder chạy đủ:

- `Aeon - Tu Tiên Setup 1.0.1.exe`: bản cài đặt.
- `Aeon - Tu Tiên Portable 1.0.1.exe`: bản chạy trực tiếp.

## Lưu ý

- Icon Windows đã nằm tại `WINDOWNS/buildResources/icon.ico`.
- Tên app/productName là `Aeon - Tu Tiên`.
- Artifact GitHub cũng tên `Aeon - Tu Tiên`.
- Nếu Windows Defender hỏi cảnh báo, đó là vì EXE chưa ký số certificate. Bản test/dev thường sẽ bị cảnh báo.
