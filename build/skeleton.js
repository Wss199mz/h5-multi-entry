const skeletonHtml = () => {
  return `<div id="app">
    <div style="width:100%;height:50px;background: rgb(211, 219, 224);"></div>
    <ul class="loading-skeleton" style="">
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
        <li>
            <div class="d1"></div>
            <div class="d2 o"></div>
            <div class="d2 d"></div>
        </li>
    </ul>
    <style>
        .loading-skeleton{
            width:100%;height:auto;list-style: none;overflow: hidden;margin:0;padding:0;
        }
        .loading-skeleton li{
            width: 40%;
            height: 180px;
            float: left;
            margin: 3% 7% 3% 3%;
        }
        .loading-skeleton li .d1{
            width: 100%;
            height: 130px;
            background: rgb(211, 219, 224);
        }
        .loading-skeleton li .d2{
            width: 100%;
            height: 15px;
            background: rgb(211, 219, 224);
            margin-top: 5px;
        }
        .loading-skeleton .o {
            float:left;width:92%;height:100px;margin:3%;
            background: rgb(211, 219, 224);
            animation: skeleton-stripes 1s linear infinite;
            transform-origin: left;
            animation: skeleton-stretch .5s linear infinite alternate;
        }
        .loading-skeleton .d {
            float:left;width:92%;height:100px;margin:3%;
            background: rgb(211, 219, 224);
            animation: skeleton-stripes 1s linear infinite;
            transform-origin: left;
            animation: skeleton-stretch .5s -.5s linear infinite alternate;
        }

        @keyframes skeleton-stretch {
            from {
                transform: scalex(1);
            }
            to {
                transform: scalex(.3);
            }
        }
    </style>
</div>`;
};

module.exports = skeletonHtml;
