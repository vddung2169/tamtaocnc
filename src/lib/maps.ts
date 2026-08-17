/**
 * Google Maps không cần API key: dùng dạng nhúng `output=embed` và link chia sẻ chuẩn.
 * Chỉ cần chuỗi địa chỉ, không phải cấu hình gì thêm khi deploy.
 */

/** URL nhúng vào <iframe> để hiện bản đồ ngay trên trang. */
export function mapEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=vi&z=16&output=embed`;
}

/** Mở địa điểm trong app Google Maps hoặc tab mới. */
export function mapPlaceUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Chỉ đường từ vị trí hiện tại của khách tới địa chỉ. */
export function mapDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
