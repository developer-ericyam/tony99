<template>
  <div class="header-container">
    <div class="header-left-wrapper">
      <div class="logo">
        <a href="/en/index">
          <img src="~/assets/images/logo.png" />
        </a>
      </div>
    </div>
    <div class="header-right-wrapper">
      <div class="hdright-wrap">
        <div class="top-menu">
          <ul>
            <li>
              <a
                href="https://t.me/tony99asia_bot"
                target="_blank"
                class="ol-href"
              >
                <img
                  src="~/assets/images/toolbar/download.png"
                  alt="TelegramBot"
                />
                ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ
              </a>
            </li>
            <li>
              <a href="http://tony88m.com" target="_blank" class="ol-href">
                <img
                  src="~/assets/images/toolbar/gif-movie.gif"
                  alt="Free Watch Movie"
                />
                ꜰʀᴇᴇ ᴍᴏᴠɪᴇ
              </a>
            </li>
            <li>
              <a href="/en/live-tv" class="ol-href">
                <img
                  src="~/assets/images/toolbar/gif-soccer.gif"
                  alt="Sport Live TV"
                />
                ꜱᴘᴏʀᴛ ᴛᴠ
              </a>
            </li>
            <li>
              <a target="_blank" class="ol-href"
                ><img
                  src="~/assets/images/toolbar/currency-icon.webp"
                  alt="Currency USDT to MYR"
                />ᴜꜱᴅᴛ 𝟣 = ᴍʏʀ 𝟦.𝟥𝟧, ꜱɢᴅ 𝟣.𝟥𝟤, ᴀᴜᴅ 𝟣.𝟨𝟢</a
              >
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    class="enflag"
                    src="~/assets/images/toolbar/language-icon-my.png"
                  /><i class="glyphicon glyphicon-chevron-down"></i>
                </button>
                <!-- <div class="dropdown-content">
                  <div class="ds-flex">
                    <img
                      class="flag"
                      src="~/assets/images/toolbar/mys-flag.webp"
                    />
                    <div class="dropdown-content-box">
                      <div class="dropdown-content-language">
                        <a class="active" href="/en/index">English</a>
                        <a href="/cn/index">中文</a>
                        <a href="/my/index">Malay</a>
                      </div>
                    </div>
                  </div>
                  <div class="ds-flex">
                    <img
                      class="flag"
                      src="~/assets/images/toolbar/sgpore-flag.webp"
                    />
                    <div class="dropdown-content-box">
                      <div class="dropdown-content-language">
                        <a href="https://tony99sgd.com/en/index">English</a>
                        <a href="https://tony99sgd.com/cn/index">中文</a>
                        <a href="https://tony99sg.com/my/index">Malay</a>
                      </div>
                    </div>
                  </div>
                  <div class="ds-flex">
                    <img
                      class="flag"
                      src="~/assets/images/toolbar/aust-flag.webp"
                    />
                    <div class="dropdown-content-box">
                      <div class="dropdown-content-language">
                        <a href="https://tony99aud.com/en/index">English</a>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </li>
          </ul>
        </div>
        <div class="logreg-wrap">
          <button class="login-btn" @click="open = true">Login</button>
          <button
            class="register-btn"
            @click="router.push(`/${locale}/registration`)"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    <a-modal
      v-model:open="open"
      class="login-modal"
      :width="600"
      transition-name=""
      :footer="null"
      style="top: 30px"
    >
      <div class="login-logo">
        <img src="~/assets/images/logo-login.png" alt="logo" />
      </div>
      <form @submit.prevent="onSubmitHandler">
        <div class="input-wrapper">
          <input
            v-model="username"
            id="username"
            required
            placeholder="Username"
            maxlength="15"
          />
        </div>
        <div class="input-wrapper">
          <input
            v-model="password"
            id="password"
            type="password"
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <div class="regnow-text">
        Do not have an account yet? Click
        <NuxtLinkLocale to="/registration" @click="open = false"
          >here</NuxtLinkLocale
        >
        to register now!
      </div>
      <div class="reg-line login"></div>
      <div class="note-issues">
        If you encounter any issues while logging in, <br />Please contact our
        <span class="greentext">Customer Service</span> for further assistance
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();

const open = ref(false);
const username = ref("");
const password = ref("");

const onSubmitHandler = async (e: Event) => {
  e.preventDefault();
  // Handle login logic here
  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: {
        username: username.value,
        password: password.value,
      },
    });
    const json = JSON.parse(res);
    if (json.Login === 0) window.location.href = json.Redirect;
    else alert(json.Text || "Login failed, please try again.");
  } catch (err) {
    console.log(err);
    alert("An error occurred while logging in.");
  }
};
</script>

<style scoped lang="scss">
.header-container {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;

  .header-left-wrapper {
    .logo {
      img {
        max-height: 55px;
      }
    }
  }

  .header-right-wrapper {
    img {
      width: 25px;
      height: 25px;
    }

    .hdright-wrap {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: 3px;

        li {
          display: block;
          padding: 5px;

          a {
            display: flex;
            align-items: center;
            color: goldenrod;
            font-size: 0.7vw;

            img {
              height: 25px;
              margin-right: 5px;
            }
          }
        }
      }
    }

    button {
      border: none;
      cursor: pointer;
      &.login-btn {
        position: relative;
        min-width: 80px;
        background: #6b5602;
        height: 35px;
        border-radius: 5px;
        margin: 0 auto 0 8px;
        color: #c49c4dff;
        font-size: 14px;
        padding: 2px 10px;
      }
      &.register-btn {
        position: relative;
        min-width: 80px;
        background: #c1a447ff;
        height: 35px;
        border-radius: 5px;
        margin: 0 auto 0 8px;
        color: #ffffff;
        font-size: 14px;
        padding: 2px 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.dropbtn {
  background: transparent;
}

.login-modal {
  .ant-modal-content {
    background: linear-gradient(45deg, #a97f2a, #312503);
    border: none;
    color: #d3d3d3;
    padding: 25px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    outline: 0;

    svg {
      fill: #fff;
    }

    .login-logo {
      padding-bottom: 30px;
      img {
        max-height: unset;
        width: 60%;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      width: 100%;
      padding-bottom: 40px;

      .input-wrapper {
        display: flex;
        position: relative;
        input {
          flex: 1;
          border: 0;
          font-size: 15px;
          padding: 5px 50px;
          background: #323232;
          border-bottom: 1px solid #c39900;
          border-radius: 8px;
          color: #fff;
          margin-top: 15px;
          margin-bottom: 20px;
          outline: none;
          height: 29px;

          &::placeholder {
            color: #cbcbcb;
          }
        }

        #username {
          background-image: url(~/assets/icons/username.webp);
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: left 16px center;
        }

        #password {
          background-image: url(~/assets/icons/password.webp);
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: left 16px center;
        }
      }

      button {
        cursor: pointer;
        background: #6b5602;
        border: none;
        border-radius: 45px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 15px;
        margin-bottom: 20px;
        min-width: 220px;
        height: 40px;
        padding: 2px 15px;
        transition: 0.2s;
      }
    }

    .regnow-text {
      font-size: 16px;
      a {
        color: #c49c4d;
      }
    }

    .reg-line.login {
      background: #f2e890;
      height: 1px;
      width: 100%;
      margin: 20px 0 20px;
    }

    .note-issues {
      font-size: 13px;
      max-width: 400px;
      margin: 0 auto;
      line-height: 15.5px;
      .greentext,
      .agree-text a {
        color: #ffffff;
      }
    }
  }
}
</style>
