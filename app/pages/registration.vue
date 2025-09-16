<template>
  <div id="register-page">
    <div class="r-left">
      <form
        id="registerform"
        class="registerform"
        method="POST"
        @submit="onSubmitHandler"
      >
        <dl id="groupUsername">
          <dt>Username :</dt>
          <dd>
            <input
              id="registerform_UserName"
              v-model="username"
              v-bind="usernameProps"
              class="trimVal alphanumeric"
              type="text"
              name="UserName"
              placeholder="Username"
              pattern=".{5,15}"
              maxlength="15"
              required
              title="Use 5 to 15 characters for username, username may contain only letters and numbers"
            />
            <div class="small" id="registerform_UserNameMsg"></div>
          </dd>
        </dl>

        <dl id="groupPassword">
          <dt>Password :</dt>
          <dd>
            <input
              id="registerform_Password"
              v-model="password"
              v-bind="passwordProps"
              class="Password trimVal alphapwd"
              type="password"
              name="Password"
              placeholder="Password"
              pattern=".{8,25}"
              maxlength="25"
              title="Use 8 or more characters with a mix of letters, numbers &amp; symbols"
              required
            />
            <div class="small" id="registerform_PasswordMsg"></div>
          </dd>
        </dl>

        <dl id="groupComfirmPassword">
          <dt>Confirm Password :</dt>
          <dd>
            <input
              id="registerform_CPassword"
              v-model="cPassword"
              v-bind="cPasswordProps"
              class="CPassword trimVal alphapwd"
              type="password"
              name="CPassword"
              placeholder="Confirm Password"
              pattern=".{8,25}"
              maxlength="25"
              required
            />
            <div class="small" id="registerform_CPasswordMsg"></div>
          </dd>
        </dl>
        <dl id="groupFullName">
          <dt>Full Name :</dt>
          <dd>
            <input
              id="registerform_FullName"
              v-model="fullName"
              v-bind="fullNameProps"
              type="text"
              name="FullName"
              placeholder="Full Name"
              pattern=".{1,}"
              title="Use 5 to 15 characters for Fullname"
              required
            />
            <div class="small" id="registerform_FullNameDescription">
              Real Name for withdrawals verify
            </div>
            <div class="small" id="registerform_FullNameMsg"></div>
          </dd>
        </dl>
        <dl id="groupCurrency">
          <dt>Currency :</dt>
          <dd>
            <select
              id="registerform_Currency"
              v-model="currency"
              v-bind="currencyProps"
              name="Currency"
              required
              class="selCurrencyCountryCode"
            >
              <option value="">-- Select a Currency --</option>
              <option value="MYR">MYR</option>
              <option value="SGD">SGD</option>
              <option value="AUD">AUD</option>
            </select>
          </dd>
        </dl>
        <dl id="groupMobileNumber">
          <dt>Mobile :</dt>
          <dd>
            <input
              id="registerform_Mobile"
              v-model="mobile"
              v-bind="mobileProps"
              class="numbers"
              type="text"
              name="Mobile"
              placeholder="Mobile Number"
              minlength="8"
              required
            />
          </dd>
        </dl>
        <dl id="groupAffiliate">
          <dt>Affiliate / ReferralCode :</dt>
          <dd>
            <input
              id="registerform_PromotionCode"
              v-model="promotionCode"
              v-bind="promotionCodeProps"
              type="text"
              name="PromotionCode"
              placeholder="Affiliate / ReferralCode"
            />
          </dd>
        </dl>
        <dl id="groupVerifyCode">
          <dt>VerifyCode :</dt>
          <dd>
            <input
              id="registerform_varifycode"
              v-model="varifyCode"
              v-bind="varifyCodeProps"
              class="numbers"
              type="text"
              name="VarifyCode"
              placeholder="VerifyCode"
              pattern=".{4,4}"
              title="Key In 4 number for Verify Code"
              required
            />
          </dd>
          <dd>
            <img
              id="regcaptcha"
              style="cursor: pointer"
              @click="onClickCaptcha"
            />
          </dd>
        </dl>
        <dl id="groupSubmit">
          <dt></dt>
          <dd style="text-align: center">
            <input
              type="submit"
              value="Register Now"
              id="registerform_btnSubmit"
            />
          </dd>
        </dl>
      </form>
      <div class="agree-text">
        By clicking the <span class="greentext">REGISTER</span> button, I hereby
        acknowledge that I am above 18 years old and have read and accepted your
        <a href="#" target="_self">Terms &amp; Conditions</a>
      </div>
    </div>

    <div class="r-right">
      <div class="fun-begin">
        <div class="regtext-1">TONY99 easy play easy win!</div>
        <ol class="fun">
          <li>Welcome Bonus 150% (Slot Game Only)</li>
          <li>
            Promotions are subject to availability. Applies to all slot machines
          </li>
          <li>
            All customer offers are limited to one per person. Meaning one per
            family, household address, IP address, email address, telephone
            number, credit or debit card and/or e-payment account, or shared
            computer (e.g. school, public library or workplace).
          </li>
          <li>
            Tony99 reserves the right to modify, cancel, suspend or terminate
            the promotion and/or change the terms of the promotion at any time
            without prior notice.
          </li>
          <li>
            Tony99 reserves the right to confiscate all the winning/bonus from
            any customer or group of customers if found to be a breach of any
            clause at any time and at our sole and absolute discretion.
          </li>
          <li>
            Participating members must accept and comply with all the terms
            mentioned above as well as all relevant and rules and regulations
            stated on the Tony99 website.
          </li>
          <li>TOPUP MAXIMUM BONUS IS MYR1999</li>
          <li>
            Example: <br />
            Deposit MYR 100 + Bonus 150% = MYR 250
          </li>
          <li>
            Rollover :<br />
            MYR 250 x 18 Rollover = MYR 4500
          </li>
        </ol>
      </div>
      <div class="reg-feature-banners">
        <img src="~/assets/images/registration/150welcomebonus.webp" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { defineField, handleSubmit } = useForm({
  initialValues: {
    username: null,
    password: null,
    cPassword: null,
    fullName: null,
    currency: "",
    mobile: null,
    promotionCode: route.params.id || null,
    varifyCode: null,
  },
});

