import WhatsappIcon from '@svg/whatsapp';

const MessageUs = () => {
  return (
    <div class="whts_app">
      <button class="btn btn-outline-secondary fw_bold whts_app_btn">
        <span class="me-2">
          <WhatsappIcon />
        </span>
        Message Us
      </button>
    </div>
  );
};

export default MessageUs;
