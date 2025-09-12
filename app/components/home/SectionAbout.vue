<template>
  <div class="section">
    <div class="vid-box">
      <div class="wrapper">
        <iframe
          src="https://www.youtube.com/embed/jknd-krtYLY?si=ZNha8E0-4rnfr73N"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allowfullscreen="true"
        />
      </div>
    </div>
    <div class="winner-box">
      <div class="fgtitle">
        <span class="hot-icon">
          <img src="~/assets/images/marquee/top/hot-lottery.png" />
        </span>
        Top Winner
      </div>
      <div class="win-wrapper">
        <div class="win-table">
          <table class="table table-striped table-condensed">
            <thead>
              <tr>
                <th>Player</th>
                <th>Games</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>*Chua****</td>
                <td>
                  <img src="~/assets/icons/menu-sports.png" />
                </td>
                <td class="text-right">SGD 89,893</td>
              </tr>
              <tr>
                <td>*Chua****</td>
                <td>
                  <img src="~/assets/icons/menu-casino.png" />
                </td>
                <td class="text-right">SGD 89,893</td>
              </tr>
              <tr>
                <td>*Chua****</td>
                <td>
                  <img src="~/assets/icons/menu-slots.png" />
                </td>
                <td class="text-right">SGD 89,893</td>
              </tr>
              <tr>
                <td>*Chua****</td>
                <td>
                  <img src="~/assets/icons/menu-slots.png" />
                </td>
                <td class="text-right">SGD 89,893</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <div class="top3">
        <div class="t3-box">
          <img src="~/assets/images/marquee/top/top-winner-1.webp" />
          <span class="t3-title">Sports</span>
          <p>
            *Chua****<br />
            SGD 89,893.35
          </p>
        </div>
        <div class="t3-box">
          <img src="~/assets/images/marquee/top/top-winner2.webp" />
          <span class="t3-title">Live Casino</span>
          <p>
            *Ddlp****<br />
            AUD 65,700
          </p>
        </div>
        <div class="t3-box">
          <img src="~/assets/images/marquee/top/top-winner3.webp" />
          <span class="t3-title">Slots</span>
          <p>
            *Svm****<br />
            MYR 128,500
          </p>
        </div>
      </div>
      <div class="game-winner"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  border-width: 0px;
  border-style: solid;
  border-color: purple;
  border-image: initial;
  margin: 40px 0px;
  overflow: hidden;

  .vid-box {
    flex: 0 0 50%;

    .wrapper {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 25px;
      height: 0px;
      iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .winner-box {
    width: 100%;
    min-width: 0px;

    .fgtitle {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      .hot-icon {
        margin-right: 7px;

        img {
          height: 25px;
          filter: brightness(8) grayscale(0.5) hue-rotate(101deg) contrast(0.5);
        }
      }
    }

    .top3 {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .t3-box {
        position: relative;
        flex-basis: 32%;
        background: rgb(50, 50, 50);
        border-radius: 10px;
        padding: 10px 15px;

        &:nth-child(1) span {
          color: rgb(128, 100, 255);
        }
        &:nth-child(2) span {
          color: rgb(255, 229, 100);
        }
        &:nth-child(3) span {
          color: rgb(0, 175, 193);
        }

        img {
          position: absolute;
          bottom: 0px;
          max-width: unset;
          width: 75%;
          right: -20px;
        }

        .t3-title {
          font-weight: bold;
          margin-bottom: 4px;
          display: block;
          font-size: 18px;
        }

        p {
          margin: 0px;
          line-height: 1.2;
        }
      }
    }

    .win-wrapper {
      display: flex;
      width: 100%;
      gap: 30px;

      .win-table {
        width: 100%;

        table {
          width: 100%;
          border: 1px solid #c0940f45;
          border-radius: 20px;
          border-collapse: separate;
          border-spacing: 0 0px;

          tr:nth-of-type(odd) {
            background-color: rgb(44 37 30 / 55%);
          }

          th {
            font-size: 15px;
            color: #b7b7b7;
            border: unset;
            font-weight: unset;
            text-transform: uppercase;
            text-align: center;
            padding: 20px !important;
            background: linear-gradient(360deg, #352606, #c0994b);
            line-height: 1.42857143;
            vertical-align: bottom;
            border-bottom: 2px solid #ddd;
            border-top: 0;
          }

          td {
            color: #fff;
            border: unset;
            font-weight: bold;
            padding: 8px !important;
            text-align: center;
            line-height: 1.42857143;
            vertical-align: top;
            border-top: 1px solid #ddd;
          }

          img {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
