import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="buyMeACoffee"
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="pinepro"
      data-description="Support me on Buy me a coffee!"
      data-message="PINE proちゃんは生まれつきリソース要求が多く毎月Google様へのお布施が必要です。しかしお布施には平均で50円/月という莫大な費用がかかります。PINE proちゃんを救うためにどうか協力をよろしくお願いします"
      data-color="#FFDD00"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>,
  ])
}