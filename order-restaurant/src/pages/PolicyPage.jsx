import React from "react";
import { PolicySection } from "../components/PolicySection";

export const PolicyPage = () => {
  const servicePolicies = [
    {
      title: "Chính Sách Đổi - Trả - Hoàn Tiền",
      content: `• Quý khách cần xuất trình hóa đơn khi đổi trả hàng
• Thời gian đổi trả: trong vòng 3 ngày kể từ ngày mua
• Sản phẩm phải còn nguyên vẹn, chưa qua sử dụng
• Không áp dụng đổi trả với sản phẩm khuyến mãi
• Hoàn tiền trong 7-10 ngày làm việc qua phương thức thanh toán ban đầu`,
    },
    {
      title: "Chính Sách Bảo Hành - Bồi Hoàn",
      content: `• Áp dụng bảo hành với các món ăn gặp sự cố chất lượng
• Quý khách cần thông báo trong vòng 1 giờ sau khi nhận món
• Bồi hoàn 100% hoặc thay thế món tương đương nếu đúng lỗi của nhà hàng
• Không áp dụng cho các trường hợp khách không hài lòng do khẩu vị
• Mọi phản ánh xin vui lòng liên hệ hotline hỗ trợ`,
    },
    {
      title: "Chính Sách Vận Chuyển",
      content: `• Giao hàng trong bán kính 5km tính từ nhà hàng
• Miễn phí giao hàng cho đơn từ 500,000 VNĐ
• Phí vận chuyển tùy thuộc vào khoảng cách và đơn vị giao hàng
• Thời gian giao hàng trung bình từ 30–60 phút
• Khách kiểm tra món ăn trước khi nhận hàng`,
    },
    {
      title: "Điều Khoản Sử Dụng",
      content: `• Việc truy cập và sử dụng website đồng nghĩa với việc quý khách đồng ý các điều khoản
• Không sử dụng website vào mục đích gian lận hoặc vi phạm pháp luật
• Nhà hàng có quyền chỉnh sửa nội dung mà không cần báo trước
• Mọi hành vi xâm nhập trái phép sẽ bị xử lý theo pháp luật
• Điều khoản có thể thay đổi theo từng thời điểm`,
    },
    {
      title: "Chính Sách Bảo Mật Thông Tin Cá Nhân",
      content: `• Thu thập thông tin cá nhân chỉ nhằm mục đích hỗ trợ đặt bàn và phục vụ khách hàng
• Không chia sẻ thông tin cho bên thứ ba nếu không có sự đồng ý
• Khách hàng có quyền yêu cầu chỉnh sửa hoặc xóa thông tin cá nhân
• Thông tin được lưu trữ bảo mật bằng hệ thống mã hóa
• Cam kết tuân thủ theo Luật An Toàn Thông Tin Việt Nam`,
    },
    {
      title: "Chính Sách Bảo Mật Thanh Toán",
      content: `• Giao dịch thanh toán được thực hiện qua cổng thanh toán bảo mật (SSL/TLS)
• Không lưu trữ thông tin thẻ thanh toán trên hệ thống
• Hỗ trợ thanh toán qua các cổng đáng tin cậy như Momo, ZaloPay, VNPay
• Mọi rủi ro phát sinh từ phía người dùng sẽ không thuộc trách nhiệm của nhà hàng
• Liên hệ ngay bộ phận hỗ trợ nếu có sự cố liên quan đến thanh toán`,
    },
    {
      title: "Chính Sách Đặt Bàn",
      content: `• Quý khách vui lòng đặt bàn trước ít nhất 30 phút
• Đối với nhóm từ 8 người trở lên, vui lòng đặt bàn trước 24 tiếng
• Nhà hàng chỉ giữ bàn trong vòng 15 phút kể từ giờ đặt
• Để đảm bảo chất lượng phục vụ, thời gian dùng bữa tối đa là 2 giờ
• Có thể đặt bàn qua điện thoại, website hoặc trực tiếp tại nhà hàng`,
    },
    {
      title: "Chính Sách Thanh Toán",
      content: `• Nhà hàng chấp nhận thanh toán bằng tiền mặt và thẻ
• Hỗ trợ thanh toán qua ví điện tử: Momo, ZaloPay, VNPay
• Không chấp nhận thanh toán bằng séc cá nhân
• Hóa đơn VAT được xuất theo yêu cầu
• Phí phục vụ 10% áp dụng cho tất cả các hóa đơn`,
    },
    {
      title: "Chính Sách Hủy Đặt Bàn",
      content: `• Quý khách có thể hủy đặt bàn miễn phí trước 2 tiếng
• Hủy đặt bàn trong vòng 2 tiếng: phí 50% giá trị đặt cọc
• Không xuất hiện mà không thông báo: phí 100% giá trị đặt cọc
• Đối với sự kiện lớn: chính sách hủy riêng sẽ được thông báo khi đặt bàn
• Liên hệ hotline để thực hiện việc hủy đặt bàn`,
    },
    {
      title: "Quy Định Về Trang Phục",
      content: `• Nhà hàng yêu cầu trang phục lịch sự, gọn gàng
• Không được mặc quần đùi, áo ba lỗ, dép tông
• Trang phục phù hợp với không gian fine dining
• Trẻ em dưới 12 tuổi được linh hoạt về trang phục
• Nhà hàng có quyền từ chối phục vụ nếu trang phục không phù hợp`,
    },
    {
      title: "Chính Sách Thực Phẩm & Đồ Uống",
      content: `• Không cho phép mang thực phẩm và đồ uống từ bên ngoài vào
• Trường hợp đặc biệt (sinh nhật, kỷ niệm): phí phục vụ 100,000 VNĐ
• Nhà hàng cam kết sử dụng nguyên liệu tươi ngon, an toàn
• Thông báo dị ứng thực phẩm khi đặt bàn để được hỗ trợ tốt nhất
• Menu chay và halal có sẵn theo yêu cầu`,
    },
    {
      title: "Chính Sách Trẻ Em",
      content: `• Chào đón trẻ em mọi lứa tuổi
• Ghế cao cho trẻ em có sẵn (số lượng có hạn)
• Menu trẻ em với các món ăn phù hợp
• Khu vực chơi cho trẻ em tại tầng 2
• Phụ huynh vui lòng giám sát trẻ để đảm bảo an toàn`,
    },
  ];

  return (
    <div className="!max-w-4xl mx-auto px-4 !py-8 !scroll-smooth">
      <h1 className="!text-3xl !text-amber-600 !font-bold !mb-6 text-center uppercase">
        Chính sách & Điều khoản
      </h1>
      <PolicySection items={servicePolicies} />
    </div>
  );
};
