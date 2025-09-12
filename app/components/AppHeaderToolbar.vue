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
          <button class="login-btn" data-toggle="modal" data-target="#login">
            Login
          </button>
          <button
            class="register-btn"
            onclick="location.href='/en/registration'"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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
