# Build APK cho Aeon - Tu Tiên

Project này là bản Cordova/GDevelop export. Cách nhẹ nhất để build APK mà không cần cài Android Studio trên máy là dùng GitHub Actions.

## Cách build APK trên GitHub

1. Tạo repo GitHub mới.
2. Upload toàn bộ file/thư mục trong project này lên repo.
3. Vào tab **Actions**.
4. Chọn workflow **Build Android APK**.
5. Bấm **Run workflow**.
6. Sau khi chạy xong, mở job build và tải artifact **Aeon-Tu-Tien-debug-apk**.

APK debug sẽ nằm trong artifact, thường là file dạng:

```txt
app-debug.apk
```

## Build local trên Windows nếu có Android Studio

Cài sẵn:
- Node.js LTS
- Java 17
- Android Studio / Android SDK với Android API 36

Sau đó mở PowerShell tại thư mục project và chạy:

```powershell
npm install
npx cordova platform add android@15.0.0
npx cordova build android --debug -- --packageType=apk
```

APK ra ở:

```txt
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

## Ghi chú

- Đây là APK debug để cài thử trực tiếp trên Android.
- Nếu cần bản release để đăng Play Store thì nên build AAB và ký app bằng keystore riêng.
