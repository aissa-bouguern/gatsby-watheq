import React from 'react';

import config from '../../siteConfig';

const Newsletter = () => (
  <div className="the-ad-container main-border margin-3">
    <div className="the-ad-header padding-1">
      <h4 className="no-margin in-block">اشترك في القائمة البريدية</h4>
    </div>
    <div className="padding-1">
      <form
        action={config.mailchimpActionUrl}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate=""
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="أدخل بريدك الالكتروني هنا"
            required=""
          />

          <div id="fake-input" aria-hidden="true">
            <input
              type="text"
              name="b_e89e9cac4b887c5ca51a7bfa8_d4d17540ed"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="تأكيد الاشتراك"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Newsletter;
