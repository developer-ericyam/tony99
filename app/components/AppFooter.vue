<template>
  <div class="footer-sec">
    <div class="footer-btm-wrapper">
      <div class="footer-column">
        <div class="ft-title">Certification &amp; Security by :</div>
        <div class="ft-icon">
          <img
            src="~/assets/images/footer/eighteen.png"
            alt="Certification Icon"
          />
          <img src="~/assets/images/footer/pagcor.png" alt="Pagcor Logo" />
          <img src="~/assets/images/footer/Gaming.png" alt="GamingCuracao" />
          <img src="~/assets/images/footer/godaddy.png" alt="Godaddy" />
          <img src="~/assets/images/footer/payouts.png" alt="Payouts" />
        </div>
      </div>
      <div class="footer-column">
        <div class="ft-title">Deposit Methods :</div>
        <div class="ft-payment">
          <img src="~/assets/images/footer/vaderpay.png" alt="Deposit Method" />
          <img src="~/assets/images/footer/SKL99s.png" alt="SKL Payment" />
          <img src="~/assets/images/footer/TETHER..png" alt="Crypto" />
          <img src="~/assets/images/footer/g2p.png" alt="g2point" />
        </div>
      </div>
      <div class="footer-column">
        <div class="ft-title">Connect &amp; Follow with Us :</div>
        <div class="ft-social">
          <a
            href="http://webt99.wasap.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~/assets/images/footer/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/footer/wechat.png" alt="WeChat" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/footer/livechat.png" alt="Live Chat" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/footer/facebook.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="~/assets/images/footer/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      Copyright © 2025 TONY99. All Rights Reserved.
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-sec {
  position: relative;
  padding: 15px 20px 10px;
  color: #aaa;

  .footer-btm-wrapper {
    display: grid;
    grid-template-columns: 35% 35% 30%;
    font-size: 13px;
    border-bottom: 1px dashed #f3f5f6;
    padding: 20px 0;

    .footer-column {
      position: relative;
      border-right: 1px dashed #f3f5f6;
      padding: 0px 10px;

      &:last-child {
        border-right: none;
      }

      .ft-title {
        color: #aaa;
        font-weight: 400;
        margin-bottom: 8px;
      }

      .ft-icon img {
        margin: 5px 5px;
      }

      .ft-payment img {
        max-height: 25px;
        margin: 5px 3px;
      }

      .ft-social img {
        max-height: 45px;
        margin: 5px 2px;
      }
    }
  }

  .footer-copyright {
    font-size: 13px;
    text-align: center;
    padding: 10px 0 0;
    color: #aaa;
  }
}
</style>