const [username, usernameProps] = defineField("username");
const [password, passwordProps] = defineField("password");
const [cPassword, cPasswordProps] = defineField("cPassword");
const [fullName, fullNameProps] = defineField("fullName");
const [currency, currencyProps] = defineField("currency");
const [mobile, mobileProps] = defineField("mobile");
const [promotionCode, promotionCodeProps] = defineField("promotionCode");
const [varifyCode, varifyCodeProps] = defineField("varifyCode");

const onSubmitHandler = handleSubmit(async (values) => {
  try {
    const res = await $fetch("/api/register", {
      method: "POST",
      body: values,
    });
    const json = JSON.parse(res);
    if (json.ErrorCode === 0) window.location.href = json.Redirect;
    else {
      if (json.ErrorCode === -9) alert("Username already exists.");
      else alert(json.Text || "Registration failed, please try again.");
      onClickCaptcha(); // Refresh captcha on error
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred while register.");
    onClickCaptcha(); // Refresh captcha on error
  }
});

function onClickCaptcha() {
  const captcha = document.getElementById("regcaptcha");
  if (captcha) {
    (captcha as any).src = `/api/captcha?${Date.now()}`;
  }
}

onMounted(() => {
  onClickCaptcha();
});
</script>

<style scoped lang="scss">
#register-page {
  display: grid;
  grid-template-columns: 45% 55%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(97deg, #bf984b, #ffde99);

  .r-left {
    padding: 20px;
    font-size: 15px;

    dl {
      margin-top: 0;
      margin-bottom: 20px;

      dd,
      dt {
        line-height: 1.42857143;
      }

      dt {
        font-weight: 700;
      }

      dd {
        margin-left: 0;
      }

      input,
      select {
        width: 100%;
        background: #323232;
        color: #fff;
        border: none;
        height: 40px;
        padding: 4px 15px 4px 50px;
        border-radius: 8px;
        &::placeholder {
          color: #cbcbcb;
        }
      }

      input#registerform_UserName {
        background-image: url(~/assets/images/registration/username.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_Password {
        background-image: url(~/assets/images/registration/password.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_CPassword {
        background-image: url(~/assets/images/registration/cpassword.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_FullName {
        background-image: url(~/assets/images/registration/pencil.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      select#registerform_Currency {
        background-image: url(~/assets/images/registration/ccurrency.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_Mobile {
        background-image: url(~/assets/images/registration/phone.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_PromotionCode {
        background-image: url(~/assets/images/registration/affiliate.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
      }

      input#registerform_varifycode {
        background-image: url(~/assets/images/registration/captcha.png);
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: left 16px center;
        width: calc(100% - 98px);
        float: left;
      }

      img#regcaptcha {
        position: relative;
        width: 90px;
        height: 40px;
        border-radius: 8px;
        margin: 0 auto 0 8px;
        padding: 0;
        border: 0;
      }

      input#registerform_btnSubmit {
        width: auto;
        background: #6b5602;
        border: none;
        border-radius: 45px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        min-width: 220px;
        height: 40px;
        padding: 2px 15px;
        transition: 0.2s;
        -webkit-appearance: button;
        cursor: pointer;
      }
    }

    .agree-text {
      font-size: 14px;
      color: #535e76;

      .greentext,
      a {
        color: #ffffff;
      }
    }

    .small {
      color: #ff0f0f;
      font-size: 85%;
    }
  }

  .r-right {
    background: #323232ff;
    padding: 30px 20px 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

    .fun-begin {
      padding: 0 5px;

      .regtext-1 {
        color: #fff;
        font-weight: 700;
        font-size: 24px;
      }

      ol.fun {
        padding: 10px 0 0px 17px;
        font-size: 17px;
        line-height: 1.2;
        li {
          padding-bottom: 10px;
        }
      }
    }

    .reg-feature-banners {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px;
      justify-items: center;

      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 991px) {
  #register-page {
    grid-template-columns: auto;
  }
}
</style>
