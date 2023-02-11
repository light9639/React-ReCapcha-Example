import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha3 = () => {
    const recaptchaRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }

    return (
        <form onSubmit={onSubmitWithReCAPTCHA}>
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={import.meta.env.VITE_V3_KEY}
            />
        </form>
    )

}

export default Captcha3