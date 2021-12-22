import WhatsappIcon from '@svg/whatsapp';

const MessageUs = () => {
  return (
    <div className="whts_app">
      <button className="btn btn-outline-secondary fw_bold whts_app_btn">
        <span className="me-2">
          <WhatsappIcon />
        </span>
        Message Us
      </button>
    </div>
  );
};

export default MessageUs;
